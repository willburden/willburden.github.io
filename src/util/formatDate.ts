const ordinalSuffix = (n: number) => {
    switch (n % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};

const monthName = (month: number) => {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ][month];
};

export const compact = (date: Date) => {
    const day = date.getDate();
    const month = monthName(date.getMonth());
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
};

export const verbose = (date: Date) => {
    const day = date.getDate();
    const daySuffix = ordinalSuffix(day);
    const month = monthName(date.getMonth());
    const year = date.getFullYear();

    return `${day}${daySuffix} ${month} ${year}`;
}
