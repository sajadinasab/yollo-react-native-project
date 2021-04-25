export const subStrText = (text, number) => {
    if (text.length > number)
        return text.substr(0, number) + "..."
    else
        return text
}