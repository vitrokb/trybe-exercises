let salarioBruto = 6000
let salarioInss = 0
let salarioIr = 0
if (salarioBruto < 1556.94){
    salarioInss = salarioBruto-(salarioBruto*0.08)
} else if (salarioBruto <= 2594.92) {
    salarioInss = salarioBruto-(salarioBruto*0.09)
} else if (salarioBruto <= 5189.82) {
    salarioInss = salarioBruto-(salarioBruto*0.11)
} else if (salarioBruto > 5189.82) {
    salarioInss = salarioBruto-570.88
}

if (salarioInss <= 1903.98) {
    console.log("A pessoa é isenta do imposto de renda, seu salário bruto é: " +salarioInss)
} else if (salarioInss <= 2826.65) {
    salarioIr = salarioInss-((salarioInss*0.075)-142.80)
} else if (salarioInss <= 3751.05) {
    salarioIr = salarioInss-((salarioInss*0.15)-354.80)
} else if (salarioInss <= 4664.68) {
    salarioIr = salarioInss-((salarioInss*0.225)-636.13)
} else if (salarioInss > 4664.68) {
    salarioIr = salarioInss-((salarioInss*0.275)-869.36)
}

console.log("O salário da pessoa será: " +salarioIr)