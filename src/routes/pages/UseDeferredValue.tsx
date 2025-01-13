import { useState, useDeferredValue } from 'react';
import  SlowList  from '../../components/SlowList';

export default function UseDeferredValue() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text,"initial");
  return (
    <div className="flex flex-col items-center p-4">
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>useDeferredValue</title>
      <h1 className="text-2xl font-bold mb-4">useDeferredValue</h1>
      <input 
        className="border border-gray-300 rounded p-2 mb-4 w-full max-w-md"
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <SlowList text={deferredText} />
    </div>
  );
}
