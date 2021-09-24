import React from 'react'

const Cards = (props)=> {
    return (
        <>
        <div className="card mx-3 my-3" style={{
            width: '250px',
            flexDirection: 'row'
        }}>
          <div className="card-body">
            <h5 className="card-title text-info">Total Cases</h5>
            <p className="card-text">
              { String(props.cases) }
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
              { String(props.cases - props.discharged - props.deaths) }
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
              { String(props.deaths) }
            </p>
          </div>
        </div>

        <div className="card mx-3 my-3" style={{
            width: '250px',
            flexDirection: 'row'
        }}>
          <div className="card-body">
            <h5 className="card-title text-success">Total Discharged</h5>
            <p className="card-text">
              { String(props.discharged) }
            </p>
          </div>
        </div>

        <div className="card mx-3 my-3" style={{
            width: '250px',
            flexDirection: 'row'
        }}>
          <div className="card-body">
            <h5 className="card-title text-danger">Deaths Today</h5>
            <p className="card-text">
            { String( props.deaths - (props.deaths_prev)) }
            </p>
          </div>
        </div>

        <div className="card mx-3 my-3" style={{
            width: '250px',
            flexDirection: 'row'
        }}>
          <div className="card-body">
            <h5 className="card-title text-dark">Change Today</h5>
            <p className="card-text">
              { String(String(props.cases - props.discharged - props.deaths - (props.cases_prev - props.discharged_prev - props.deaths_prev))) }
            </p>
          </div>
        </div>
        
        </>
      
    );
}

export default Cards
