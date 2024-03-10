input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showNumber(3 - index)
    }
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    Step = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Step)
    datalogger.log(datalogger.createCV("Step", Step))
    Step = 0
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    Step += 1
})
let Step = 0
Step = 0
