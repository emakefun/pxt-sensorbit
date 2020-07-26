enum RgbColors {
    //% block=red
    Red = 0x00FF00,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0xFF0000,
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
	DHT11_temperature_C=0,
	//% block="humidity(0~100)"
	DHT11_humidity=1,
}

enum _selectpin{
	//% block="Apin"
	Apin=0,
	//% block="Bpin"
	Bpin=1,
	//% block="Dpin"
	Dpin=2,
}

enum RemoteButton {
	//% block=A
	A = 0x45,
	//% block=B
	B = 0x46,
	//% block=C
	C = 0x47,
	//% block=D
	D = 0x44,
	//% block=UP
	UP = 0x40,
	//% block=+
	Add = 0x43,
	//% block=LEFT
	Left = 0x07,
	//% block=OK
	Ok = 0x15,
	//% block=RIGHT
	Right = 0x09,
	//% block=DOWN
	Down = 0x19,
	//% block=-
	EQ = 0x0d,
	//% block=0
	NUM0 = 0x16,
	//% block=1
	NUM1 = 0x0c,
	//% block=2
	NUM2 = 0x18,
	//% block=3
	NUM3 = 0x5e,
	//% block=4
	NUM4 = 0x8,
	//% block=5
	NUM5 = 0x1c,
	//% block=6
	NUM6 = 0x5a,
	//% block=7
	NUM7 = 0x42,
	//% block=8
	NUM8 = 0x52,
	//% block=9
	NUM9 = 0x4A,
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

enum _rockerpin{
	//% block="Xpin"
	Xpin=0,
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

enum ledon_off{
    //% block="on"
    _on=1,
    //% block="off"
    _off=0,
}

enum on_off{
    
    //% block="on"
    _on=1,
    //% block="off"
    _off=0,
}

enum _selectlight{
	//% block="_yellow"
	_yellow=0,
	//% block="_red"
	_red=1,
	//% block="_green"
	_green=2,
}

enum _selectcolor{
	//% block="_blue"
	_blue=0,
	//% block="_red"
	_red=1,
	//% block="_green"
	_green=2,
}

enum run_turn{

    //% block="forward"
    forward = 0,
    //% block="reverse"
    reverse = 1,
}

const LED0_ON_L = 0x06
const LED0_ON_H = 0x07
const LED0_OFF_L = 0x08
const LED0_OFF_H = 0x09
const ALL_LED_ON_L = 0xFA
const ALL_LED_ON_H = 0xFB
const ALL_LED_OFF_L = 0xFC
const ALL_LED_OFF_H = 0xFD

//% color="#FFA500" weight=10 icon="\uf2c9" block="Sensor:bit"
namespace sensors {

	/**
     * 无源蜂鸣器
     */
    
    //% blockId=actuator_buzzer0 block="actuator_buzzer0 pin ：%pin|status %status"   group="无源蜂鸣器"
	//% weight=70
	//% subcategory="执行器"
    export function actuator_buzzer0(pin: DigitalPin,status: on_off): void {
        pins.digitalWritePin(pin,status)
    }
  
	/**
	 * 有源蜂鸣器
	 */
    //% blockId=actuator_buzzer1 block="actuator_buzzer1 pin ：%pin|status %status"   group="有源蜂鸣器"
	//% weight=70
	//% subcategory="执行器"
    export function actuator_buzzer1(pin: AnalogPin,freq: number): void {
        pins.analogWritePin(pin,freq)
    }
	   	
	/**
	 * 继电器
	 */
    //% blockId=actuator_relay block="actuator_relay pin ：%pin|status %status"   group="继电器"
	//% weight=70
	//% subcategory="执行器"
    export function actuator_relay(pin: DigitalPin,status: on_off): void {
        pins.digitalWritePin(pin,status)
    }
		   	
	/**
	 * 直流电机
	 */
	//% blockId=actuator_motor_run block="actuator_motor_run  %turn"  group="直流电机"
    //% weight=70
	//% speed.min=0 speed.max=255
	//% subcategory="执行器"
    export function actuator_motor_run(_INA: AnalogPin, _INB: AnalogPin, turn: run_turn, speed: number): void {

        if (turn == 0){
			pins.analogWritePin(_INA,0)
			pins.analogWritePin(_INB,speed)
			
		}else if (turn == 1){
			pins.analogWritePin(_INA,speed)
			pins.analogWritePin(_INB,0)
		}

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
	
	/**
	 * 红外发射
	 */
    export enum encodingType {
        //% block="NEC"
        NEC,
        //% block="SONY"
        SONY
    }
    let tempHandler: Action;
    let irLed = AnalogPin.P16;
    const pwmPeriod = 26;
    pins.analogWritePin(irLed, 0);
    pins.analogSetPeriod(irLed, pwmPeriod);
    let send_init = false;
    let rec_init = false;
    let arr: number[] = []
    let received = false
    let first = true
    let rec_Type = ""
    let messageStr = ""
    let recPin = DigitalPin.P8
    let thereIsHandler = false
    arr = []

    function transmitBit(highTime: number, lowTime: number): void {
        pins.analogWritePin(irLed, 512);
        control.waitMicros(highTime);
        pins.analogWritePin(irLed, 0);
        control.waitMicros(lowTime);
    }

    /**
     *  set the infrared LED pin.
     */
    //% blockId=setIR_pin block="set IR LED pin: %myPin" blockExternalInputs=false  group="红外发射"
    //% weight=90 blockGap=10
    //% myPin.fieldEditor="gridpicker" myPin.fieldOptions.columns=4
	//% myPin.fieldOptions.tooltips="false" myPin.fieldOptions.width="300"
	//% subcategory="执行器"
    export function setIR_pin(myPin: AnalogPin) {
        irLed = myPin;
        pins.analogWritePin(irLed, 0);
        pins.analogSetPeriod(irLed, pwmPeriod);
        send_init = true;
    }

    /**
     *  set the IR receiver pin.
     */
    //% blockId=setREC_pin block="set IR receiver pin: %myPin" blockExternalInputs=false  group="红外接收"
    //% weight=85 blockGap=10
    //% myPin.fieldEditor="gridpicker" myPin.fieldOptions.columns=4
	//% myPin.fieldOptions.tooltips="false" myPin.fieldOptions.width="300"
	//% subcategory="执行器"
    export function setREC_pin(myPin: DigitalPin) {
        recPin = myPin;
        pins.setEvents(recPin, PinEventType.Pulse)
        pins.setPull(recPin, PinPullMode.PullUp)
        pins.onPulsed(recPin, PulseValue.Low, function () {
            arr.push(input.runningTimeMicros())
        })
        pins.onPulsed(recPin, PulseValue.High, function () {
            arr.push(input.runningTimeMicros())
        })
        control.onEvent(recPin, DAL.MICROBIT_PIN_EVENT_ON_TOUCH, tempHandler);
        rec_init = true;
    }

    /**
     * send message from IR LED. You must set the message encoding type, send how many times, and the message.
     */
    //% blockId=sendMyMessage1 block="send message: %msg| ,%times| times, encoding type:%myType"  group="红外发射"
	//% weight=80 blockGap=10
	//% subcategory="执行器"
    export function sendMyMessage1(msg: string, times: number, myType: encodingType): void {
        if (send_init) {
            //control.inBackground(() => {
            sendMessage(convertHexStrToNum(msg), times, myType);
            //})
        }
    }
    /**
     * send message from IR LED. You must set the message encoding type, send how many times, and the message.
     */
    //% blockId=sendMyMessage2 block="send message: %msg| ,%times| times, encoding type:%myType"  group="红外发射"
	//% weight=75 blockGap=10
	//% subcategory="执行器"
    export function sendMyMessage2(msg: string, times: number, myType: string): void {
        if (send_init) {
            if (myType == "NEC") {
                sendMessage(convertHexStrToNum(msg), times, encodingType.NEC);
            } else if (myType == "SONY") {
                sendMessage(convertHexStrToNum(msg), times, encodingType.SONY);
            }
        }
    }


    function encode(myCode: number, bits: number, trueHigh: number, trueLow: number, falseHigh: number, falseLow: number): void {
        const MESSAGE_BITS = bits;
        for (let mask = 1 << (MESSAGE_BITS - 1); mask > 0; mask >>= 1) {
            if (myCode & mask) {
                transmitBit(trueHigh, trueLow);
            } else {
                transmitBit(falseHigh, falseLow);
            }
        }
    }

    function sendNEC(message: number, times: number): void {
        const enum NEC {
            startHigh = 9000,
            startLow = 4500,
            stopHigh = 560,
            stopLow = 0,
            trueHigh = 560,
            trueLow = 1690,
            falseHigh = 560,
            falseLow = 560,
            interval = 110000
        }
        let address = message >> 16;
        let command = message % 0x010000;
        const MESSAGE_BITS = 16;
        let startTime = 0;
        let betweenTime = 0;
        for (let sendCount = 0; sendCount < times; sendCount++) {
            startTime = input.runningTimeMicros();
            transmitBit(NEC.startHigh, NEC.startLow);
            encode(address, 16, NEC.trueHigh, NEC.trueLow, NEC.falseHigh, NEC.falseLow);
            encode(command, 16, NEC.trueHigh, NEC.trueLow, NEC.falseHigh, NEC.falseLow);
            transmitBit(NEC.stopHigh, NEC.stopLow);
            betweenTime = input.runningTimeMicros() - startTime
            if (times > 0)
                control.waitMicros(NEC.interval - betweenTime);
        }
    }

    function sendSONY(message: number, times: number): void {
        const enum SONY {
            startHigh = 2300,
            startLow = 500,
            trueHigh = 1100,
            trueLow = 500,
            falseHigh = 500,
            falseLow = 500,
            interval = 45000
        }
        const MESSAGE_BITS = 12;
        let startTime = 0;
        let betweenTime = 0;
        for (let sendCount = 0; sendCount < times; sendCount++) {
            startTime = input.runningTimeMicros();
            transmitBit(SONY.startHigh, SONY.startLow);
            encode(message, 12, SONY.trueHigh, SONY.trueLow, SONY.falseHigh, SONY.falseLow);
            betweenTime = input.runningTimeMicros() - startTime
            if (times > 0)
                control.waitMicros(SONY.interval - betweenTime);
        }
    }

    export function sendMessage(message: number, times: number, myType: encodingType): void {
        switch (myType) {
            case encodingType.NEC: sendNEC(message, times);
            case encodingType.SONY: sendSONY(message, times);
            default: sendNEC(message, times);
        }
    }

    function convertHexStrToNum(myMsg: string): number {
        let myNum = 0
        for (let i = 0; i < myMsg.length; i++) {
            if ((myMsg.charCodeAt(i) > 47) && (myMsg.charCodeAt(i) < 58)) {
                myNum += (myMsg.charCodeAt(i) - 48) * (16 ** (myMsg.length - 1 - i))
            } else if ((myMsg.charCodeAt(i) > 96) && (myMsg.charCodeAt(i) < 103)) {
                myNum += (myMsg.charCodeAt(i) - 87) * (16 ** (myMsg.length - 1 - i))
            } else if ((myMsg.charCodeAt(i) > 64) && (myMsg.charCodeAt(i) < 71)) {
                myNum += (myMsg.charCodeAt(i) - 55) * (16 ** (myMsg.length - 1 - i))
            } else {
                myNum = 0
                break
            }
        }
        return myNum
    }

    //------------------receiver-------------

    function resetReceiver() {
        arr = []
        received = false
    }

    control.inBackground(function () {
        basic.forever(function () {
            if ((!received) && (rec_init)) {
                if (arr.length > 20) {
                    if ((input.runningTimeMicros() - arr[arr.length - 1]) > 120000) {
                        if (first) {
                            resetReceiver()
                            first = false
                        } else {
                            received = true
                            decodeIR();
                        }
                    }
                }
            }
        })
    })

    function decodeIR() {
        let addr = 0
        let command = 0
        messageStr = ""
        rec_Type = ""
        for (let i = 0; i <= arr.length - 1 - 1; i++) {
            arr[i] = arr[i + 1] - arr[i]
        }
        if (((arr[0] + arr[1]) > 13000) && ((arr[0] + arr[1]) < 14000)) {
            rec_Type = "NEC"
            arr.removeAt(1)
            arr.removeAt(0)
            addr = pulseToDigit(0, 15, 1600)
            command = pulseToDigit(16, 31, 1600)
            messageStr = convertNumToHexStr(addr, 4) + convertNumToHexStr(command, 4)
            arr = [];
            if (thereIsHandler) {
                tempHandler();
            }
        } else if (((arr[0] + arr[1]) > 2600) && ((arr[0] + arr[1]) < 3200)) {
            rec_Type = "SONY"
            arr.removeAt(1)
            arr.removeAt(0)
            command = pulseToDigit(0, 11, 1300)
            messageStr = convertNumToHexStr(command, 3)
            arr = [];
            if (thereIsHandler) {
                tempHandler();
            }
        }
        resetReceiver();
    }

    function pulseToDigit(beginBit: number, endBit: number, duration: number): number {
        let myNum = 0
        for (let i = beginBit; i <= endBit; i++) {
            myNum <<= 1
            if ((arr[i * 2] + arr[i * 2 + 1]) < duration) {
                myNum += 0
            } else {
                myNum += 1
            }
        }
        return myNum
    }

    function convertNumToHexStr(myNum: number, digits: number): string {
        let tempDiv = 0
        let tempMod = 0
        let myStr = ""
        tempDiv = myNum
        while (tempDiv > 0) {
            tempMod = tempDiv % 16
            if (tempMod > 9) {
                myStr = String.fromCharCode(tempMod - 10 + 97) + myStr
            } else {
                myStr = tempMod + myStr
            }
            tempDiv = Math.idiv(tempDiv, 16)
        }
        while (myStr.length != digits) {
            myStr = "0" + myStr
        }
        return myStr
    }

    /**
     * Do something when a receive IR
     */
    //% blockId=onReceivedIR block="on IR message received" blockInlineInputs=true  group="红外接收"
	//% weight=70 blockGap=10
	//% subcategory="执行器"
    export function onReceivedIR(handler: Action): void {
        tempHandler = handler
        thereIsHandler = true
    }

    /**
     * return the encoding type of the received IR 
     */
    //% blockId=getRecType block="the received IR encoding type"  group="红外接收"
	//% weight=60 blockGap=10
	//% subcategory="执行器"
    export function getRecType(): string {
        return rec_Type
    }

    /**
     * return the message of the received IR 
     */
    //% blockId=getMessage block="the received IR message"  group="红外接收"
	//% weight=60 blockGap=10
	//% subcategory="执行器"
    export function getMessage(): string {
        return messageStr
    }
	
	 /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=Sensors::onPressEvent group="红外接收"
    //% subcategory="执行器"
    export function OnPressEvent(btn: RemoteButton, body: () => void): void {
        return;
    }

    /**
     * initialises local variablesssss
     *  @param pin describe parameter here, eg: IrPins.P5  
     */
    //% blockId=ir_init 
    //% block="connect ir receiver to %pin" shim=Sensors::init group="红外接收"
    //% subcategory="执行器"
    export function Init(pin: IrPins): void {
        return;
    }


	/**
	 * 触摸键盘
	 */

    let _SDO=0
    let _SCL=0

    //% blockId=actuator_keyborad_pin block="actuator_keyborad_pin|SDOPIN %SDO|SCLPIN %SCL"   group="触摸键盘"
	//% weight=71
	//% subcategory="执行器"
    export function actuator_keyborad_pin(SDO: DigitalPin, SCL: DigitalPin): void {
        
        _SDO=SDO
        _SCL=SCL
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

          for (let i = 0; i < 16; i++)
          {
               pins.digitalWritePin(_SCL, 1)
               pins.digitalWritePin(_SCL, 0)
               DATA |= pins.digitalReadPin(_SDO) << i
          }
          control.waitMicros(2 * 1000)
          switch (DATA&0xFFFF)
          {     
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

	//========================================华丽的分割线  显示器模块=============================================
	
	/**
     * LED
     */
    
    //% blockId=setled block="set led ：%lpin|status %lstatus"   group="LED灯"
	//% weight=70
	//% subcategory="显示器"
    export function setled(lpin: DigitalPin, lstatus: ledon_off): void {
        pins.digitalWritePin(lpin, lstatus)
    }

	/*
	 * RGB light
	 */
 
    
    let _Rpins = 0
    let _Gpins = 0
    let _Bpins = 0

    //% blockId=setrgbpin block="set RGBlight pin|g %_GPin|b %_BPin|r %_RPin"   group="三色灯"
	//% weight=70
	//% subcategory="显示器"
    export function setRGBpin(_GPin: DigitalPin, _BPin: DigitalPin, _RPin: DigitalPin): void {
        _Gpins= _GPin
		_Bpins = _BPin
		_Rpins= _RPin
    }

	//% blockId=yledon block="set color pin  %selectpin|light %_status"   group="三色灯"
	//% weight=70
	//% subcategory="显示器"
    export function selectcolor(selectpin: _selectcolor, _status: ledon_off): void {
        let a;
        if (selectpin == 0)
            a = _Bpins
        else if (selectpin == 1){ 
            a = _Rpins
        }
        else if (selectpin == 2) {
            a = _Gpins
        }
        pins.digitalWritePin(a, _status)
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
        gpins= GPin
		ypins = YPin
		rpins= RPin
    }
	
	//% blockId=selectlight block="set light pin  %selectpin|light %_status"   group="交通灯"
	//% weight=70
	//% subcategory="显示器"
    export function selectlight(selectpin: _selectlight, _status: ledon_off): void {
        let a;
        if (selectpin == 0)
            a = ypins
        else if (selectpin == 1){ 
            a = rpins 
        }
        else if (selectpin == 2) {
            a = gpins
        }
        pins.digitalWritePin(a, _status)
    }

	/**
	 *  LCD 1602
	 */	
		
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
    export function i2cLcdShowChar( y: number, x: number, ch: string): void {
        let a: number

        if (y > 0)
            a = 0xC0
        else
            a = 0x80
        a += x
        lcdcmd(a)
        lcddat(ch.charCodeAt(0))
    }

	//% block="showNumber $n|col $x|row $y"   group="LCD1602显示屏"  
	//% subcategory="显示器"
	//% weight=68
    export function i2cLcdShowNumber(y: number, x: number,  n: number): void {
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
    export function i2cLcdShowString(y: number, x: number,  s: string): void {
        let a: number

        if (y > 0)
            a = 0xC0
        else
            a = 0x80
        a += x
        lcdcmd(a)

        for (let i = 0; i < s.length; i++) {
            lcddat(s.charCodeAt(i))
        }
    }

	//% block="lcdon"   group="LCD1602显示屏"  
	//% subcategory="显示器"
	//% weight=66
    export function i2cLcdOn(): void {
        lcdcmd(0x0C)
    }

	//% block="lcdoff"   group="LCD1602显示屏"  
	//% subcategory="显示器"
	//% weight=65
    export function i2cLcdOff(): void {
        lcdcmd(0x08)
    }

	//% block="lcdclear"   group="LCD1602显示屏"  
	//% subcategory="显示器"
	//% weight=64
    export function i2cLcdClear(): void {
        lcdcmd(0x01)
    }

	//% block="lcdlighton"   group="LCD1602显示屏"  
	//% subcategory="显示器"
	//% weight=63
    export function i2cLcdBacklightOn(): void {
        BK = 8
        lcdcmd(0)
    }

	//% block="lcdlightoff"   group="LCD1602显示屏"  
	//% subcategory="显示器"
	//% weight=62
    export function i2cLcdBacklightOff(): void {
        BK = 0
        lcdcmd(0)
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
				let show = _status==1?true:false;
                if (show) this._dat(bit, this.buf[bit] | 0x80)
                else this._dat(bit, this.buf[bit] & 0x7F)
            }
    
            /**
             * clear LED. 
             */
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
    
            /**
             * turn on LED. 
             */
            //% blockId="TM1637_on" block="turn on %tm"  group="TM1637数码管"
            //% weight=86 blockGap=8
			//% parts="TM1637"
			//% subcategory="显示器"
            on() {
                this._ON = 8
                this._write_data_cmd()
                this._write_dsp_ctrl()
            }
    
            /**
             * turn off LED. 
             */
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
    
        /**
         * create a TM1637 object.
         * @param clk the CLK pin for TM1637, eg: DigitalPin.P1
         * @param dio the DIO pin for TM1637, eg: DigitalPin.P2
         * @param intensity the brightness of the LED, eg: 7
         * @param count the count of the LED, eg: 4
         */
        //% weight=99 blockGap=8
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


		/**
         * TM1650
         */
        let COMMAND_I2C_ADDRESS = 0x24
        let DISPLAY_I2C_ADDRESS = 0x34
        let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71] 
    
        let _intensity = 3
        let dbuf = [0, 0, 0, 0]
    
        /**
         * send command to display
         * @param is command, eg: 0
         */
        function cmd(c: number) {
            pins.i2cWriteNumber(COMMAND_I2C_ADDRESS, c, NumberFormat.Int8BE)
        }
    
        /**
         * send data to display
         * @param is data, eg: 0
         */
        function dat(bit: number, d: number) {
            pins.i2cWriteNumber(DISPLAY_I2C_ADDRESS + (bit % 4), d, NumberFormat.Int8BE)
        }
    
        /**
         * turn on display
         */
        //% blockId="TM650_ON" block="turn on display" group="TM1650数码管"
		//% weight=50 blockGap=8
		//% subcategory="显示器"
        export function on() {
            cmd(_intensity * 16 + 1)
        }
    
        /**
         * turn off display
         */
        //% blockId="TM650_OFF" block="turn off display" group="TM1650数码管"
		//% weight=50 blockGap=8
		//% subcategory="显示器"
        export function off() {
            _intensity = 0
            cmd(0)
        }
    
        /**
         * clear display content
         */
        //% blockId="TM650_CLEAR" block="clear display" group="TM1650数码管"
		//% weight=40 blockGap=8
		//% subcategory="显示器"
        export function clear() {
            dat(0, 0)
            dat(1, 0)
            dat(2, 0)
            dat(3, 0)
            dbuf = [0, 0, 0, 0]
        }
    
        /**
         * show a digital in given position
         * @param digit is number (0-15) will be shown, eg: 1
         * @param bit is position, eg: 0
         */
        //% blockId="TM650_DIGIT" block="show digit %num|at %bit"  group="TM1650数码管"
        //% weight=80 blockGap=8
		//% num.max=15 num.min=0
		//% subcategory="显示器"
		//% bit.max=3 bit.min=0
        export function digit(bit: number, num: number) {
            dbuf[bit % 4] = _SEG[num % 16]
            dat(bit, _SEG[num % 16])
        }
    
        /**
         * show a number in display
         * @param num is number will be shown, eg: 100
         */
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
    
        /**
         * show a number in hex format
         * @param num is number will be shown, eg: 123
         */
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
    
        /**
         * show Dot Point in given position
         * @param bit is positiion, eg: 0
         * @param show is true/false, eg: true
         */
        //% blockId="TM650_SHOW_DP" block="show dot point %bit|show %num" group="TM1650数码管"
		//% weight=80 blockGap=8
		//% subcategory="显示器"
		//% bit.max=3 bit.min=0
        export function showDpAt(status: ledon_off, bit: number) {
			let show = status==1?true:false;
            if (show) dat(bit, dbuf[bit % 4] | 0x80)
            else dat(bit, dbuf[bit % 4] & 0x7F)
        }
    
        /**
         * set display intensity
         * @param dat is intensity of the display, eg: 3
         */
        //% blockId="TM650_INTENSITY" block="set intensity %dat" group="TM1650数码管"
		//% weight=70 blockGap=8
		//% subcategory="显示器"
		//% dat.max=7 dat.min=0
        export function setIntensity(dat: number) {
            if ((dat < 0) || (dat > 8))
                return 
            if (dat == 0)
                off()
            else {
                _intensity = dat
                cmd((dat << 4) | 0x01)
            }
        }


		/**
     * MAX7219  
     */
	const _NOOP = 0 // no-op (do nothing, doesn't change current status)
	const _DIGIT = [1, 2, 3, 4, 5, 6, 7, 8] // digit (LED column)
	const _DECODEMODE = 9 // decode mode (1=on, 0-off  for 7-segment display on MAX7219, no usage here)
	const _INTENSITY = 10 // intensity (LED brightness level, 0-15)
	const _SCANLIMIT = 11 // scan limit (number of scanned digits)
	const _SHUTDOWN = 12 // turn on (1) or off (0)
	const _DISPLAYTEST = 15 // force all LEDs light up, no usage here

	let _pinCS = DigitalPin.P16 // LOAD pin, 0=ready to receive command, 1=command take effect
	let _matrixNum = 1 // number of MAX7219 matrix linked in the chain
	let _displayArray: number[] = [] // display array to show accross all matrixs
	let _rotation = 0 // rotate matrixs display for 4-in-1 modules
	let _reversed = false // reverse matrixs display order for 4-in-1 modules
	
	/**
    * Setup/reset MAX7219s. If you are using 4-in-1 module you'll need to set rotation as true. If your chain are consisted of single modules set it as false (default).
    */
    //% block="Setup MAX7219:|Number of matrixs $num|CS(LOAD) = $cs|MOSI(DIN) = $mosi|MISO(not used) = $miso|SCK(CLK) = $sck"
    //% num.min=1 num.defl=1 cs.defl=DigitalPin.P16 mosi.defl=DigitalPin.P15 sck.defl=DigitalPin.P13 rotate.defl=false group="8X8点阵屏"
    //% subcategory="显示器"
	export function setup(num: number, cs: DigitalPin,  miso: DigitalPin, sck: DigitalPin) {
        // set internal variables        
        _pinCS = cs
        _matrixNum = num
        // prepare display array (for displaying texts  add extra 8 columns at each side as buffers)
        for (let i = 0; i < (num + 2) * 8; i++)  _displayArray.push(0)
		// set micro:bit SPI
		let mosi = DigitalPin.P14
        pins.spiPins(mosi, miso, sck)
        pins.spiFormat(8, 3)
        pins.spiFrequency(1000000)
        // initialize MAX7219s
        _registerAll(_SHUTDOWN, 0) // turn off
        _registerAll(_DISPLAYTEST, 0) // test mode off
        _registerAll(_DECODEMODE, 0) // decode mode off
        _registerAll(_SCANLIMIT, 7) // set scan limit to 7 (column 0-7)
        _registerAll(_INTENSITY, 15) // set brightness to 15
        _registerAll(_SHUTDOWN, 1) // turn on
        clearAll() // clear screen on all MAX7219s
    }

    /**
    * Rotation/reverse order options for 4-in-1 MAX7219 modules
    */
    //% block="Rotate matrix display $rotation|Reverse printing order $reversed" rotation.defl=rotation_direction.none group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
	export function for_4_in_1_modules(rotation: rotation_direction, reversed: boolean) {
        _rotation = rotation
        _reversed = reversed
    }

    /**
    * (internal function) write command and data to all MAX7219s
    */
    function _registerAll(addressCode: number, data: number) {
        pins.digitalWritePin(_pinCS, 0) // LOAD=LOW, start to receive commands
        for (let i = 0; i < _matrixNum; i++) {
            // when a MAX7219 received a new command/data set
            // the previous one would be pushed to the next matrix along the chain via DOUT
            pins.spiWrite(addressCode) // command (8 bits)
            pins.spiWrite(data) //data (8 bits)
        }
        pins.digitalWritePin(_pinCS, 1) // LOAD=HIGH, commands take effect
    }

    /**
    * (internal function) write command and data to a specific MAX7219 (index 0=farthest on the chain)
    */
    function _registerForOne(addressCode: number, data: number, matrixIndex: number) {
        if (matrixIndex <= _matrixNum - 1) {
            pins.digitalWritePin(_pinCS, 0) // LOAD=LOW, start to receive commands
            for (let i = 0; i < _matrixNum; i++) {
                // when a MAX7219 received a new command/data set
                // the previous one would be pushed to the next matrix along the chain via DOUT
                if (i == matrixIndex) { // send change to target
                    pins.spiWrite(addressCode) // command (8 bits)
                    pins.spiWrite(data) //data (8 bits)
                } else { // do nothing to non-targets
                    pins.spiWrite(_NOOP)
                    pins.spiWrite(0)
                }
            }
            pins.digitalWritePin(_pinCS, 1) // LOAD=HIGH, commands take effect
        }
    }

    /**
    * (internal function) rotate matrix
    */
    function _rotateMatrix(matrix: number[][]): number[][] {
        let tmp = 0
        for (let i = 0; i < 4; i++) {
            for (let j = i; j < 7 - i; j++) {
                tmp = matrix[i][j]
                if (_rotation == rotation_direction.clockwise) { // clockwise
                    matrix[i][j] = matrix[j][7 - i]
                    matrix[j][7 - i] = matrix[7 - i][7 - j]
                    matrix[7 - i][7 - j] = matrix[7 - j][i]
                    matrix[7 - j][i] = tmp
                } else if (_rotation == rotation_direction.counterclockwise) { // counter-clockwise
                    matrix[i][j] = matrix[7 - j][i]
                    matrix[7 - j][i] = matrix[7 - i][7 - j]
                    matrix[7 - i][7 - j] = matrix[j][7 - i]
                    matrix[j][7 - i] = tmp
                } else if (_rotation == rotation_direction.one_eighty_degree) { // 180 degree
                    matrix[i][j] = matrix[7 - i][7 - j]
                    matrix[7 - i][7 - j] = tmp
                    tmp = matrix[7 - j][i]
                    matrix[7 - j][i] = matrix[j][7 - i]
                    matrix[j][7 - i] = tmp
                }
            }
        }
        return matrix
    }

    /**
    * (internal function) get 8x8 matrix from a column array
    */
    function _getMatrixFromColumns(columns: number[]): number[][] {
        let matrix: number[][] = getEmptyMatrix()
        for (let i = 0 ; i < 8 ; i++) {
            for (let j = 7; j >= 0;j--) {
                if (columns[i] >= 2 ** j) {
                    columns[i] -= 2 ** j
                    matrix[i][j] = 1
                } else if (columns[i] == 0) {
                    break
                }
            }
        }
        return matrix
    }

    /**
    * Scroll a text accross all MAX7219 matrixs for once
    */
    //% block="Scroll text $text|delay (ms) $delay|at the end wait (ms) $endDelay" text.defl="Hello world!" delay.min=0 delay.defl=75 endDelay.min=0 endDelay.defl=500 group="8X8点阵屏" 
	//% subcategory="显示器"
	export function scrollText(text: string, delay: number, endDelay: number) {
        let printPosition = _displayArray.length - 8
        let characters_index: number[] = []
        let currentChrIndex = 0
        let currentFontArray: number[] = []
        let nextChrCountdown = 1
        let chrCountdown: number[] = []
        let totalScrollTime = 0
        // clear screen and array
        for (let i = 0; i < _displayArray.length;  i++) _displayArray[i] = 0
        clearAll()
        // get font index of every characters and total scroll time needed
        for (let i = 0; i < text.length; i++) {
            let index = font.indexOf(text.substr(i, 1))
            if (index >= 0) {
                characters_index.push(index)
                chrCountdown.push(font_matrix[index].length)
                totalScrollTime += font_matrix[index].length
            }
        }
        totalScrollTime += _matrixNum * 8
        // print characters into array and scroll the array
        for (let i = 0; i < totalScrollTime; i++) {
            nextChrCountdown -= 1
            if (currentChrIndex < characters_index.length && nextChrCountdown == 0) {
                // print a character just "outside" visible area
                currentFontArray = font_matrix[characters_index[currentChrIndex]]
                if (currentFontArray != null)
                    for (let j = 0; j < currentFontArray.length; j++)
                        _displayArray[printPosition + j] = currentFontArray[j]
                // wait until current character scrolled into visible area
                nextChrCountdown = chrCountdown[currentChrIndex]
                currentChrIndex += 1
            }
            // scroll array (copy all columns to the one before it)
            for (let j = 0; j < _displayArray.length - 1;  j++) {
                _displayArray[j] = _displayArray[j + 1]
            }
            _displayArray[_displayArray.length - 1] = 0
            // write every 8 columns of display array (visible area) to each MAX7219s
            let matrixCountdown = _matrixNum - 1
            let actualMatrixIndex = 0
            for (let j = 8; j < _displayArray.length - 8; j += 8) {
                if (matrixCountdown < 0) break
                if (!_reversed) actualMatrixIndex = matrixCountdown
                else actualMatrixIndex = _matrixNum - 1 - matrixCountdown
                if (_rotation == rotation_direction.none) {
                    for (let k = j; k < j + 8; k++)
                        _registerForOne(_DIGIT[k - j], _displayArray[k], actualMatrixIndex)
                } else { // rotate matrix if needed
                    let tmpColumns = [0, 0, 0, 0, 0, 0, 0, 0]
                    let l = 0
                    for (let k = j; k <j + 8; k++) tmpColumns[l++] = _displayArray[k]
                    displayLEDsForOne(_getMatrixFromColumns(tmpColumns), actualMatrixIndex)
                }
                matrixCountdown--
            }
            basic.pause(delay)
        }
        basic.pause(endDelay)
    }

    /**
    * Print a text accross the chain of MAX7219 matrixs at a specific spot. Offset value -8 ~ last column of matrixs. You can choose to clear the screen or not (if not it can be used to print multiple string on the MAX7219 chain).
    */
    //% block="Display text $text|offset $offset|clear screen first $clear" text.defl="Hi!" offset.min=-8 clear.defl=true group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
	export function displayText(text: string, offset: number, clear: boolean) {
        // clear screen and array if needed
        if (clear) {
            for (let i = 0; i < _displayArray.length; i++) _displayArray[i] = 0
            clearAll()
        }
        let printPosition = Math.constrain(offset, -8, _displayArray.length - 9) + 8
        let currentPosition = printPosition
        let characters_index: number[] = []
        let currentChrIndex = 0
        let currentFontArray: number[] = []
        // get font index of every characters
        for (let i = 0; i < text.length; i++) {
            let index = font.indexOf(text.substr(i, 1))
            if (index >= 0) characters_index.push(index)
        }
        // print characters into array from offset position
        while (currentPosition < _displayArray.length - 8) {
            currentFontArray = font_matrix[characters_index[currentChrIndex]]
            if (currentFontArray != null)
                for (let j = 0; j < currentFontArray.length; j++)
                    _displayArray[printPosition++] = currentFontArray[j]
            currentChrIndex += 1
            if (currentChrIndex == characters_index.length) break
        }
        // write every 8 columns of display array (visible area) to each MAX7219s
        let matrixCountdown = _matrixNum - 1
        let actualMatrixIndex = 0
        for (let i = 8; i < _displayArray.length - 8; i += 8) {
            if (matrixCountdown < 0) break
            if (!_reversed) actualMatrixIndex = matrixCountdown
            else actualMatrixIndex = _matrixNum - 1 - matrixCountdown
            if (_rotation == rotation_direction.none) {
                for (let j = i ; j < i + 8 ; j++)
                    _registerForOne(_DIGIT[j - i], _displayArray[j], actualMatrixIndex)
            } else { // rotate matrix and reverse order if needed
                let tmpColumns = [0, 0, 0, 0, 0, 0, 0, 0]
                let l = 0
                for (let j = i ; j < i + 8 ; j++)  tmpColumns[l++] = _displayArray[j]
                displayLEDsForOne(_getMatrixFromColumns(tmpColumns), actualMatrixIndex)
            }
            matrixCountdown--
        }
    }

    /**
    * Print a custom character from a number array on the chain of MAX7219 matrixs at a specific spot. Each number in the array is 0-255, the decimal version of column's byte number. Offset value -8 ~ last column of matrixs. You can choose to clear the screen or not (if not it can be used to print multiple string on the MAX7219 chain).
    */
    //% block="Display custom character from|number array $customCharArray|offset $offset|clear screen first $clear" offset.min=-8 clear.defl=true group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
	export function displayCustomCharacter(customCharArray: number[], offset: number, clear: boolean) {
        // clear screen and array if needed
        if (clear) {
            for (let i = 0; i < _displayArray.length;i++) _displayArray[i] = 0
            clearAll()
        }
        let printPosition: number = Math.constrain(offset, -8, _displayArray.length - 9) + 8
        if (customCharArray != null) {
            // print column data to display array
            for (let i = 0; i < customCharArray.length; i++)
                _displayArray[printPosition + i] = customCharArray[i]
            // write every 8 columns of display array (visible area) to each MAX7219s
            let matrixCountdown = _matrixNum - 1
            let actualMatrixIndex = 0
            for (let i = 8; i < _displayArray.length - 8; i += 8) {
                if (matrixCountdown < 0) break
                if (!_reversed) actualMatrixIndex = matrixCountdown
                else actualMatrixIndex = _matrixNum - 1 - matrixCountdown
                if (_rotation == rotation_direction.none) {
                    for (let j = i ; j < i + 8 ; j++)
                        _registerForOne(_DIGIT[j - i], _displayArray[j], actualMatrixIndex)
                } else { // rotate matrix and reverse order if needed
                    let tmpColumns = [0, 0, 0, 0, 0, 0, 0, 0]
                    let l = 0
                    for (let j = i ; j < i + 8 ; j++) tmpColumns[l++] = _displayArray[j]
                    displayLEDsForOne(_getMatrixFromColumns(tmpColumns), actualMatrixIndex)
                }
                matrixCountdown--
            }
        }
    }

    /**
    * Return a number array calculated from a 8x8 LED byte array (example: B00100000,B01000000,B10000110,B10000000,B10000000,B10000110,B01000000,B00100000)
    */
    //% block="Get custom character number array|from byte-array string $text" text.defl="B00100000,B01000000,B10000110,B10000000,B10000000,B10000110,B01000000,B00100000" group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
	export function getCustomCharacterArray(text: string) {
        let tempTextArray: string[] = []
        let resultNumberArray: number[] = []
        let currentIndex = 0
        let currentChr = ""
        let currentNum = 0
        let columnNum = 0
        if (text != null && text.length >= 0) {
            // seperate each byte number to a string
            while (currentIndex < text.length) {
                tempTextArray.push(text.substr(currentIndex + 1, 8))
                currentIndex += 10
            }
            for (let i = 0; i < tempTextArray.length; i++) {
                columnNum = 0
                // read each bit and calculate the decimal sum
                for (let j = tempTextArray[i].length - 1; j >= 0; j--) {
                    currentChr = tempTextArray[i].substr(j, 1)
                    if (currentChr == "1" || currentChr == "0")
                        currentNum = parseInt(currentChr)
                    else
                        currentNum = 0
                    columnNum += (2 ** (tempTextArray[i].length - j - 1)) * currentNum
                }
                // generate new decimal array
                resultNumberArray.push(columnNum)
            }
            return resultNumberArray
        } else {
            return null
        }
    }

    /**
    * Add a custom character from a number array at the end of the extension's font library.
    * Each number in the array is 0-255, the decimal version of column's byte number.
    */
    //% block="Add custom character $chr|number array $customCharArray|to the extension font library"
    //% chr.defl=""
    //% 
    //% group="8X8点阵屏"
	//% advanced=true
	//% subcategory="显示器"
    export function addCustomChr(chr: string, customCharArray: number[]) {
        if (chr != null && chr.length == 1 && customCharArray != null) {
            // add new character
            font.push(chr)
            font_matrix.push(customCharArray)
        }
    }

    /**
    * Display all fonts in the extension font library
    */
    //% block="Display all fonts at delay $delay" delay.min=0 delay.defl=200 group="8X8点阵屏" advanced=true
    export function fontDemo(delay: number) {
        let offsetIndex = 0
        clearAll()
        // print all characters on all matrixs
        for (let i = 1; i < font_matrix.length; i++) {
            // print two blank spaces to "reset" a matrix
            displayCustomCharacter(font_matrix[0], offsetIndex * 8, false)
            displayCustomCharacter(font_matrix[0], offsetIndex * 8 + 4, false)
            // print a character
            displayCustomCharacter(font_matrix[i], offsetIndex * 8, false)
            if (offsetIndex == _matrixNum - 1) offsetIndex = 0
            else offsetIndex += 1
            basic.pause(delay)
        }
        basic.pause(delay)
        clearAll()
    }

    /**
    * Turn on or off all MAX7219s
    */
	//% block="Turn on all matrixs $status" status.defl=true group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function togglePower(status: boolean) {
        if (status) _registerAll(_SHUTDOWN, 1)
        else _registerAll(_SHUTDOWN, 0)
    }

    /**
    * Set brightness level of LEDs on all MAX7219s
    */
	//% block="Set all brightness level $level" level.min=0 level.max=15 level.defl=15 group="8X8点阵屏"
	//% subcategory="显示器"
    export function brightnessAll(level: number) {
        _registerAll(_INTENSITY, level)
    }

    /**
    * Set brightness level of LEDs on a specific MAX7219s (index 0=farthest on the chain)
    */
    //% block="Set brightness level $level on matrix index = $index" level.min=0 level.max=15 level.defl=15 index.min=0 group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
	export function brightnessForOne(level: number, index: number) {
        _registerForOne(_INTENSITY, level, index)
    }

    /**
    * Turn on all LEDs on all MAX7219s
    */
	//% block="Fill all LEDs" group="8X8点阵屏"
	//% subcategory="显示器"
    export function fillAll() {
        for (let i = 0; i < 8; i++) _registerAll(_DIGIT[i], 255)
    }

    /**
    * Turn on LEDs on a specific MAX7219
    */
	//% block="Fill LEDs on matrix index = $index" index.min=0 group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function fillForOne(index: number) {
        for (let i = 0; i < 8; i++) _registerForOne(_DIGIT[i], 255, index)
    }

    /**
    * Turn off LEDs on all MAX7219s
    */
	//% block="Clear all LEDs" group="8X8点阵屏"
	//% subcategory="显示器"
    export function clearAll() {
        for (let i = 0 ; i < 8 ; i++) _registerAll(_DIGIT[i], 0)
    }

    /**
    * Turn off LEDs on a specific MAX7219 (index 0=farthest on the chain)
    */
	//% block="Clear LEDs on matrix index = $index" index.min=0 group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function clearForOne(index: number) {
        for (let i = 0 ; i < 8 ; i++) _registerForOne(_DIGIT[i], 0, index)
    }

    /**
    * Turn on LEDs randomly on all MAX7219s
    */
	//% block="Randomize all LEDs" index.min=0 group="8X8点阵屏"
	//% subcategory="显示器"
    export function randomizeAll() {
        for (let i = 0 ; i < 8 ; i++) _registerAll(_DIGIT[i], Math.randomRange(0, 255))
    }

    /**
    * Turn on LEDs randomly on a specific MAX7219 (index 0=farthest on the chain)
    */
	//% block="Randomize LEDs on matrix index = $index" index.min=0 group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function randomizeForOne(index: number) {
        for (let i = 0 ; i < 8 ; i++) _registerForOne(_DIGIT[i], Math.randomRange(0, 255), index)
    }

    /**
    * Set LEDs of all MAX7219s to a pattern from a 8x8 matrix variable (index 0=farthest on the chain)
    */
	//% block="Display 8x8 pattern $newMatrix on all matrixs" group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function displayLEDsToAll(newMatrix: number[][]) {
        let columnValue = 0
        if (newMatrix != null) {
            if (_rotation != rotation_direction.none) newMatrix = _rotateMatrix(newMatrix) // rotate matrix if needed
            for (let i = 0 ; i < 8 ; i++) {
                if (newMatrix[i] != null) {
                    columnValue = 0
                    for (let j = 0 ; j < 8 ; j++) {
                        if (newMatrix[i][j]) {
                            // combine row 0-7 status into a byte number (0-255)
                            columnValue += 2 ** j
                        }
                    }
                    _registerAll(_DIGIT[i], columnValue)
                }
            }
        }
    }

    /**
    * Set LEDs of a specific MAX7219s to a pattern from a 8x8 number matrix variable (index 0=farthest on the chain)
    */
	//% block="Display 8x8 pattern $newMatrix|on matrix index = $index" index.min=0  group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function displayLEDsForOne(newMatrix: number[][], index: number) {
        let columnValue = 0
        if (newMatrix != null) {
            if (_rotation != rotation_direction.none) newMatrix = _rotateMatrix(newMatrix) // rotate matrix if needed
            for (let i = 0 ; i < 8 ; i++) {
                if (newMatrix[i] != null) {
                    columnValue = 0
                    for (let j = 0 ; j < 8 ; j++) {
                        if (newMatrix[i][j]) {
                            // combine row 0-7 status into a byte number (0-255)
                            columnValue += 2 ** j
                        }
                    }
                    _registerForOne(_DIGIT[i], columnValue, index)
                }
            }
        }
    }

    /**
    * Return a empty 8x8 number matrix variable
    */
	//% block="Empty 8x8 pattern" group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function getEmptyMatrix() {
        return [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    }

    /**
    * Return a full 8x8 number matrix variable
    */
	//% block="Full 8x8 pattern" group="8X8点阵屏" advanced=true
	//% subcategory="显示器"
    export function getFullMatrix() {
        return [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]
    }

    /**
    * Return a specific value from a 8x8 number matrix variable
    */
	//% block="Get value from 8x8 pattern %matrix|x = $x y = $y" x.min=0 x.max=7 y.min=0 y.max=7 group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
    export function getValueFromMatrix(matrix: number[][], x: number, y: number) {
        return matrix[x][y]
    }

    /**
    * Set a specific value in a 8x8 number matrix variable
    */
    //% block="Set 8x8 pattern %matrix|x = $x y = $y value to $value" value.min=0 value.max=1 x.min=0 x.max=7 y.min=0 y.max=7 group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
	export function setValueInMatrix(matrix: number[][], x: number, y: number, value: number) {
        matrix[x][y] = value
    }

    /**
    * Toggle (between 0/1) a specific value in a 8x8 number matrix variable
    */
	//% block="Toogle value in 8x8 pattern %matrix|x = $x y = $y" x.min=0 x.max=7 y.min=0 y.max=7 group="8X8点阵屏"  advanced=true
	//% subcategory="显示器"
    export function toogleValueInMatrix(matrix: number[][], x: number, y: number) {
        if (matrix[x][y] == 1) matrix[x][y] = 0
        else if (matrix[x][y] == 0) matrix[x][y] = 1
    }


    let font = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")",
        "*", "+", ",", "-", ".", "/",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        ":", " ", "<", "=", ">", "?", "@",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "[", "\\", "]", "_", "`",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "{", "|", "}", "~", "^"]

    let font_matrix = [
        [0b00000000,
            0b00000000,
            0b00000000,
            0b00000000],
        [0b01011111,
            0b00000000],
        [0b00000011,
            0b00000000,
            0b00000011,
            0b00000000],
        [0b00010100,
            0b00111110,
            0b00010100,
            0b00111110,
            0b00010100,
            0b00000000],
        [0b00100100,
            0b01101010,
            0b00101011,
            0b00010010,
            0b00000000],
        [0b01100011,
            0b00010011,
            0b00001000,
            0b01100100,
            0b01100011,
            0b00000000],
        [0b00110110,
            0b01001001,
            0b01010110,
            0b00100000,
            0b01010000,
            0b00000000],
        [0b00000011,
            0b00000000],
        [0b00011100,
            0b00100010,
            0b01000001,
            0b00000000],
        [0b01000001,
            0b00100010,
            0b00011100,
            0b00000000],
        [0b00101000,
            0b00011000,
            0b00001110,
            0b00011000,
            0b00101000,
            0b00000000],
        [0b00001000,
            0b00001000,
            0b00111110,
            0b00001000,
            0b00001000,
            0b00000000],
        [0b10110000,
            0b01110000,
            0b00000000],
        [0b00001000,
            0b00001000,
            0b00001000],
        [0b01100000,
            0b01100000,
            0b00000000],
        [0b01100000,
            0b00011000,
            0b00000110,
            0b00000001,
            0b00000000],
        [0b00111110,
            0b01000001,
            0b01000001,
            0b00111110,
            0b00000000],
        [0b01000010,
            0b01111111,
            0b01000000,
            0b00000000],
        [0b01100010,
            0b01010001,
            0b01001001,
            0b01000110,
            0b00000000],
        [0b00100010,
            0b01000001,
            0b01001001,
            0b00110110,
            0b00000000],
        [0b00011000,
            0b00010100,
            0b00010010,
            0b01111111,
            0b00000000],
        [0b00100111,
            0b01000101,
            0b01000101,
            0b00111001,
            0b00000000],
        [0b00111110,
            0b01001001,
            0b01001001,
            0b00110000,
            0b00000000],
        [0b01100001,
            0b00010001,
            0b00001001,
            0b00000111,
            0b00000000],
        [0b00110110,
            0b01001001,
            0b01001001,
            0b00110110,
            0b00000000],
        [0b00000110,
            0b01001001,
            0b01001001,
            0b00111110,
            0b00000000],
        [0b00010100,
            0b00000000],
        [0b00100000,
            0b00010100,
            0b00000000],
        [0b00001000,
            0b00010100,
            0b00100010,
            0b00000000],
        [0b00010100,
            0b00010100,
            0b00010100,
            0b00000000],
        [0b00100010,
            0b00010100,
            0b00001000,
            0b00000000],
        [0b00000010,
            0b01011001,
            0b00001001,
            0b00000110,
            0b00000000],
        [0b00111110,
            0b01001001,
            0b01010101,
            0b01011101,
            0b00001110,
            0b00000000],
        [0b01111110,
            0b00010001,
            0b00010001,
            0b01111110,
            0b00000000],
        [0b01111111,
            0b01001001,
            0b01001001,
            0b00110110,
            0b00000000],
        [0b00111110,
            0b01000001,
            0b01000001,
            0b00100010,
            0b00000000],
        [0b01111111,
            0b01000001,
            0b01000001,
            0b00111110,
            0b00000000],
        [0b01111111,
            0b01001001,
            0b01001001,
            0b01000001,
            0b00000000],
        [0b01111111,
            0b00001001,
            0b00001001,
            0b00000001,
            0b00000000],
        [0b00111110,
            0b01000001,
            0b01001001,
            0b01111010,
            0b00000000],
        [0b01111111,
            0b00001000,
            0b00001000,
            0b01111111,
            0b00000000],
        [0b01000001,
            0b01111111,
            0b01000001,
            0b00000000],
        [0b00110000,
            0b01000000,
            0b01000001,
            0b00111111,
            0b00000000],
        [0b01111111,
            0b00001000,
            0b00010100,
            0b01100011,
            0b00000000],
        [0b01111111,
            0b01000000,
            0b01000000,
            0b01000000,
            0b00000000],
        [0b01111111,
            0b00000010,
            0b00001100,
            0b00000010,
            0b01111111,
            0b00000000],
        [0b01111111,
            0b00000100,
            0b00001000,
            0b00010000,
            0b01111111,
            0b00000000],
        [0b00111110,
            0b01000001,
            0b01000001,
            0b00111110,
            0b00000000],
        [0b01111111,
            0b00001001,
            0b00001001,
            0b00000110,
            0b00000000],
        [0b00111110,
            0b01000001,
            0b01000001,
            0b10111110,
            0b00000000],
        [0b01111111,
            0b00001001,
            0b00001001,
            0b01110110,
            0b00000000],
        [0b01000110,
            0b01001001,
            0b01001001,
            0b00110010,
            0b00000000],
        [0b00000001,
            0b00000001,
            0b01111111,
            0b00000001,
            0b00000001,
            0b00000000],
        [0b00111111,
            0b01000000,
            0b01000000,
            0b00111111,
            0b00000000],
        [0b00001111,
            0b00110000,
            0b01000000,
            0b00110000,
            0b00001111,
            0b00000000],
        [0b00111111,
            0b01000000,
            0b00111000,
            0b01000000,
            0b00111111,
            0b00000000],
        [0b01100011,
            0b00010100,
            0b00001000,
            0b00010100,
            0b01100011,
            0b00000000],
        [0b00000111,
            0b00001000,
            0b01110000,
            0b00001000,
            0b00000111,
            0b00000000],
        [0b01100001,
            0b01010001,
            0b01001001,
            0b01000111,
            0b00000000],
        [0b01111111,
            0b01000001,
            0b00000000],
        [0b00000001,
            0b00000110,
            0b00011000,
            0b01100000,
            0b00000000],
        [0b01000001,
            0b01111111,
            0b00000000],
        [0b01000000,
            0b01000000,
            0b01000000,
            0b01000000,
            0b00000000],
        [0b00000001,
            0b00000010,
            0b00000000],
        [0b00100000,
            0b01010100,
            0b01010100,
            0b01111000,
            0b00000000],
        [0b01111111,
            0b01000100,
            0b01000100,
            0b00111000,
            0b00000000],
        [0b00111000,
            0b01000100,
            0b01000100,
            0b00101000,
            0b00000000],
        [0b00111000,
            0b01000100,
            0b01000100,
            0b01111111,
            0b00000000],
        [0b00111000,
            0b01010100,
            0b01010100,
            0b00011000,
            0b00000000],
        [0b00000100,
            0b01111110,
            0b00000101,
            0b00000000],
        [0b10011000,
            0b10100100,
            0b10100100,
            0b01111000,
            0b00000000],
        [0b01111111,
            0b00000100,
            0b00000100,
            0b01111000,
            0b00000000],
        [0b01000100,
            0b01111101,
            0b01000000,
            0b00000000],
        [0b01000000,
            0b10000000,
            0b10000100,
            0b01111101,
            0b00000000],
        [0b01111111,
            0b00010000,
            0b00101000,
            0b01000100,
            0b00000000],
        [0b01000001,
            0b01111111,
            0b01000000,
            0b00000000],
        [0b01111100,
            0b00000100,
            0b01111100,
            0b00000100,
            0b01111000,
            0b00000000],
        [0b01111100,
            0b00000100,
            0b00000100,
            0b01111000,
            0b00000000],
        [0b00111000,
            0b01000100,
            0b01000100,
            0b00111000,
            0b00000000],
        [0b11111100,
            0b00100100,
            0b00100100,
            0b00011000,
            0b00000000],
        [0b00011000,
            0b00100100,
            0b00100100,
            0b11111100,
            0b00000000],
        [0b01111100,
            0b00001000,
            0b00000100,
            0b00000100,
            0b00000000],
        [0b01001000,
            0b01010100,
            0b01010100,
            0b00100100,
            0b00000000],
        [0b00000100,
            0b00111111,
            0b01000100,
            0b00000000],
        [0b00111100,
            0b01000000,
            0b01000000,
            0b01111100,
            0b00000000],
        [0b00011100,
            0b00100000,
            0b01000000,
            0b00100000,
            0b00011100,
            0b00000000],
        [0b00111100,
            0b01000000,
            0b00111100,
            0b01000000,
            0b00111100,
            0b00000000],
        [0b01000100,
            0b00101000,
            0b00010000,
            0b00101000,
            0b01000100,
            0b00000000],
        [0b10011100,
            0b10100000,
            0b10100000,
            0b01111100,
            0b00000000],
        [0b01100100,
            0b01010100,
            0b01001100,
            0b00000000],
        [0b00001000,
            0b00110110,
            0b01000001,
            0b00000000],
        [0b01111111,
            0b00000000],
        [0b01000001,
            0b00110110,
            0b00001000,
            0b00000000],
        [0b00001000,
            0b00000100,
            0b00001000,
            0b00000100,
            0b00000000],
        [0b00000010,
            0b00000001,
            0b00000010,
            0b00000000]]
	

	//========================================华丽的分割线  基础输入模块=============================================
     /**
     * 触摸按键
     */
    
    //% blockId=touchbutton block="touch |digital pin %pin"   group="触摸按键"
    //% weight=70
	//% subcategory="基础输入模块"
    export function touchButton(pin: DigitalPin): boolean {
		pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
    }

    /**
     *  按键开关
     */
    
    //% blockId=button block="Button |digital pin %pin"   group="按键开关"
    //% weight=70
	//% subcategory="基础输入模块"
    export function Button(pin: DigitalPin): boolean {
        pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
    }

    /**
     *  碰撞开关
     */
    
    //% blockId=crashbutton block="crashButton |digital pin %pin"   group="碰撞开关"
    //% weight=70
	//% subcategory="基础输入模块"
    export function crashButton(pin: DigitalPin): boolean {
        pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
    }
	    
    /**
     *  滑动变阻器
     */
    
    //% blockId=slideRheostat block="slideRheostat |analog pin %pin"   group="滑动变阻器"
    //% weight=70
	//% subcategory="基础输入模块"
    export function slideRheostat(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        return row
    }
    	    
    /**
     *  旋转电位器
     */
    
    //% blockId=rotaryPotentiometer block="rotaryPotentiometer |analog pin %pin" group="旋转电位器"
    //% weight=70
	//% subcategory="基础输入模块"
    export function rotaryPotentiometer(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        return row
    }
	          
    /**
     *  旋转编码器
     */

    let _Apin = 0
    let _Dpin = 0
    let _Bpin = 0
    
    //% blockId=rotaryEncoder block="rotaryEncoder setup | pinA %pina|pinB %pinb|pinD %pind"   group="旋转编码器"
    //% weight=70
	//% subcategory="基础输入模块"
    export function rotaryEncoder(pina: DigitalPin, pinb: DigitalPin, pind: DigitalPin): void {
        _Apin = pina
        _Bpin = pinb
        _Dpin = pind  
    }

    //% blockId=pinsRead block="select pin  %selectpin"  group="旋转编码器"
    //% weight=69
	//% subcategory="基础输入模块"
    export function pinsRead(selectpin: _selectpin): number {
        let a
        if (selectpin == 0)
            a = _Apin
        else if (selectpin == 1)
            a = _Bpin
        else if (selectpin == 2)
            a = _Dpin
        pins.digitalWritePin(a, 0)
		if (pins.digitalReadPin(a) == 1) {
			return 1;
		}else {
		    return 0;
		}
        //return pins.digitalReadPin(a)
	}
	   	           
    /**
     *  摇杆模块
     */

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
    
    //% blockId=_digitalRead block="from |%selectpin read" group="摇杆模块"
    //% weight=68
	//% subcategory="基础输入模块"
    export function _digitalRead(): boolean {
        pins.digitalWritePin(Bpin, 0)
		if (pins.digitalReadPin(Bpin) == 1) {
			return false;
		}else {
		    return true;
		}
        //return pins.digitalReadPin(a)
    }
	
	
	/**
	 *  钢琴模块
	 */
	
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
	
	//========================================华丽的分割线  传感器=============================================
    /**
     * 温度传感器
     */
    
    //% blockId=sensor_temperature block="Pin %pin reads the analog value of the LM35"  group="LM35温度传感器"
    //% weight=70
	//% inlineInputMode=inline
	//% subcategory="传感器"
    export function sensor_temperature(pin: AnalogPin): number {
        let temp = (pins.analogReadPin(pin) / 1023) * 3.3 * 100;
        return temp
        
    }

    /**
     * 火焰传感器
     */
    
    //% blockId=sensor_flame block="Pin %pin reads the digital value of the flame sensor" group="火焰传感器"
    //% weight=70
	//% inlineInputMode=inline
	//% subcategory="传感器"
    export function sensor_flame(pin: DigitalPin): boolean {
        pins.digitalWritePin(pin, 0)
	     if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
//         return pins.digitalReadPin(pin)   
    }
	
	 //% blockId=sensor_flame_analog block="Pin %pin reads the analog value of the flame sensor" group="火焰传感器"
    //% weight=70
	//% inlineInputMode=inline
	//% subcategory="传感器"
    export function sensor_flame_analog(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
//         return pins.digitalReadPin(pin)   
    }
    
    /**
     * 红外寻迹
     */
    
    //% blockId=sensor_infraredTracking block="Pin %pin reads the digital value of the infraredTracking sensor" group="红外寻迹传感器"
    //% weight=70
	//% inlineInputMode=inline
	//% subcategory="传感器"
    export function sensor_infraredTracking(pin: DigitalPin): boolean {
        pins.digitalWritePin(pin, 0)
	     if (pins.digitalReadPin(pin) == 1) {
		    return true;
		}else {
		    return false;
		}
//         return pins.digitalReadPin(pin)
        
    }
    
    /**
     * 倾斜传感器
     */
    
    //% blockId=sensor_incline block="sensor_incline pin |digitalpin %pin" group="倾斜传感器"
    //% weight=70
	//% inlineInputMode=inline
	//% subcategory="传感器"
    export function sensor_incline(pin: DigitalPin): boolean {
        pins.digitalWritePin(pin, 0)
	     if (pins.digitalReadPin(pin) == 1) {
		    return false;
		}else {
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
    export function sensor_thermosensitive (pin: AnalogPin): number {
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
	  pins.digitalWritePin(pin, 0)
	     if (pins.digitalReadPin(pin) == 1) {
		    return false;
		}else {
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
	  pins.digitalWritePin(pin, 0)
	     if (pins.digitalReadPin(pin) == 1) {
		    return false;
		}else {
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
		pins.digitalWritePin(pin, 0)
	     if (pins.digitalReadPin(pin) == 1) {
		    return true;
		}else {
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
		pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
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
		pins.digitalWritePin(_DS, 0)
		if (pins.digitalReadPin(_DS) == 1) {
			return false;
		}else {
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
		pins.digitalWritePin(_DR, 0)
		if (pins.digitalReadPin(_DR) == 1) {
			return false;
		}else {
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
             pins.digitalWritePin(_DG, 0)
	     if (pins.digitalReadPin(_DG) == 1) {
		    return true;
		}else {
		    return false;
		}
    }
	
	let initialized = false
 	let neoStrip: neopixel.Strip;
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
        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 25000);
        let ret = d;
        // filter timeout spikes
        if (ret == 0 && distanceBuf != 0) {
            ret = distanceBuf;
        }
        distanceBuf = d;
        return Math.floor(ret * 9 / 6 / 58);
		//return Math.floor(ret / 40 + (ret / 800));
		// Correction
	}

 	function RgbDisplay(indexstart: number, indexend: number, rgb: RgbColors): void {
 		for (let i = indexstart; i <= indexend; i++) {
 			neoStrip.setPixelColor(i, rgb);
 		}
 		neoStrip.show();
 	}

 	//% blockId="motorbit_rus04" block="part %index show color %rgb effect %effect rgbpin %pin"  group="RGB超声波"
 	//% weight=75
	//% inlineInputMode=inline
	//% subcategory="传感器"
 	export function RUS_04(pin: DigitalPin, index: RgbUltrasonics, rgb: RgbColors, effect: ColorEffect): void {
		if(rgb == RgbColors.Red) {
			rgb = RgbColors.Green;
		}else if(rgb == RgbColors.Green) {
	     	rgb = RgbColors.Red;
		}
 		let start, end;
 		if (!neoStrip) {
 			neoStrip = neopixel.create(pin, 6, NeoPixelMode.RGB)
 		}
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
 		switch(effect) {
 			case ColorEffect.None:
 				RgbDisplay(start, end, rgb);
 				break;
 			case ColorEffect.Breathing:
 			for (let i = 0; i < 255; i+=2) {
 				neoStrip.setBrightness(i);
 				RgbDisplay(start, end, rgb);
 				//basic.pause((255 - i)/2);
 				basic.pause((i < 20)? 80 :(255/i));
 			}
 			for (let i = 255; i > 0; i-=2) {
 				neoStrip.setBrightness(i);
 				RgbDisplay(start, end, rgb);
 				basic.pause((i < 20)? 80 :(255/i));
 			}
 			break;
 			case ColorEffect.Rotate:
 				for (let i = 0; i < 4; i++) {
 					neoStrip.setPixelColor(start, rgb);
 					neoStrip.setPixelColor(start+1, 0);
 					neoStrip.setPixelColor(start+2, 0);
 					if (index == RgbUltrasonics.All) {
 						neoStrip.setPixelColor(end-2, rgb);
 						neoStrip.setPixelColor(end-1, 0);
 						neoStrip.setPixelColor(end, 0);
 					}
 					neoStrip.show();
 					basic.pause(150);
 					neoStrip.setPixelColor(start, 0);
 					neoStrip.setPixelColor(start+1, rgb);
 					neoStrip.setPixelColor(start+2, 0);
 					if (index == RgbUltrasonics.All) {
 						neoStrip.setPixelColor(end-2, 0);
 						neoStrip.setPixelColor(end-1, rgb);
 						neoStrip.setPixelColor(end, 0);
 					}
 					neoStrip.show();
 					basic.pause(150);
 					neoStrip.setPixelColor(start, 0);
 					neoStrip.setPixelColor(start+1, 0);
 					neoStrip.setPixelColor(start+2, rgb);
 					if (index == RgbUltrasonics.All) {
 						neoStrip.setPixelColor(end-2, 0);
 						neoStrip.setPixelColor(end-1, 0);
 						neoStrip.setPixelColor(end, rgb);
 					}
 					neoStrip.show();
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

	/**
	 * 温湿度传感器 
	 */
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


}
