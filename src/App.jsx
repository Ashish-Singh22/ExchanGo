import React, { useState } from 'react';
import InputBox from './components/InputBox';
import use_currency_info from './hooks/use_currency_info';

function App() {
  const [a, s_a] = useState(0);
  const [c_a, s_c_a] = useState(0);
  const [f, s_f] = useState("usd");
  const [t, s_t] = useState("inr");
  const c_o = use_currency_info(f);
  const options = Object.keys(c_o);

  const swap = () => {
    s_f(t);
    s_t(f);
    s_c_a(a);
    s_a(c_a);
  };

  const convert = () => {
    s_c_a(a * c_o[t]);
  };

  return (
    <>
      <div className='p-10 rounded-[3rem] backdrop-blur-sm bg-white/30 w-auto h-auto grid place-items-center'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className='w-full mb=1'>
            <InputBox
              label="From"
              amount={a}
              currency_options={options}
              onCurrencyChange={(currency) => s_f(currency)}
              select_currency={f}
              onAmountChange={(amount) => s_a(amount)}
            />
          </div>

          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>

          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={c_a}
              currency_options={options}
              onCurrencyChange={(currency) => s_t(currency)}
              select_currency={t}
              onAmountChange={(amount) => s_a(amount)}
              amount_disable
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {f.toUpperCase()} to {t.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
