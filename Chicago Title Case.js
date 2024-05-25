/**
{
    "api":1,
    "name":"Title Case (Chicago 15th Edition)",
    "description":"Converts a string to title case according to the Chicago Manual of Style (15th edition).",
    "author":"UFervor",
    "icon":"textformat",
    "tags":"title, case, Chicago, text"
}
**/

function titleCase(str) {
    const lowerWords = ['and', 'but', 'for', 'or', 'nor', 'the', 'a', 'an', 'to', 'as'];
    const prepositions = [
        'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at',
        'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'by',
        'down', 'during', 'except', 'for', 'from', 'in', 'inside', 'into', 'like', 'near',
        'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past', 'since', 'through',
        'throughout', 'to', 'under', 'until', 'up', 'upon', 'with', 'within', 'without'
    ];

    const words = str.split(' ');

    return words.map((word, index, arr) => {
        if (index === 0 || index === arr.length - 1) {
            return capitalize(word);
        }

        if (lowerWords.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }

        if (prepositions.includes(word.toLowerCase()) && !isStressedPreposition(word, index, arr)) {
            return word.toLowerCase();
        }

        if (word.includes('-')) {
            return handleHyphenatedWord(word);
        }

        return capitalize(word);
    }).join(' ');
}

function isStressedPreposition(word, index, arr) {
    return index > 0 && arr[index - 1].toLowerCase() === 'from';
}

function handleHyphenatedWord(word) {
    const [first, second] = word.split('-');
    return `${capitalize(first)}-${second.toLowerCase()}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function main(input) {
    input.text = titleCase(input.text);
}