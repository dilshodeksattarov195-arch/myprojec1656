const notifyDeleteConfig = { serverId: 4601, active: true };

const notifyDeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4601() {
    return notifyDeleteConfig.active ? "OK" : "ERR";
}

console.log("Module notifyDelete loaded successfully.");