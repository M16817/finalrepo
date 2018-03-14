const ActionsSdkApp = require('actions-on-google').DialogflowApp;







var response = function (req, res) {

    const app = new ActionsSdkApp({ request: req, response: res });

    //Simple text
    var txtRes = app.buildRichResponse()
        .addSimpleResponse({
            speech: 'Simple Response',
            displayText: 'Simple Response '
        });
    app.ask(txtRes);
}

module.exports.simpleResponse = response;

//Basic Card
var basicCard = function basicCard(request, response) {
    const app = new ActionsSdkApp({ request, response });
    app.ask(app.buildRichResponse()
        // Create a basic card and add it to the rich response
        .addSimpleResponse('This is Servicenow bot, How may I help you today')
        .addBasicCard(app.buildBasicCard('This is Service now bot' +
            'How may I help you')
            .setTitle('ServiceNow Bot')
            .addButton('Read more', 'https://example.google.com/mathandprimes')
            .setImage('https://example.google.com/42.png', 'Image alternate text')
            .setImageDisplay('CROPPED')
        )
    );
}

module.exports.basicCard = basicCard;


//List
var list = function (request, response) {
    const app = new ActionsSdkApp({ request, response });
    app.askWithList('Alright! Here are a few things you can learn. Which sounds interesting?',
        // Build a list
        app.buildList('Things to learn about')
            // Add the first item to the list
            .addItems(app.buildOptionItem('MATH_AND_PRIME',
                ['math', 'math and prime', 'prime numbers', 'prime'])
                .setTitle('Math & prime numbers')
                .setDescription('42 is an abundant number because the sum of its ' +
                'proper divisors 54 is greater…')
                .setImage('http://example.com/math_and_prime.jpg', 'Math & prime numbers'))
            // Add the second item to the list
            .addItems(app.buildOptionItem('EGYPT',
                ['religion', 'egpyt', 'ancient egyptian'])
                .setTitle('Ancient Egyptian religion')
                .setDescription('42 gods who ruled on the fate of the dead in the ' +
                'afterworld. Throughout the under…')
                .setImage('http://example.com/egypt', 'Egypt')
            )
            // Add third item to the list
            .addItems(app.buildOptionItem('RECIPES',
                ['recipes', 'recipe', '42 recipes'])
                .setTitle('42 recipes with 42 ingredients')
                .setDescription('Here\'s a beautifully simple recipe that\'s full ' +
                'of flavor! All you need is some ginger and…')
                .setImage('http://example.com/recipe', 'Recipe')
            )
    );
}


module.exports.list = list;

var carousel = function carousel(request, response) {
    const app = new ActionsSdkApp({ request, response });
    app.askWithCarousel('Alright! Here are a few things you can learn. Which sounds interesting?',
        // Build a carousel
        app.buildCarousel()
            // Add the first item to the carousel
            .addItems(app.buildOptionItem('MATH_AND_PRIME',
                ['math', 'math and prime', 'prime numbers', 'prime'])
                .setTitle('Math & prime numbers')
                .setDescription('42 is an abundant number because the sum of its ' +
                'proper divisors 54 is greater…')
                .setImage('http://example.com/math_and_prime.jpg', 'Math & prime numbers'))
            // Add the second item to the carousel
            .addItems(app.buildOptionItem('EGYPT',
                ['religion', 'egpyt', 'ancient egyptian'])
                .setTitle('Ancient Egyptian religion')
                .setDescription('42 gods who ruled on the fate of the dead in the ' +
                'afterworld. Throughout the under…')
                .setImage('http://example.com/egypt', 'Egypt')
            )
            // Add third item to the carousel
            .addItems(app.buildOptionItem('RECIPES',
                ['recipes', 'recipe', '42 recipes'])
                .setTitle('42 recipes with 42 ingredients')
                .setDescription('Here\'s a beautifully simple recipe that\'s full ' +
                'of flavor! All you need is some ginger and…')
                .setImage('http://example.com/recipe', 'Recipe')
            )
    );
}

module.exports.carousel = carousel;

//suggesstionchips

var suggesstionchips = function suggestionChips(request, response) {
    const app = new ActionsSdkApp({ request, response });
    app.ask(app.buildRichResponse()
        .addSimpleResponse({
            speech: 'Howdy! I can tell you fun facts about ' +
                'almost any number like 0, 42, or 100. What number do you have ' +
                'in mind?',
            displayText: 'Howdy! I can tell you fun facts about almost any ' +
                'number. What number do you have in mind?'
        })
        .addSuggestions(['0', '42', '100', 'Never mind'])
        .addSuggestionLink('Suggestion Link', 'https://assistant.google.com/')
    );
}

module.exports.suggesstionchips = suggesstionchips;

var listselector = function listselector(request, response) {

    const app = new ActionsSdkApp({ request, response });
    let actionMap = new Map();
    actionMap.set(app.StandardIntents.OPTION, () => {
        const param = app.getSelectedOption();
        if (!param) {
            app.ask('You did not select any item from the list or carousel');
        } else if (param === 'MATH_AND_PRIME') {
            app.ask('42 is an abundant number because the sum of its…');
        } else if (param === 'EGYPT') {
            app.ask('42 gods who ruled on the fate of the dead in the...');
        } else if (param === 'RECIPES') {
            app.ask('Here\'s a beautifully simple recipe that\'s full...');
        } else {
            app.ask('You selected an unknown item from the list or carousel');
        }
    });
    app.handleRequest(actionMap);

}

module.exports.listselector = listselector;

var carouselselector = function carouselselector(request, response) {

    const app = new ActionsSdkApp({ request, response });
    let actionMap = new Map();
    actionMap.set(app.StandardIntents.OPTION, () => {
        const param = app.getSelectedOption();
        if (!param) {
            app.ask('You did not select any item from the list or carousel');
        } else if (param === 'MATH_AND_PRIME') {
            app.ask('42 is an abundant number because the sum of its…');
        } else if (param === 'EGYPT') {
            // console.log(param);
            app.ask('42 gods who ruled on the fate of the dead in the...');
        } else if (param === 'RECIPES') {
            app.ask('Here\'s a beautifully simple recipe that\'s full...');
        } else {
            app.ask('You selected an unknown item from the list or carousel');
        }
    });
    app.handleRequest(actionMap);
}

module.exports.carouselselector = carouselselector;