import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currency_options = [],
    select_currency = "usd",
    amount_disable = false,
    currency_disable = false,
    className = "",
}) {
    const amount_id = useId();

    return (
        <div className={`bg-white w-auto h-auto rounded-[3rem] p-5 flex gap-[20rem] ${className}`}>
            <div className="w-1/2 flex flex-col gap-[1rem] justify-center items-start">
                <label htmlFor={amount_id} className="text-[1.5rem] text-black font-bold">{label}</label>
                <input
                    id={amount_id}
                    type="number"
                    className="border-t-[0.2rem] border-l-[0.2rem] rounded-[3rem] w-auto p-3 text-black text-[1.5rem]"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amount_disable}
                />
            </div>

            <div className="w-1/2 flex flex-col gap-[1rem] justify-center items-start">
                <p className="text-[1.5rem] text-black font-bold">Currency Type</p>
                <select
                    className="border-t-[0.2rem] border-l-[0.2rem] rounded-[3rem] w-auto p-3 text-black text-[1.5rem]"
                    value={select_currency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currency_disable}
                >
                    {currency_options.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()} {/* Display the currency code in uppercase */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
