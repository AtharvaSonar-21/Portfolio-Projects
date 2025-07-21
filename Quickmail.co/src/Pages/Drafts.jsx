import { useOutletContext } from "react-router-dom";
const Drafts = () => {
  const context = useOutletContext() || {};
  const { draftEmails = [] } = context;
  return(
    <div className="m-5 text-gray-600">
      <h2 className="text-2xl mb-2">📝 Drafts</h2>

      {draftEmails.length === 0 ? (
        <p className="px-4 text-gray-500">No draft emails saved yet.</p>
      ) : (
        <ul className="space-y-4 px-4">
          {draftEmails.map((email) => (
            <li key={email.id} className="border p-4 rounded shadow bg-white">
              <p><strong>To:</strong> {email.to}</p>
              <p><strong>Subject:</strong> {email.subject}</p>
              <p><strong>Body:</strong> {email.body}</p>
              <p className="text-sm text-gray-500">
                <strong>Saved At:</strong> {new Date(email.savedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
      </div>
  )
}
export default Drafts;
