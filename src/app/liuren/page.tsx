import {useMemo} from "react";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "六壬",
    description: "六壬",
};
const getMonthDayTime = ()=>{
    const [date,time] = new Date().toLocaleString("ja-JP-u-ca-chinese").split(" ")
    const [_,month,day] = date.split("-")
    const [t] = time.split(":")
    console.log(month,day,t)
    return [month,day,时辰[Number(t)]].map(item=>Number(item))
}
const 时辰 = {
    23:1,
    0:1,
    1:2,
    2:2,
    3:3,
    4:3,
    5:4,
    6:4,
    7:5,
    8:5,
    9:6,
    10:6,
    11:7,
    12:7,
    13:8,
    14:8,
    15:9,
    16:9,
    17:10,
    18:10,
    19:11,
    20:11,
    21:12,
    22:12,
}
const 时辰映射 = ["子","丑",'寅','卯','辰','巳','午',"未","申","酉",'戌','亥']
const 宫位 = [{ title:"大安", desc:"" },{ title:"流离", desc:"" },{ title:"速喜", desc:"" },{ title:"赤口", desc:"" },{ title:"小吉", desc:"" },{ title:"空亡", desc:"" }]

export default function liuren(props) {
    const monthDayTime = getMonthDayTime()
    const witchOne = monthDayTime.reduce((sum,item)=>sum+item,0)-3
    return (
        <div
            className="w-full flex-1 flex gap-8 p-24 justify-center items-center h-full font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="p-10 rounded-sm bg-red-100 flex flex-col gap-5 items-center">
                    <span className={"text-5xl font-bold"}>
                        {宫位[witchOne % 6].title}
                    </span>
                    <div className={"flex gap-2 flex-wrap flex-col items-center"}>
                        <span className={"whitespace-nowrap"}>{useMemo(() => new Date().toLocaleString("ja-JP-u-ca-chinese"), [])}</span>
                        <span className={"whitespace-nowrap"}>开{时辰映射[monthDayTime[2]]}时-&gt;{monthDayTime[2]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
