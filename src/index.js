module.exports = function toReadable(number) {
    str = '';
    if (number < 20) {
        str = convertingFromZeroToNinteen(number)
    } else if (number % 10 != 0 && number < 100) {
        str = convertingTens(+ String(number)[0]) + ' ' + convertingFromZeroToNinteen(+ String(number)[String(number).length - 1])
    } else if (number % 10 === 0 && number < 100) {
        str = convertingTens(+ String(number)[0])
    } else {
        str = convertingFromZeroToNinteen(+String(number)[0]) + ' hundred ' + transform(+ String(number).slice(1,));
    }
    return str.trimEnd();
}

function convertingFromZeroToNinteen(num) {
    switch (num) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function convertingTens(num) {
    switch (num) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

function transform(number) {
    result = '';
    if (number === 0) {
        return '';
    }
    else if (number < 20) {
        result = convertingFromZeroToNinteen(number)
    } else if (number % 10 != 0 && number < 100) {
        result = convertingTens(+ String(number)[0]) + ' ' + convertingFromZeroToNinteen(+ String(number)[String(number).length - 1])
    } else if (number % 10 === 0 && number < 100) {
        result = convertingTens(+ String(number)[0])
    }
    return result;
}