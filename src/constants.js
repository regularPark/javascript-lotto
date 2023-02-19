const MESSAGE = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  INPUT_LOTTO_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  INPUT_RESTART_COMMAND: "\n다시 시작하시겠습니까? (y/n)\n",
  RESTART: "\n게임을 다시 시작합니다.\n",
  QUIT: "\n게임을 종료합니다.\n",
};

const AMOUNT_OF_PURCHASE = (amount) => {
  return `${amount}개를 구매했습니다.`;
};

const UNIT = 1_000;
const LOTTO_RANGE = {
  MIN: 1,
  MAX: 45,
};

const NUM_OF_RANK = 5;
const LOTTO_SIZE = 6;

const ERROR = {
  NUMBER: "[ERROR] 숫자를 입력해주세요.",
  OVER_UNIT: (unit) => `[ERROR] ${unit} 원 이상 입력해주세요.`,
  SIZE: (size) => `[ERROR] 서로 다른 숫자 ${size}개를 입력해주세요.`,
  RANGE: (min, max) => `[ERROR] ${min} ~ ${max} 사이의 값을 입력하세요.`,
  DUPLICATED: "[ERROR] 중복된 숫자가 있습니다.",
  DIVIDE: (unit) =>
    `[ERROR] 로또 1매 가격으로 나누어 떨어지는 금액을 입력하세요.(현재 1매 당 ${unit}원)`,
  RESTART: "[ERROR] y 혹은 n으로 입력해주세요.",
};

const RESULT = (prize, lottoResult) => {
  return `\n당첨 통계\n--------------------\n
3개 일치 (${prize[0].toLocaleString()}원) - ${lottoResult[0]}개
4개 일치 (${prize[1].toLocaleString()}원) - ${lottoResult[1]}개
5개 일치 (${prize[2].toLocaleString()}원) - ${lottoResult[2]}개
5개 일치, 보너스 볼 일치 (${prize[3].toLocaleString()}원) - ${lottoResult[3]}개
6개 일치 (${prize[4].toLocaleString()}원) - ${lottoResult[4]}개
총 수익률은 ${Number(lottoResult[5]).toLocaleString()}%입니다.`;
};

const COMMAND = {
  RESTART: "y",
  QUIT: "n",
};

const MATCH = {
  ALL: 6,
  FIVE: 7,
  UNDER_THREE: 9,
  INDEX_FIRST_SECOND: (matchNumber) => 10 - matchNumber,
  MATCH_INDEX: (matchNumber) => 9 - matchNumber,
};

const PRIZE = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];

module.exports = {
  RANK: NUM_OF_RANK,
  LOTTO_RANGE,
  LOTTO_SIZE,
  UNIT,
  MESSAGE,
  ERROR,
  AMOUNT_OF_PURCHASE,
  COMMAND,
  PRIZE,
  RESULT,
  MATCH,
};
