import {useOutletContext} from 'react-router-dom';

const Promotional = () => {
      const { promotionalEmails = [] } = useOutletContext();
    return(
   
        <div className="m-5 text-gray-600">
      <h2 className="text-2xl mb-2">📤 Promotional Mails</h2>
      {promotionalEmails.length === 0 ? (
        <p className="px-4 text-gray-500">No promotional emails yet.</p>
      ) : (
        <ul className="space-y-4 px-4">
          {promotionalEmails.map((email) => (
            <li key={email.id} className="border p-4 rounded shadow bg-white">
              <p><strong>From:</strong> {email.from}</p>
              <p><strong>Subject:</strong> {email.subject}</p>
              <p><strong>Body:</strong> {email.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    )

}
export default Promotional;
