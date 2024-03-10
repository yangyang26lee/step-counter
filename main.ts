input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showNumber(3 - index)
    }
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("Go!!!")
    Step = 0
    basic.showNumber(Step)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Great job!")
    datalogger.log(datalogger.createCV("Step", Step))
    Step = 0
    basic.showNumber(Step)
})
input.onGesture(Gesture.Shake, function () {
    Step += 1
    basic.showNumber(Step)
})
let Step = 0
Step = 0
