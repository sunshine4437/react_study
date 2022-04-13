import React, { useEffect, useState } from "react";
const Show1 = () => {
    return (
        <div>
            show1
        </div>
    )
}
const Show2 = () => {
    return (
        <div>
            show2
        </div>
    )
}
// const Show = (props) => {
//     if (props.flag) {
//         return <Show1 />
//     }
//     else
//         return <Show2 />
// }
const Test = () => {
    const [temp, setTemp] = useState(false);
    const [text, setText] = useState('11');

    const btnTest = () => {
        setTemp(!temp);
    }
    const onChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value);
    }
    // const handlerSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('You clicked submit.');
    // }
    const numbers = [1, 2, 3, 4, 5];
    const listItem = numbers.map((number) => {
        return <li key={number.toString()}>{number}</li>
    })
    useEffect(() => {
        console.log("mount")
    }, [])
    return (
        <div>
            {/* <ul>
                {numbers.map((number =>{
                    return <li>{number}</li>
                }))}
            </ul> */}
            <ul>
                {listItem}
            </ul>
            <button onClick={btnTest}>{temp ? 'ON' : 'OFF'}</button>
            <input name="name" value={text} onChange={onChange} />
            {text}

            {/* <form onSubmit={handlerSubmit}>
                <button type="submit">Submit</button>
            </form> */}
            {/* <Show flag={temp} /> */}
            {temp ? <Show1 /> : <Show2 />}
            {/* {temp && <Show1 />} */}
            {/* && true || false */}
        </div>
    )

}

// const exportTest = { Test }
// export default exportTest;

export default Test;