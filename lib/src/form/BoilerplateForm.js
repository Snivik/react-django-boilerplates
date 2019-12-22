import React from 'react';
import boilerplateFields from "./boilerplateFields";

const BoilerplateForm = ({
                             as: FormComponent = 'form',
                             onSubmit,
                             ...otherProps

}) => {


    return <FormComponent onSubmit={onSubmit} {...otherProps}>
        {boilerplateFields({...otherProps})}
    </FormComponent>
};


export default BoilerplateForm
