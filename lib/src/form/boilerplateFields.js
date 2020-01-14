import React from 'react';
import BoilerplateField from "./BoilerplateField";

const boilerplateFields = ({
                             meta,
                             store,
                             actions,
                             dispatch,
                             update,
                             ...otherProps
}) => {


    const {validation} = store;


    const getter = meta => () => {

        const {name} = meta;

        if (update){

            if (store.updatedData[name] === undefined){
                return store.data[name];
            } else {
                return store.updatedData[name];
            }

        } else {
            return store.data[name];
        }


    };

    const setter = meta => newValue => {

        const {name} = meta;

        if (update){
            return dispatch(actions.updateData({[name]: newValue}));
        } else {
            return dispatch(actions.updateField({name, value: newValue}));
        }



    };

    const renderField = (fieldMeta, key) => {

        let errors;
        if (validation && validation[fieldMeta.name]){
            errors = validation[fieldMeta.name];
        }

        return <BoilerplateField
            key={key}
            meta={fieldMeta}

            // Form stuff
            formMeta={meta}
            formProps={otherProps}
            errors = {errors}
            // redux
            getter={getter}
            setter={setter}
            actions={actions}
        />;

    };

    const fields = meta.map(renderField);
    return fields;
};


export default boilerplateFields
