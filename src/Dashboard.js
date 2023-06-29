import React,{useState,useEffect} from "react";

const Dashboard = () => {
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);

    useEffect(() => {
        const source1 = connectTosource1();
        source1.on('data',newData => {
            setData1(prevData => [...prevData,newData]);
        });

        const source2 = connectTosource1();
        source2.on('data',newData => {
            setData2(prevData => [...prevData,newData]);
        });

        return() => {

            source1.disconnect();
            source2.disconnect();
        };
    },[]);

return (
    <div>
        <h1>data Dashboard</h1>
        <div>
            <h2>Source 1 Data</h2>
            <ul>
                {data1.map((item,index)=>(
                    <li key={index}>{item}</li>

                ))}
            </ul>
        </div>
        <div>
            <h2>source2 Data</h2>
            <ul>
                {data2.map((item,index)=> (
                    <li key={index}>{index}</li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default Dashboard;