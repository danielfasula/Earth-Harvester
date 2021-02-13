let humans = 0
let clickModifier = 0
let autoModifier = 0

let clickUpgrades = {
    lazerBeam: {
        price: 100,
        quantity: 0,
        modifier: 10
    },
    invasion: {
        price: 1000,
        quantity: 0,
        modifier: 100
    }
}

let automaticUpgrades = {
    landwalkers: {
        price: 500,
        quantity: 0,
        modifier: 20
    },
    experimentalIncursion: {
        price: 250,
        quantity: 0,
        modifier: 200
    }
}


function mine() {
    if (clickModifier == 0) {
        humans++
    }
    else {
        humans += 1 * clickModifier
    }
    update()
}

function buyClickUpgrade(key) {
    let item = clickUpgrades[key]
    if (humans >= item.price) {
        humans -= item.price
        item.quantity++
        clickModifier += item.modifier
        item.price *= 2
    } else {
        // TODO change to alert or UI later
        alert('Bring Me More Humans');
    }
    update()
}

function buyAutoUpgrade(key) {
    let item = automaticUpgrades[key]
    if (humans >= item.price) {
        humans -= item.price
        item.quantity++
        autoModifier += item.modifier
        item.price *= 2

    } else {
        alert('Bring Me More Humans');

    }
    update()
}

// iterate over auto upgrades, total the qty of each autoUpgrade times their modifier, and add that value to the humans
// humans += qty*modifier
function collectAutoUpgrades(key) {
    for (key in automaticUpgrades) {
        let autoUpgrade = automaticUpgrades[key]
        humans += autoUpgrade.quantity * autoUpgrade.modifier
    }
    update()
}

function startInterval() {
    setInterval(collectAutoUpgrades, 3000)
}



function update() {

    let lazer = clickUpgrades.lazerBeam
    let invasion = clickUpgrades.invasion
    let landwalker = automaticUpgrades.landwalkers
    let experiments = automaticUpgrades.experimentalIncursion


    document.getElementById('humans').innerHTML = `${humans}`
    document.getElementById('auto-modifier').innerHTML = `${autoModifier}`
    document.getElementById('click-modifier').innerHTML = `${clickModifier}`

    document.getElementById('lazer-cost').innerHTML = `${lazer.price}`
    document.getElementById('invasion-cost').innerHTML = `${invasion.price}`
    document.getElementById('land-walkers-cost').innerHTML = `${landwalker.price}`
    document.getElementById('experiments-cost').innerHTML = `${experiments.price}`

    document.getElementById('lazer-qty').innerHTML = `${lazer.quantity}`
    document.getElementById('invasion-qty').innerHTML = `${invasion.quantity}`
    document.getElementById('land-walkers-qty').innerHTML = `${landwalker.quantity}`
    document.getElementById('experiments-qty').innerHTML = `${experiments.quantity}`

}

update()
startInterval()

