// ============================================
// 타로 카드 전체 데이터 (78장)
// 메이저 아르카나 22장 + 마이너 아르카나 56장
// ============================================

// 메이저 아르카나 22장
export const majorArcana = [
  {
    id: "major-00",
    name: { ko: "바보", en: "The Fool" },
    number: "0",
    image: "/cards/major/00-fool.jpg",
    type: "major",
    keywords: {
      upright: ["새로운 시작", "순수함", "모험", "자유", "가능성"],
      reversed: ["무모함", "부주의", "위험", "어리석음", "방황"]
    },
    meaning: {
      upright: "새로운 시작과 무한한 가능성을 의미합니다. 두려움 없이 새로운 여정을 시작할 때입니다. 순수한 마음으로 세상을 바라보며, 미지의 세계로 발을 내딛을 용기가 필요합니다.",
      reversed: "무모한 결정이나 준비 없이 뛰어드는 것을 경고합니다. 조금 더 신중해질 필요가 있습니다. 현실을 직시하고 계획을 세워야 할 때입니다."
    }
  },
  {
    id: "major-01",
    name: { ko: "마법사", en: "The Magician" },
    number: "I",
    image: "/cards/major/01-magician.jpg",
    type: "major",
    keywords: {
      upright: ["창조력", "의지력", "기술", "집중", "행동"],
      reversed: ["속임수", "미숙함", "재능 낭비", "조작", "혼란"]
    },
    meaning: {
      upright: "당신에게는 원하는 것을 현실로 만들 수 있는 모든 도구와 능력이 있습니다. 의지력과 집중력으로 목표를 이룰 수 있는 시기입니다. 행동으로 옮길 때입니다.",
      reversed: "재능을 제대로 활용하지 못하고 있거나, 누군가의 속임수에 주의해야 합니다. 자신의 능력을 과신하거나 과소평가하고 있을 수 있습니다."
    }
  },
  {
    id: "major-02",
    name: { ko: "여사제", en: "The High Priestess" },
    number: "II",
    image: "/cards/major/02-high-priestess.jpg",
    type: "major",
    keywords: {
      upright: ["직관", "신비", "내면의 지혜", "잠재의식", "침묵"],
      reversed: ["비밀", "단절", "표면적 판단", "직관 무시", "혼란"]
    },
    meaning: {
      upright: "내면의 목소리에 귀 기울일 때입니다. 직관과 잠재의식이 중요한 답을 가지고 있습니다. 조용히 자신을 돌아보고 숨겨진 진실을 발견하세요.",
      reversed: "직관을 무시하고 있거나 내면의 목소리를 듣지 않고 있습니다. 숨겨진 정보가 있을 수 있으니 표면만 보지 마세요."
    }
  },
  {
    id: "major-03",
    name: { ko: "여황제", en: "The Empress" },
    number: "III",
    image: "/cards/major/03-empress.jpg",
    type: "major",
    keywords: {
      upright: ["풍요", "모성", "자연", "창조", "아름다움"],
      reversed: ["의존", "공허함", "창조력 부족", "과잉보호", "방치"]
    },
    meaning: {
      upright: "풍요와 창조의 에너지가 넘치는 시기입니다. 새로운 것을 탄생시키고 성장시킬 수 있습니다. 자연과 아름다움을 즐기며 삶의 기쁨을 만끽하세요.",
      reversed: "창조적 에너지가 막혀있거나 타인에게 지나치게 의존하고 있을 수 있습니다. 자기 자신을 돌보는 것도 잊지 마세요."
    }
  },
  {
    id: "major-04",
    name: { ko: "황제", en: "The Emperor" },
    number: "IV",
    image: "/cards/major/04-emperor.jpg",
    type: "major",
    keywords: {
      upright: ["권위", "안정", "리더십", "구조", "아버지"],
      reversed: ["독재", "경직", "통제 상실", "미성숙", "횡포"]
    },
    meaning: {
      upright: "강력한 리더십과 안정적인 기반을 의미합니다. 체계적이고 논리적인 접근이 필요한 때입니다. 책임감을 가지고 상황을 이끌어 나가세요.",
      reversed: "지나친 통제나 권위주의적 태도를 경계해야 합니다. 유연성이 필요하거나 권위에 도전받을 수 있습니다."
    }
  },
  {
    id: "major-05",
    name: { ko: "교황", en: "The Hierophant" },
    number: "V",
    image: "/cards/major/05-hierophant.jpg",
    type: "major",
    keywords: {
      upright: ["전통", "가르침", "신념", "의식", "멘토"],
      reversed: ["반항", "비전통", "새로운 방법", "독단", "제한"]
    },
    meaning: {
      upright: "전통적인 가치와 가르침을 따를 때입니다. 멘토나 조언자의 도움을 받거나, 기존의 체계 안에서 배움을 얻을 수 있습니다.",
      reversed: "기존의 규칙이나 전통에 의문을 제기하고 있습니다. 자신만의 길을 찾거나 새로운 방식을 시도할 때일 수 있습니다."
    }
  },
  {
    id: "major-06",
    name: { ko: "연인", en: "The Lovers" },
    number: "VI",
    image: "/cards/major/06-lovers.jpg",
    type: "major",
    keywords: {
      upright: ["사랑", "조화", "선택", "가치관", "파트너십"],
      reversed: ["불화", "불균형", "잘못된 선택", "유혹", "갈등"]
    },
    meaning: {
      upright: "사랑과 조화로운 관계를 나타냅니다. 중요한 선택의 기로에 서 있으며, 마음의 소리에 따라 결정해야 합니다. 진정한 가치관에 기반한 선택을 하세요.",
      reversed: "관계의 불화나 가치관의 충돌이 있을 수 있습니다. 유혹에 흔들리거나 잘못된 선택을 할 위험이 있으니 신중해야 합니다."
    }
  },
  {
    id: "major-07",
    name: { ko: "전차", en: "The Chariot" },
    number: "VII",
    image: "/cards/major/07-chariot.jpg",
    type: "major",
    keywords: {
      upright: ["승리", "의지력", "전진", "결단력", "자기통제"],
      reversed: ["방향 상실", "공격성", "좌절", "통제 불능", "지연"]
    },
    meaning: {
      upright: "강한 의지와 결단력으로 장애물을 극복하고 승리할 수 있습니다. 목표를 향해 전진하세요. 자기 통제력이 성공의 열쇠입니다.",
      reversed: "방향을 잃었거나 통제력을 상실한 상태입니다. 너무 공격적이거나 반대로 의지가 꺾여 있을 수 있습니다. 균형을 찾으세요."
    }
  },
  {
    id: "major-08",
    name: { ko: "힘", en: "Strength" },
    number: "VIII",
    image: "/cards/major/08-strength.jpg",
    type: "major",
    keywords: {
      upright: ["용기", "인내", "내면의 힘", "연민", "자신감"],
      reversed: ["자기 의심", "나약함", "불안", "통제 부족", "분노"]
    },
    meaning: {
      upright: "부드러운 힘과 인내로 어려움을 극복할 수 있습니다. 폭력이 아닌 연민과 이해로 상황을 다루세요. 내면의 용기를 믿으세요.",
      reversed: "자신감이 부족하거나 내면의 두려움에 시달리고 있습니다. 분노나 공포를 다스리는 법을 배워야 할 때입니다."
    }
  },
  {
    id: "major-09",
    name: { ko: "은둔자", en: "The Hermit" },
    number: "IX",
    image: "/cards/major/09-hermit.jpg",
    type: "major",
    keywords: {
      upright: ["성찰", "고독", "내면 탐구", "지혜", "안내"],
      reversed: ["고립", "외로움", "은둔", "거부", "길을 잃음"]
    },
    meaning: {
      upright: "혼자만의 시간을 갖고 내면을 탐구할 때입니다. 깊은 성찰을 통해 지혜를 얻을 수 있습니다. 답은 외부가 아닌 내면에 있습니다.",
      reversed: "지나친 고립이나 세상과의 단절을 경계해야 합니다. 외로움에 빠져있거나 도움을 거부하고 있을 수 있습니다."
    }
  },
  {
    id: "major-10",
    name: { ko: "운명의 수레바퀴", en: "Wheel of Fortune" },
    number: "X",
    image: "/cards/major/10-wheel-of-fortune.jpg",
    type: "major",
    keywords: {
      upright: ["변화", "운명", "행운", "순환", "전환점"],
      reversed: ["불운", "저항", "통제 불능", "정체", "나쁜 운"]
    },
    meaning: {
      upright: "운명의 전환점에 서 있습니다. 행운의 바람이 불어오고 있으니 기회를 잡으세요. 모든 것은 순환하며, 좋은 변화가 다가오고 있습니다.",
      reversed: "불운한 시기이거나 변화에 저항하고 있습니다. 이 또한 지나갈 것이니 인내하세요. 통제할 수 없는 것을 받아들여야 합니다."
    }
  },
  {
    id: "major-11",
    name: { ko: "정의", en: "Justice" },
    number: "XI",
    image: "/cards/major/11-justice.jpg",
    type: "major",
    keywords: {
      upright: ["공정", "진실", "균형", "법", "책임"],
      reversed: ["불공정", "부정직", "불균형", "회피", "편견"]
    },
    meaning: {
      upright: "공정한 결과와 진실이 밝혀질 때입니다. 자신의 행동에 책임을 지고, 균형 잡힌 판단을 내려야 합니다. 정의가 실현될 것입니다.",
      reversed: "불공정한 상황이거나 진실이 왜곡되고 있습니다. 책임을 회피하거나 편견에 사로잡혀 있을 수 있습니다."
    }
  },
  {
    id: "major-12",
    name: { ko: "매달린 사람", en: "The Hanged Man" },
    number: "XII",
    image: "/cards/major/12-hanged-man.jpg",
    type: "major",
    keywords: {
      upright: ["희생", "새로운 관점", "기다림", "내려놓음", "중단"],
      reversed: ["지연", "저항", "무의미한 희생", "고집", "정체"]
    },
    meaning: {
      upright: "잠시 멈추고 다른 관점에서 상황을 바라볼 때입니다. 희생이나 기다림이 필요할 수 있습니다. 내려놓음을 통해 새로운 깨달음을 얻으세요.",
      reversed: "불필요한 희생을 하고 있거나, 변화에 저항하고 있습니다. 고집을 버리고 유연하게 대처해야 합니다."
    }
  },
  {
    id: "major-13",
    name: { ko: "죽음", en: "Death" },
    number: "XIII",
    image: "/cards/major/13-death.jpg",
    type: "major",
    keywords: {
      upright: ["끝", "변화", "변환", "새 출발", "해방"],
      reversed: ["변화 저항", "정체", "부패", "두려움", "집착"]
    },
    meaning: {
      upright: "하나의 장이 끝나고 새로운 시작이 옵니다. 두려워하지 마세요. 이것은 필요한 변화이며, 낡은 것을 버려야 새로운 것이 올 수 있습니다.",
      reversed: "필요한 변화를 거부하고 과거에 집착하고 있습니다. 변화를 두려워하면 정체될 뿐입니다. 흘려보내야 할 것을 놓아주세요."
    }
  },
  {
    id: "major-14",
    name: { ko: "절제", en: "Temperance" },
    number: "XIV",
    image: "/cards/major/14-temperance.jpg",
    type: "major",
    keywords: {
      upright: ["균형", "조화", "인내", "중용", "치유"],
      reversed: ["불균형", "과잉", "조급함", "불화", "극단"]
    },
    meaning: {
      upright: "균형과 조화가 필요한 시기입니다. 극단을 피하고 중용의 길을 걸으세요. 인내심을 갖고 천천히 나아가면 치유와 평화를 얻을 수 있습니다.",
      reversed: "삶의 균형이 깨져 있습니다. 한쪽으로 치우쳐 있거나 조급하게 행동하고 있을 수 있습니다. 절제가 필요합니다."
    }
  },
  {
    id: "major-15",
    name: { ko: "악마", en: "The Devil" },
    number: "XV",
    image: "/cards/major/15-devil.jpg",
    type: "major",
    keywords: {
      upright: ["속박", "중독", "욕망", "그림자", "물질주의"],
      reversed: ["해방", "자유", "회복", "자각", "벗어남"]
    },
    meaning: {
      upright: "무언가에 속박되어 있거나 중독된 상태입니다. 욕망이나 두려움에 사로잡혀 자유롭지 못합니다. 자신을 묶고 있는 것이 무엇인지 직시하세요.",
      reversed: "속박에서 벗어나고 있습니다. 중독이나 나쁜 습관에서 해방되는 시기입니다. 그림자를 인정하고 자유를 되찾으세요."
    }
  },
  {
    id: "major-16",
    name: { ko: "탑", en: "The Tower" },
    number: "XVI",
    image: "/cards/major/16-tower.jpg",
    type: "major",
    keywords: {
      upright: ["붕괴", "충격", "계시", "해방", "격변"],
      reversed: ["재앙 회피", "두려움", "변화 저항", "지연된 붕괴", "위기"]
    },
    meaning: {
      upright: "갑작스러운 변화나 충격적인 사건이 닥칠 수 있습니다. 하지만 이는 낡은 구조를 무너뜨리고 진실을 드러내는 필요한 과정입니다. 재건의 기회로 삼으세요.",
      reversed: "필연적인 변화를 피하거나 지연시키고 있습니다. 붕괴가 천천히 진행되고 있을 수 있습니다. 변화를 받아들이는 것이 낫습니다."
    }
  },
  {
    id: "major-17",
    name: { ko: "별", en: "The Star" },
    number: "XVII",
    image: "/cards/major/17-star.jpg",
    type: "major",
    keywords: {
      upright: ["희망", "영감", "평화", "치유", "신뢰"],
      reversed: ["절망", "낙담", "불신", "단절", "희망 상실"]
    },
    meaning: {
      upright: "어둠 뒤에 희망의 빛이 찾아옵니다. 치유와 평화의 시기입니다. 우주를 신뢰하고 미래에 대한 희망을 품으세요. 영감이 넘치는 때입니다.",
      reversed: "희망을 잃었거나 절망에 빠져 있습니다. 하지만 별은 여전히 빛나고 있습니다. 마음을 열고 다시 희망을 찾으세요."
    }
  },
  {
    id: "major-18",
    name: { ko: "달", en: "The Moon" },
    number: "XVIII",
    image: "/cards/major/18-moon.jpg",
    type: "major",
    keywords: {
      upright: ["환상", "직관", "무의식", "불안", "미지"],
      reversed: ["혼란 해소", "진실 발견", "두려움 극복", "명확성", "기만 노출"]
    },
    meaning: {
      upright: "모든 것이 명확하지 않은 시기입니다. 환상과 현실을 구분하기 어렵고 불안감이 있을 수 있습니다. 직관을 믿되 섣부른 판단은 피하세요.",
      reversed: "혼란이 걷히고 진실이 드러나고 있습니다. 두려움을 극복하고 명확한 시야를 되찾을 수 있습니다. 기만이 노출될 수 있습니다."
    }
  },
  {
    id: "major-19",
    name: { ko: "태양", en: "The Sun" },
    number: "XIX",
    image: "/cards/major/19-sun.jpg",
    type: "major",
    keywords: {
      upright: ["기쁨", "성공", "활력", "긍정", "명확함"],
      reversed: ["우울", "지연된 성공", "과잉 낙관", "허영", "소진"]
    },
    meaning: {
      upright: "밝고 긍정적인 에너지가 넘치는 시기입니다. 성공과 기쁨이 찾아옵니다. 자신감을 갖고 앞으로 나아가세요. 모든 것이 밝게 빛나고 있습니다.",
      reversed: "내면의 빛이 가려져 있습니다. 우울하거나 에너지가 소진된 상태일 수 있습니다. 작은 기쁨을 찾고 긍정의 힘을 되찾으세요."
    }
  },
  {
    id: "major-20",
    name: { ko: "심판", en: "Judgement" },
    number: "XX",
    image: "/cards/major/20-judgement.jpg",
    type: "major",
    keywords: {
      upright: ["부활", "각성", "소명", "평가", "용서"],
      reversed: ["자기 의심", "후회", "판단 회피", "자책", "부정"]
    },
    meaning: {
      upright: "과거를 돌아보고 새롭게 태어날 때입니다. 자신의 소명을 깨닫고 더 높은 부름에 응답하세요. 용서와 해방을 통해 새로운 삶을 시작할 수 있습니다.",
      reversed: "과거의 후회에 사로잡혀 있거나 자기 자신을 용서하지 못하고 있습니다. 자기 비판을 멈추고 앞으로 나아가야 합니다."
    }
  },
  {
    id: "major-21",
    name: { ko: "세계", en: "The World" },
    number: "XXI",
    image: "/cards/major/21-world.jpg",
    type: "major",
    keywords: {
      upright: ["완성", "성취", "통합", "여행", "완결"],
      reversed: ["미완성", "지연", "공허함", "부족감", "미결"]
    },
    meaning: {
      upright: "하나의 여정이 완성되었습니다. 큰 성취와 충만함을 느끼는 시기입니다. 모든 것이 조화롭게 통합되어 있습니다. 축하하고 다음 여정을 준비하세요.",
      reversed: "완성에 가까워졌지만 마지막 단계가 남아있습니다. 무언가 부족하다고 느끼거나 마무리가 지연되고 있을 수 있습니다. 조금만 더 힘내세요."
    }
  }
];

// ============================================
// 마이너 아르카나 - 완드 (Wands) 14장
// 불의 원소: 열정, 창조, 의지, 행동
// ============================================
export const wands = [
  {
    id: "wands-ace",
    name: { ko: "완드 에이스", en: "Ace of Wands" },
    number: "Ace",
    image: "/cards/minor/wands/wands-ace.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["새로운 시작", "영감", "창조력", "잠재력", "열정"],
      reversed: ["지연", "막힘", "의욕 상실", "창조적 블록", "좌절"]
    },
    meaning: {
      upright: "새로운 창조적 에너지가 당신에게 찾아옵니다. 새로운 프로젝트, 아이디어, 또는 벤처를 시작하기에 완벽한 시기입니다. 열정을 따르세요.",
      reversed: "창조적 에너지가 막혀있거나 새로운 시작이 지연되고 있습니다. 내면의 불꽃을 다시 찾아야 할 때입니다."
    }
  },
  {
    id: "wands-02",
    name: { ko: "완드 2", en: "Two of Wands" },
    number: "2",
    image: "/cards/minor/wands/wands-02.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["계획", "결정", "미래 비전", "발견", "진보"],
      reversed: ["두려움", "계획 부족", "우유부단", "예상치 못한 지연", "제한"]
    },
    meaning: {
      upright: "미래를 내다보며 큰 계획을 세울 때입니다. 당신 앞에는 무한한 가능성이 펼쳐져 있습니다. 용기를 갖고 다음 단계로 나아가세요.",
      reversed: "미래에 대한 두려움이나 계획의 부재로 인해 앞으로 나아가지 못하고 있습니다. 명확한 비전을 세워야 합니다."
    }
  },
  {
    id: "wands-03",
    name: { ko: "완드 3", en: "Three of Wands" },
    number: "3",
    image: "/cards/minor/wands/wands-03.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["확장", "선견지명", "기회", "해외", "성장"],
      reversed: ["장애물", "지연", "좌절", "실망", "제한된 시야"]
    },
    meaning: {
      upright: "당신의 노력이 결실을 맺기 시작합니다. 더 넓은 세계로 확장할 때이며, 새로운 기회가 수평선 너머에서 다가오고 있습니다.",
      reversed: "예상했던 기회가 지연되거나 장애물에 부딪히고 있습니다. 인내심을 갖고 다른 방법을 모색하세요."
    }
  },
  {
    id: "wands-04",
    name: { ko: "완드 4", en: "Four of Wands" },
    number: "4",
    image: "/cards/minor/wands/wands-04.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["축하", "조화", "귀향", "안정", "이정표"],
      reversed: ["불안정", "갈등", "집 문제", "불화", "미완성"]
    },
    meaning: {
      upright: "축하와 기쁨의 시간입니다. 중요한 이정표를 달성했으며, 가정과 공동체에서 조화를 느끼고 있습니다. 이 순간을 즐기세요.",
      reversed: "가정이나 공동체에서 불화가 있거나 안정감을 찾지 못하고 있습니다. 근본적인 문제를 해결해야 합니다."
    }
  },
  {
    id: "wands-05",
    name: { ko: "완드 5", en: "Five of Wands" },
    number: "5",
    image: "/cards/minor/wands/wands-05.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["갈등", "경쟁", "긴장", "다양성", "도전"],
      reversed: ["갈등 회피", "내적 갈등", "평화", "타협", "해결"]
    },
    meaning: {
      upright: "경쟁과 갈등의 시기입니다. 여러 세력이나 의견이 충돌하고 있습니다. 이 에너지를 건설적으로 활용하면 성장할 수 있습니다.",
      reversed: "갈등이 해소되고 있거나, 불필요한 경쟁을 피하고 있습니다. 내면의 갈등을 해결해야 할 수도 있습니다."
    }
  },
  {
    id: "wands-06",
    name: { ko: "완드 6", en: "Six of Wands" },
    number: "6",
    image: "/cards/minor/wands/wands-06.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["승리", "성공", "인정", "자신감", "명성"],
      reversed: ["실패", "자만", "명예 실추", "자신감 부족", "지연된 성공"]
    },
    meaning: {
      upright: "승리와 성공의 시간입니다! 당신의 노력이 인정받고 있으며, 다른 사람들의 지지를 받고 있습니다. 자신감을 갖고 앞으로 나아가세요.",
      reversed: "기대했던 인정을 받지 못하거나 자신감이 부족합니다. 자만에 빠지지 않도록 주의하고, 겸손함을 유지하세요."
    }
  },
  {
    id: "wands-07",
    name: { ko: "완드 7", en: "Seven of Wands" },
    number: "7",
    image: "/cards/minor/wands/wands-07.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["방어", "인내", "도전", "경쟁", "입장 고수"],
      reversed: ["포기", "압도됨", "피로", "굴복", "자신감 상실"]
    },
    meaning: {
      upright: "자신의 입장을 지키고 방어해야 할 때입니다. 도전이 있지만, 당신은 그것을 극복할 힘이 있습니다. 굳건히 버티세요.",
      reversed: "압도당하거나 포기하고 싶은 마음이 듭니다. 에너지를 회복하고 전략을 재정비할 필요가 있습니다."
    }
  },
  {
    id: "wands-08",
    name: { ko: "완드 8", en: "Eight of Wands" },
    number: "8",
    image: "/cards/minor/wands/wands-08.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["빠른 진행", "움직임", "여행", "소식", "추진력"],
      reversed: ["지연", "좌절", "혼란", "저항", "느린 진행"]
    },
    meaning: {
      upright: "일이 빠르게 진행되고 있습니다. 여행, 소식, 또는 빠른 변화가 예상됩니다. 이 추진력을 활용하세요. 모든 것이 빠르게 움직이고 있습니다.",
      reversed: "예상했던 진행이 지연되고 있습니다. 인내심을 갖고 타이밍을 기다리세요. 서두르면 실수할 수 있습니다."
    }
  },
  {
    id: "wands-09",
    name: { ko: "완드 9", en: "Nine of Wands" },
    number: "9",
    image: "/cards/minor/wands/wands-09.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["회복력", "인내", "끈기", "경계", "마지막 고비"],
      reversed: ["피로", "포기", "완고함", "방어적 태도", "의심"]
    },
    meaning: {
      upright: "힘든 시간을 보냈지만, 거의 목표에 도달했습니다. 마지막 고비를 넘기기 위해 인내하세요. 당신의 경험이 당신을 강하게 만들었습니다.",
      reversed: "피로와 지침으로 포기하고 싶은 마음이 듭니다. 휴식을 취하되, 목표를 완전히 포기하지는 마세요."
    }
  },
  {
    id: "wands-10",
    name: { ko: "완드 10", en: "Ten of Wands" },
    number: "10",
    image: "/cards/minor/wands/wands-10.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["부담", "책임", "과부하", "노력", "완수"],
      reversed: ["짐 내려놓기", "위임", "해방", "번아웃", "거부"]
    },
    meaning: {
      upright: "많은 책임과 부담을 지고 있습니다. 힘들지만 목표 달성이 가까워졌습니다. 우선순위를 정하고 불필요한 짐을 내려놓으세요.",
      reversed: "과도한 부담에서 벗어나려 하고 있습니다. 일부 책임을 위임하거나 내려놓을 때입니다. 자신을 돌보세요."
    }
  },
  {
    id: "wands-page",
    name: { ko: "완드 페이지", en: "Page of Wands" },
    number: "Page",
    image: "/cards/minor/wands/wands-page.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["영감", "탐험", "열정", "자유로운 영혼", "새 아이디어"],
      reversed: ["방향 상실", "무모함", "지연", "서투름", "의욕 상실"]
    },
    meaning: {
      upright: "새로운 아이디어와 열정으로 가득 차 있습니다. 탐험하고 발견하려는 열망이 있습니다. 그 불꽃을 따라가세요!",
      reversed: "열정을 잃었거나 방향을 찾지 못하고 있습니다. 무엇이 당신을 흥분시키는지 다시 발견해야 합니다."
    }
  },
  {
    id: "wands-knight",
    name: { ko: "완드 기사", en: "Knight of Wands" },
    number: "Knight",
    image: "/cards/minor/wands/wands-knight.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["에너지", "열정", "모험", "충동", "행동"],
      reversed: ["성급함", "지연", "좌절", "산만함", "무모함"]
    },
    meaning: {
      upright: "행동하고 모험을 떠날 때입니다! 열정과 에너지가 넘칩니다. 두려움 없이 새로운 도전에 뛰어드세요.",
      reversed: "너무 성급하거나 산만해서 목표를 이루지 못하고 있습니다. 에너지를 집중하고 인내심을 기르세요."
    }
  },
  {
    id: "wands-queen",
    name: { ko: "완드 여왕", en: "Queen of Wands" },
    number: "Queen",
    image: "/cards/minor/wands/wands-queen.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["자신감", "독립", "사회성", "결단력", "열정"],
      reversed: ["자기 의심", "질투", "이기심", "강요", "불안정"]
    },
    meaning: {
      upright: "자신감과 카리스마가 넘치는 시기입니다. 당신의 열정과 따뜻함으로 주변 사람들에게 영감을 주고 있습니다. 리더십을 발휘하세요.",
      reversed: "자신감이 부족하거나 질투심에 시달리고 있습니다. 내면의 힘을 다시 찾고 자기 자신을 믿으세요."
    }
  },
  {
    id: "wands-king",
    name: { ko: "완드 왕", en: "King of Wands" },
    number: "King",
    image: "/cards/minor/wands/wands-king.jpg",
    type: "minor",
    suit: "wands",
    keywords: {
      upright: ["리더십", "비전", "기업가 정신", "명예", "대담함"],
      reversed: ["독재", "충동", "오만", "무자비함", "높은 기대"]
    },
    meaning: {
      upright: "강력한 리더십과 비전으로 목표를 향해 나아갈 때입니다. 당신의 열정과 카리스마로 다른 사람들을 이끌 수 있습니다.",
      reversed: "독단적이거나 오만한 태도를 경계하세요. 다른 사람의 의견도 경청하고, 권력을 남용하지 마세요."
    }
  }
];

// ============================================
// 마이너 아르카나 - 컵 (Cups) 14장
// 물의 원소: 감정, 관계, 사랑, 직관
// ============================================
export const cups = [
  {
    id: "cups-ace",
    name: { ko: "컵 에이스", en: "Ace of Cups" },
    number: "Ace",
    image: "/cards/minor/cups/cups-ace.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["새로운 사랑", "감정의 시작", "직관", "창조성", "친밀감"],
      reversed: ["감정 억압", "공허함", "막힌 창조성", "상실", "거부"]
    },
    meaning: {
      upright: "새로운 감정적 시작이 찾아옵니다. 사랑, 기쁨, 창조적 영감이 넘칩니다. 마음을 열고 이 선물을 받아들이세요.",
      reversed: "감정이 막혀있거나 사랑을 받아들이기 어려워하고 있습니다. 마음의 벽을 허물어야 합니다."
    }
  },
  {
    id: "cups-02",
    name: { ko: "컵 2", en: "Two of Cups" },
    number: "2",
    image: "/cards/minor/cups/cups-02.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["파트너십", "사랑", "조화", "균형", "상호 존중"],
      reversed: ["불균형", "이별", "불화", "자기 사랑 부족", "갈등"]
    },
    meaning: {
      upright: "깊은 유대감과 조화로운 파트너십을 나타냅니다. 로맨틱한 관계든 우정이든, 상호 존중과 사랑이 있습니다.",
      reversed: "관계에서 불균형이나 불화가 있습니다. 소통을 통해 조화를 회복하거나, 관계를 재평가해야 할 수 있습니다."
    }
  },
  {
    id: "cups-03",
    name: { ko: "컵 3", en: "Three of Cups" },
    number: "3",
    image: "/cards/minor/cups/cups-03.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["축하", "우정", "공동체", "모임", "기쁨"],
      reversed: ["고립", "과잉", "소문", "그룹 갈등", "외로움"]
    },
    meaning: {
      upright: "축하하고 기뻐할 때입니다! 친구들과의 모임, 축제, 즐거운 사교 활동이 예상됩니다. 공동체의 기쁨을 나누세요.",
      reversed: "고립감을 느끼거나 친구들과의 관계에 문제가 있습니다. 사교 활동을 줄이거나 진정한 우정을 찾아야 할 때입니다."
    }
  },
  {
    id: "cups-04",
    name: { ko: "컵 4", en: "Four of Cups" },
    number: "4",
    image: "/cards/minor/cups/cups-04.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["명상", "무관심", "재평가", "권태", "내적 성찰"],
      reversed: ["새로운 인식", "동기 부여", "기회 수용", "각성", "행동"]
    },
    meaning: {
      upright: "내면을 돌아보는 시간입니다. 현재에 만족하지 못하거나 권태를 느낄 수 있습니다. 하지만 놓치고 있는 기회가 있을 수 있으니 주의를 기울이세요.",
      reversed: "무관심에서 벗어나 새로운 기회를 인식하기 시작했습니다. 행동으로 옮길 준비가 되었습니다."
    }
  },
  {
    id: "cups-05",
    name: { ko: "컵 5", en: "Five of Cups" },
    number: "5",
    image: "/cards/minor/cups/cups-05.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["상실", "슬픔", "후회", "실망", "비탄"],
      reversed: ["수용", "치유", "앞으로 나아감", "용서", "회복"]
    },
    meaning: {
      upright: "상실감과 슬픔의 시기입니다. 잃어버린 것에 집중하고 있지만, 아직 남아있는 것도 있습니다. 슬픔을 느끼되, 희망을 놓지 마세요.",
      reversed: "슬픔에서 벗어나 치유되고 있습니다. 과거를 받아들이고 앞으로 나아갈 준비가 되었습니다."
    }
  },
  {
    id: "cups-06",
    name: { ko: "컵 6", en: "Six of Cups" },
    number: "6",
    image: "/cards/minor/cups/cups-06.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["향수", "추억", "순수함", "재회", "선물"],
      reversed: ["과거에 갇힘", "성장 필요", "미성숙", "현실 도피", "집착"]
    },
    meaning: {
      upright: "달콤한 추억과 향수의 시간입니다. 과거의 연인이나 친구와 재회할 수 있습니다. 순수했던 시절의 기쁨을 떠올려보세요.",
      reversed: "과거에 너무 집착하고 있습니다. 추억은 소중하지만, 현재와 미래를 위해 앞으로 나아가야 합니다."
    }
  },
  {
    id: "cups-07",
    name: { ko: "컵 7", en: "Seven of Cups" },
    number: "7",
    image: "/cards/minor/cups/cups-07.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["선택", "환상", "상상력", "가능성", "유혹"],
      reversed: ["혼란", "결정", "현실 직시", "집중", "명확성"]
    },
    meaning: {
      upright: "많은 선택과 가능성 앞에 서 있습니다. 하지만 모든 것이 보이는 대로가 아닐 수 있습니다. 환상과 현실을 구분하세요.",
      reversed: "선택을 내리고 현실에 집중할 때입니다. 공상에서 벗어나 실질적인 행동을 취하세요."
    }
  },
  {
    id: "cups-08",
    name: { ko: "컵 8", en: "Eight of Cups" },
    number: "8",
    image: "/cards/minor/cups/cups-08.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["떠남", "포기", "더 깊은 의미 추구", "실망", "여정"],
      reversed: ["두려움", "방황", "회피", "미련", "목적 없음"]
    },
    meaning: {
      upright: "익숙한 것을 떠나 더 의미 있는 것을 찾아 나설 때입니다. 아픔이 있지만, 영혼의 성장을 위해 필요한 여정입니다.",
      reversed: "떠나야 할지 머물러야 할지 결정하지 못하고 있습니다. 두려움 때문에 변화를 피하고 있을 수 있습니다."
    }
  },
  {
    id: "cups-09",
    name: { ko: "컵 9", en: "Nine of Cups" },
    number: "9",
    image: "/cards/minor/cups/cups-09.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["소원 성취", "만족", "행복", "감사", "풍요"],
      reversed: ["불만족", "탐욕", "물질주의", "과욕", "공허함"]
    },
    meaning: {
      upright: "소원이 이루어지는 카드입니다! 감정적 만족과 행복을 누리고 있습니다. 당신이 원했던 것을 즐기세요.",
      reversed: "원하는 것을 얻었지만 만족스럽지 않습니다. 진정한 행복이 무엇인지 재고해야 할 때입니다."
    }
  },
  {
    id: "cups-10",
    name: { ko: "컵 10", en: "Ten of Cups" },
    number: "10",
    image: "/cards/minor/cups/cups-10.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["행복한 가정", "조화", "완성", "축복", "평화"],
      reversed: ["가정 불화", "불화", "깨진 꿈", "소외감", "갈등"]
    },
    meaning: {
      upright: "감정적 완성과 행복한 가정을 나타냅니다. 사랑하는 사람들과 함께 조화롭고 평화로운 시간을 보내고 있습니다.",
      reversed: "가정이나 관계에 문제가 있습니다. 조화를 회복하기 위해 노력하거나, 행복의 정의를 재고해야 합니다."
    }
  },
  {
    id: "cups-page",
    name: { ko: "컵 페이지", en: "Page of Cups" },
    number: "Page",
    image: "/cards/minor/cups/cups-page.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["창조적 기회", "직관", "호기심", "가능성", "메시지"],
      reversed: ["감정적 미성숙", "창조적 블록", "의심", "실망", "불안"]
    },
    meaning: {
      upright: "창조적 영감이나 감정적 메시지가 찾아옵니다. 직관을 따르고, 새로운 감정적 경험에 열린 마음을 가지세요.",
      reversed: "감정적으로 미성숙하거나 창조적 블록에 걸려 있습니다. 내면의 아이와 다시 연결하세요."
    }
  },
  {
    id: "cups-knight",
    name: { ko: "컵 기사", en: "Knight of Cups" },
    number: "Knight",
    image: "/cards/minor/cups/cups-knight.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["로맨스", "매력", "상상력", "아름다움", "제안"],
      reversed: ["비현실적", "질투", "변덕", "실망", "유혹"]
    },
    meaning: {
      upright: "로맨틱한 제안이나 창조적 기회가 다가옵니다. 매력적이고 이상적인 에너지를 따르되, 현실감각도 유지하세요.",
      reversed: "비현실적인 기대나 변덕스러운 감정에 주의하세요. 너무 이상에 빠지면 실망할 수 있습니다."
    }
  },
  {
    id: "cups-queen",
    name: { ko: "컵 여왕", en: "Queen of Cups" },
    number: "Queen",
    image: "/cards/minor/cups/cups-queen.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["연민", "직관", "치유", "감정적 안정", "돌봄"],
      reversed: ["감정적 불안정", "의존", "마음의 상처", "순교자", "불안"]
    },
    meaning: {
      upright: "깊은 직관과 연민을 가지고 있습니다. 자신과 타인의 감정을 이해하고 치유하는 능력이 있습니다. 마음의 지혜를 따르세요.",
      reversed: "감정적으로 불안정하거나 타인의 감정에 너무 휘둘리고 있습니다. 자기 자신을 먼저 돌보세요."
    }
  },
  {
    id: "cups-king",
    name: { ko: "컵 왕", en: "King of Cups" },
    number: "King",
    image: "/cards/minor/cups/cups-king.jpg",
    type: "minor",
    suit: "cups",
    keywords: {
      upright: ["감정적 균형", "외교", "연민", "지혜", "관용"],
      reversed: ["감정 조작", "변덕", "냉담함", "억압", "불안정"]
    },
    meaning: {
      upright: "감정적 성숙과 균형을 이룬 상태입니다. 지혜롭게 감정을 다루며, 연민과 이해로 다른 사람들을 이끕니다.",
      reversed: "감정을 억압하거나 조작하고 있습니다. 진정한 감정과 연결하고, 감정적 정직성을 회복하세요."
    }
  }
];

// ============================================
// 마이너 아르카나 - 소드 (Swords) 14장
// 공기의 원소: 사고, 소통, 진실, 갈등
// ============================================
export const swords = [
  {
    id: "swords-ace",
    name: { ko: "소드 에이스", en: "Ace of Swords" },
    number: "Ace",
    image: "/cards/minor/swords/swords-ace.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["명확함", "통찰", "진실", "새로운 아이디어", "정의"],
      reversed: ["혼란", "잔인함", "잘못된 정보", "혼돈", "불의"]
    },
    meaning: {
      upright: "새로운 통찰과 명확함이 찾아옵니다. 진실이 밝혀지고, 새로운 아이디어가 떠오릅니다. 지적 승리와 돌파구가 예상됩니다.",
      reversed: "생각이 혼란스럽거나 잘못된 정보에 기반해 판단하고 있습니다. 진실을 찾기 전에 서두르지 마세요."
    }
  },
  {
    id: "swords-02",
    name: { ko: "소드 2", en: "Two of Swords" },
    number: "2",
    image: "/cards/minor/swords/swords-02.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["결정 회피", "교착 상태", "균형", "선택", "직면"],
      reversed: ["결정", "정보 과부하", "혼란", "거짓말", "딜레마"]
    },
    meaning: {
      upright: "어려운 결정 앞에서 눈을 가리고 있습니다. 선택을 피하고 있지만, 결국에는 결정을 내려야 합니다. 직관과 이성의 균형을 찾으세요.",
      reversed: "막혀있던 상황이 풀리거나, 숨겨진 정보가 드러납니다. 이제 결정을 내릴 수 있습니다."
    }
  },
  {
    id: "swords-03",
    name: { ko: "소드 3", en: "Three of Swords" },
    number: "3",
    image: "/cards/minor/swords/swords-03.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["상심", "슬픔", "비탄", "이별", "배신"],
      reversed: ["치유", "용서", "회복", "상처 해소", "낙관"]
    },
    meaning: {
      upright: "마음의 상처와 슬픔의 시기입니다. 이별, 상실, 또는 배신으로 인한 고통이 있습니다. 이 고통을 인정하고 치유의 시간을 가지세요.",
      reversed: "상처가 치유되고 있습니다. 과거의 아픔을 놓아주고 용서하며 앞으로 나아가고 있습니다."
    }
  },
  {
    id: "swords-04",
    name: { ko: "소드 4", en: "Four of Swords" },
    number: "4",
    image: "/cards/minor/swords/swords-04.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["휴식", "회복", "명상", "성찰", "평화"],
      reversed: ["불안", "번아웃", "휴식 필요", "고립", "정체"]
    },
    meaning: {
      upright: "휴식과 회복의 시간이 필요합니다. 잠시 물러나 에너지를 재충전하세요. 명상과 성찰을 통해 내면의 평화를 찾을 수 있습니다.",
      reversed: "휴식을 취하지 못하고 번아웃 상태에 가까워지고 있습니다. 강제로라도 쉬어야 합니다."
    }
  },
  {
    id: "swords-05",
    name: { ko: "소드 5", en: "Five of Swords" },
    number: "5",
    image: "/cards/minor/swords/swords-05.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["갈등", "패배", "승리의 대가", "자기 이익", "분쟁"],
      reversed: ["화해", "후회", "갈등 해소", "용서", "재건"]
    },
    meaning: {
      upright: "갈등과 분쟁의 시기입니다. 승리하더라도 대가가 클 수 있습니다. 이길 가치가 있는 싸움인지 생각해보세요.",
      reversed: "갈등이 해소되고 화해의 기회가 옵니다. 과거의 다툼을 뒤로하고 앞으로 나아가세요."
    }
  },
  {
    id: "swords-06",
    name: { ko: "소드 6", en: "Six of Swords" },
    number: "6",
    image: "/cards/minor/swords/swords-06.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["전환", "여행", "회복", "나아감", "평화로운 물"],
      reversed: ["정체", "미해결 문제", "저항", "되돌아옴", "지연"]
    },
    meaning: {
      upright: "어려운 시기를 뒤로하고 더 평화로운 곳으로 이동하고 있습니다. 전환기이지만, 상황은 나아지고 있습니다.",
      reversed: "과거를 떠나보내지 못하고 있거나, 전환이 지연되고 있습니다. 미해결 문제를 먼저 해결해야 할 수 있습니다."
    }
  },
  {
    id: "swords-07",
    name: { ko: "소드 7", en: "Seven of Swords" },
    number: "7",
    image: "/cards/minor/swords/swords-07.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["속임수", "전략", "은밀함", "배신", "자기기만"],
      reversed: ["양심의 가책", "고백", "진실", "발각", "전략 변경"]
    },
    meaning: {
      upright: "누군가의 속임수나 은밀한 행동을 나타냅니다. 주변을 경계하거나, 자신이 정직하게 행동하고 있는지 돌아보세요.",
      reversed: "속임수가 발각되거나 양심의 가책을 느끼고 있습니다. 진실을 말하고 정직해질 때입니다."
    }
  },
  {
    id: "swords-08",
    name: { ko: "소드 8", en: "Eight of Swords" },
    number: "8",
    image: "/cards/minor/swords/swords-08.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["갇힘", "제한", "무력감", "희생자 의식", "자기 구속"],
      reversed: ["해방", "자유", "새로운 관점", "용기", "탈출"]
    },
    meaning: {
      upright: "갇혀있고 무력하다고 느끼지만, 그 속박의 대부분은 자신이 만든 것입니다. 새로운 관점으로 상황을 보면 탈출구가 보일 것입니다.",
      reversed: "제한에서 벗어나고 있습니다. 자신을 가두고 있던 생각에서 해방되어 자유를 되찾고 있습니다."
    }
  },
  {
    id: "swords-09",
    name: { ko: "소드 9", en: "Nine of Swords" },
    number: "9",
    image: "/cards/minor/swords/swords-09.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["불안", "악몽", "걱정", "죄책감", "절망"],
      reversed: ["희망", "도움 요청", "회복", "극복", "두려움 해소"]
    },
    meaning: {
      upright: "불안과 걱정으로 밤잠을 이루지 못하고 있습니다. 두려움이 현실보다 크게 느껴질 수 있습니다. 도움을 구하고 관점을 바꿔보세요.",
      reversed: "불안과 걱정에서 벗어나고 있습니다. 두려움을 직면하고 극복하며 희망을 찾고 있습니다."
    }
  },
  {
    id: "swords-10",
    name: { ko: "소드 10", en: "Ten of Swords" },
    number: "10",
    image: "/cards/minor/swords/swords-10.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["끝", "패배", "배신", "위기", "밑바닥"],
      reversed: ["회복", "재생", "불가피한 결말", "새 시작", "회복력"]
    },
    meaning: {
      upright: "고통스러운 끝과 밑바닥의 경험입니다. 하지만 이것이 바닥이라는 것은 이제부터는 올라갈 일만 남았다는 뜻입니다. 새로운 시작을 준비하세요.",
      reversed: "최악의 시기가 지나가고 회복이 시작됩니다. 아픔 속에서도 재생의 힘을 찾고 있습니다."
    }
  },
  {
    id: "swords-page",
    name: { ko: "소드 페이지", en: "Page of Swords" },
    number: "Page",
    image: "/cards/minor/swords/swords-page.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["호기심", "새로운 아이디어", "소통", "경계", "열정"],
      reversed: ["소문", "성급함", "계획 부족", "냉소", "속임"]
    },
    meaning: {
      upright: "호기심과 새로운 아이디어로 가득 차 있습니다. 진실을 추구하고 배우려는 열정이 있습니다. 질문하고 탐구하세요.",
      reversed: "말이 앞서거나 계획 없이 행동하고 있습니다. 소문에 휘둘리지 말고, 생각한 후에 말하세요."
    }
  },
  {
    id: "swords-knight",
    name: { ko: "소드 기사", en: "Knight of Swords" },
    number: "Knight",
    image: "/cards/minor/swords/swords-knight.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["야망", "행동", "추진력", "결단력", "직접적"],
      reversed: ["무모함", "공격성", "성급함", "갈등", "비난"]
    },
    meaning: {
      upright: "목표를 향해 빠르게 돌진하고 있습니다. 강한 추진력과 결단력이 있습니다. 하지만 너무 서두르지 마세요.",
      reversed: "너무 공격적이거나 성급하게 행동하고 있습니다. 충돌을 피하고 좀 더 신중하게 접근하세요."
    }
  },
  {
    id: "swords-queen",
    name: { ko: "소드 여왕", en: "Queen of Swords" },
    number: "Queen",
    image: "/cards/minor/swords/swords-queen.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["독립", "명확한 사고", "정직", "경험", "지혜"],
      reversed: ["냉담함", "잔인함", "비난", "고립", "편견"]
    },
    meaning: {
      upright: "명확한 사고와 독립적인 판단력을 가지고 있습니다. 경험에서 얻은 지혜로 상황을 객관적으로 봅니다. 진실을 두려워하지 마세요.",
      reversed: "너무 비판적이거나 냉담해지고 있습니다. 감정과 이성 사이의 균형을 찾으세요."
    }
  },
  {
    id: "swords-king",
    name: { ko: "소드 왕", en: "King of Swords" },
    number: "King",
    image: "/cards/minor/swords/swords-king.jpg",
    type: "minor",
    suit: "swords",
    keywords: {
      upright: ["지적 권위", "진실", "윤리", "명확한 사고", "정의"],
      reversed: ["조작", "냉혹함", "권력 남용", "독재", "불공정"]
    },
    meaning: {
      upright: "지적 권위와 명확한 판단력을 가진 리더입니다. 진실과 정의를 추구하며, 윤리적 기준을 세웁니다.",
      reversed: "권력을 남용하거나 진실을 조작하고 있습니다. 지성을 냉혹하게 사용하지 말고, 공정함을 유지하세요."
    }
  }
];

// ============================================
// 마이너 아르카나 - 펜타클 (Pentacles) 14장
// 땅의 원소: 물질, 건강, 재정, 실용
// ============================================
export const pentacles = [
  {
    id: "pentacles-ace",
    name: { ko: "펜타클 에이스", en: "Ace of Pentacles" },
    number: "Ace",
    image: "/cards/minor/pentacles/pentacles-ace.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["새로운 기회", "번영", "풍요", "안정", "시작"],
      reversed: ["기회 상실", "재정 불안", "계획 부족", "탐욕", "불안정"]
    },
    meaning: {
      upright: "물질적 풍요와 새로운 기회가 찾아옵니다. 새로운 직장, 재정적 기회, 또는 건강 개선의 시작입니다. 이 기회를 잡으세요.",
      reversed: "재정적 기회를 놓치거나 불안정한 상황입니다. 계획을 세우고 기반을 다져야 합니다."
    }
  },
  {
    id: "pentacles-02",
    name: { ko: "펜타클 2", en: "Two of Pentacles" },
    number: "2",
    image: "/cards/minor/pentacles/pentacles-02.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["균형", "적응", "시간 관리", "유연성", "우선순위"],
      reversed: ["불균형", "과부하", "혼란", "재정 문제", "압도됨"]
    },
    meaning: {
      upright: "여러 가지 일을 동시에 처리하며 균형을 유지하고 있습니다. 유연하게 적응하고 우선순위를 잘 관리하세요.",
      reversed: "너무 많은 일을 떠안아 균형이 무너지고 있습니다. 일부를 내려놓거나 도움을 요청하세요."
    }
  },
  {
    id: "pentacles-03",
    name: { ko: "펜타클 3", en: "Three of Pentacles" },
    number: "3",
    image: "/cards/minor/pentacles/pentacles-03.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["팀워크", "협력", "숙련", "학습", "계획"],
      reversed: ["갈등", "경쟁", "질 낮은 작업", "동기 부족", "불협화음"]
    },
    meaning: {
      upright: "협력과 팀워크를 통해 훌륭한 결과를 만들 수 있습니다. 당신의 기술과 노력이 인정받고 있습니다.",
      reversed: "팀 내 갈등이나 협력 부족으로 어려움을 겪고 있습니다. 소통을 개선하고 공동 목표에 집중하세요."
    }
  },
  {
    id: "pentacles-04",
    name: { ko: "펜타클 4", en: "Four of Pentacles" },
    number: "4",
    image: "/cards/minor/pentacles/pentacles-04.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["안정", "보존", "절약", "통제", "보안"],
      reversed: ["인색함", "집착", "물질주의", "손실 두려움", "불안"]
    },
    meaning: {
      upright: "재정적 안정과 보안을 추구하고 있습니다. 절약하고 보존하는 것도 중요하지만, 너무 움켜쥐지는 마세요.",
      reversed: "돈이나 소유물에 지나치게 집착하고 있습니다. 인색함을 버리고 흐름을 받아들이세요."
    }
  },
  {
    id: "pentacles-05",
    name: { ko: "펜타클 5", en: "Five of Pentacles" },
    number: "5",
    image: "/cards/minor/pentacles/pentacles-05.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["어려움", "빈곤", "고립", "걱정", "건강 문제"],
      reversed: ["회복", "희망", "도움", "개선", "영적 빈곤 극복"]
    },
    meaning: {
      upright: "재정적 또는 건강상의 어려움을 겪고 있습니다. 힘든 시기이지만, 도움을 구하면 찾을 수 있습니다. 고립되지 마세요.",
      reversed: "어려운 시기가 끝나가고 있습니다. 도움을 받거나 상황이 개선되고 있습니다. 희망을 가지세요."
    }
  },
  {
    id: "pentacles-06",
    name: { ko: "펜타클 6", en: "Six of Pentacles" },
    number: "6",
    image: "/cards/minor/pentacles/pentacles-06.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["관대함", "나눔", "자선", "균형", "받음과 줌"],
      reversed: ["빚", "이기심", "불공평", "조건부 도움", "권력 불균형"]
    },
    meaning: {
      upright: "주고받음의 균형이 있습니다. 당신이 도움을 주거나 받을 수 있는 위치에 있습니다. 관대함과 감사함으로 나누세요.",
      reversed: "주고받는 관계에서 불균형이 있습니다. 한쪽이 착취당하거나 조건이 붙은 도움을 조심하세요."
    }
  },
  {
    id: "pentacles-07",
    name: { ko: "펜타클 7", en: "Seven of Pentacles" },
    number: "7",
    image: "/cards/minor/pentacles/pentacles-07.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["인내", "투자", "성장", "평가", "장기 전망"],
      reversed: ["조급함", "나쁜 투자", "지연", "좌절", "노력 낭비"]
    },
    meaning: {
      upright: "씨앗을 뿌리고 성장을 기다리는 시기입니다. 장기적인 투자가 필요하며, 인내심을 갖고 결과를 기다리세요.",
      reversed: "투자한 노력이 기대만큼의 결과를 가져오지 않고 있습니다. 전략을 재평가하거나 방향을 수정할 때입니다."
    }
  },
  {
    id: "pentacles-08",
    name: { ko: "펜타클 8", en: "Eight of Pentacles" },
    number: "8",
    image: "/cards/minor/pentacles/pentacles-08.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["장인정신", "숙련", "헌신", "노력", "세부사항"],
      reversed: ["완벽주의", "지름길", "질 저하", "동기 부족", "반복"]
    },
    meaning: {
      upright: "기술을 연마하고 장인정신을 발휘할 때입니다. 세부사항에 집중하고 품질 있는 결과를 위해 노력하세요.",
      reversed: "지름길을 찾거나 동기를 잃고 있습니다. 완벽주의에 빠지거나 반대로 질이 떨어지지 않도록 주의하세요."
    }
  },
  {
    id: "pentacles-09",
    name: { ko: "펜타클 9", en: "Nine of Pentacles" },
    number: "9",
    image: "/cards/minor/pentacles/pentacles-09.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["풍요", "독립", "자급자족", "성취", "우아함"],
      reversed: ["과잉 지출", "의존", "표면적 성공", "불안", "과시"]
    },
    meaning: {
      upright: "자신의 노력으로 풍요와 독립을 이루었습니다. 물질적 성취와 안정을 즐기세요. 당신은 이것을 받을 자격이 있습니다.",
      reversed: "물질적 성공에도 불구하고 공허함을 느끼거나, 재정적으로 과시하고 있습니다. 진정한 가치를 찾으세요."
    }
  },
  {
    id: "pentacles-10",
    name: { ko: "펜타클 10", en: "Ten of Pentacles" },
    number: "10",
    image: "/cards/minor/pentacles/pentacles-10.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["유산", "가족", "부", "안정", "전통"],
      reversed: ["재정 실패", "가족 갈등", "빚", "손실", "불안정"]
    },
    meaning: {
      upright: "물질적 완성과 가족의 안정을 나타냅니다. 세대를 넘어 이어지는 부와 전통, 영속적인 성공을 의미합니다.",
      reversed: "재정적 문제나 가족 내 갈등이 있습니다. 유산이나 상속 문제가 발생할 수 있습니다."
    }
  },
  {
    id: "pentacles-page",
    name: { ko: "펜타클 페이지", en: "Page of Pentacles" },
    number: "Page",
    image: "/cards/minor/pentacles/pentacles-page.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["야망", "근면", "새로운 기회", "학습", "계획"],
      reversed: ["집중력 부족", "게으름", "기회 놓침", "비현실적", "지연"]
    },
    meaning: {
      upright: "새로운 재정적 또는 직업적 기회가 다가옵니다. 배우고자 하는 열정과 실용적인 목표를 가지고 있습니다.",
      reversed: "기회를 놓치거나 집중하지 못하고 있습니다. 실질적인 계획을 세우고 행동으로 옮기세요."
    }
  },
  {
    id: "pentacles-knight",
    name: { ko: "펜타클 기사", en: "Knight of Pentacles" },
    number: "Knight",
    image: "/cards/minor/pentacles/pentacles-knight.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["효율", "일상", "보수적", "인내", "책임감"],
      reversed: ["지루함", "정체", "완고함", "게으름", "과도한 신중함"]
    },
    meaning: {
      upright: "꾸준하고 책임감 있게 목표를 향해 나아가고 있습니다. 빠르지는 않지만, 확실하게 진전하고 있습니다.",
      reversed: "너무 보수적이거나 정체되어 있습니다. 때로는 위험을 감수하고 새로운 접근법을 시도해야 합니다."
    }
  },
  {
    id: "pentacles-queen",
    name: { ko: "펜타클 여왕", en: "Queen of Pentacles" },
    number: "Queen",
    image: "/cards/minor/pentacles/pentacles-queen.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["풍요", "실용적", "돌봄", "안정", "자연"],
      reversed: ["불안정", "일-가정 불균형", "의존", "물질주의", "소홀함"]
    },
    meaning: {
      upright: "실용적이면서도 따뜻한 돌봄을 제공합니다. 가정과 재정의 안정을 이루며, 풍요로운 환경을 만들어냅니다.",
      reversed: "일과 가정의 균형이 무너지거나, 물질적인 것에 너무 집중하고 있습니다. 진정 중요한 것을 돌보세요."
    }
  },
  {
    id: "pentacles-king",
    name: { ko: "펜타클 왕", en: "King of Pentacles" },
    number: "King",
    image: "/cards/minor/pentacles/pentacles-king.jpg",
    type: "minor",
    suit: "pentacles",
    keywords: {
      upright: ["부", "사업", "리더십", "안정", "풍요"],
      reversed: ["탐욕", "물질주의", "완고함", "사업 실패", "부패"]
    },
    meaning: {
      upright: "재정적 성공과 안정적인 리더십을 상징합니다. 사업적 감각이 뛰어나고, 물질적 풍요를 누리고 있습니다.",
      reversed: "탐욕이나 물질주의에 빠져 있습니다. 돈을 위해 윤리를 타협하거나 인간관계를 소홀히 하고 있을 수 있습니다."
    }
  }
];

// ============================================
// 전체 카드 덱 (78장)
// ============================================
export const fullDeck = [...majorArcana, ...wands, ...cups, ...swords, ...pentacles];

// 스프레드 데이터
export const spreads = {
  oneCard: {
    id: "one-card",
    name: "원카드",
    description: "간단한 질문에 대한 답이나 오늘의 메시지를 받아보세요.",
    cardCount: 1,
    positions: [
      { index: 0, name: "메시지", description: "현재 당신에게 필요한 메시지입니다." }
    ]
  },
  threeCard: {
    id: "three-card",
    name: "쓰리카드",
    description: "과거, 현재, 미래의 흐름을 통해 상황을 파악하세요.",
    cardCount: 3,
    positions: [
      { index: 0, name: "과거", description: "이 상황에 영향을 준 과거의 사건이나 에너지입니다." },
      { index: 1, name: "현재", description: "현재 당면한 상황과 에너지입니다." },
      { index: 2, name: "미래", description: "현재 경로를 유지할 경우 예상되는 결과입니다." }
    ]
  },
  celticCross: {
    id: "celtic-cross",
    name: "켈틱크로스",
    description: "10장의 카드로 상황을 깊이 있게 분석하는 전통적인 스프레드입니다.",
    cardCount: 10,
    positions: [
      { index: 0, name: "현재 상황", description: "질문의 핵심이자 현재 당신이 처한 상황입니다." },
      { index: 1, name: "도전/장애물", description: "현재 상황에서 마주하고 있는 도전이나 장애물입니다." },
      { index: 2, name: "의식적 목표", description: "당신이 의식적으로 추구하는 목표나 최선의 결과입니다." },
      { index: 3, name: "무의식적 기반", description: "상황의 근본 원인이나 무의식적 영향력입니다." },
      { index: 4, name: "최근 과거", description: "이 상황에 영향을 준 최근의 사건이나 에너지입니다." },
      { index: 5, name: "가까운 미래", description: "곧 다가올 가능성 있는 상황이나 영향입니다." },
      { index: 6, name: "자신의 태도", description: "이 상황에 대한 당신의 태도와 접근 방식입니다." },
      { index: 7, name: "외부 환경", description: "주변 환경이나 타인이 미치는 영향입니다." },
      { index: 8, name: "희망과 두려움", description: "이 상황에 대한 당신의 희망 또는 두려움입니다." },
      { index: 9, name: "최종 결과", description: "현재 경로를 유지할 경우 예상되는 최종 결과입니다." }
    ]
  }
};

// 카드 뽑기 유틸리티 함수
export const drawCards = (count, deck = fullDeck, allowReversed = true) => {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  const drawn = shuffled.slice(0, count);
  
  return drawn.map(card => ({
    ...card,
    isReversed: allowReversed ? Math.random() < 0.5 : false
  }));
};

// 메이저 아르카나만 뽑기
export const drawMajorArcana = (count, allowReversed = true) => {
  return drawCards(count, majorArcana, allowReversed);
};
