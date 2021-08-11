# Emakefun micorbit ph2.0 sensorbit extensions
### ![详细介绍请看官网](https://emakefun-docs.readthedocs.io/zh_CN/latest/)
# Sensor:bit
## 基础输入模块 
### 1 矩阵键盘模块
- 初始化矩阵键盘引脚SCL,SDO
- ![Matrixkeyboard1.png](sensorbit/Matrixkeyboard1.png)
- 实现Micro:bit读取显示键盘值
- ![Matrixkeyboard3.png](sensorbit/Matrixkeyboard3.png)
-     示例程序
- ![Matrixkeyboard2.png](sensorbit/Matrixkeyboard2.png)
- 利用两个引脚获取数值，打印出相应的字母或数字
### 2 触摸按键模块
- 通过引脚检测是否被触摸
- ![Touchkeymodule1.png](sensorbit/Touchkeymodule1.png)
    示例程序
- ![Touchkeymodule2.png](sensorbit/Touchkeymodule2.png) 
- 当模块被触摸，则显示笑脸表情，否则显示难过表情 
### 3  按键模块
- 通过引脚检测按键是否被按下
- ![Keyswitchmodule1.png](sensorbit/Keyswitchmodule1.png)
-     示例程序
- ![Keyswitchmodule2.png](sensorbit/Keyswitchmodule2.png)
- 当按键按下，显示笑脸表情，否则显示难过表情
### 4  触碰模块
- 通过引脚来检测是否发生碰撞
- ![Touchmodule1.png](sensorbit/Touchmodule1.png)
-     示例程序
- ![Touchmodule2.png](sensorbit/Touchmodule2.png)
- 发生碰撞则显示开心表情，未发生则显示难过表情
### 5  滑动变阻器模块
- 通过引脚来获取变阻器当前的阻值(1~100)
- ![slide resistor1.png](sensorbit/slideresistor1.png)
-     示例程序
- ![slide resistor2.png](sensorbit/slideresistor2.png)
- 打印出当前滑动变阻器的阻值，每一秒更新一次数值
### 6  旋转电位器模块
- 通过引脚来获取旋转电位器当前的电压值
- ![Rotatingpotentiometer1.png](sensorbit/Rotatingpotentiometer1.png)
-     示例程序
- ![Rotatingpotentiometer2.png](sensorbit/Rotatingpotentiometer2.png)
- 打印出当前旋转电位器的电压值，每一秒更新一次数值
### 7  摇杆模块
- 初始化引脚X,Y,B
- ![Rockermodule1.png](sensorbit/Rockermodule1.png)
- 通过引脚X/Y获取模拟值
- ![Rockermodule2.png](sensorbit/Rockermodule2.png)
- 判断按键是否被按下
- ![Rockermodule3.png](sensorbit/Rockermodule3.png)
-     示例程序
- ![Rockermodule4.png](sensorbit/Rockermodule4.png)
- 当向上/下/左/右推动摇杆时，LED点阵屏会打印出上/下/左/右的图案。当按下摇杆时，LED点阵屏会打印出一个开心的表情。
### 8  钢琴模块
- 初始化引脚CLK,DIO
- ![Pianomodule1.png](sensorbit/Pianomodule1.png)
- 实现是否弹奏钢琴
- ![Pianomodule2.png](sensorbit/Pianomodule2.png)
-     示例程序
- ![Pianomodule3.png](sensorbit/Pianomodule3.png)
- 通过触摸到不同的按键，会产生不同的音乐
### 9  PH2.0手柄
- PH2.0手柄默认连接I2C引脚(即p19，p20)，下面代码实现PH2.0的效果
- 获取手柄按键状态
- ![PH2.0handle1.png](sensorbit/PH2.0handle1.png)
- 获取X/Y轴的值
- ![PH2.0handle2.png](sensorbit/PH2.0handle2.png)
- 判断手柄按键是否被释放
- ![PH2.0handle3.png](sensorbit/PH2.0handle3.png)
- 判断手柄按键是否被按下
- ![PH2.0handle4.png](sensorbit/PH2.0handle4.png)
-     示例程序
- ![PH2.0handle5.png](sensorbit/PH2.0handle5.png) 
- 获取X/Y轴的值，1秒以后，可以实现判断各个按键的状态的功能，若被按下则显示苦脸，释放状态下则显示笑脸
## 传感器
### 1  水蒸气传感器
- 通过引脚来获取环境中水蒸气浓度
- ![Watervaporsensor1.png](sensorbit/Watervaporsensor1.png)
-     示例程序
- ![Watervaporsensor2.png](sensorbit/Watervaporsensor2.png) 
- 打印水蒸气浓度数值，每一秒更新一次
### 2  LM35温度传感器
- 通过引脚来获取环境温度
- ![LM35temperaturesensor1.png](sensorbit/LM35temperaturesensor1.png) 
-     示例程序 
- ![LM35temperaturesensor2.png](sensorbit/LM35temperaturesensor2.png)
- 打印环境温度值，每一秒更新一次
### 3  火焰传感器
- 通过引脚获取的数字值判断周围存在火焰
- ![Flamesensor1.png](sensorbit/Flamesensor1.png)
- 通过引脚来获取火焰的模拟值
- ![Flamesensor2.png](sensorbit/Flamesensor2.png)
-     示例程序
- ![Flamesensor3.png](sensorbit/Flamesensor3.png)
- 判断周围是否有火焰存在，若存在打印火焰的模拟值，不存在则显示笑脸。
### 4  红外循迹传感器
- 通过引脚来判断是否存在黑线
- ![Infraredtrackingsensor1.png](sensorbit/Infraredtrackingsensor1.png)
-     示例程序
- ![Infraredtrackingsensor2.png](sensorbit/Infraredtrackingsensor2.png)
- 红外循迹传感器若感应到黑线，则显示哭脸，否则显示笑脸
### 5  倾斜传感器
- 通过引脚来判断是否倾斜     
- ![Inclinationsensor1.png](sensorbit/Inclinationsensor1.png)
-     示例程序
- ![Inclinationsensor2.png](sensorbit/Inclinationsensor2.png)
- 倾斜传感器感应到倾斜，则显示哭脸，否则显示笑脸
### 6  光敏传感器
- 通过引脚来获取光敏传感器感应到环境中光强的模拟值
- ![Photosensitivesensor1.png](sensorbit/Photosensitivesensor1.png)
-     示例程序
- ![Photosensitivesensor2.png](sensorbit/Photosensitivesensor2.png) 
- 打印光照强度的模拟值，每一秒更新一次
### 7  热敏传感器
- 通过引脚来获取热度值
- ![Heatsensitivesensor1.png](sensorbit/Heatsensitivesensor1.png) 
-     示例程序
- ![Heatsensitivesensor2.png](sensorbit/Heatsensitivesensor2.png) 
- 打印环境热度值，每一秒更新一次
### 8  水深传感器
- 通过引脚获取水深值
- ![Waterdepthsensor1.png](sensorbit/Waterdepthsensor1.png)
-     示例程序    
- ![Waterdepthsensor2.png](sensorbit/Waterdepthsensor2.png)
- 打印水深值，每一秒更新一次
### 9  土壤湿度传感器
- 通过引脚获取土壤湿度值
- ![Soilmoisturesensor1.png](sensorbit/Soilmoisturesensor1.png)
-     示例程序
- ![Soilmoisturesensor1.png](sensorbit/Soilmoisturesensor1.png)
- 打印土壤湿度值，每一秒更新一次
### 10  避障传感器    
- 通过引脚获取数字值判断前方是否有障碍物
- ![Obstacleavoidancesensor1.png](sensorbit/Obstacleavoidancesensor1.png)
    示例程序
- ![Obstacleavoidancesensor2.png](sensorbit/Obstacleavoidancesensor2.png)
- 判断前方是否有障碍物，如果有显示哭脸，没有则显示笑脸
### 11  磁簧开关传感器
- 通过引脚获取数字值判断周围是否存在磁场
- ![Reedswitchsensor1.png](sensorbit/Reedswitchsensor1.png)
-     示例程序
- ![Reedswitchsensor2.png](sensorbit/Reedswitchsensor2.png)
- 磁簧开关传感器感应周围是否有磁场若存在则显示苦脸，不存在则显示笑脸
### 12  人体热源传感器
- 实现通过引脚来获得人体热源传感器得到的数字值，从而判断周围是否有环境热源的功能
- ![Humanbodyheatsourcesensor1.png](sensorbit/Humanbodyheatsourcesensor1.png)
-     示例程序
- ![Humanbodyheatsourcesensor2.png](sensorbit/Humanbodyheatsourcesensor2.png)
- 判断周围是否有人体热源，若存在则显示哭脸，若不存在则显示笑脸
### 13  震动传感器
- 震动传感器为4pin传感器，其A连接的pin口用于检测是否检测到震动(数字值)，D口连接的pin口用于读取模拟值。
- 通过引脚获取震动传感器模拟值
- ![Vibrationsensor1.png](sensorbit/Vibrationsensor1.png)
- 通过引脚获取震动传感器数字值
- ![Vibrationsensor2.png](sensorbit/Vibrationsensor2.png)
-     示例程序
- ![Vibrationsensor3.png](sensorbit/Vibrationsensor3.png)
- 实现检测是否感应到震动的功能，若发生震动打印震动程度值，若未发生则打印笑脸
### 14  灰度传感器
- 初始化引脚并读取颜色深度模拟值
- ![Grayscalesensor1.png](sensorbit/Grayscalesensor1.png)
-     示例程序
- ![Grayscalesensor2.png](sensorbit/Grayscalesensor2.png)    
- 实现打印颜色深度值的功能
### 15  声音传感器
- 通过引脚获取声音传感器数字值
- ![Soundsensor1.png](sensorbit/Soundsensor1.png)
- 通过引脚获取声音传感器模拟值
- ![Soundsensor2.png](sensorbit/Soundsensor2.png)
-     示例程序
- ![Soundsensor3.png](sensorbit/Soundsensor3.png)
- 实现检测声音强度的功能，若有声音则打印声音强度值，没有声音则显示笑脸
### 16  雨滴传感器
- 通过引脚获取雨滴传感器数字值
- ![Raindropsensor1.png](sensorbit/Raindropsensor1.png)
- 通过引脚获取雨滴传感器模拟值
- ![Raindropsensor2.png](sensorbit/Raindropsensor2.png)
-     示例程序
- ![Raindropsensor3.png](sensorbit/Raindropsensor3.png)
- 实现对雨滴值的检测功能，若下雨则打印雨滴模拟值，没下雨显示笑脸
### 17  MQ4气体传感器
- 通过引脚获取MQ4气体传感器的数字值
- ![gassensor1.png](sensorbit/gassensor1.png)
- 通过引脚获得MQ4气体传感器的模拟值
- ![gassensor2.png](sensorbit/gassensor2.png)
-     示例程序
- ![gassensor3.png](sensorbit/gassensor3.png)
- 实现对气体的检测功能，若有气体打印其浓度的模拟值，没有则显示笑脸
### 18  RGB超声波传感器
- 通过引脚获得超声波所测得的距离值
- ![RGBultrasonicsensor1.png](sensorbit/RGBultrasonicsensor1.png)
- 通过引脚控制探头RGB颜色和效果
- ![RGBultrasonicsensor2.png](sensorbit/RGBultrasonicsensor2.png)
-     示例程序
- ![RGBultrasonicsensor3.png](sensorbit/RGBultrasonicsensor3.png)
- 实现利用RGB超声波传感器的测距和亮灯的功能
### 19  普通超声波传感器
- 通过引脚获取普通超声波传感器测得的距离值
- ![Ordinaryultrasonicsensor1.png](sensorbit/Ordinaryultrasonicsensor1.png)
-     示例程序
- ![Ordinaryultrasonicsensor2.png](sensorbit/Ordinaryultrasonicsensor2.png)
- 打印测量出的距离值
### 20  DHT11温湿度传感器
- 通过引脚获得环境湿度或温度的值
- ![DHT11temperatureandhumiditysensor1.png](sensorbit/DHT11temperatureandhumiditysensor1.png)
-     示例程序
- ![DHT11temperatureandhumiditysensor2.png](sensorbit/DHT11temperatureandhumiditysensor2.png)
- 实现用DHT11温湿度传感器测温湿度的功能
- 对于Micro：bit（v2）同样有
- ![DHT11temperatureandhumiditysensorv2.png](sensorbit/DHT11temperatureandhumiditysensorv2.png)
-     示例程序
- ![DHT11temperatureandhumiditysensorv22.png](sensorbit/DHT11temperatureandhumiditysensorv22.png)
### 21  红外循迹传感器
- 判断周围是否有黑线
- ![Infraredtrackingsensor1.png](sensorbit/Infraredtrackingsensor1.png)
- 初始化引脚
- ![Infraredtrackingsensor2.png](sensorbit/Infraredtrackingsensor2.png)
- 获取红外循迹传感器值
- ![Infraredtrackingsensor3.png](sensorbit/Infraredtrackingsensor3.png)
-     示例程序
- ![Infraredtrackingsensor4.png](sensorbit/Infraredtrackingsensor4.png)
- 判断黑线的存在，1s后打印红外循迹传感器值
## 显示器
### 1  LED灯
- 通过引脚控制灯的状态
- ![LEDlights1.png](sensorbit/LEDlights1.png)
-     示例程序
- ![LEDlights2.png](sensorbit/LEDlights2.png) 
- 实现对LED灯状态的控制功能
### 2  RGB三色灯
- 初始化引脚
- ![Three-colorlight1.png](sensorbit/Three-colorlight1.png)
- 对灯进行对灯进行配色
- ![Three-colorlight2.png](sensorbit/Three-colorlight2.png)
-     示例程序
- ![Three-colorlight3.png](sensorbit/Three-colorlight3.png)
- 实现对RGB三色灯颜色变换的功能
### 3  交通灯
- 初始化各个灯引脚
- ![trafficlight1.png](sensorbit/trafficlight1.png)
- 设置灯的状态
- ![trafficlight2.png](sensorbit/trafficlight2.png)
-     示例程序
- ![trafficlight3.png](sensorbit/trafficlight3.png)   
- 通过对三个灯的控制实现交通灯的功能
### 4  LCD1602显示屏
- 设置LCD1602显示屏的IC2地址，十进制默认为39，十六进制默认为0x27
- ![LCD1602display1.png](sensorbit/LCD1602display1.png)
- 使LCD1602显示屏相应位置显示字符
- ![LCD1602display2.png](sensorbit/LCD1602display2.png)
- 使LCD1602显示屏相应位置显示数字
- ![LCD1602display3.png](sensorbit/LCD1602display3.png)
- 使LCD1602显示屏相应位置显示字符串
- ![LCD1602display4.png](sensorbit/LCD1602display4.png)
- 打开或关闭LCD1602显示屏
- ![LCD1602display5.png](sensorbit/LCD1602display5.png)
- 打开或关闭LCD1602显示屏背光灯
- ![LCD1602display6.png](sensorbit/LCD1602display6.png)
-     示例程序
- ![LCD1602display7.png](sensorbit/LCD1602display7.png)
- 实现显示功能
### 5  TM1637数码管
- 设置数码管引脚显示亮度，显示位数
- ![TM1637digitaltube1.png](sensorbit/TM1637digitaltube1.png)
- 使TM1637数码管显示数字
- ![TM1637digitaltube2.png](sensorbit/TM1637digitaltube2.png)
- 使TM1637数码管显示十六进制数字
- ![TM1637digitaltube3.png](sensorbit/TM1637digitaltube3.png)
- 使TM1637数码管对应位置显示数字
- ![TM1637digitaltube4.png](sensorbit/TM1637digitaltube4.png)
- 调节亮度
- ![TM1637digitaltube5.png](sensorbit/TM1637digitaltube5.png)
- TM1637数码管打开显示
- ![TM1637digitaltube6.png](sensorbit/TM1637digitaltube6.png)
-  TM1637数码管关闭显示
- ![TM1637digitaltube7.png](sensorbit/TM1637digitaltube7.png)
- TM1637数码管清除显示
- ![TM1637digitaltube8.png](sensorbit/TM1637digitaltube8.png)
- 点亮或熄灭相应位置上的点
- ![TM1637digitaltube10.png](sensorbit/TM1637digitaltube10.png)
-     示例程序
- ![TM1637digitaltube9.png](sensorbit/TM1637digitaltube9.png)
- 实现利用TM1637数码管实现计时功能
### 6  TM1650数码管
- 使TM1650数码管显示数字
- ![TM1650digitaltube1.png](sensorbit/TM1650digitaltube1.png)
- 使TM1650数码管显示十六进制数字
- ![TM1650digitaltube2.png](sensorbit/TM1650digitaltube2.png)
- 使TM1650数码管相应位置上的点点亮
- ![TM1650digitaltube3.png](sensorbit/TM1650digitaltube3.png)
- 使TM1650数码管对应位置显示数字
- ![TM1650digitaltube4.png](sensorbit/TM1650digitaltube4.png)
- 设置TM1650数码管显示亮度
- ![TM1650digitaltube5.png](sensorbit/TM1650digitaltube5.png)
-     示例程序
- ![TM1650digitaltube6.png](sensorbit/TM1650digitaltube6.png)
- 实现对应的显示效果
## 执行器
### 1  有源蜂鸣器
- 通过引脚控制有源蜂鸣器
- ![Activebuzzer1.png](sensorbit/Activebuzzer1.png)
-     示例程序
- ![Activebuzzer2.png](sensorbit/Activebuzzer2.png)
- 有源蜂鸣器间接性打开关闭
### 2  无源蜂鸣器
- 通过引脚改变无源蜂鸣器频率
- ![Passivebuzzer1.png](sensorbit/Passivebuzzer1.png)
-     示例程序
- ![Passivebuzzer2.png](sensorbit/Passivebuzzer2.png)
- 实现无源蜂鸣器在某一特定的频率下工作的功能
### 3  继电器
- 通过控制引脚来控制继电器的打开与关闭
- ![Relay1.png](sensorbit/Relay1.png)
-     示例程序
- ![Relay2.png](sensorbit/Relay2.png)
- 继电器间接性打开关闭
### 4  直流电机
- 通过引脚设置直流电机的运行模式和速度
- ![DC1.png](sensorbit/DC1.png)
-     示例程序
- ![DC2.png](sensorbit/DC2.png)
- 直流电机按照设定的程序执行 
### 5  舵机
- 通过引脚使舵机偏转到一定的角度
- ![Steeringgear1.png](sensorbit/Steeringgear1.png)
-     示例程序
- ![Steeringgear2.png](sensorbit/Steeringgear2.png)
- 舵机每隔一段时间转动一定角度
### 6  激光模块
- 通过引脚控制激光模块的打开与关闭
- ![Lasermodule1.png](sensorbit/Lasermodule1.png)
-     示例程序
- ![Lasermodule.png](sensorbit/Lasermodule2.png)
- 激光模块间接性的打开和关闭
## 智能模块
### 1  语音识别模块
- 语音识别模块初始化
- ![Intelligentvoicemodule1.png](sensorbit/Intelligentvoicemodule1.png)
- 设置唤醒时间
- ![Intelligentvoicemodule2.png](sensorbit/Intelligentvoicemodule2.png)
- 匹配关键词的对应编号
- ![Intelligentvoicemodule3.png](sensorbit/Intelligentvoicemodule3.png)
- 开始执行语音识别
- ![Intelligentvoicemodule4.png](sensorbit/Intelligentvoicemodule4.png)
- 编辑词条库内容
- ![Intelligentvoicemodule5.png](sensorbit/Intelligentvoicemodule5.png)
- 设置语音识别模式
- ![Intelligentvoicemodule6.png](sensorbit/Intelligentvoicemodule6.png)
-     示例程序
- ![Intelligentvoicemodule7.png](sensorbit/Intelligentvoicemodule7.png)
- 实现匹配关键词打印其编号的功能




















