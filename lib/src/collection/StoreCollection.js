import React from 'react';



const NoItemsDefaultComponent = () => <span>
    No items
</span>;



const setOrderBuilder = ({store, apiActions, dispatch}) => (ordering) => ()=> {

    const currentOrder = store.ordering;

    if (currentOrder === null){
        //console.log(`Setting ordering to: ${ordering}`);
        dispatch(apiActions.setListOrder(ordering, {store}));
    } else {
        const isNegative = currentOrder.indexOf('-') === 0;
        const orderingField = isNegative ? currentOrder.substr(1) : currentOrder;
        const isSame = orderingField === ordering;
        const newOrder = isSame ? `${isNegative ? '' : '-'}${ordering}` : ordering;
        // console.log({
        //     isSame,
        //     orderingField,
        //     currentOrder,
        //     isNegative,
        //     newOrder
        // });
        dispatch(apiActions.setListOrder(newOrder, {store}));
    }


};

const StoreCollection = ({
                             as: Component = 'ul',
                             itemComponent: ItemComponent = 'li',
                             noItemsComponent: NoItemsComponent = NoItemsDefaultComponent,
                             store,
                             ...props


}) => {


    // Generate Pages
    const {results} = store;


    const buildComponent = (item, key)=>{

        return <ItemComponent
        key={key}
        item={item}
        store={store}
        {...props}
    />};


    const rows = (results || []).map(buildComponent);



    const setOrder =  setOrderBuilder({store, ...props});

    return <Component store={store}
                      setOrder={setOrder}
                      {...props}
    >
        {results.length ?
            rows :
            <NoItemsComponent store={store} {...props} />}
    </Component>



};


export default StoreCollection
