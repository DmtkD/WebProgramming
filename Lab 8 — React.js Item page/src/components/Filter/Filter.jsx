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
        let left = parseInt(memoryValue.toString().split(",")[0]);
        let right = parseInt(memoryValue.toString().split(",")[1]);
        if (memoryValue === "Memory" && companyValue === "Company") { findCard = cardItem }
        if (memoryValue !== "Memory" && companyValue === "Company") { findCard = cardItem.filter((el) => el.memoryCapacity >= left && el.memoryCapacity <= right) }
        if (memoryValue === "Memory" && companyValue !== "Company") { findCard = cardItem.filter((el) => el.nameOfManufacturer === companyValue) }
        if (memoryValue !== "Memory" && companyValue !== "Company") { findCard = cardItem.filter((el) => el.memoryCapacity >= left && el.memoryCapacity <= right && el.nameOfManufacturer === companyValue) }
        sendDataToParent(findCard);
    }

    return (
        <Fragment>
            <form>
                <div>
                    <select onChange={(event) => { setMemoryValue(event.target.value) }}>
                        <option multiple={true} value={"Memory"}>Memory</option>
                        <option multiple={true} value={["0", "32"]}>To 32 Gb</option>
                        <option multiple={true} value={["32", "64"]}>From 32 to 64</option>
                        <option multiple={true} value={["64", "128"]}>From 64 to 128</option>
                        <option multiple={true} value={["128", "2048"]}>From 128 Gb...</option>
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