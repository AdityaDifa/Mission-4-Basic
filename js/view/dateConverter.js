const dateConverter = (dateObject) => {
    let date = new Date(dateObject);
    let text = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}  ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    return text;
}

export {dateConverter};