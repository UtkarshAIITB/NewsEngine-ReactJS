import React, {useEffect,useState} from 'react'
import Cards from './Cards';
import Dropdown from './Dropdown';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Data = () =>{

    const [regional, setRegional] = useState([])
    const [summary, setSummary] = useState([])
    // const [tdeaths, setTdeaths] = useState('0')
    const [regional2, setRegional2] = useState([])
    const [summary2, setSummary2] = useState([])
    const [dated, setDated] = useState("2021-09-19")


    const updateData = async()=>{
        const url = 'https://api.rootnet.in/covid19-in/stats/latest';
        let cdata = await fetch(url);
        let parsedData = await cdata.json();
        setRegional(parsedData.data.regional);
        setSummary(parsedData.data.summary);
        // console.log(regional[1]['deaths']);
        // console.log(JSON.stringify(regional[1],null,2))
        
        // delete (regional[1].confirmedCasesForeign)
        // const propertyValues = Object.keys(regional[1]);
        // console.log(propertyValues);
        // setDated(parsedData.)
        // const car = regional[1];
        // delete car.confirmedCasesForeign;
        // console.log(car)
    }

    const updateData2 = async()=>{
        const url2 = 'https://api.rootnet.in/covid19-in/stats/history';
        let cdata2 = await fetch(url2);
        let parsedData = await cdata2.json();
        setRegional2(parsedData.data[parseInt(parsedData.data.length)-2].regional);  //-3 returned date of 15.09 , latest being 19.09
        setSummary2(parsedData.data[parseInt(parsedData.data.length)-2].summary);
        setDated(parsedData.data[parseInt(parsedData.data.length)-1].day);
    }

    const stateData = async()=>{
        Array.isArray(regional) && (console.log(regional[1]?.deaths))
    }

    useEffect(() => {
        updateData();
        updateData2();
        stateData();
        // eslint-disable-next-line
    }, [])



    return (
        <>
        <div className="container my-3" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }}> 
            
                
                    {/* {regional.map((element) =>{
                        return <div className="container" key={element.loc}>
                            <Cards deaths ={element.deaths} loc={element.loc} />
                        </div>
                    } )}    */}
                    {/* { regional2.map((element) =>{
                           return <Cards deaths ={summary.deaths} cases={summary.total} discharged={summary.discharged} check={element.deaths}/>
                    })} */}
            <Cards deaths ={summary.deaths} cases={summary.total} discharged={summary.discharged} deaths_prev={summary2.deaths} 
            cases_prev={summary2.total} discharged_prev={summary2.discharged} />

            <div className="container my-2 text-center">
                <button type="button" className="btn btn-outline-info">Last Updated on {dated} </button>
            </div>

                {/* { regional.map((element)=>{
                    return  console.log(element.loc)
                })} */}
        <Router>
          <Switch>
                          <Route exact path="/coviddashboard"><Dropdown key="general" category="general" name="Choose State" data={""} deaths ={summary.deaths} cases={summary.total} discharged={summary.discharged} ></Dropdown> </Route>
                            <Route exact path="/andamanandnicobarislands"> <Dropdown key="andamanandnicobarislands" category="andamanandnicobarislands" name="Andaman and Nicobar Islands" 
                             data = {regional[0]}/> </Route>
                            <Route exact path="/andhrapradesh"><Dropdown key="andhrapradesh" category="andhrapradesh" name="Andhra Pradesh" data = {regional[1]} >
                                </Dropdown> </Route>
                            <Route exact path="/arunachalpradesh"><Dropdown key="arunachalpradesh" category="arunachalpradesh" name="Arunachal Pradesh" data = {regional[2]} ></Dropdown> </Route>
                            <Route exact path="/assam"><Dropdown key="assam" category="assam" name="Assam" data = {regional[3]}></Dropdown> </Route>
                            <Route exact path="/bihar"><Dropdown key="bihar" category="bihar" name="Bihar" data = {regional[4]}></Dropdown> </Route>
                            <Route exact path="/chandigarh"><Dropdown key="chandigarh" category="chandigarh" name="Chandigarh" data = {regional[5]} ></Dropdown> </Route>
                            <Route exact path="/chhattisgarh"><Dropdown key="chhattisgarh" category="chhattisgarh" name="Chhattisgarh" data = {regional[6]}></Dropdown> </Route>
                            <Route exact path="/dadraandnagarhavelianddamananddiu"><Dropdown key="dadraandnagarhavelianddamananddiu" category="dadraandnagarhavelianddamananddiu" name="Dadra and Nagar Haveli and Daman and Diu" data = {regional[7]} ></Dropdown> </Route>
                            <Route exact path="/delhi"><Dropdown key="delhi" category="delhi" name="Delhi" data = {regional[8]}></Dropdown> </Route>
                            <Route exact path="/goa"><Dropdown key="goa" category="goa" name="Goa" data = {regional[9]}></Dropdown> </Route>
                            <Route exact path="/gujarat"><Dropdown key="gujarat" category="gujarat" name="Gujarat" data = {regional[10]}></Dropdown> </Route>
                            <Route exact path="/haryana"><Dropdown key="haryana" category="haryana" name="Haryana" data = {regional[11]}></Dropdown> </Route>
                            <Route exact path="/himachalpradesh"><Dropdown key="himachalpradesh" category="himachalpradesh" name="Himachal Pradesh" data = {regional[12]}></Dropdown> </Route>
                            <Route exact path="/jammuandkashmir"><Dropdown key="jammuandkashmir" category="jammuandkashmir" name="Jammu and Kashmir" data = {regional[13]}></Dropdown> </Route>
                            <Route exact path="/jharkhand"><Dropdown key="jharkhand" category="jharkhand" name="Jharkhand" data = {regional[14]}></Dropdown> </Route>
                            <Route exact path="/karnataka"><Dropdown key="karnataka" category="karnataka" name="Karnataka" data = {regional[15]}></Dropdown> </Route>
                            <Route exact path="/kerala"><Dropdown key="kerala" category="kerala" name="Kerala" data = {regional[16]}></Dropdown> </Route>
                            <Route exact path="/ladakh"><Dropdown key="ladakh" category="ladakh" name="Ladakh" data = {regional[17]}></Dropdown> </Route>
                            <Route exact path="/lakshadweep"><Dropdown key="lakshadweep" category="lakshadweep" name="Lakshadweep" data = {regional[18]} ></Dropdown> </Route>
                            <Route exact path="/madhyapradesh"><Dropdown key="madhyapradesh" category="madhyapradesh" name="Madhya Pradesh" data = {regional[19]}></Dropdown> </Route>
                            <Route exact path="/maharashtra"><Dropdown key="maharashtra" category="maharashtra" name="Maharashtra" data = {regional[20]}></Dropdown> </Route>
                            <Route exact path="/manipur"><Dropdown key="manipur" category="manipur" name="Manipur" data = {regional[21]}></Dropdown> </Route>
                            <Route exact path="/meghalaya"><Dropdown key="meghalaya" category="meghalaya" name="Meghalaya" data = {regional[22]}></Dropdown> </Route>
                            <Route exact path="/mizoram"><Dropdown key="mizoram" category="mizoram" name="Mizoram" data = {regional[23]}></Dropdown> </Route>
                            <Route exact path="/nagaland"><Dropdown key="nagaland" category="nagaland" name="Nagaland"  data = {regional[24]}></Dropdown> </Route>
                            <Route exact path="/odisha"><Dropdown key="odisha" category="odisha" name="Odisha"  data = {regional[25]}></Dropdown> </Route>
                            <Route exact path="/puducherry"><Dropdown key="puducherry" category="puducherry" name="Puducherry"  data = {regional[26]}></Dropdown> </Route>
                            <Route exact path="/punjab"><Dropdown key="punjab" category="punjab" name="Punjab"  data = {regional[27]}></Dropdown> </Route>
                            <Route exact path="/rajasthan"><Dropdown key="rajasthan" category="rajasthan" name="Rajasthan"  data = {regional[28]}></Dropdown> </Route>
                            <Route exact path="/sikkim"><Dropdown key="sikkim" category="sikkim" name="Sikkim"  data = {regional[29]}></Dropdown> </Route>
                            <Route exact path="/tamilnadu"><Dropdown key="tamilnadu" category="tamilnadu" name="Tamil Nadu"  data = {regional[30]}></Dropdown> </Route>
                            <Route exact path="/telangana"><Dropdown key="telangana" category="telangana" name="Telangana"  data = {regional[31]}></Dropdown> </Route>
                            <Route exact path="/tripura"><Dropdown key="tripura" category="tripura" name="Tripura"  data = {regional[32]}></Dropdown> </Route>
                            <Route exact path="/uttarakhand"><Dropdown key="uttarakhand" category="uttarakhand" name="Uttarakhand"  data = {regional[33]}></Dropdown> </Route>
                            <Route exact path="/uttarpradesh"><Dropdown key="uttarpradesh" category="uttarpradesh" name="Uttar Pradesh"  data = {regional[34]}></Dropdown> </Route>
                            <Route exact path="/westbengal"><Dropdown key="westbengal" category="westbengal" name="West Bengal"  data = {regional[35]}></Dropdown> </Route>
          </Switch>
        </Router>
           
            

            
        </div>
        </>
    )
}

export default Data
