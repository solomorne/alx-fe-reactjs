 const UserProfile = (props) => {
   return (
     <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      padding: '20px', 
      margin: '20px auto', 
      maxWidth: '400px',
      backgroundColor: '#f9f9f9'
    }}>
       <h2 style={{ color: 'steelblue', marginBottom: '10px' }}>{props.name}</h2>
       <p style={{ fontSize: '1.1rem' }}>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
       <p style={{ fontStyle: 'italic', color: '#555' }}> Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;