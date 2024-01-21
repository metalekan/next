"use client";
import {useState, FormEvent} from 'react';
import {useRouter} from 'next/navigation';

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const {push} = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
  }

  return (
    <main className="min-h-screen text-center pt-32 px-5 bg-[#212121] text-white">
      <div className="">
       <h1>Enter your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input className='text-black' type="text" placeholder="Type your name..." onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Predict Data</button>
      </form>
    </main>
  );
}
