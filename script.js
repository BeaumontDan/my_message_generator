// Generate Random Number

const genRandomNum = num => {
    return Math.floor(Math.random() * num)
};


// List possible outcomes in Fortune Teller object
const fortuneTeller = {
    visit: ['Yosemite, California, US',
        'Norway',
        'The Land Down Under',
        'Dominica',
        'Naoshima, Japan',
        'The Dolomites, Italy',
        'Greenland',
        'Newfoundland, Canada',
        'Tucson, Arizona, US',
        'Sri Lanka',
        'Panama',
        'Rif Mountains, Morocco',
        'The Lake District, UK',
        'Emerald Coast, Nicaragu'],
    meet: ['Sir Lewis Hamilton',
        'Timothée Chalamet',
        'Sydney Sweeney',
        'Phoebe Dynevor',
        'the love of your life',
        'Ryan Renyolds',
        'Bruno Mars',
        'Bille Eilish',
        'Tom Hanks',
        'Lily-Rose Depp',
        'Saoirse Ronan',
        'Harry Kane',
        'Stephen Fry',
        'Rebecca Ferguson',
        'your new BFF'],
    learn: ['Javascript',
        'Python',
        'to play Guitar',
        'Spanish',
        'to fly',
        'Italian',
        'Finnish',
        'MYSQL',
        'PHP',
        'HTML',
        'CSS',
        'to Knitt',
        'gymnastics',
        'Graphic Design'],
    art: [
        'ᒡ◯ᵔ◯ᒢ',
        'ˁ(⦿ᴥ⦿)ˀ',
        '(♥_♥)',
        'ˁ˚ᴥ˚ˀ',
        'ಠ_ಠ',
        '( -_-)旦~',
        'ō͡≡o˞̶',
        'ˁ(OᴥO)ˀ',
    ]
};

// Set empty array to accept random items

let future = [];

// Function to output the Fortune Tellers premonitions

for (let item in fortuneTeller) {
    let i = genRandomNum(fortuneTeller[item].length)

    switch(item) {
        case 'visit':
            future.push(`Pack your bags and travel to ${fortuneTeller[item][i]}.`);
            break;
        case 'meet':
            future.push(`Be star-struck when you meet ${fortuneTeller[item][i]}`);
            break;
        case 'learn':
            future.push(`Get your back-to-school essentials and learn ${fortuneTeller[item][i]}`);
            break;
        case 'art':
            future.push(fortuneTeller[item][i])
            break;
        default:
            future.push("Oops! I'm having trouble reading your future, let's try that again!")
            break;
    }
};

// Format the fortunes as list
const format = futureFormatted => {
    const formatted = future.join('\n');
    console.log(`2025 will be the year that you...\n\n${formatted}`)
}

// Log Fortune Tellers answers to the Console

format(future);