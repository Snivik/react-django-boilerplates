import React from 'react';
import boilerplateFields from "./boilerplateFields";


const DefaultFormComponent = ({onSubmit, children, style, className}) => {

    return <form
        onSubmit={onSubmit}
        style={style}
        className={className}>
            {children || null}
    </form>
};

const BoilerplateForm = ({
                             as: FormComponent = DefaultFormComponent,
                             onSubmit,
                             validate,
                             children,
                             ...otherProps

}) => {

    const _onSubmit = (e) => {
      e && e.preventDefault && e.preventDefault();

      if (validate && typeof validate === 'function'){
          const validation = validate();

          if (validation){

              if (otherProps.dispatch && otherProps.actions){
                  otherProps.dispatch(otherProps.actions.setErrors({validation}));
              } else {
                  console.error('No actions or dispatch in props to dispatch a validation error')
                  console.dir({otherProps});
              }

              return;
          }
      }

      if (onSubmit) onSubmit(otherProps.dispatch);
    };

    return <FormComponent onSubmit={_onSubmit} {...otherProps}>
        {boilerplateFields({...otherProps})}
        {children || null}
    </FormComponent>
};


export default BoilerplateForm
