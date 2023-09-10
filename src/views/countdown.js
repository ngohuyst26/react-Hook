import { useEffect, useState } from "react";

const CountDown = (props) => {
    const [timer, setTimer] = useState(10);
    let {thongbao} = props;
    if(timer === 0){
        thongbao();
    }
    useEffect(() => {
            if(timer === 0){
                return;
            }
            let count =  setInterval(() => {
                setTimer(timer - 1);
            }, 1000)
    
            return () => {
                clearInterval(count);
            }
    },[timer])

    return(
        <div style={{color: "black"}}> {timer} Giây </div>
    )
}

export default CountDown;