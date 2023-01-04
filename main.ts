function errortrigger () {
    n += 111
    solve()
}
input.onButtonPressed(Button.A, function () {
    if (controlabort == 0) {
        count += 1
        basic.showString("" + (count))
    }
})
function abort () {
    controlabort = 1
}
function solve () {
    if (n == 1) {
        if (count == correct) {
            basic.showString("11+6")
            correct = 17
            n = 2
        } else {
            basic.showIcon(IconNames.No)
        }
    } else if (n == 2) {
        if (count == correct) {
            basic.showString("17+13")
            correct = 30
            n = 3
        } else {
            basic.showIcon(IconNames.No)
        }
    } else if (n == 3) {
        if (count == correct) {
            basic.showString("30+30")
            correct = 30
            n = 4
        } else {
            basic.showIcon(IconNames.No)
        }
    } else if (n == 4) {
        basic.showString("WIN")
    } else {
        basic.showString("ERROR")
        abort()
    }
}
input.onButtonPressed(Button.B, function () {
    count += -1
    basic.showString("" + (count))
})
input.onGesture(Gesture.ScreenDown, function () {
    errortrigger()
})
input.onGesture(Gesture.Shake, function () {
    solve()
})
let count = 0
let controlabort = 0
let n = 0
let correct = 0
basic.showString("5+6")
correct = 11
n = 1
basic.forever(function () {
	
})
