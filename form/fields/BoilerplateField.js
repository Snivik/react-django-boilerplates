import React from 'react';
const DefaultField = ({value, onChange}) => {


    return <input value={value} onChange={(e)=>onChange(e.target.value)} />

};


const BoilerplateField = ({meta, getter, setter, ...otherProps}) => {



    const {as: Component=DefaultField} = meta;

    const value= getter(meta)();
    const onChange= setter(meta);

    return <Component value={value} onChange={onChange} meta={meta} {...otherProps}/>
};


export default BoilerplateField