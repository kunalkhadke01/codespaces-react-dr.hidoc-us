import { useEffect, useState } from "react";
import "./containt.css"
const Containt =() => {
    const [drugiNFO, setDrugInfo] = useState([])
    const mystyle = {
        color: "white",
        backgroundColor: "#E9E9E9",
        padding: "10px",
        fontFamily: "Arial",
        display:"flex",
        gap:"20rem"
      };
      const serchbar = {
        margin:0,
        padding:0,
        height:"20px",
        border:"none",
        borderRadius:"5rem",
        backgroundColor:"lightgray"
      }
      const button = {
        border:"0.0001rem solid",
        backgroundColor:"white",
        padding:"10px",
        margin:"10px"
      }
      const buttons= ["Anesthesia", "critical care","cardiology","Dentistry","Dermatology","Diabetology"]
useEffect(()=>{
    const response =  fetch("http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList",{
        mode:'cors',
        method:'POST'
        }
    );
    const movies =  response;
    console.log(movies);
},[])

    return (
        <div>
            <h3 style={{backgroundColor:"#A4EAE9"}}>your Medical Representative correctly communicating your message to Medicos</h3>
            {/* <div style={{backgroundColor:"#A4EAE2"}}> */}
            <section style={mystyle}>
            <h3 >Get the knowledge <span style={{color:"#13AE9C"}}>APPROVED DRUGS</span></h3>
            <input type="search" style={serchbar} placeholder="Search for any site"/>  
            </section>
            <section>
                <div style={{display:"flex"}}>
                <div>
                Paramol 500mg Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, toothaches, sore throats, period (menstrual) pains, arthritis, muscle aches, and the common cold.
                </div>
                <div>
{buttons.map((lable,i) => {
    return(<button style={button}>{lable}</button>)
})}
                </div>
                </div>
                <div className="tablediv">
                    <table className="table-1">
                    <thead>
                        <th>Drug Data</th>
                        <th>Drug detail</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                CORS should be manage by backend
                            </td>
                            <td>
                                CORS
                            </td>
                        </tr>
                        <tr>
                            <td>
                            CORS should be manage by backend
                            </td>
                            <td>
                                CORS
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </section>
            {/* </div> */}
        </div>
    )
}

export default Containt