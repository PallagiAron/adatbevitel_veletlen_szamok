let nap = Number(prompt("Adj meg egy napot (hanyadika van): ", 0))
let ora = Number(prompt("Adj meg egy órát: ", 0))

console.log(`A megadott hónap órája: ${(nap - 1) * 24 + ora}`)