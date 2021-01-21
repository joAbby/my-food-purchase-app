import React, {useState} from 'react'

const SignUp = (props) => {
    const[validationMessages,setValidationMessages] =useState([]);
    const [formData,setFormData]=useState({});
    const handleChange = ({target}) =>{
        setFormData({...formData,[target.name]:target.value})
    }
    const handleClick=(event) => {
        validateForm();
        if(validationMessages.length>0){
            event.preventDefault();
        }
    }
    const validateForm = () => {
       const {firstName,lastName}=formData;
       setValidationMessages([]);
       let messages =[];
       if(!firstName){
           messages.push("FirstName required");
       }
       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

       if (!pattern.test(lastName) ){
        messages.push("not valid");
       }
       setValidationMessages(messages);
    }

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'500px'}}>
            <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleClick}>
                <div>
                <label>FirstName</label>
                <input type="text" value={formData.firstName||''} 
                onChange={handleChange} name="firstName"/>
                </div>
                <div>
                <label>FirstName</label>
                <input type="text" value={formData.lastName||''} 
                onChange={handleChange} name="lastName"/>
               </div>
               <div>
                <label>Date of Birth</label>
                <input type="datetime-local" value={formData.DOB||''} 
                onChange={handleChange} name="DOB"/>
                </div>
                <div><label>Gender</label>
                <input type="radio" value="Male" checked={formData.gender==='Male'}
                onChange={handleChange} name="gender"/>
                <input type="radio" value="Female" checked={formData.gender==='Female'}
                onChange={handleChange} name="gender"/>
                </div>
                <button type="button" onClick={handleClick}>Save</button>
            </form>
            <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                <ul>
                    {validationMessages.map(vm => <li key={vm}>{vm}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default SignUp
