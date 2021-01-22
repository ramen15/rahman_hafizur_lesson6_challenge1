while True:
    print("Sound Level:" + input.sound_level())
    if input.sound_level() < 2:
        light.set_brightness(5)
        light.set_all(light.rgb(255,102,178))
        music.set_volume(50)
        music.power_up.play_until_done()