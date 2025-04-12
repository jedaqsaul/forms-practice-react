# Setup the form Component

- we will create a simple form with name, email, phone and submit button

# Steps

## set up form element

## import Form to App.jsx

## Captre input with state

- In react we do not use getElementById. Insted we use something better.
- useState = memory for your inputs
- Here the first step is to create a state to store input values
- ie: const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  });

- the second step is to handle change for each input
  - const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
    [name]: value,
    }));
    };

What just happened

- useState()- Creates a memory to track the form values
- value= {...}- Tells input to show whats in state
- onChange={...} Updates the state every time you type
- [name]: value - dynamically updtaes the correct field

- so now:
- when you type into an input, react sotres it in formData

## Submitting the form and displaying info

Now that your form captures data, let us

- prevent the page from refreshing
- store the submitted info
- display it on the screen
  ie const handleSubmit = (e) => {
  e.preventDefault(); // stop refresh
  setSubmittedData(formData); // store the data for display
  setFormData({ name: "", email: "", phone: "" }); // reset inputs
  };

### How it works

- onSubmit= {handleSubmit}- handles from submission
- e.preventDefault()- stops the default refresh behaviour
- setSubmittedData(...)- Stores the current form input for later display
- {submittedData && (...)}- Only shows the result after submitting.

### displaying the data

- the Display- Accepts data as a prop from the parent
  data ? (...) : (...): conditional rendering -if there's data, show it; else show a message
