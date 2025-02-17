
const DeleteToggle = ({ deleteToggle,setDeleteToggle,selectedExpense,handleDelete}) => {

    console. log("Selected dataaaa",selectedExpense)
  return (
    
    <>
      {deleteToggle ? (
        <div className="delete-popup">
          <p>Are sure you want to delete??</p>
          <button onClick={ () => {
             if (selectedExpense) {
              handleDelete(selectedExpense.id); 
              setDeleteToggle(false);
            } else {
              console.error("Error: selectedExpense is invalid", selectedExpense);
            }
          }


            
            }> Yes</button>
          <button onClick={()=>setDeleteToggle(false)}>No</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default DeleteToggle;
