function scanKeys () {
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        buildString("0")
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        buildString("1")
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        buildString("2")
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        buildString("5")
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        if (Current_value == 10) {
            Remaining_value += Remaining_value - 10
        }
        if (Current_value == 20) {
            Remaining_value += Remaining_value - 20
        }
        if (Current_value == 50) {
            Remaining_value += Remaining_value - 50
        }
        if (Current_value == 100) {
            Remaining_value += Remaining_value - 100
        }
    }
}
input.onButtonPressed(Button.A, function () {
    a = a + 1
    _try = 5
    basic.showNumber(_try)
    basic.pause(100)
    basic.clearScreen()
})
function buildString (_: string) {
	
}
input.onButtonPressed(Button.AB, function () {
    a = a + 1
    _try = 2
    basic.showNumber(_try)
    basic.pause(100)
    basic.clearScreen()
    control2 = "" + _1 + _2 + _3 + _4
    if (parseFloat(control2) == password) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(150)
        Remaining_value = 150
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
function evaluateNumber () {
	
}
function calculate () {
    let operator = 0
    if (operator == 100) {
        Remaining_value += -100
        basic.showNumber(Remaining_value)
    }
    if (operator == 50) {
        Remaining_value += -50
        basic.showNumber(Remaining_value)
    }
    if (operator == 20) {
        Remaining_value += -20
        basic.showNumber(Remaining_value)
    }
    if (operator == 10) {
        Remaining_value += -10
        basic.showNumber(Remaining_value)
    }
}
let control2 = ""
let Remaining_value = 0
let Current_value = 0
let a = 0
let password = 0
let _try = 0
let _4 = 0
let _3 = 0
let _2 = false
let _1 = 0
_try = 0
_1 = 0
_2 = 0
_3 = 0
_4 = 0
password = 5522
basic.clearScreen()
a = 0
basic.forever(function () {
    if (a == 1) {
        _1 = _try
    }
    if (a == 2) {
        _2 = a == 3
    }
    if (true) {
        _3 = _try
    }
    if (a == 4) {
        _4 = _try
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (Current_value == 10) {
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    if (Current_value == 20) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
    if (Current_value == 50) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P6, 0)
    }
    if (Current_value == 100) {
        pins.digitalWritePin(DigitalPin.P7, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
})
basic.forever(function () {
    let _199 = 0
    let _149 = 0
    let _119 = 0
    let _19 = 0
    if (Remaining_value == _19) {
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    if (Remaining_value == _119) {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
    if (Remaining_value == _149) {
        pins.digitalWritePin(DigitalPin.P6, 0)
    }
    if (Remaining_value == _199) {
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
})
