"use strict";

const gameName = "кто хочет стать миллионером?";

let flag = true;
let percent = true;
let call = true;
let hol = true;
let help = "5) Pass";
const firstMany = 5000;
const secondMany = 100_000;
let many = 0;


const folseAnswer = "Вы проиграли"


alert("Добро пожаловать в игру " + gameName);

// 500
if (flag) {
    const question1 = +prompt("Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?\n1) 31       3) 3600\n2) 90       4) 365\n" + help);

    if (question1 === 4) {
        many += 500;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question1 === 5) {
        flag = false;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ 365");

    }
    else {
        flag = false;
        alert(folseAnswer);

    }
}

//1000
if (flag != false) {
    const question2 = +prompt("Из какого зерна делается японский спирт саке?\n1) Рис              3) Ячмень\n2) Гречка        4) Кукуруза\n" + help);
    if (question2 === 1) {
        many += 500;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question2 === 5) {
        flag = false;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Рис");

    }
    else {
        flag = false;
        alert(folseAnswer);

    }
}

//2000
if (flag != false) {
    const question3 = +prompt("Какое национальное животное Австралии?\n1) Кенгуру                           3) Меведь\n2) Красный кенгуру        4) Коала\n" + help);
    if (question3 === 2) {
        many += 1000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question3 === 5) {
        flag = false;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Красный кенгуру");

    }
    else {
        flag = false;
        many = 0;
        alert(folseAnswer);

    }
}

//3000
if (flag != false) {
    const question4 = +prompt("Какой национальный цветок Японии?\n1) Сакура      3) Ромашки\n2) Лотос        4) Хризантема\n" + help);
    if (question4 === 1) {
        many += 1000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question4 === 5) {
        flag = false;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Сакура");

    }
    else {
        flag = false;
        many = 0;
        alert(folseAnswer);

    }
}

//5000
if (flag != false) {
    const question5 = +prompt("Сколько полос на флаге США?\n1) 21        3) 13\n2) 51        4) 11\n" + help);

    if (question5 === 3) {
        many += 2000;
        let trueAnswer = "Вы выиграли " + many + " рублей.\nПервая несгораемая сумма:";
        alert(trueAnswer);

    } else if (question5 === 5) {
        flag = false;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ 13");

    }
    else {
        flag = false;
        many = 0;
        alert(folseAnswer);

    }
}

//10_000
if (flag != false) {
    const question6 = +prompt("Сколько спутников у Марса?\n1) 13        3) 2\n2) 50        4) 1\n" + help);
    if (question6 === 3) {
        many += 5000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question6 === 5) {
        flag = false;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ 2");

    }
    else {
        flag = false;
        many = firstMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//15000
if (flag != false) {
    const question7 = +prompt("Какая планета ближе всех расположена к Солнцу?\n1) Земля                3) Венера\n2) Меркурий        4) Нептун\n" + help);
    if (question7 === 2) {
        many += 5000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question7 === 5) {
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Меркурий");

    }
    else {
        flag = false;
        many = firstMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//25000
if (flag != false) {
    const question8 = +prompt("Сколько часовых поясов в России?\n1) 7          3) 15\n2) 11        4) 9\n" + help);
    if (question8 === 2) {
        many += 10000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question8 === 5) {
        flag = false;
        many = firstMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ 11");

    }
    else {
        flag = false;
        many = firstMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//50000
if (flag != false) {
    const question9 = +prompt("Какая из этих планет самая маленькая?\n1) Юпитер      3) Уран\n2) Земля         4) Меркурий\n" + help);

    if (question9 === 4) {
        many += 25000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question9 === 5) {
        flag = false;
        many = firstMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Меркурий");

    }
    else {
        flag = false;
        many = firstMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//100_000
if (flag != false) {
    const question10 = +prompt("Кто из боксеров дрался с Мухаммедом Али и победил?\n1) Рой Джонс                  3) Флойд Мэйвезер\n2) Сауль Альварес        4) Джо Фрейзер\n" + help);
    if (question10 === 4) {
        many += 50000;
        let trueAnswer = "Вы выиграли " + many + " рублей.\nВторая несгораемая сумма:";
        alert(trueAnswer);

    } else if (question10 === 5) {
        flag = false;
        many = firstMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Джо Фрейзер");

    }
    else {
        flag = false;
        many = firstMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//200_000
if (flag != false) {
    const question11 = +prompt("Каков рекорд Усэйна Болта в беге на 100 метров?\n1) 7,2с.          3) 9,58с.\n2) 10,3с.        4) 6,8с.\n" + help);
    if (question11 === 3) {
        many += 100000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question11 === 5) {
        flag = false;
        many = secondMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ 6.8с");

    }
    else {
        flag = false;
        many = secondMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)
    }
}

//400_000
if (flag != false) {
    const question12 = +prompt("Кто первым совершил выход в открытый космос, который длился двенадцать минут?\n1) Юрий Гагарин                        3) Алексей Леонов\n2) Валентина Терешкова        4) Владимир Комаров\n" + help);
    if (question12 === 3) {
        many += 200000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question12 === 5) {
        flag = false;
        many = secondMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Алексей Леонов");

    }
    else {
        flag = false;
        many = secondMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//800_000
if (flag != false) {
    const question13 = +prompt("Какой континент на Земле самый большой?\n1) Евразия               3) Африка\n2) Антарктида        4) Зеландия\n" + help);
    if (question13 === 1) {
        many += 400000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question13 === 5) {
        flag = false;
        many = secondMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Евразия");

    }
    else {
        flag = false;
        alert(folseAnswer);

    }
}

//1_500_000
if (flag != false) {
    const question14 = +prompt("В какой стране самая длинная береговая линия в мире?\n1) В Россие        3) В США\n2) Франция        4) В Канаде\n" + help);
    if (question14 === 4) {
        many += 700000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question14 === 5) {
        flag = false;
        many = secondMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ В Канаде");

    }
    else {
        flag = false;
        many = secondMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}

//3_000_000
if (flag != false) {
    const question15 = +prompt("Какой известный художник был скульптором, архитектором и инженером?\n1) Микеланджело                3) Донателло\n2) Леонардо да Винчи        4) Титов\n" + help);
    if (question15 === 2) {
        many += 1500000;
        let trueAnswer = "Вы выиграли " + many + " рублей.";
        alert(trueAnswer);

    } else if (question15 === 5) {
        flag = false;
        many = secondMany;
        alert("Ваш выгрош составляет " + many + " рублей.\nПравильный ответ Леонардо да Винчи");

    }
    else {
        flag = false;
        many = secondMany;
        let trueAnswer = folseAnswer + "\nПравильный ответ 2:\nВаш выгрош " + many + " рублей.";
        alert(trueAnswer)

    }
}
