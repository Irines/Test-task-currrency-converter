export const rounded = function(value: string){
    return value ? String((+value).toFixed(3)) : ''
}
