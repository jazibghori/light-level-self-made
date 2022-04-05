input.onButtonPressed(Button.A, function () {
    BOX = input.lightLevel()
    list[list.length + 1] = BOX
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(list.length)
})
let list: number[] = []
let BOX = 0
BOX = input.lightLevel()
let box_2 = 0
list = [BOX]
basic.forever(function () {
    if (BOX >= 128) {
        pins.digitalWritePin(DigitalPin.P0, input.lightLevel())
    } else if (BOX < 128) {
        box_2 = pins.digitalReadPin(DigitalPin.P0)
        basic.showString("" + (box_2))
    }
})
