// ============================================
// Groq API Service
// LLM 기반 타로 해석 서비스
// ============================================

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

// 환경변수에서 API 키 가져오기
const getApiKey = () => {
  return import.meta.env.VITE_GROQ_API_KEY || '';
};

// 타로 해석 프롬프트 생성
const buildTarotPrompt = (cards, spread, question) => {
  const cardDescriptions = cards.map((card, index) => {
    const direction = card.isReversed ? '역방향' : '정방향';
    const keywords = card.isReversed ? card.keywords.reversed : card.keywords.upright;
    const meaning = card.isReversed ? card.meaning.reversed : card.meaning.upright;
    
    return `
### ${index + 1}번째 카드: ${card.position.name}
- **카드**: ${card.name.ko} (${card.name.en}) - ${direction}
- **위치 의미**: ${card.position.description}
- **키워드**: ${keywords.join(', ')}
- **기본 해석**: ${meaning}
`;
  }).join('\n');

  return `당신은 숙련된 타로 마스터입니다. 정확하고 통찰력 있는 타로 리딩을 제공해주세요.

## 리딩 정보
- **스프레드**: ${spread.name}
- **질문**: ${question || '일반적인 운세'}

## 뽑힌 카드
${cardDescriptions}

## 요청사항
위 카드들을 바탕으로 깊이 있는 타로 리딩을 제공해주세요.

1. **종합 해석**: 모든 카드를 종합하여 전체적인 메시지를 해석해주세요.
2. **카드 간 연결**: 각 카드들이 서로 어떻게 연결되고 영향을 주는지 설명해주세요.
3. **조언**: 질문자에게 실질적인 조언을 제공해주세요.
4. **핵심 메시지**: 한 줄로 정리된 핵심 메시지를 마지막에 제공해주세요.

응답은 한국어로 작성해주시고, 따뜻하면서도 명확한 어조로 해주세요. 
너무 길지 않게 핵심적인 내용을 담아주세요.`;
};

// Groq API 호출
export const generateTarotReading = async (cards, spread, question) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    throw new Error('API 키가 설정되지 않았습니다.');
  }

  const prompt = buildTarotPrompt(cards, spread, question);

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'system',
            content: '당신은 전문 타로 리더입니다. 깊이 있고 통찰력 있는 타로 해석을 제공합니다. 응답은 항상 한국어로 합니다.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (response.status === 401) {
        throw new Error('API 키가 유효하지 않습니다.');
      }
      if (response.status === 429) {
        throw new Error('API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.');
      }
      throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || '해석을 생성하지 못했습니다.';
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    }
    throw error;
  }
};
