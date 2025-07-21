import React,{useState} from 'react';

export default function Compose({isOpen ,onClose, onSubmit }){
    const [to,setTo] = useState('');
    const [subject,setSubject] = useState('');
    const [body,setBody] = useState('');
    const baseClass = "transition-all duration-300 bg-white shadow-md h-full overflow-y-auto";

    const handleSubmit = (e) =>{
      e.preventDefault();
      const email = {
          to,
          subject,
          body,
          status: "sent",
          sentAt: new Date().toISOString(),
          id: Date.now(),
        };
        
        onSubmit(email);
        setTo('');
        setSubject('');
        setBody('');
        onClose();
        
    };
        const handleCancel = () => {
      // Only save as draft if any field has content
      if (to || subject || body) {
        const draft = {
          to,
          subject,
          body,
          status: "draft",
          savedAt: new Date().toISOString(),
          id: Date.now(),
        };
        onSubmit(draft);
      }
      setTo('');
      setSubject('');
      setBody('');
      onClose();
    };

    const handleJustClose = () => {
    // Simply close the modal without saving anything
    setTo('');
    setSubject('');
    setBody('');
    onClose();
  };


    if (!isOpen) return null;

      return (
        <div className={` ${isOpen ? "w-64" : "w-0"} overflow-hidden rounded-2xl ${isOpen ? "block" : "hidden"}`}>
      <div className="bg-black/50 p-6 rounded-md shadow-lg max-w-md text-white" >
        <h2 className="text-lg text-center font-semibold mb-4">Compose Mail
        </h2>
        <button
          onClick={handleJustClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          title="Close"
        >
        <i class="ri-close-large-line"></i>
        </button>



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
              onClick={handleCancel}
              className="px-4 py-2 bg-white/20 rounded"
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
