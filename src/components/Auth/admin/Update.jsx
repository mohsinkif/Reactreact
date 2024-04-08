import React from 'react';

const Update = () => {
  return (
    <>
      <div className="m-4">
        <table className=" border-collapse border-black border" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th className="border-black border p-2">Accounts</th>
              <th className="border-black border p-2">Action Update</th>
              <th className="border-black border p-2">Action Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-black border p-2">Accounts 1</td>
              <td className="border-black border p-2">update 1</td>
              <td className="border-black border p-2">Delete 1</td>
            </tr>
            <tr>
              <td className="border-black border p-2">Accounts 2</td>
              <td className="border-black border p-2">update 2</td>
              <td className="border-black border p-2">Delete 2</td>
            </tr>
            <tr>
              <td className="border-black border p-2">Accounts 3</td>
              <td className="border-black border p-2">update 3</td>
              <td className="border-black border p-2">Delete 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Update;
