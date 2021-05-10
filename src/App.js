import React, {useState} from "react";
import "./App.css";

const option = [
    {
        label: "Years",
        value: "years",
    },
    {
        label: "Months",
        value: "months",
    },
    {
        label: "Days",
        value: "days",
    },
];

const years = [

    {
        label: "Years",
    },
    {
        label: "Last Year",
        value: "last"
    },
    {
        label: "Current Year",
        value: "current"
    },
    {
        label: "Future Year",
        value: "future"
    }
]

const months = [
    {
        label: "Months",
    },
    {
        label: "january",
        value: "january",
    },
    {
        label: "february",
        value: "february",
    },
    {
        label: "march",
        value: "march",
    },
    {
        label: "april",
        value: "april",
    },];
const days = [
    {
        label: "Days",
    },
    {
        label: "monday",
        value: "monday",
    },
    {
        label: "tuesday",
        value: "tuesday",
    },
    {
        label: "wednesday",
        value: "wednesday",
    },
    {
        label: "thursday",
        value: "thursday",
    },
    {
        label: "friday",
        value: "friday",
    },

];

const emptyData = {
    label: "there is no data !"
}

export default function App() {
    const [showOptions, setOptions] = useState(false)

    const [showSelectTab, setSelectTab] = useState("")
    const [isRadioButtonChecked, setIsRadioButtonChecked] = useState("")


    function radioClick() {
        setIsRadioButtonChecked("radioChecked")
        setOptions(true);
    }

    function clearRadioClick() {
        setIsRadioButtonChecked("radioUnchecked")
        setOptions(false);
    }


    function handleClick(value) {
        console.log(value)
        if (value === "years") {
            setSelectTab("years")
        } else if (value === "months") {
            setSelectTab("months")
        } else if (value === "days") {
            setSelectTab("days")
        }
    }


    return (
        <div>
            <div className="App">
                <h1>Select radio button then select the days, months or years</h1>
            </div>
            <form action="">
                <div style={{margin: "20px"}}>
                    <ul style={{listStyleType: "none"}}>
                        <li>
                            <label>
                                <input type="radio" name="radio1" value="getData" onClick={radioClick}
                                       checked={isRadioButtonChecked === "radioChecked"}/>
                                Get Data
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="radio2" value="removeData" onClick={clearRadioClick}
                                       checked={isRadioButtonChecked === "radioUnchecked"}/>
                                Remove Data
                            </label>
                        </li>
                    </ul>
                </div>
            </form>
            {showOptions &&
            <div>
                <select value="Select Options" style={{margin: "20px"}}>
                    <option disabled>Select Options</option>
                    {option.map((option, index) => (
                        <option value={option.value} key={index}
                                onClick={() => handleClick(option.value)}>{option.label} </option>
                    ))}
                </select>
                {years.length > 0 ?
                    <>
                        {showSelectTab === "years" &&

                        <select style={{margin: "20px"}}>
                            <option disabled>Select Year</option>

                            {years.map((years, index) => (
                                <option value={years.value} key={index}>{years.label}</option>
                            ))}
                        </select>
                        }
                    </>
                    : <h6>{emptyData.label}</h6>
                }
                {months.length > 0 ?
                    <>
                        {showSelectTab === "months" &&
                        <select style={{margin: "20px"}}>
                            <option disabled>Select Month</option>
                            {months.map((months, index) => (
                                <option value={months.value} key={index}>{months.label}</option>
                            ))}
                        </select>
                        }
                    </>
                    : <h6>{emptyData.label}</h6>
                }
                {days.length > 0 ?
                    <>
                        {showSelectTab === "days" &&
                        <select style={{margin: "20px"}}>
                            <option disabled>Select Day</option>
                            {days.map((days, index) => (
                                <option value={days.value} key={index}>{days.label}</option>
                            ))}
                        </select>
                        }
                    </>
                    : <h6>{emptyData.label} </h6>
                }
            </div>
            }
        </div>
    );
}