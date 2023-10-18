import jsPDF from "jspdf";
import "jspdf-autotable";


const GeneratePDF = ({person}) => {

    // Generate PDF
    const generate = () => {
        const doc = new jsPDF()

        doc.autoTable({
            head: [['Name', 'Age', 'Country']],
            body: 
            person.map(({name, age, country}) => {
                return [
                    name, age, country
                ]
            })
        });

        doc.save("table.pdf")
    }

    return (
        <div className="text-center mt-3">
            <button className="bg-blue-600 rounded-md p-3 text-white" type="primary" onClick={generate}>Donwload PDF</button>
        </div>
    );
}
 
export default GeneratePDF;