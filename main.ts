enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

enum RgbColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

enum RgbUltrasonics {
    //% block=left
    Left = 0x00,
    //% block=right
    Right = 0x01,
    //% block=all
    All = 0x02
}

enum ColorEffect {
    //% block=none
    None = 0x00,
    //% block=breathing
    Breathing = 0x01,
    //% block=rotate
    Rotate = 0x02,
    //% block=flash
    Flash = 0x03
}

enum rgb_ColorEffect {
    //% block=none
    None = 0x00,
    //% block=breathing
    Breathing = 0x01,
    //% block=flash
    Flash = 0x03
}

enum DHT11Type {
    //% block="temperature(℃)" 
    DHT11_temperature_C = 0,
    //% block="humidity(0~100)"
    DHT11_humidity = 1,
}

enum _selectpin {
    //% block="Apin"
    Apin = 0,
    //% block="Bpin"
    Bpin = 1,
    //% block="Dpin"
    Dpin = 2,
}


enum waterpin {
    P0,
    P1,
    P2,
    P3,
    P4,
    P10,
}

enum _rockerpin {
    //% block="Xpin"
    Xpin = 0,
    //% block="Ypin"
    Ypin = 1
}

enum rotation_direction {
    //% block="none"
    none = 0,
    //% block="clockwise"
    clockwise = 1,
    //% block="counter-clockwise"
    counterclockwise = 2,
    //% block="180-degree"
    one_eighty_degree = 3,
}

enum ledon_off {
    //% block="on"
    _on = 1,
    //% block="off"
    _off = 0,
}

enum on_off {

    //% block="on"
    _on = 1,
    //% block="off"
    _off = 0,
}

enum _selectlight {
    //% block="_yellow"
    _yellow = 0,
    //% block="_red"
    _red = 1,
    //% block="_green"
    _green = 2,
}

enum _selectcolor {
    //% block="_blue"
    _blue = 0,
    //% block="_red"
    _red = 1,
    //% block="_green"
    _green = 2,
}

enum run_turn {

    //% block="forward"
    forward = 0,
    //% block="reverse"
    reverse = 1,
}

enum LcdBacklight {
    //% block="on"
    _on = 1,
    //% block="off"
    _off = 0,
}

enum Item {
    //% block="on"
    _on = 1,
    //% block="off"
    _off = 2,
    //% block="clear"
    _clear = 3,
}

enum Select {
    //% block="on"
    _on = 0,
    //% block="off"
    _off = 1,
    //% block="clear"
    _clear = 2,
}



enum barb_fitting {
    //% block="LEFT"
    BUTOON_LEFT = 0,
    //% block="RIGHT" 
    BUTOON_RIGHT = 1,
    //% block="UP"
    BUTOON_UP = 2, 
    //% block="DOWN"
    BUTOON_DOWN = 3, 
    //% block="BUTTON"
    JOYSTICK_BUTTON = 4,
}

enum key_status {
    //% block="DOWN"
    PRESS_DOWN = 0,   //按下
    //% block="UP"
    PRESS_UP = 1,    //释放
    //% block="CLICK1"
    SINGLE_CLICK = 3,     //单击
    //% block="CLICK2"
    DOUBLE_CLICK = 4,    //双击
    //% block="HOLD"
    LONG_PRESS_HOLD = 6,    //长按
    //% block="PRESS"
    NONE_PRESS = 8,      //未按
}

enum Shaft{
    //% block="X"
    X_Shaft = 0,
    //% block="Y"
    Y_Shaft = 1,
}

enum Mode {
    //% block="LOOP"
    LOOP_MODE = 0,        // 循环模式
    //% block="BUTTON"
    BUTTON_MODE = 1,      // 按键模式
    //% block="KEYWORDS"
    KEYWORDS_MODE = 2,    // 关键字模式
    //% block="KEYWORDS_AND"
    KEYWORDS_AND_BUTTON = 3, //关键字加按键模式
}


//% color="#FFA500" weight=10 icon="\uf2c9" block="Sensor:bit"
namespace sensors {
    //% blockId=actuator_buzzer0 block="actuator_buzzer0 pin ：%pin|status %status"   group="有源蜂鸣器"
    //% weight=70
    //% subcategory="执行器"
    export function actuator_buzzer0(pin: DigitalPin, status: on_off): void {
        pins.digitalWritePin(pin, status)
    }

    //% blockId=actuator_buzzer1 block="actuator_buzzer1 pin ：%pin|freq %freq"   group="无源蜂鸣器"
    //% weight=70
    //% subcategory="执行器"
    export function actuator_buzzer1(pin: AnalogPin, freq: number): void {
        pins.analogWritePin(pin, freq)
    }

    //% blockId=actuator_relay block="actuator_relay pin ：%pin|status %status"   group="继电器"
    //% weight=70
    //% subcategory="执行器"
    export function actuator_relay(pin: DigitalPin, status: on_off): void {
        pins.digitalWritePin(pin, status)
    }

    //% blockId=actuator_motor_run block="actuator_motor_run INA | %_INA | INB | %_INB | direction | %turn | speed %speed"  group="直流电机"
    //% weight=70
    //% inlineInputMode=inline
    //% speed.min=0 speed.max=255
    //% subcategory="执行器"
    export function actuator_motor_run(_INA: AnalogPin, _INB: AnalogPin, turn: run_turn, speed: number): void {

        if (turn == 0) {
            pins.analogWritePin(_INA, 0)
            pins.analogWritePin(_INB, speed)

        } else if (turn == 1) {
            pins.analogWritePin(_INA, speed)
            pins.analogWritePin(_INB, 0)
        }

    }

    /**
     * 舵机
     */
    //% blockId=actuator_servo block="actuator_servo %pin|angle %angle"  group="舵机"
    //% angle.min=0  angle.max=180
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="执行器"
    export function actuator_servo(pin: AnalogPin, angle: number): void {

        let increment = 1
        pins.servoWritePin(pin, angle)
        angle = angle + increment
        if (angle == 0)
            increment = 1
        else if (angle == 180)
            increment = -1
        basic.pause(100)
    }

    /**
     * 激光模块
     */
    //% blockId=actuator_laser block="actuator_laser pin ：%pin|status %status"   group="激光模块"
	//% weight=70
	//% subcategory="执行器"
    export function actuator_laser(pin: DigitalPin,status: on_off): void {
        pins.digitalWritePin(pin,status)
    }

    let _SDO = 0
    let _SCL = 0

    //% blockId=actuator_keyborad_pin block="actuator_keyborad_pin|SDOPIN %SDO|SCLPIN %SCL"   group="触摸键盘"
    //% weight=71
    //% subcategory="执行器"
    export function actuator_keyborad_pin(SDO: DigitalPin, SCL: DigitalPin): void {

        _SDO = SDO
        _SCL = SCL
    }

    //% blockId=actuator_keyborad_read block="actuator_keyborad_read"   group="触摸键盘"
    //% weight=70
    //% subcategory="执行器"
    export function actuator_keyborad_read(): string {
        let DATA = 0
        pins.digitalWritePin(_SDO, 1)
        control.waitMicros(93)

        pins.digitalWritePin(_SDO, 0)
        control.waitMicros(10)

        for (let i = 0; i < 16; i++) {
            pins.digitalWritePin(_SCL, 1)
            pins.digitalWritePin(_SCL, 0)
            DATA |= pins.digitalReadPin(_SDO) << i
        }
        control.waitMicros(2 * 1000)
        switch (DATA & 0xFFFF) {
            case 0xFFFE: return "1"
            case 0xFFFD: return "2"
            case 0xFFFB: return "3"
            case 0xFFEF: return "4"
            case 0xFFDF: return "5"
            case 0xFFBF: return "6"
            case 0xFEFF: return "7"
            case 0xFDFF: return "8"
            case 0xFBFF: return "9"
            case 0xDFFF: return "0"
            case 0xFFF7: return "A"
            case 0xFF7F: return "B"
            case 0xF7FF: return "C"
            case 0x7FFF: return "D"
            case 0xEFFF: return "*"
            case 0xBFFF: return "#"
            default: return " "
        }
    }

    //% blockId=setled block="set led ：%lpin|status %lstatus"   group="LED灯"
    //% weight=70
    //% subcategory="显示器"
    export function setled(lpin: DigitalPin, lstatus: ledon_off): void {
        pins.digitalWritePin(lpin, lstatus)
    }
    let _Rpins = 0
    let _Gpins = 0
    let _Bpins = 0

    //% blockId=setrgbpin block="set RGBlight pin|g %_GPin|b %_BPin|r %_RPin"   group="三色灯"
    //% weight=71
    //% subcategory="显示器"
    export function setRGBpin(_GPin: DigitalPin, _BPin: DigitalPin, _RPin: DigitalPin): void {
        _Gpins = _GPin
        _Bpins = _BPin
        _Rpins = _RPin
    }

    //% blockId=yledon block="set color pin|r_color %r_color|g_color %g_color|b_color %b_color"   group="三色灯"
    //% r_color.min=0  r_color.max=255
    //% g_color.min=0  g_color.max=255
    //% b_color.min=0  b_color.max=255
    //% weight=70
    //% subcategory="显示器"
    export function selectcolor(r_color: number,g_color: number,b_color: number): void {
        pins.analogWritePin(_Rpins,r_color)
        pins.analogWritePin(_Gpins,g_color)
        pins.analogWritePin(_Bpins,b_color)
    }

    /*
     * traffic light
     */
    let rpins = 0
    let gpins = 0
    let ypins = 0
    //% blockId=setpin block="set light pin|g %GPin|y %YPin|r %RPin"   group="交通灯"
    //% weight=71
    //% subcategory="显示器"
    export function setpin(GPin: DigitalPin, YPin: DigitalPin, RPin: DigitalPin): void {
        gpins = GPin
        ypins = YPin
        rpins = RPin
    }

    //% blockId=selectlight block="set light pin  %selectpin|light %_status"   group="交通灯"
    //% weight=70
    //% subcategory="显示器"
    export function selectlight(selectpin: _selectlight, _status: ledon_off): void {
        let a;
        if (selectpin == 0)
            a = ypins
        else if (selectpin == 1) {
            a = rpins
        }
        else if (selectpin == 2) {
            a = gpins
        }
        pins.digitalWritePin(a, _status)
    }

    let i2cAddr: number
    let BK: number
    let RS: number
    function setreg(d: number) {
        pins.i2cWriteNumber(i2cAddr, d, NumberFormat.Int8LE)
        basic.pause(1)
    }

    function set(d: number) {
        d = d & 0xF0
        d = d + BK + RS
        setreg(d)
        setreg(d + 4)
        setreg(d)
    }

    function lcdcmd(d: number) {
        RS = 0
        set(d)
        set(d << 4)
    }

    function lcddat(d: number) {
        RS = 1
        set(d)
        set(d << 4)
    }

    //% block="LcdInit $addr" addr.defl="0x27"  group="LCD1602显示屏"  
    //% subcategory="显示器"
    //% weight=70
    export function i2cLcdInit(addr: number) {
        i2cAddr = addr
        BK = 8
        RS = 0
        lcdcmd(0x33)
        basic.pause(5)
        set(0x30)
        basic.pause(5)
        set(0x20)
        basic.pause(5)
        lcdcmd(0x28)
        lcdcmd(0x0C)
        lcdcmd(0x06)
        lcdcmd(0x01)
    }

    //% block="showchar $ch|col $x|row $y"   group="LCD1602显示屏"  
    //% subcategory="显示器"
    //% weight=69
    export function i2cLcdShowChar(y: number, x: number, ch: string): void {
        let a: number
        y = y - 1
        if (y > 0)
            a = 0xC0
        else
            a = 0x80
        x = x - 1
        a += x
        lcdcmd(a)
        lcddat(ch.charCodeAt(0))
    }

    //% block="showNumber $n|col $x|row $y"   group="LCD1602显示屏"  
    //% subcategory="显示器"
    //% weight=68
    export function i2cLcdShowNumber(y: number, x: number, n: number): void {
        let s = n.toString()
        i2cLcdShowString(y, x, s)
    }

    /**
     * TODO: describe your function here
     * 
     */
    //% block="showString $s|col $x|row $y"   group="LCD1602显示屏"  
    //% subcategory="显示器"
    //% weight=67
    export function i2cLcdShowString(y: number, x: number, s: string): void {
        let a: number
        y = y - 1
        if (y > 0)
            a = 0xC0
        else
            a = 0x80
        x = x - 1
        a += x
        lcdcmd(a)

        for (let i = 0; i < s.length; i++) {
            lcddat(s.charCodeAt(i))
        }
    }

    //% block="i2cLcdDisplay_Control %item"   group="LCD1602显示屏"  
    //% subcategory="显示器"
    //% weight=64
    export function i2cLcdDisplay_Control(item: Item): void {
        if (item == 1) {
            lcdcmd(0x0C)
        }
        if (item == 2) {
            lcdcmd(0x08)
        }
        if (item == 3) {
            lcdcmd(0x01)
        }
    }

    //% subcategory="显示器"   group="LCD1602显示屏"
    //%  blockId=seti2cLcdBacklight block="Backlight switch control %backlight"
    //% weight=63
    export function seti2cLcdBacklight(backlight: LcdBacklight): void {
        if (backlight == 1) {
            BK = 8
            lcdcmd(0)
        }
        if (backlight == 0) {
            BK = 0
            lcdcmd(0)
        }
    }




    /**
     * TM1637
     */
    let TM1637_CMD1 = 0x40
    let TM1637_CMD2 = 0xC0
    let TM1637_CMD3 = 0x80
    let _SEGMENTS = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71]

    /**
     * TM1637 LED display
     */
    export class TM1637LEDs {
        buf: Buffer
        clk: DigitalPin
        dio: DigitalPin
        _ON: number
        brightness: number
        count: number   // number of LEDs

        /**
         * initial TM1637
         */
        init(): void {
            pins.digitalWritePin(this.clk, 0)
            pins.digitalWritePin(this.dio, 0)
            this._ON = 8
            this.buf = pins.createBuffer(this.count)
            this.clear()
        }

        /**
         * Start 
         */
        _start() {
            pins.digitalWritePin(this.dio, 0)
            pins.digitalWritePin(this.clk, 0)
        }

        /**
         * Stop
         */
        _stop() {
            pins.digitalWritePin(this.dio, 0)
            pins.digitalWritePin(this.clk, 1)
            pins.digitalWritePin(this.dio, 1)
        }

        /**
         * send command1
         */
        _write_data_cmd() {
            this._start()
            this._write_byte(TM1637_CMD1)
            this._stop()
        }

        /**
         * send command3
         */
        _write_dsp_ctrl() {
            this._start()
            this._write_byte(TM1637_CMD3 | this._ON | this.brightness)
            this._stop()
        }

        /**
         * send a byte to 2-wire interface
         */
        _write_byte(b: number) {
            for (let i = 0; i < 8; i++) {
                pins.digitalWritePin(this.dio, (b >> i) & 1)
                pins.digitalWritePin(this.clk, 1)
                pins.digitalWritePin(this.clk, 0)
            }
            pins.digitalWritePin(this.clk, 1)
            pins.digitalWritePin(this.clk, 0)
        }

        /**
         * set TM1637 intensity, range is [0-8], 0 is off.
         * @param val the brightness of the TM1637, eg: 7
         */
        //% blockId="TM1637_set_intensity" block="%tm| set intensity %val"  group="TM1637数码管"
        //% weight=88 
        //% parts="TM1637"
        //% subcategory="显示器"
        //% val.max=8 val.min=0
        intensity(val: number) {
            if (val < 1) {
                this.off()
                return
            }
            if (val > 8) val = 8
            this._ON = 8
            this.brightness = val - 1
            this._write_data_cmd()
            this._write_dsp_ctrl()
        }

        /**
         * set data to TM1637, with given bit
         */
        _dat(bit: number, dat: number) {
            this._write_data_cmd()
            this._start()
            this._write_byte(TM1637_CMD2 | (bit % this.count))
            this._write_byte(dat)
            this._stop()
            this._write_dsp_ctrl()
        }

        /**
         * show a number in given position. 
         * @param bit the position of the LED, eg: 0
         * @param num number will show, eg: 5
         * 
         */
        //% blockId="TM1637_showbit" block="%tm| show digit %num |at %bit"  group="TM1637数码管"
        //% weight=90 blockGap=8
        //% parts="TM1637"
        //% bit.max=3 bit.min=0
        //% subcategory="显示器"
        showbit(bit: number, num: number) {
            this.buf[bit % this.count] = _SEGMENTS[num % 16]
            this._dat(bit, _SEGMENTS[num % 16])
        }

        /**
          * show a number. 
          * @param num is a number, eg: 0
          */
        //% blockId="TM1637_shownum" block="%tm| show number %num"  group="TM1637数码管"
        //% weight=91 blockGap=8
        //% parts="TM1637"
        //% subcategory="显示器"
        showNumber(num: number) {
            if (num < 0) {
                this._dat(0, 0x40) // '-'
                num = -num
            }
            else
                this.showbit(0, (num / 1000) % 10)
            this.showbit(3, num % 10)
            this.showbit(2, (num / 10) % 10)
            this.showbit(1, (num / 100) % 10)
        }

        /**
          * show a hex number. 
          * @param num is a hex number, eg: 0
          */
        //% blockId="TM1637_showhex" block="%tm| show hex number %num"   group="TM1637数码管"
        //% weight=90 blockGap=8
        //% parts="TM1637"
        //% subcategory="显示器"
        showHex(num: number) {
            if (num < 0) {
                this._dat(0, 0x40) // '-'
                num = -num
            }
            else
                this.showbit(0, (num >> 12) % 16)
            this.showbit(3, num % 16)
            this.showbit(2, (num >> 4) % 16)
            this.showbit(1, (num >> 8) % 16)
        }

        /**
         * show or hide dot point. 
         * @param bit is the position,eg: 0
         * 
         */
        //% blockId="TM1637_showDP" block="%tm| DotPoint at %bit|show %_status"  group="TM1637数码管"
        //% weight=70 blockGap=8
        //% parts="TM1637"
        //% subcategory="显示器"
        //% bit.max=3 bit.min=0
        showDP(_status: ledon_off, bit: number) {
            bit = bit % this.count
            let show = _status == 1 ? true : false;
            if (show) this._dat(bit, this.buf[bit] | 0x80)
            else this._dat(bit, this.buf[bit] & 0x7F)
        }

        //% blockId="TM1637_clear" block="clear %tm"  group="TM1637数码管"
        //% weight=80 blockGap=8
        //% parts="TM1637"
        //% subcategory="显示器"
        clear() {
            for (let i = 0; i < this.count; i++) {
                this._dat(i, 0)
                this.buf[i] = 0
            }
        }

        //% blockId="TM1637_on" block="turn on %tm"  group="TM1637数码管"
        //% weight=86 blockGap=8
        //% parts="TM1637"
        //% subcategory="显示器"
        on() {
            this._ON = 8
            this._write_data_cmd()
            this._write_dsp_ctrl()
        }

        //% blockId="TM1637_off" block="turn off %tm"  group="TM1637数码管"
        //% weight=85 blockGap=8
        //% parts="TM1637"
        //% subcategory="显示器"
        off() {
            this._ON = 0
            this._write_data_cmd()
            this._write_dsp_ctrl()
        }
    }

    //% weight=99 
    //% blockId="TM1637_create" block="CLK %clk|DIO %dio|intensity %intensity|LED count %count"  group="TM1637数码管"
    //% inlineInputMode=inline
    //% subcategory="显示器"
    //% intensity.max=8 intensity.min=0
    //% bit.max=4 bit.min=1
    export function TMcreate(clk: DigitalPin, dio: DigitalPin, intensity: number, count: number): TM1637LEDs {
        let tm = new TM1637LEDs()
        tm.clk = clk
        tm.dio = dio
        if ((count < 1) || (count > 5)) count = 4
        tm.count = count
        tm.brightness = intensity
        tm.init()
        return tm
    }

    let COMMAND_I2C_ADDRESS = 0x24
    let DISPLAY_I2C_ADDRESS = 0x34
    let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71]

    let _intensity = 3
    let dbuf = [0, 0, 0, 0]

    function cmd(c: number) {
        pins.i2cWriteNumber(COMMAND_I2C_ADDRESS, c, NumberFormat.Int8BE)
    }

    function dat(bit: number, d: number) {
        pins.i2cWriteNumber(DISPLAY_I2C_ADDRESS + (bit % 4), d, NumberFormat.Int8BE)
    }

    // //% blockId="TM650_ON" block="turn on display" group="TM1650数码管"
    // //% weight=50 blockGap=8
    // //% subcategory="显示器"
    // export function on() {
    //     cmd(_intensity * 16 + 1)
    // }

    // //% blockId="TM650_OFF" block="turn off display" group="TM1650数码管"
    // //% weight=50 blockGap=8
    // //% subcategory="显示器"
    // export function off() {
    //     _intensity = 0
    //     cmd(0)
    // }

    // //% blockId="TM650_CLEAR" block="clear display" group="TM1650数码管"
    // //% weight=40 blockGap=8
    // //% subcategory="显示器"
    // export function clear() {
    //     dat(0, 0)
    //     dat(1, 0)
    //     dat(2, 0)
    //     dat(3, 0)
    //     dbuf = [0, 0, 0, 0]
    // }
    //% blockId="TM650_Control" block="display control" group="TM1650数码管"
    //% weight=40 blockGap=8
    //% subcategory="显示器"
    export function TM650_Control(option: Select) {
        if (option == 0) {
            cmd(_intensity * 16 + 1)
        }
        if (option == 1) {
            _intensity = 0
            cmd(0)
        }
        if (option == 2) {
            dat(0, 0)
            dat(1, 0)
            dat(2, 0)
            dat(3, 0)
            dbuf = [0, 0, 0, 0]
        }
    }

    //% blockId="TM650_DIGIT" block="show digit %num|at %bit"  group="TM1650数码管"
    //% weight=80 blockGap=8
    //% num.max=15 num.min=0
    //% subcategory="显示器"
    //% bit.max=3 bit.min=0
    export function digit(num: number, bit: number) {
        dbuf[bit % 4] = _SEG[num % 16]
        dat(bit, _SEG[num % 16])
    }

    //% blockId="TM650_SHOW_NUMBER" block="show number %num"  group="TM1650数码管"
    //% weight=100 blockGap=8
    //% subcategory="显示器"
    export function showNumber(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit(Math.idiv(num, 1000) % 10, 0)
        digit(num % 10, 3)
        digit(Math.idiv(num, 10) % 10, 2)
        digit(Math.idiv(num, 100) % 10, 1)
    }

    //% blockId="TM650_SHOW_HEX_NUMBER" block="show hex number %num"  group="TM1650数码管"
    //% weight=90 blockGap=8
    //% subcategory="显示器"
    export function showHex(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit((num >> 12) % 16, 0)
        digit(num % 16, 3)
        digit((num >> 4) % 16, 2)
        digit((num >> 8) % 16, 1)
    }

    //% blockId="TM650_SHOW_DP" block="show dot point %bit|show %num" group="TM1650数码管"
    //% weight=80 blockGap=8
    //% subcategory="显示器"
    //% bit.max=3 bit.min=0
    export function showDpAt(status: ledon_off, bit: number) {
        let show = status == 1 ? true : false;
        if (show) dat(bit, dbuf[bit % 4] | 0x80)
        else dat(bit, dbuf[bit % 4] & 0x7F)
    }

    //% blockId="TM650_INTENSITY" block="set intensity %dat" group="TM1650数码管"
    //% weight=70 blockGap=8
    //% subcategory="显示器"
    //% dat.max=7 dat.min=0
    export function setIntensity(dat: number) {
        if ((dat < 0) || (dat > 8)) {
            return
        }
        if (dat == 0) {
            _intensity = 0
            cmd(0)
        }
        else {
            _intensity = dat
            cmd((dat << 4) | 0x01)
        }
    }

    //% blockId=touchbutton block="touch |digital pin %pin"   group="触摸按键"
    //% weight=70
    //% subcategory="基础输入模块"
    export function touchButton(pin: DigitalPin): boolean {
       // pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //% blockId=button block="Button |digital pin %pin"   group="按键开关"
    //% weight=70
    //% subcategory="基础输入模块"
    export function Button(pin: DigitalPin): boolean {
     //   pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
    }

    //% blockId=crashbutton block="crashButton |digital pin %pin"   group="碰撞开关"
    //% weight=70
    //% subcategory="基础输入模块"
    export function crashButton(pin: DigitalPin): boolean {
       // pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
    }

    //% blockId=slideRheostat block="slideRheostat |analog pin %pin"   group="滑动变阻器"
    //% weight=70
    //% subcategory="基础输入模块"
    export function slideRheostat(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        return row
    }

    //% blockId=rotaryPotentiometer block="rotaryPotentiometer |analog pin %pin" group="旋转电位器"
    //% weight=70
    //% subcategory="基础输入模块"
    export function rotaryPotentiometer(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        return row
    }

    // let _Apin = 0
    // let _Dpin = 0
    // let _Bpin = 0

    // //% blockId=rotaryEncoder block="rotaryEncoder setup | pinA %pina|pinB %pinb|pinD %pind"   group="旋转编码器"
    // //% weight=70
    // //% subcategory="基础输入模块"
    // export function rotaryEncoder(pina: DigitalPin, pinb: DigitalPin, pind: DigitalPin): void {
    //     _Apin = pina
    //     _Bpin = pinb
    //     _Dpin = pind
    // }

    // //% blockId=pinsRead block="select pin  %selectpin"  group="旋转编码器"
    // //% weight=69
    // //% subcategory="基础输入模块"
    // export function pinsRead(selectpin: _selectpin): number {
    //     let a
    //     if (selectpin == 0)
    //         a = _Apin
    //     else if (selectpin == 1)
    //         a = _Bpin
    //     else if (selectpin == 2)
    //         a = _Dpin
    //     pins.digitalWritePin(a, 0)
    //     if (pins.digitalReadPin(a) == 1) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    //     //return pins.digitalReadPin(a)
    // }


    let Xpin = 0
    let Ypin = 0
    let Bpin = 0

    //% blockId=rockerPin block="rockerPin setup | pinX %pinx|pinY %piny|pinB %pinb" group="摇杆模块"
    //% weight=70
    //% subcategory="基础输入模块"
    export function rockerPin(pinx: AnalogPin, piny: AnalogPin, pinb: DigitalPin): void {
        Xpin = pinx
        Ypin = piny
        Bpin = pinb
    }

    //% blockId=_analogRead block="select analog pin  %selectpin" group="摇杆模块"
    //% weight=69
    //% subcategory="基础输入模块"
    export function _analogRead(selectpin: _rockerpin): number {
        let a
        if (selectpin == 0)
            a = Xpin
        else if (selectpin == 1)
            a = Ypin
        return pins.analogReadPin(a)
    }

    //% blockId=_digitalRead block="Is the rocker module pressed?" group="摇杆模块"
    //% weight=68
    //% subcategory="基础输入模块"
    export function _digitalRead(): boolean {
       // pins.digitalWritePin(Bpin, 0)
        if (pins.digitalReadPin(Bpin) == 1) {
            return false;
        } else {
            return true;
        }
    }

    let _DIO = 0
    let _CLK = 0

    //% blockId=basic_piano_pin block="basic_piano_pin |DIO pin %DIO|CLK pin %CLK"   group="钢琴模块"
    //% weight=70
    //% subcategory="基础输入模块"
    export function basic_piano_pin(DIO: DigitalPin, CLK: DigitalPin): void {

        _DIO = DIO
        _CLK = CLK
    }

    //% blockId=basic_piano_play block="basic_piano_play"   group="钢琴模块"
    //% weight=69
    //% subcategory="基础输入模块"
    export function basic_piano_play(): void {

        if (0 == pins.digitalReadPin(_DIO)) {
            let list: number[] = []
            for (let index = 0; index <= 15; index++) {
                for (let index2 = 0; index2 < 4; index2++) {
                    pins.digitalWritePin(_CLK, 0)
                }
                for (let index2 = 0; index2 < 4; index2++) {
                    pins.digitalWritePin(_CLK, 1)
                }
                list[index] = pins.digitalReadPin(_DIO)
            }
            if (!(list[0])) {
                music.playTone(262, music.beat(BeatFraction.Half))
            } else if (!(list[1])) {
                music.playTone(294, music.beat(BeatFraction.Half))
            } else if (!(list[2])) {
                music.playTone(330, music.beat(BeatFraction.Half))
            } else if (!(list[3])) {
                music.playTone(349, music.beat(BeatFraction.Half))
            } else if (!(list[4])) {
                music.playTone(392, music.beat(BeatFraction.Half))
            } else if (!(list[5])) {
                music.playTone(440, music.beat(BeatFraction.Half))
            } else if (!(list[6])) {
                music.playTone(494, music.beat(BeatFraction.Half))
            } else if (!(list[7])) {
                music.playTone(523, music.beat(BeatFraction.Half))
            }
        }
    }




    //% blockId=sensor_water block="Water vapor sensor pin %pines"  group="水蒸气传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_water(pines: AnalogPin): number{
         return pins.analogReadPin(pines);
         
    }


    //% blockId=sensor_temperature block="Pin %pin reads the analog value of the LM35"  group="LM35温度传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_temperature(pin: AnalogPin): number {
        let temp = (pins.analogReadPin(pin) / 1023) * 3.3 * 100;
        return temp

    }

    //% blockId=sensor_flame block="Pin %pin reads the digital value of the flame sensor" group="火焰传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_flame(pin: DigitalPin): boolean {
       // pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
    }

    //% blockId=sensor_flame_analog block="Pin %pin reads the analog value of the flame sensor" group="火焰传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_flame_analog(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% blockId=sensor_infraredTracking block="Pin %pin reads the digital value of the infraredTracking sensor" group="红外寻迹传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_infraredTracking(pin: DigitalPin): boolean {
     //   pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //% blockId=sensor_incline block="sensor_incline pin |digitalpin %pin" group="倾斜传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_incline(pin: DigitalPin): boolean {
      //  pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
        // return pins.digitalReadPin(pin)

    }

    /**
     * 光敏传感器
     */

    //% blockId=sensor_illumination block="sensor_illumination pin |analogpin %pin" group="光敏传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_illumination(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    /**
     * 热敏传感器
     */

    //% blockId=sensor_thermosensitive block="sensor_thermosensitive pin |analogpin %pin" group="热敏传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_thermosensitive(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    /**
     * 水位传感器
     */

    //% blockId=sensor_waterLevel block="sensor_waterLevel pin |analogpin %pin" group="水位传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_waterLevel(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    /**
     * 土壤湿度传感器
     */

    //% blockId=sensor_soilMoisture block="sensor_soilMoisture pin |analogpin %pin"  group="土壤湿度传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_soilMoisture(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    /**
     * 避障传感器
     */

    //% blockId=sensor_obstacleAvoid block="sensor_obstacleAvoid pin |digitalpin %pin" group="避障传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_obstacleAvoid(pin: DigitalPin): boolean {
       // pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
        // return pins.digitalReadPin(pin)   
    }

    /**
     * 磁簧开关传感器
     */

    //% blockId=sensor_reedSwitch block="sensor_reedSwitch pin |digitalpin %pin" group="磁簧开关传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_reedSwitch(pin: DigitalPin): boolean {
       // pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 人体热释电传感器
     */

    //% blockId=sensor_humanBody block="sensor_humanBody pin |digitalpin %pin" group="人体热释电传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_humanBody(pin: DigitalPin): boolean {
     //   pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 震动传感器
     */

    //% blockId=sensor_quake block="sensor_quake pin |digitalpin %pin" group="震动传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_quake(pin: DigitalPin): boolean {
     //   pins.digitalWritePin(pin, 0)
        if (pins.digitalReadPin(pin) == 1) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 震动传感器
     */

    //% blockId=sensor_quake_analog block="sensor_quake pin |digitalpin %pin" group="震动传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_quake_analog(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    /**
     * 灰度传感器
     */

    //% blockId=sensor_grayLevel block="sensor_grayLevel pin |analogpin %pin" group="灰度传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_grayLevel(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    /**
     * 声音传感器
     */
    //% blockId=sensor_sound_analogread  block="Pin %pin reads the analog value of the sound sensor" group="声音传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_sound_analogread(_AS: AnalogPin): number {
        return pins.analogReadPin(_AS)

    }

    //% blockId=sensor_sound_digitalread  block="Pin %pin reads the digital value of the sound sensor" group="声音传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_sound_digitalread(_DS: DigitalPin): boolean {
     //   pins.digitalWritePin(_DS, 0)
        if (pins.digitalReadPin(_DS) == 1) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 雨滴传感器
     */
    //% blockId=sensor_rain_analogread  block="Pin %pin reads the analog value of the rain sensor"  group="雨滴传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_rain_analogread(_DR: AnalogPin): number {
        return pins.analogReadPin(_DR)
    }

    //% blockId=sensor_rain_digitalread  block="Pin %pin reads the digital value of the rain sensor"   group="雨滴传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_rain_digitalread(_DR: DigitalPin): boolean {
      //  pins.digitalWritePin(_DR, 0)
        if (pins.digitalReadPin(_DR) == 1) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 气体传感器
     */
    //% blockId=sensor_gas_analogread  block="Pin %pin reads the analog value of the MQ4-gas sensor"  group="气体传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_gas_analogread(_AG: AnalogPin): number {
        return pins.analogReadPin(_AG)
    }

    //% blockId=sensor_gas_digitalread  block="Pin %pin reads the digital value of the MQ4-gas sensor"  group="气体传感器"
    //% weight=70
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensor_gas_digitalread(_DG: DigitalPin): boolean {
      //  pins.digitalWritePin(_DG, 0)
        if (pins.digitalReadPin(_DG) == 1) {
            return true;
        } else {
            return false;
        }
    }

    let initialized = false
    //let neoStrip: neopixel.Strip;
    let emRGBLight: EMRGBLight.EmakefunRGBLight;
    let board_emRGBLight: EMRGBLight.EmakefunRGBLight;
    let matBuf = pins.createBuffer(17);
    let distanceBuf = 0;

    /**
     * Get RUS04 distance
     * @param pin Microbit ultrasonic pin; eg: P2
    */
    //% blockId=Ultrasonic block="Read RgbUltrasonic Distance at pin %pin(cm)"  group="RGB超声波"
    //% weight=76
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function Ultrasonic(pin: DigitalPin): number {
        pins.setPull(pin, PinPullMode.PullNone);
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(50);
        pins.digitalWritePin(pin, 0);
	    control.waitMicros(1000);
        while(!pins.digitalReadPin(pin));
        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 25000);
        let ret = d;
        // filter timeout spikes
        if (ret == 0 && distanceBuf != 0) {
            ret = distanceBuf;
        }
        distanceBuf = d;
        //return d;
        return Math.floor(ret * 9 / 6 / 58);
        //return Math.floor(ret / 40 + (ret / 800));
        // Correction

    }

    function RgbDisplay(indexstart: number, indexend: number, rgb: RgbColors): void {
        for (let i = indexstart; i <= indexend; i++) {
            emRGBLight.setPixelColor(i, rgb);
        }
        emRGBLight.show();
    }
    
    function board_RgbDisplay(indexstart: number, indexend: number, rgb: RgbColors): void {
        for (let i = indexstart; i <= indexend; i++) {
            board_emRGBLight.setPixelColor(i, rgb);
        }
        board_emRGBLight.show();
    }

    export function rus04_rgb(pin: DigitalPin, offset: number, index: number, rgb: number, effect: number): void {
        let start = 0, end = 0;
        if (!emRGBLight) {
            emRGBLight = EMRGBLight.create(pin, 10, EMRGBPixelMode.RGB)
        }
        //if(offset >= 4 || offset == 0){
            if (index == RgbUltrasonics.Left) {
                start = 0;
                end = 2;
            } else if (index == RgbUltrasonics.Right) {
                start = 3;
                end = 5;
            } else if (index == RgbUltrasonics.All) {
                start = 0;
                end = 5;
            }
       // }
        start += offset;
        end += offset;
        switch (effect) {
            case ColorEffect.None:
                emRGBLight.setBrightness(255);
                RgbDisplay(start, end, rgb);
                break;
            case ColorEffect.Breathing:
                for (let i = 0; i < 255; i += 2) {
                    emRGBLight.setBrightness(i);
                    RgbDisplay(start, end, rgb);
                    //basic.pause((255 - i)/2);
                    basic.pause((i < 50) ? 10 : (255 / i));
                }
                for (let i = 255; i > 0; i -= 2) {
                    emRGBLight.setBrightness(i);
                    RgbDisplay(start, end, rgb);
                    basic.pause((i < 50) ? 10 : (255 / i));
                }
                break;
            case ColorEffect.Rotate:
                emRGBLight.setBrightness(255);
                for (let i = 0; i < 4; i++) {
                    emRGBLight.setPixelColor(start, rgb);
                    emRGBLight.setPixelColor(start + 1, 0);
                    emRGBLight.setPixelColor(start + 2, 0);
                    if (index == RgbUltrasonics.All) {
                        emRGBLight.setPixelColor(end - 2, rgb);
                        emRGBLight.setPixelColor(end - 1, 0);
                        emRGBLight.setPixelColor(end, 0);
                    }
                    emRGBLight.show();
                    basic.pause(150);
                    emRGBLight.setPixelColor(start, 0);
                    emRGBLight.setPixelColor(start + 1, rgb);
                    emRGBLight.setPixelColor(start + 2, 0);
                    if (index == RgbUltrasonics.All) {
                        emRGBLight.setPixelColor(end - 2, 0);
                        emRGBLight.setPixelColor(end - 1, rgb);
                        emRGBLight.setPixelColor(end, 0);
                    }
                    emRGBLight.show();
                    basic.pause(150);
                    emRGBLight.setPixelColor(start, 0);
                    emRGBLight.setPixelColor(start + 1, 0);
                    emRGBLight.setPixelColor(start + 2, rgb);
                    if (index == RgbUltrasonics.All) {
                        emRGBLight.setPixelColor(end - 2, 0);
                        emRGBLight.setPixelColor(end - 1, 0);
                        emRGBLight.setPixelColor(end, rgb);
                    }
                    emRGBLight.show();
                    basic.pause(150);
                    emRGBLight.setBrightness(0);
                }
                RgbDisplay(4, 9, 0);
                break;
            case ColorEffect.Flash:
                for (let i = 0; i < 3; i++) {
                    emRGBLight.setBrightness(255);
                    RgbDisplay(start, end, rgb);
                    basic.pause(100);
                    RgbDisplay(start, end, 0);
                    basic.pause(50);
                }
                break;
        }
    }
	
    export function board_rus04_rgb(pin: DigitalPin, offset: number, index: number, rgb: number, effect: number): void {
        let start = 0, end = 0;
        if (!board_emRGBLight) {
            board_emRGBLight = EMRGBLight.create(pin, 10, EMRGBPixelMode.RGB)
        }
        if(offset >= 4){
            if (index == RgbUltrasonics.Left) {
                start = 0;
                end = 2;
            } else if (index == RgbUltrasonics.Right) {
                start = 3;
                end = 5;
            } else if (index == RgbUltrasonics.All) {
                start = 0;
                end = 5;
            }
        }
        start += offset;
        end += offset;
        switch (effect) {
            case ColorEffect.None:
                board_emRGBLight.setBrightness(255);
                board_RgbDisplay(start, end, rgb);
                break;
            case ColorEffect.Breathing:
                for (let i = 0; i < 255; i += 2) {
                    board_emRGBLight.setBrightness(i);
                    board_RgbDisplay(start, end, rgb);
                    //basic.pause((255 - i)/2);
                    basic.pause((i < 50) ? 10 : (255 / i));
                }
                for (let i = 255; i > 0; i -= 2) {
                    board_emRGBLight.setBrightness(i);
                    board_RgbDisplay(start, end, rgb);
                    basic.pause((i < 50) ? 10 : (255 / i));
                }
                break;
            case ColorEffect.Rotate:
                board_emRGBLight.setBrightness(255);
                for (let i = 0; i < 4; i++) {
                    board_emRGBLight.setPixelColor(start, rgb);
                    board_emRGBLight.setPixelColor(start + 1, 0);
                    board_emRGBLight.setPixelColor(start + 2, 0);
                    if (index == RgbUltrasonics.All) {
                        board_emRGBLight.setPixelColor(end - 2, rgb);
                        board_emRGBLight.setPixelColor(end - 1, 0);
                        board_emRGBLight.setPixelColor(end, 0);
                    }
                    board_emRGBLight.show();
                    basic.pause(150);
                    board_emRGBLight.setPixelColor(start, 0);
                    board_emRGBLight.setPixelColor(start + 1, rgb);
                    board_emRGBLight.setPixelColor(start + 2, 0);
                    if (index == RgbUltrasonics.All) {
                        board_emRGBLight.setPixelColor(end - 2, 0);
                        board_emRGBLight.setPixelColor(end - 1, rgb);
                        board_emRGBLight.setPixelColor(end, 0);
                    }
                    board_emRGBLight.show();
                    basic.pause(150);
                    board_emRGBLight.setPixelColor(start, 0);
                    board_emRGBLight.setPixelColor(start + 1, 0);
                    board_emRGBLight.setPixelColor(start + 2, rgb);
                    if (index == RgbUltrasonics.All) {
                        board_emRGBLight.setPixelColor(end - 2, 0);
                        board_emRGBLight.setPixelColor(end - 1, 0);
                        board_emRGBLight.setPixelColor(end, rgb);
                    }
                    board_emRGBLight.show();
                    basic.pause(150);
                    board_emRGBLight.setBrightness(0);
                }
                board_RgbDisplay(4, 9, 0);
                break;
            case ColorEffect.Flash:
                for (let i = 0; i < 3; i++) {
                    board_emRGBLight.setBrightness(255);
                    board_RgbDisplay(start, end, rgb);
                    basic.pause(100);
                    board_RgbDisplay(start, end, 0);
                    basic.pause(50);
                }
                break;
        }
}

    //% blockId="sensorbit_rus04" block="part %index show color %rgb effect %effect rgbpin %pin"  group="RGB超声波"
    //% weight=75
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function sensorbit_rus04(pin: DigitalPin, index: RgbUltrasonics, rgb: RgbColors, effect: ColorEffect): void {
        rus04_rgb(pin, 0, index, rgb, effect);
    }

    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId="sensor_ping" block="ping trig %trig|echo %echo|unit %unit" group="普通超声波"
    //% weight=75
    //% inlineInputMode=inline
    //% subcategory="传感器"
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }

    //% blockId="readdht11" block="value of dht11 %dht11type at pin %dht11pin"  group="温湿度传感器"
    //% subcategory="传感器"
    //% inlineInputMode=inline
    export function dht11value(dht11pin: DigitalPin, dht11type: DHT11Type): number {
        pins.digitalWritePin(dht11pin, 0)
        basic.pause(18)
        let i = pins.digitalReadPin(dht11pin)
        pins.setPull(dht11pin, PinPullMode.PullUp);
        switch (dht11type) {
            case 0:
                let dhtvalue1 = 0;
                let dhtcounter1 = 0;
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);
                for (let i = 0; i <= 32 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    dhtcounter1 = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        dhtcounter1 += 1;
                    }
                    if (i > 15) {
                        if (dhtcounter1 > 2) {
                            dhtvalue1 = dhtvalue1 + (1 << (31 - i));
                        }
                    }
                }
                return ((dhtvalue1 & 0x0000ff00) >> 8);
                break;

            case 1:
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);

                let value = 0;
                let counter = 0;

                for (let i = 0; i <= 8 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    counter = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        counter += 1;
                    }
                    if (counter > 3) {
                        value = value + (1 << (7 - i));
                    }
                }
                return value;
            default:
                return 0;
        }
    }


/**
     * 循迹传感器
     */
    //% blockId=sensor_tracking block="sensor_tracking pin |digitalpin %pin"  group="循迹传感器"
    //% weight=74
    //% subcategory="传感器"
    //% inlineInputMode=inline
    export function sensor_tracking(pin: DigitalPin): boolean {
        //pins.digitalWritePin(pin, 0)
           if (pins.digitalReadPin(pin) == 1) {
              return false;
          }else {
              return true;
          }
      }
      
      let outPin1 = 0;
      let outPin2 = 0;
      let outPin3 = 0;
      let outPin4 = 0;
      /**
       * 四路循迹传感器初始化
       */
      //% blockId=four_sensor_tracking block="four_sensor_tracking pin1 |digitalpin %pin1 pin2 |digitalpin %pin2 |pin3 |digitalpin %pin3 |pin4 |digitalpin %pin4"  group="循迹传感器"
      //% inlineInputMode=inline
      //% weight=73
      //% subcategory="传感器"
      export function four_sensor_tracking(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, pin4: DigitalPin): void {
        outPin1 = pin1;
        outPin2 = pin2;
        outPin3 = pin3;
        outPin4 = pin4;
      }
      
      //% blockId=four_sensor_trackingValue block="four_sensor_tracking get sensor value"  group="循迹传感器"
      //% inlineInputMode=inline
      //% weight=72
      //% subcategory="传感器"
      export function four_sensor_trackingValue(): number {
        let result = 0;
//         pins.digitalWritePin(outPin1, 0)
//         pins.digitalWritePin(outPin2, 0)
//         pins.digitalWritePin(outPin3, 0)
//         pins.digitalWritePin(outPin4, 0)
        if (pins.digitalReadPin(outPin1) == 1) {
          result = 1 | result;
        }else {
          result = 0 | result;
        }
        if (pins.digitalReadPin(outPin2) == 1) {
          result = 2 | result;
        }else {
          result = 0 | result;
        }
        if (pins.digitalReadPin(outPin3) == 1) {
          result = 4 | result;
        }else {
          result = 0 | result;
        }
         if (pins.digitalReadPin(outPin4) == 1) {
          result = 8 | result;
        }else {
          result = 0 | result;
        }
        return result;
      }

    //% blockId="dht11value_v2" block="value of dht11 %dht11type at pin %dht11pin"  group="温湿度传感器"
    //% subcategory="micro:bit(V2)"
    //% inlineInputMode=inline
    export function dht11value_v2(dht11pin: DigitalPin, dht11type: DHT11Type): number {
        pins.digitalWritePin(dht11pin, 0)
        basic.pause(18)
        let i = pins.digitalReadPin(dht11pin)
        pins.setPull(dht11pin, PinPullMode.PullUp);
        switch (dht11type) {
            case 0:
                let dhtvalue1 = 0;
                let dhtcounter1 = 0;
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);
                for (let i = 0; i <= 32 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    dhtcounter1 = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        dhtcounter1 += 1;
                    }
                    if (i > 15) {
                        if (dhtcounter1 > 10) {
                            dhtvalue1 = dhtvalue1 + (1 << (31 - i));
                        }
                    }
                }
                return ((dhtvalue1 & 0x0000ffff)>> 8);
                break;

            case 1:
                while (pins.digitalReadPin(dht11pin) == 1);
                while (pins.digitalReadPin(dht11pin) == 0);
                while (pins.digitalReadPin(dht11pin) == 1);

                let value = 0;
                let counter = 0;

                for (let i = 0; i <= 8 - 1; i++) {
                    while (pins.digitalReadPin(dht11pin) == 0);
                    counter = 0
                    while (pins.digitalReadPin(dht11pin) == 1) {
                        counter += 1;
                    }
                    if (counter > 10) {
                        value = value + (1 << (7 - i));
                    }
                }
                return value;
            default:
                return 0;
        }
    }

    
    
    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    

    let JOYSTICK_I2C_ADDR = 0x5A;
    let JOYSTICK_LEFT_X_REG = 0x10;
    let JOYSTICK_LEFT_Y_REG = 0x11;

    let BUTOON_LEFT_REG = 0x24;
    let BUTOON_RIGHT_REG = 0x23;
    let BUTOON_UP_REG = 0x22;
    let BUTOON_DOWN_REG = 0x21;
    let JOYSTICK_BUTTON_REG = 0x20;
    let NONE_PRESS = 8;

    function Get_Button_Status (button : number){
        switch(button) {
            case 0: 
                return i2cread(JOYSTICK_I2C_ADDR,BUTOON_LEFT_REG);
            case 1: 
                return i2cread(JOYSTICK_I2C_ADDR,BUTOON_RIGHT_REG);
            case 2: 
                return i2cread(JOYSTICK_I2C_ADDR,BUTOON_UP_REG);
            case 3: 
                return i2cread(JOYSTICK_I2C_ADDR,BUTOON_DOWN_REG);
            case 4: 
                return i2cread(JOYSTICK_I2C_ADDR,JOYSTICK_BUTTON_REG);
            default:
                return 0xff;
        }
    }

    /**
     * 游戏手柄
     */
    //% blockId=Gamepad_Press block="Gamepad buttons %button Is pressed？"  group="游戏手柄"
    //% weight=74
    //% subcategory="基础输入模块"
    //% inlineInputMode=inline
    export function Gamepad_Press(button: barb_fitting): boolean {
        if(Get_Button_Status(button) != NONE_PRESS && Get_Button_Status(button) != 0xff)
    {
        return true;
    }
        return false;   
    }

    /**
     * 游戏手柄
     */
    //% blockId=Gamepad_Release block="Gamepad buttons %button Is Released？"  group="游戏手柄"
    //% weight=74
    //% subcategory="基础输入模块"
    //% inlineInputMode=inline
    export function Gamepad_Release(button: barb_fitting): boolean {
        if(Get_Button_Status(button) == NONE_PRESS)
    {
        return true;
    }
        return false;   
    }

    /**
     * 游戏手柄
     */
    //% blockId=Gamepad_Shaft block="Game controller acquisition %shaft the value of"  group="游戏手柄"
    //% weight=74
    //% subcategory="基础输入模块"
    //% inlineInputMode=inline
    export function Gamepad_Shaft(shaft: Shaft): number { 
        let value = 0;
        if(shaft == 0){
            value = i2cread(JOYSTICK_I2C_ADDR,JOYSTICK_LEFT_X_REG);
        }
        if(shaft == 1){
            value = i2cread(JOYSTICK_I2C_ADDR,JOYSTICK_LEFT_Y_REG);
        }
        return value;
    }

    /**
     * 游戏手柄
     */
    //% blockId=Gamepad_Status block="Button %button is it %status status?"  group="游戏手柄"
    //% weight=74
    //% subcategory="基础输入模块"
    //% inlineInputMode=inline
    export function Gamepad_Status(button : barb_fitting,status : key_status): boolean {
	    if(Get_Button_Status(button) == status)
	    {
		return true;
	    }else{
		return false;
	    }
    }
      
     let VOICE_RESET_REG = 0x5;
    let VOICE_IIC_ADDR = 0x79;
    let VOICE_ADD_WORDS_REG = 0x04;
    let VOICE_ASR_START_REG = 0x6;
    let VOICE_RESULT_REG = 0;
    let VOICE_CONFIG_TIME_REG = 0x3;

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cwrite1(addr: number, reg: number, value: number ,value1: string) {
        let lengths = value1.length
        let buf = pins.createBuffer(2+lengths)
        //let arr = value1.split('')
        buf[0] = reg 
        buf[1] = value
        let betys = []
        betys = stringToBytes(value1)
        for (let i = 0; i < betys.length; i++) {
            buf[2+i] = betys[i]
        }
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }



    //% blockId="Speech_recognition_reset" block="Voice recognition module for reset"  group="语音识别模块"
    //% subcategory="智能模块"
    //% inlineInputMode=inline
    export function Speech_recognition_reset(): void {
        i2ccmd(VOICE_IIC_ADDR,VOICE_RESET_REG)
        basic.pause(300)
    }

    //% blockId="Speech_recognition_mode" block="The voice recognition mode is set to %Mode"  group="语音识别模块"
    //% subcategory="智能模块"
    //% inlineInputMode=inline
    export function Speech_recognition_mode(Mode : Mode): void {
        i2cwrite(VOICE_IIC_ADDR,VOICE_RESET_REG,Mode)
        basic.pause(300)
    }

    //% blockId="Speech_recognition_glossary" block="Voice recognition to set the word number %word_number|Word content %word_content"  group="语音识别模块"
    //% subcategory="智能模块"
    //% inlineInputMode=inline
    export function Speech_recognition_glossary(word_number : number, word_content : string): void {
        i2cwrite1(VOICE_IIC_ADDR, VOICE_ADD_WORDS_REG, word_number,word_content)
        basic.pause(300)
    }

    //% blockId="Speech_recognition_start" block="Voice recognition starts to recognize"  group="语音识别模块"
    //% subcategory="智能模块"
    //% inlineInputMode=inline
    export function Speech_recognition_start(): void {
        i2ccmd(VOICE_IIC_ADDR,VOICE_ASR_START_REG)
        basic.pause(300)
    }

    //% blockId="Speech_recognition_get_result" block="Speech recognition to get the corresponding number of the recognized words"   group="语音识别模块"
    //% subcategory="智能模块"
    //% inlineInputMode=inline
    export function Speech_recognition_get_result(): number {
       let result =i2cread(VOICE_IIC_ADDR,VOICE_RESULT_REG)
       return result;
    }

    //% blockId="Speech_recognition_time" block="Voice recognition to set wake-up time %time"  group="语音识别模块"
    //% subcategory="智能模块"
    //% inlineInputMode=inline
    export function Speech_recognition_time(time : number): void {
        i2cwrite(VOICE_IIC_ADDR,VOICE_CONFIG_TIME_REG,time)
        basic.pause(300)
    }

    function stringToBytes (str : string) {  


        let ch = 0;
        let st = 0;
        let gm:number[]; 
        gm = [];
        for (let i = 0; i < str.length; i++ ) { 
            ch = str.charCodeAt(i);  
            st = 0 ;                 

           do {  
                st = ( ch & 0xFF );  
                ch = ch >> 8;   
                gm.push(st);        
            }    

            while ( ch );  

        }  
        return gm;  
    } 


}
