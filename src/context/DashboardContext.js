import React, {createContext, useState} from 'react'
import fulldata from './fulldata'

export const DashboardContext = createContext()

const DashboardContextProvider = props => {

    const [dataChart, setDataChart] = useState(fulldata['2020'])
    const [yearData, setyearData] = useState('2020')

    const changeYear = el => {
        setyearData(el.target.value)
        setDataChart(fulldata[el.target.value])
    }

    return (
        <DashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )

}

export default DashboardContextProvider;