import React from 'react';
import boilerplateFields from "./boilerplateFields";

const BoilerplateForm = ({
                             as: FormComponent = 'form',
                             onSubmit,
                             ...otherProps

}) => {

    const _onSubmit = (e) => {
      e && e.preventDefault && e.preventDefault();

      if (onSubmit) onSubmit(e);
    };

    return <FormComponent onSubmit={_onSubmit} {...otherProps}>
        {boilerplateFields({...otherProps})}
    </FormComponent>
};


export default BoilerplateForm
