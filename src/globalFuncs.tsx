export const rounded = function(value: string){
    return value ? String((+value).toFixed(3)) : ''
}

const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  }
  
export const formatDate = (date: Date) => {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
