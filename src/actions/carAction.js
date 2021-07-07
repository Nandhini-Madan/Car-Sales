export const addFeature=(feature)=>{
    console.log("Add Feature");
    return{type:"ADD_FEATURE",payload:feature}
};

export const removeFeature=(feature)=>{
    console.log("Remove Feature");
    return{
        type:"REMOVE_FEATURE",payload:feature
    }
};