import React from 'react'
import {
    Link
} from "react-router-dom";

const Dropdown = (props)=> {

    const case_valid = () =>{
        if (String(props.data?.confirmedCasesIndian) === 'undefined'){
            return "Select State";
        }
        return String(props.data?.confirmedCasesIndian) ;
    }

    const activecase_valid = () =>{
        if (String(props.data?.confirmedCasesIndian - props.data?.deaths - props.data?.discharged) === 'NaN'){
            return "Select State";
        }
        return String(props.data?.confirmedCasesIndian - props.data?.deaths - props.data?.discharged);
    }

    const death_valid = () =>{
        if(String(props.data?.deaths) === 'undefined'){
            return "Select State";
        }
        return String(props.data?.confirmedCasesIndian - props.data?.deaths - props.data?.discharged);
    }

    return (
        <>
            <div className="btn-group my-3" style={{width: '400px'}}>
                <button type="button" className="btn btn-primary dropdown-toggle  btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.name}
                </button>
                <ul className="dropdown-menu" style={{width: '400px',
                                                      height: '200px',
                                                      overflowY: 'auto'}}>
                    <li>< Link className="dropdown-item" to="/andamanandnicobarislands" category={props.category}>   Andaman and Nicobar Islands</Link></li>
                    <li>< Link className="dropdown-item" to="/andhrapradesh" category={props.category}>   Andhra Pradesh</Link></li>
                    <li>< Link className="dropdown-item" to="/arunachalpradesh" category={props.category}>   Arunachal Pradesh</Link></li>
                    <li>< Link className="dropdown-item" to="/assam" category={props.category}>   Assam</Link></li>
                    <li>< Link className="dropdown-item" to="/bihar" category={props.category}>   Bihar</Link></li>
                    <li>< Link className="dropdown-item" to="/chandigarh" category={props.category}>   Chandigarh</Link></li>
                    <li>< Link className="dropdown-item" to="/chhattisgarh" category={props.category}>   Chhattisgarh</Link></li>
                    <li>< Link className="dropdown-item" to="/dadraandnagarhavelianddamananddiu" category={props.category}>   Dadra and Nagar Haveli and Daman and Diu</Link></li>
                    <li>< Link className="dropdown-item" to="/delhi" category={props.category}>   Delhi</Link></li>
                    <li>< Link className="dropdown-item" to="/goa" category={props.category}>   Goa</Link></li>
                    <li>< Link className="dropdown-item" to="/gujarat" category={props.category}>   Gujarat</Link></li>
                    <li>< Link className="dropdown-item" to="/haryana" category={props.category}>   Haryana</Link></li>
                    <li>< Link className="dropdown-item" to="/himachalpradesh" category={props.category}>   Himachal Pradesh</Link></li>
                    <li>< Link className="dropdown-item" to="/jammuandkashmir" category={props.category}>   Jammu and Kashmir</Link></li>
                    <li>< Link className="dropdown-item" to="/jharkhand" category={props.category}>   Jharkhand</Link></li>
                    <li>< Link className="dropdown-item" to="/karnataka" category={props.category}>   Karnataka</Link></li>
                    <li>< Link className="dropdown-item" to="/kerala" category={props.category}>   Kerala</Link></li>
                    <li>< Link className="dropdown-item" to="/ladakh" category={props.category}>   Ladakh</Link></li>
                    <li>< Link className="dropdown-item" to="/lakshadweep" category={props.category}>   Lakshadweep</Link></li>
                    <li>< Link className="dropdown-item" to="/madhyapradesh" category={props.category}>   Madhya Pradesh</Link></li>
                    <li>< Link className="dropdown-item" to="/maharashtra" category={props.category}>   Maharashtra</Link></li>
                    <li>< Link className="dropdown-item" to="/manipur" category={props.category}>   Manipur</Link></li>
                    <li>< Link className="dropdown-item" to="/meghalaya" category={props.category}>   Meghalaya</Link></li>
                    <li>< Link className="dropdown-item" to="/mizoram" category={props.category}>   Mizoram</Link></li>
                    <li>< Link className="dropdown-item" to="/nagaland" category={props.category}>   Nagaland</Link></li>
                    <li>< Link className="dropdown-item" to="/odisha" category={props.category}>   Odisha</Link></li>
                    <li>< Link className="dropdown-item" to="/puducherry" category={props.category}>   Puducherry</Link></li>
                    <li>< Link className="dropdown-item" to="/punjab" category={props.category}>   Punjab</Link></li>
                    <li>< Link className="dropdown-item" to="/rajasthan" category={props.category}>   Rajasthan</Link></li>
                    <li>< Link className="dropdown-item" to="/sikkim" category={props.category}>   Sikkim</Link></li>
                    <li>< Link className="dropdown-item" to="/tamilnadu" category={props.category}>   Tamil Nadu</Link></li>
                    <li>< Link className="dropdown-item" to="/telangana" category={props.category}>   Telangana</Link></li>
                    <li>< Link className="dropdown-item" to="/tripura" category={props.category}>   Tripura</Link></li>
                    <li>< Link className="dropdown-item" to="/uttarakhand" category={props.category}>   Uttarakhand</Link></li>
                    <li>< Link className="dropdown-item" to="/uttarpradesh" category={props.category}>   Uttar Pradesh</Link></li>
                    <li>< Link className="dropdown-item" to="/westbengal" category={props.category}>   West Bengal</Link></li>
                </ul>
            </div>

        <div className="container my-3" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }}>

            <div className="card mx-3 my-3" style={{
            width: '250px',
            flexDirection: 'row'
            }}>
                <div className="card-body">
                    <h5 className="card-title text-info">Total Cases</h5>
                    <p className="card-text">
                        {/* { String(props.data?.confirmedCasesIndian) } */}
                        {case_valid()}
                    </p>
                </div>
            </div>

            <div className="card mx-3 my-3" style={{
            width: '250px',
            flexDirection: 'row'
            }}>
                <div className="card-body">
                    <h5 className="card-title text-warning">Active Cases</h5>
                    <p className="card-text">
                        {/* { String(props.data?.confirmedCasesIndian - props.data?.deaths - props.data?.discharged) } */}
                        {activecase_valid()}
                    </p>
                </div>
            </div>

            <div className="card mx-3 my-3" style={{
                width: '250px',
                flexDirection: 'row'
            }}>
                <div className="card-body">
                    <h5 className="card-title text-danger">Total Deaths</h5>
                    <p className="card-text">
                        {/* { String(props.data[1]) } */}
                        {/* {String(props.data?.deaths)} */}
                        {death_valid()}
                        {/* {console.log(props.data.deaths)} */}
                    </p>
                </div>
            </div>
        </div>

            {/* <div className="container">
                <h3 class="text-center">{props.name} </h3>
            </div> */}

        </>
    )
}

// Dropdown.defaultProps ={
//     data : {
//         deaths : "Enter State",
//         confirmedCasesIndian: "Enter State"
//     }
// }



export default Dropdown

