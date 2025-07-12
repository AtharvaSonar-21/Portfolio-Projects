import { DraftingCompass } from 'lucide-react';
import React,{useState} from 'react';

export default function Compose({isOpen ,onClose, onSubmit }){
    const [to,setTo] = useState('');
    const [subject,setSubject] = useState('');
    const [body,setBody] = useState('');
    const baseClass = "transition-all duration-300 bg-white shadow-md h-full overflow-y-auto";

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({to,subject,body});
        setTo('');
        setSubject('');
        setBody('');
        onClose();

    };

    if (!isOpen) return null;

      return (
        <div className={`${baseClass} ${isOpen ? "w-64" : "w-0"} overflow-hidden rounded-2xl z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="bg-white p-6 rounded-md shadow-lg max-w-md">
        <h2 className="text-lg text-center font-semibold mb-4">Compose Mail</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 rounded h-32 resize-none"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
