export function getPercents(percent, number) {
    return +percent >= 0 
        ? +number * +percent / 100 
        : NaN;
}