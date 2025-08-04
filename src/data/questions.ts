export interface Question {
    price: number,
    question: string,
    answer: string
}

export interface Topic {
    title: string,
    questions: Question[]
}

export const topics: Topic[] = [
    {
        title: "JavaScript",
        questions: [
            { price: 100, question: "Что такое DOM?", answer: "Document Object Model - объектная модель документа"},
            { price: 200, question: "Что такое BOM?", answer: "Browser Object Model - объектная модель браузера"},
            { price: 300, question: "Что такое hoisting?", answer: "Поднятие переменных и функций в начало области видимости"},
            { price: 400, question: "Что такое closure?", answer: "Замыкание - функция, которая имеет доступ к переменным из внешней области видимости"},
            { price: 500, question: "Что такое prototype?", answer: "Объект, от которого наследуются свойства и методы"}
        ]
    },
    {
        title: "Математика",
        questions: [
            { price: 100, question: "Сколько будет 2 + 2?", answer: "4"},
            { price: 200, question: "Что такое квадратный корень из 16?", answer: "4"},
            { price: 300, question: "Сколько градусов в треугольнике?", answer: "180 градусов"},
            { price: 400, question: "Что такое число π?", answer: "Отношение длины окружности к её диаметру"},
            { price: 500, question: "Сколько будет 5!", answer: "120 (5 факториал)"}
        ]
    },
    {
        title: "История",
        questions: [
            { price: 100, question: "В каком году началась Вторая мировая война?", answer: "1939"},
            { price: 200, question: "Кто был первым президентом США?", answer: "Джордж Вашингтон"},
            { price: 300, question: "В каком году была Куликовская битва?", answer: "1380"},
            { price: 400, question: "Кто открыл Америку?", answer: "Христофор Колумб"},
            { price: 500, question: "В каком году пала Римская империя?", answer: "476 год н.э."}
        ]
    },
    {
        title: "География",
        questions: [
            { price: 100, question: "Столица Израиля?", answer: "Иерусалим"},
            { price: 200, question: "Самая длинная река в мире?", answer: "Нил"},
            { price: 300, question: "Самая высокая гора в мире?", answer: "Эверест"},
            { price: 400, question: "Сколько океанов на Земле?", answer: "5 (Тихий, Атлантический, Индийский, Северный Ледовитый, Южный)"},
            { price: 500, question: "Столица Австралии?", answer: "Канберра"}
        ]
    },
    {
        title: "Наука",
        questions: [
            { price: 100, question: "Химический символ золота?", answer: "Au"},
            { price: 200, question: "Сколько костей у взрослого человека?", answer: "206"},
            { price: 300, question: "Что такое ДНК?", answer: "Дезоксирибонуклеиновая кислота"},
            { price: 400, question: "Самая близкая к Солнцу планета?", answer: "Меркурий"},
            { price: 500, question: "Формула воды?", answer: "H₂O"}
        ]
    }
];

