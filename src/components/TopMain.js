import { useEffect, useState } from "react";

const TopMain = () => {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    })

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const second = new Date().getSeconds();

    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const [block1, setBlock1] = useState('');
    useEffect(() => {
        if(hours<10){
            setBlock1('0');
        }else{
            setBlock1('');
        }
    });

    const [block2, setBlock2] = useState('');
    useEffect(() => {
        if(minutes<10){
            setBlock2('0'); 
        }else{
            setBlock2('');
        }
    });

    const [block3, setBlock3] = useState('');
    useEffect(() => {
        if(second<10){
            setBlock3('0'); 
        }else{
            setBlock3('');
        }
    });
  
    return (
        <div className="topmain">
            <p className="data1">{block1}{hours} : {block2}{minutes} : {block3}{second}</p>
            <p className="data2">{day} : {month + 1} : {year}</p>            
        </div>
    )
}
// setTimeout(1000, TopNav);

export default TopMain;