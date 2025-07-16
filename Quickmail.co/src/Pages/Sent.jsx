import { useOutletContext } from 'react-router-dom';

const Sent = () =>{ 
    const { sentEmails } = useOutletContext();
return (
<div>
    <h2 className="text-xl p-4">📤 Sent Mails (Dummy Page)</h2>
    <div >
    {sentEmails.length === 0 ? (
        <p>No sent emails yet.</p>
      ) : (
        <ul className="space-y-4">
          {sentEmails.map((email) => (
            <li key={email.id} className="border p-4 rounded shadow">
              <p><strong>To:</strong> {email.to}</p>
              <p><strong>Subject:</strong> {email.subject}</p>
              <p><strong>Body:</strong> {email.body}</p>
              <p className="text-sm text-gray-500"><strong>Sent At:</strong> {new Date(email.sentAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}</div>
      </div>

    );
    }
export default Sent;
