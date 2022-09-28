
function epochToHuman(epoch) {
    const date = new Date(epoch * 1000);
    return date.toUTCString();
}

export default epochToHuman;