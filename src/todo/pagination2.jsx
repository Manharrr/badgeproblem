

import { useState } from "react";

export default function App() {
  const names = [
    "Arjun","Rahul","Amit","Suresh","Ravi",
    "Vikram","Kiran","Manoj","Anil","Deepak",
    "Nikhil","Sachin","Rohit","Prakash","Sunil",
    "Ajay","Sanjay","Vivek","Pankaj","Ashok"
  ];

  const page = 5;
  const [data, setData] = useState(0);

  const start = data * page;//Which index-ൽ നിന്ന് names കാണിക്കണം എന്ന് calculate ചെയ്യുന്നു
  //data = 0 → start = 0
//data = 1 → start = 5
//data = 2 → start = 10
 
  const currentName = names.slice(start, start + page);

  const nextPage = () => {
    if (start + page < names.length) {
      setData(data + 1);
    }
  };

  const back = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };

  return (
    <div>
      <ul>
        {currentName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <button onClick={back}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
