import React from 'react';



const NoItemsDefaultComponent = () => <div>
    No items
</div>;

const StoreCollection = ({
                             as: Component = 'ul',
                             itemComponent: ItemComponent = 'li',
                             noItemsComponent: NoItemsComponent = NoItemsDefaultComponent,
                             store,
                             actions,
                             ...props


}) => {


    // Generate Pages
    const {results} = store;
    const rows = (results || []).map((item, key)=><ItemComponent
        key={key}
        item={item}
    />);


    return <Component store={store} actions={actions} {...props}>
        {results.length ?
            rows :
            <NoItemsDefaultComponent />}
    </Component>



};


export default StoreCollection
