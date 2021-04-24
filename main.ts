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

enum IrPins {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P3 = 4,
    P4 = 5,
    P5 = 17,
    P6 = 12,
    P7 = 11,
    P8 = 18,
    P9 = 10,
    P10 = 6,
    P11 = 26,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
    P16 = 16,
    P19 = 0,
    P20 = 30,
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

    //% blockId=actuator_motor_run block="actuator_motor_run  %turn"  group="直流电机"
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
    //% weight=70
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
    //% weight=70
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

    //% block="LcdInit $addr" addr.defl="39"  group="LCD1602显示屏"  
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

    // //% block="lcdon"   group="LCD1602显示屏"  
    // //% subcategory="显示器"
    // //% weight=66
    // export function i2cLcdOn(): void {
    //     lcdcmd(0x0C)
    // }

    // //% block="lcdoff"   group="LCD1602显示屏"  
    // //% subcategory="显示器"
    // //% weight=65
    // export function i2cLcdOff(): void {
    //     lcdcmd(0x08)
    // }

    // //% block="lcdclear"   group="LCD1602显示屏"  
    // //% subcategory="显示器"
    // //% weight=64
    // export function i2cLcdClear(): void {
    //     lcdcmd(0x01)
    // }

    //% block="i2cLcdDisplay_Control"   group="LCD1602显示屏"  
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


    // //% block="lcdlighton"   group="LCD1602显示屏"  
    // //% subcategory="显示器"
    // //% weight=63
    // export function i2cLcdBacklightOn(): void {
    //     BK = 8
    //     lcdcmd(0)
    // }

    // //% block="lcdlightoff"   group="LCD1602显示屏"  
    // //% subcategory="显示器"
    // //% weight=62
    // export function i2cLcdBacklightOff(): void {
    //     BK = 0
    //     lcdcmd(0)
    // }
    //% subcategory="显示器"   group="LCD1602显示屏"
    //% blockId="Backlight switch control"
    //% weight=79
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

    export function rus04_rgb(pin: DigitalPin, offset: number, index: number, rgb: number, effect: number): void {
        let start = 0, end = 0;
        if (!emRGBLight) {
            emRGBLight = EMRGBLight.create(pin, offset+6, EMRGBPixelMode.RGB)
        }
        if(offset>=4){
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
                RgbDisplay(start, end, rgb);
                break;
            case ColorEffect.Breathing:
                for (let i = 0; i < 255; i += 2) {
                    emRGBLight.setBrightness(i);
                    RgbDisplay(start, end, rgb);
                    //basic.pause((255 - i)/2);
                    basic.pause((i < 20) ? 80 : (255 / i));
                }
                for (let i = 255; i > 0; i -= 2) {
                    emRGBLight.setBrightness(i);
                    RgbDisplay(start, end, rgb);
                    basic.pause((i < 20) ? 80 : (255 / i));
                }
                break;
            case ColorEffect.Rotate:
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
                }
                RgbDisplay(4, 9, 0);
                break;
            case ColorEffect.Flash:
                for (let i = 0; i < 6; i++) {
                    RgbDisplay(start, end, rgb);
                    basic.pause(150);
                    RgbDisplay(start, end, 0);
                    basic.pause(150);
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
      

    let color = 1;
    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;

    let _I2CAddr = 60;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _ZOOM = 1;


    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col * (_ZOOM + 1)
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    // clear bit
    function clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

    /**
     * 在 OLED 上显示一个像素
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     */
    //% blockId=OLED12864_I2C_PIXEL block="Display pixels x %x|y %y" group="OLED"
    //% subcategory="显示器"
    //% weight=70 blockGap=8
    export function OLED12864_I2C_PIXEL(x: number, y: number) {
        let page = y >> 3
        let shift_page = y % 8
        let ind = x * (_ZOOM + 1) + page * 128 + 1
        let b = (color) ? (_screen[ind] | (1 << shift_page)) : clrbit(_screen[ind], shift_page)
        _screen[ind] = b
        set_pos(x, page)
        if (_ZOOM) {
            _screen[ind + 1] = b
            _buf3[0] = 0x40
            _buf3[1] = _buf3[2] = b
            pins.i2cWriteBuffer(_I2CAddr, _buf3)
        }
        else {
            _buf2[0] = 0x40
            _buf2[1] = b
            pins.i2cWriteBuffer(_I2CAddr, _buf2)
        }
    }

    /**
     * 显示一个字符串
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param s is the text will be show, eg: 'Hello!'
     */
    //% blockId=OLED12864_I2C_SHOWSTRING block="Display text x %x|y %y|text %s" group="OLED"
    //% subcategory="显示器"
    //% weight=80 blockGap=8
    export function OLED12864_I2C_SHOWSTRING(x: number, y: number, s: string) {
        let col = 0
        let p = 0
        let ind = 0
        for (let n = 0; n < s.length; n++) {
            p = font[s.charCodeAt(n)]
            for (let i = 0; i < 5; i++) {
                col = 0
                for (let j = 0; j < 5; j++) {
                    if (p & (1 << (5 * i + j)))
                        col |= (1 << (j + 1))
                }
                ind = (x + n) * 5 * (_ZOOM + 1) + y * 128 + i * (_ZOOM + 1) + 1
                if (color == 0)
                    col = 255 - col
                _screen[ind] = col
                if (_ZOOM)
                    _screen[ind + 1] = col
            }
        }
        set_pos(x * 5, y)
        let ind0 = x * 5 * (_ZOOM + 1) + y * 128
        let buf = _screen.slice(ind0, ind + 1)
        buf[0] = 0x40
        pins.i2cWriteBuffer(_I2CAddr, buf)
    }

    /**
     * 显示一个整数
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     */
    //% blockId=OLED12864_I2C_NUMBER block="Display number x %x|y %y|number %num" group="OLED"
    //% subcategory="显示器"
    //% weight=80 blockGap=8
    export function OLED12864_I2C_NUMBER(x: number, y: number, num: number) {
        OLED12864_I2C_SHOWSTRING(x, y, num.toString())
    }

    /**
     * 绘制一条水平线段
     * @param x is X alis, eg: 0s
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     */
    //% blockId=OLED12864_I2C_HLINE block="Draw horizontal line segment x %x|y %y|length %len" group="OLED"
    //% subcategory="显示器"
    //% weight=71 blockGap=8
    //% x.min=0 x.max=60
    //% y.min=0 y.max=30
    //% len.min=1 len.max=62
    export function OLED12864_I2C_HLINE(x: number, y: number, len: number) {
        for (let i = x; i < (x + len); i++){
            OLED12864_I2C_PIXEL(i, y)
            basic.pause(1)
        }
    }

    /**
     * 绘制一条垂直线段
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     */
    //% blockId=OLED12864_I2C_VLINE block="Draw vertical line segments x %x|y %y|length %len" group="OLED"
    //% subcategory="显示器"
    //% weight=72 blockGap=8
    //% x.min=0 x.max=60
    //% y.min=0 y.max=30
    //% len.min=1 len.max=30
    export function OLED12864_I2C_VLINE(x: number, y: number, len: number) {
        for (let i = y; i < (y + len); i++){
            OLED12864_I2C_PIXEL(x, i)
            basic.pause(1)
        }
            

    }

    /**
     * 在指定位置绘制矩形
     * @param x1 is X alis, eg: 0
     * @param y1 is Y alis, eg: 0
     * @param x2 is X alis, eg: 60
     * @param y2 is Y alis, eg: 30
     */
    //% blockId=OLED12864_I2C_RECT block="Draw rectangle x1 %x1|y1 %y1|x2 %x2|y2 %y2" group="OLED"
    //% subcategory="显示器"
    //% weight=73 blockGap=8
    //% x1.min=0 x1.max=60
    //% y1.min=0 y1.max=30
    //% x2.min=0 x2.max=60
    //% y2.min=0 y2.max=30
    export function OLED12864_I2C_RECT(x1: number, y1: number, x2: number, y2: number) {
        if (x1 > x2){
            x1 = [x2, x2 = x1][0];
        }
            
        if (y1 > y2){
            y1 = [y2, y2 = y1][0];
        }
        OLED12864_I2C_HLINE(x1, y1, x2 - x1 + 1)
        OLED12864_I2C_VLINE(x2, y1, y2 - y1 + 1)
        OLED12864_I2C_HLINE(x1, y2, x2 - x1 + 1)
        OLED12864_I2C_VLINE(x1, y1, y2 - y1 + 1)
    }


    // /**
    //  * 重新绘制屏幕的显示内容
    //  */
    // //% blockId="OLED12864_I2C_DRAW" block="刷新显示" group="OLED"
    //% subcategory="显示器"
    // //% weight=64 blockGap=8
    // export 
    function draw() {
        set_pos()
        pins.i2cWriteBuffer(_I2CAddr, _screen)
    }

    /**
     * 清除 OLED 模块的显示内容
     */
    //% blockId=OLED12864_I2C_CLEAR block="Clear display" group="OLED"
    //% subcategory="显示器"
    //% weight=63 blockGap=8
    export function OLED12864_I2C_CLEAR() {
        OLED12864_I2C_init()
    }


    function clear() {
        _screen.fill(0)
        _screen[0] = 0x40
        draw()
    }

    /**
     * 打开 OLED 模块的屏幕显示
     */
    //% blockId=OLED12864_I2C_ON block="Show on" group="OLED"
    //% subcategory="显示器"
    //% weight=62 blockGap=8
    export function OLED12864_I2C_ON() {
        cmd1(0xAF)
    }

    /**
     * 关闭 OLED 模块的屏幕显示
     */
    //% blockId=OLED12864_I2C_OFF block="Display off" group="OLED"
    //% subcategory="显示器"
    //% weight=61 blockGap=8
    export function OLED12864_I2C_OFF() {
        cmd1(0xAE)
    }


    /**
     * OLED 初始化
     */
    //% blockId=OLED12864_I2C_init block="Initialize OLED" group="OLED"
    //% subcategory="显示器"
    //% weight=100 blockGap=8
    export function OLED12864_I2C_init() {
        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd2(0xD6, 1)    // zoom on
        cmd1(0xAF)       // SSD1306_DISPLAYON
        clear()
        _ZOOM = 1
    }
    

    

}
