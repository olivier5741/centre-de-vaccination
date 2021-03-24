// register service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

function getNumber(elementId) {
    return parseInt(document.getElementById(elementId).value || 0);
}

function setNumber(elementId, value) {
    document.getElementById(elementId).innerHTML = value
}

function compute() {

    const dosesPrepared = getNumber("dosesPrepared")
    const dosesInUse = getNumber("dosesInUse")

    const dosesTotal = dosesPrepared + dosesInUse
    setNumber("dosesTotal", dosesTotal)

    const patientsReady = getNumber("patientsReady")
    const patientsBooked = getNumber("patientsBooked")

    const patientsTotal = patientsReady + patientsBooked
    setNumber("patientsTotal", patientsTotal)

    const dosesPerBottle = getNumber("dosesPerBottle")

    let bottlesToOpen = 0

    if (patientsTotal > dosesTotal) {
        const diff = patientsTotal - dosesTotal - 1
        bottlesToOpen = Math.floor(diff / dosesPerBottle) + 1
    }

    patientsToContact = (bottlesToOpen * dosesPerBottle) + dosesTotal - patientsTotal

    setNumber("bottlesToOpen", bottlesToOpen)
    setNumber("patientsToContact", patientsToContact)
}
