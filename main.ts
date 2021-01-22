while (true) {
    console.log("Sound Level:" + input.soundLevel())
    if (input.soundLevel() < 2) {
        light.setBrightness(5)
        light.setAll(light.rgb(255, 102, 178))
        music.setVolume(50)
        music.powerUp.playUntilDone()
    }
    
}
