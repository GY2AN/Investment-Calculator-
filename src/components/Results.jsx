import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ input }) {
    const resutlData = calculateInvestmentResults(input);
    const initialInvestment = resutlData[0].valueEndOfYear - resutlData[0].annualInvestment - resutlData[0].interest;
    console.log(resutlData);
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Interest Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resutlData.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
}