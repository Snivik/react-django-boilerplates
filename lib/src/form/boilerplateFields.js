import React from 'react';
import BoilerplateField from "./BoilerplateField";

const boilerplateFields = ({
                             meta,
                             store,
                             actions,
                             dispatch,
                             ...otherProps
}) => {




    const getter = meta => () => {

        const {name} = meta;
        return store.data[name];

    };

    const setter = meta => newValue => {

        const {name} = meta;

        return dispatch(actions.updateField({name, value: newValue}))

    };

    const renderField = (fieldMeta, key) => <BoilerplateField
        key={key}
        meta={fieldMeta}

        // Form stuff
        formMeta={meta}
        formProps={otherProps}

        // redux
        getter={getter}
        setter={setter}
        actions={actions}
    />;

    const fields = meta.map(renderField);
    return fields;
};


export default boilerplateFields
