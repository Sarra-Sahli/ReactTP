function Form(props) {
    return ( 
        <>
        <label>{props.labelle}: </label>
        <input type="text" name={props.Name}/>
        <Button variant="primary" size="lg" onClick={() => alert('Primary Button Clicked!')}>
  Large Primary Button
</Button>
    </>
     );
}

export default Form;