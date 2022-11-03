import { Fragment, useState } from "react";
import card from "../../card";
import "./Filter.scss";

function Filter({ sendDataToParent }) {
    const [memoryValue, setMemoryValue] = useState("Memory");
    const [companyValue, setCompanyValue] = useState("Company");
    const [cardItem, setcardItem] = useState(card)

    const filterCard = async (event) => {
        event.preventDefault();
        let findCard = [432423];
        if (memoryValue === "Memory" && companyValue === "Company") { findCard = cardItem }
        if (memoryValue !== "Memory" && companyValue === "Company") { findCard = cardItem.filter((el) => el.memoryCapacity <= memoryValue) }
        if (memoryValue === "Memory" && companyValue !== "Company") { findCard = cardItem.filter((el) => el.nameOfManufacturer === companyValue) }
        if (memoryValue !== "Memory" && companyValue !== "Company") { findCard = cardItem.filter((el) => el.memoryCapacity <= memoryValue && el.nameOfManufacturer === companyValue) }
        sendDataToParent(findCard);
    }

    return (
        <Fragment>
            <form>
                <div>
                    <select onChange={(event) => { setMemoryValue(event.target.value) }}>
                        <option value={"Memory"}>Memory</option>
                        <option value={32}>To 32 Gb</option>
                        <option value={64}>From 32 to 64</option>
                        <option value={128}>From 64 to 128</option>
                        <option value={"2048"}>From 128 Gb...</option>
                    </select>
                    <select onChange={(event) => { setCompanyValue(event.target.value) }}>
                        <option value={"Company"}>Company</option>
                        <option value={"Sony"}>Sony</option>
                        <option value={"IoT"}>IoT</option>
                        <option value={"IgorAndNastya"}>IgorAndNastya</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <button type="submit" onClick={filterCard}>Apply</button>
            </form>
        </Fragment>
    )
}

export default Filter;