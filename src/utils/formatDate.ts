export const formatDate = (inputDate: string) => {
    const options = {day: '2-digit', month: 'short', year: 'numeric'};
    const formattedDate = new Date(inputDate).toLocaleDateString('ru-RU', options as any);
    return formattedDate.replace('г.', '');
}


export const NormalDate = (inputDate: string) => {
    const dateObject = new Date(inputDate);
    const date = `${("0" + dateObject.getDate()).slice(-2)}.${("0" + (dateObject.getMonth() + 1)).slice(-2)}.${(
        "" + dateObject.getFullYear()
    ).slice(-2)}`;

    const time = `${("0" + dateObject.getHours()).slice(-2)}:${("0" + dateObject.getMinutes()).slice(-2)}:${(
        "0" + dateObject.getSeconds()
    ).slice(-2)}`
    const result = {
        date,
        time
    }
    return result
}
