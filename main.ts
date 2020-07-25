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

enum _rockerpin{
	//% block="Xpin"
	Xpin=0,
	//% block="Ypin"
    Ypin = 1,
    //% block="Bpin"
    Bpin = 2,
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
	//========================================华丽的分割线  基础输入模块=============================================
	/**
     * 触摸按键
     */
    
    //% blockId=touchbutton block="touch |digital pin %pin" group="触摸按键"
    //% weight=70
	//% subcategory="基础输入模块"
    export function touchButton(pin: DigitalPin): boolean {
		pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
        //return pins.digitalReadPin(pin)
    }
	
    /**
     *  按键开关
     */
    
    //% blockId=button block="Button |digital pin %pin" group="按键开关"
    //% weight=70
	//% subcategory="基础输入模块"
    export function Button(pin: DigitalPin): boolean {
		pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
        //return pins.digitalReadPin(pin)
    }

    /**
     *  碰撞开关
     */
    
    //% blockId=crashbutton block="crashButton |digital pin %pin" group="碰撞开关"
    //% weight=70
	//% subcategory="基础输入模块"
    export function crashButton(pin: DigitalPin): boolean {
		pins.digitalWritePin(pin, 0)
		if (pins.digitalReadPin(pin) == 1) {
			return false;
		}else {
		    return true;
		}
        //return pins.digitalReadPin(pin)
    }
	    
    /**
     *  滑动变阻器
     */
    
    //% blockId=slideRheostat block="slideRheostat |analog pin %pin" group="滑动变阻器"
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
    
    //% blockId=rotaryEncoder block="rotaryEncoder setup | pinA %pina|pinB %pinb|pinD %pind" group="旋转编码器"
    //% weight=70
	//% subcategory="基础输入模块"
    export function rotaryEncoder(pina: DigitalPin, pinb: DigitalPin, pind: DigitalPin): void {
        _Apin = pina
        _Bpin = pinb
        _Dpin = pind  
    }

    //% blockId=pinsRead block="select pin  %selectpin" group="旋转编码器"
    //% weight=70
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
    //% weight=70
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
    //% weight=70
	//% subcategory="基础输入模块"
    export function _digitalRead(selectpin: _rockerpin): number {
        let a
        if (selectpin == 2)
            a = Bpin;
        pins.digitalWritePin(a, 0)
		if (pins.digitalReadPin(a) == 1) {
			return 1;
		}else {
		    return 0;
		}
        //return pins.digitalReadPin(a)
    }
	
	/**
	 *  钢琴模块
	 */
	
	let _DIO = 0
    let _CLK = 0
    
    //% blockId=basic_piano_pin block="basic_piano_pin |DIO pin %DIO|CLK pin %CLK" group="钢琴模块"
    //% weight=70
	//% subcategory="基础输入模块"
    export function basic_piano_pin(DIO: DigitalPin, CLK: DigitalPin): void {
        
        _DIO = DIO
        _CLK = CLK
    }

    //% blockId=basic_piano_play block="basic_piano_play" group="钢琴模块"
    //% weight=70
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
