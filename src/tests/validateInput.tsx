export const validateInput = (newVal: number, initialValue: number) => {
    if (newVal <= Number(initialValue)*1.1 && newVal >= Number(initialValue) * 0.9 ) {
        return true
    } else {
        return false
    }
}

module.exports = { validateInput }