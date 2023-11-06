const attackBtn = document.querySelector('#attack');
const strongAttackBtn = document.querySelector('#strongAttack');
const healBtn = document.querySelector('#heal');
const healAmountBtn = document.querySelector('#heal span');

const herosHealth = document.querySelector('[name="herosHealth"]');
const monstersHealth = document.querySelector('[name="monstersHealth"]');

const HEROS_ATTACK_DAMAGE = 5;
const HEROS_STRONG_ATTACK_DAMAGE = 15;
const MONSTERS_ATTACK_DAMAGE = 10;

const playAgain = document.querySelector('#gameResult button');

let herosHealthAmount = document.querySelector('#herosHealthAmount');
let monstersHealthAmount = document.querySelector('#monstersHealthAmount');
let healAmount= 3;

let herosAttackMode = document.querySelector('#heros-detail .attack-mode');
let herosAttackDamage = document.querySelector('#heros-attack-damage');
let herosHeal = document.querySelector('#heros-detail .heros-heal');
let herosHealAmount = 1;
let monstersAttackDamage = document.querySelector('#monsters-attack-damage');
let monstersAttackMode = document.querySelector('#monsters-detail .attack-mode');

let gameResult = document.querySelector('#gameResult');
let gameResultTitle = document.querySelector('#gameResult h1');

const result = () => {
  if (
    monstersHealth.value > 0 &&
    herosHealth.value <= 0
  ) {
    gameResultTitle.style.color = '#D80032';
    gameResultTitle.textContent = 'YOU LOST 💀';
    gameResult.style.display = 'grid';
  }else if (
    monstersHealth.value <= 0 &&
    herosHealth.value > 0
  ) {
    gameResultTitle.style.color = '#3CCF4E';
    gameResultTitle.textContent = 'YOU WIN 🔥';
    gameResult.style.display = 'grid';
  }else if (
    monstersHealth.value == 0 &&
    herosHealth.value == 0
  ) {
    gameResultTitle.textContent = 'DRAW 🤕';
    gameResult.style.display = 'grid';
  }
};

const attack = () => {
  let herosDamage = +herosHealth.value - MONSTERS_ATTACK_DAMAGE;
  let monstersDamage = +monstersHealth.value - HEROS_ATTACK_DAMAGE;

  herosHealth.value = herosDamage;
  monstersHealth.value = monstersDamage;

  herosHealthAmount.textContent = herosDamage;

  if (monstersDamage < 0) {
    monstersHealthAmount.textContent = '0';
  }else {
    monstersHealthAmount.textContent = monstersDamage;
  }

  herosAttackMode.textContent = '🤜';
  monstersAttackMode.textContent = '🤜🤜';
  herosAttackDamage.textContent = `${HEROS_ATTACK_DAMAGE}%`;
  monstersAttackDamage.textContent = `${MONSTERS_ATTACK_DAMAGE}%`;

  result();
};

const strongAttack = () => {
  let herosDamage = +herosHealth.value - MONSTERS_ATTACK_DAMAGE;
  let monstersDamage = +monstersHealth.value - HEROS_STRONG_ATTACK_DAMAGE;

  herosHealth.value = herosDamage;
  monstersHealth.value = monstersDamage;

  herosHealthAmount.textContent = herosDamage;

  if (monstersDamage < 0) {
    monstersHealthAmount.textContent = '0';
  }else {
    monstersHealthAmount.textContent = monstersDamage;
  }

  herosAttackMode.textContent = '💪';
  monstersAttackMode.textContent = '🤜🤜';
  herosAttackDamage.textContent = `${HEROS_STRONG_ATTACK_DAMAGE}%`;
  monstersAttackDamage.textContent = `${MONSTERS_ATTACK_DAMAGE}%`;

  result();
};

const addHeal = () => {
  if (healAmount <= 0) {
    healBtn.setAttribute('disabled', true);
  }else if (herosHealth.value >= 100) {
    alert('YOU CAN NOT USE HEAL BECAUSE YUOR HEALTH IS MAX');
  }else if (healAmount > 0) {
    herosHealth.value += 20;

    herosHealthAmount.textContent = herosHealth.value;

    herosHeal.textContent = herosHealAmount;

    healAmount--;
    herosHealAmount++;

    healAmountBtn.textContent = healAmount;
  }
};

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', addHeal);
playAgain.addEventListener('click', () => {
  window.location.reload();
});