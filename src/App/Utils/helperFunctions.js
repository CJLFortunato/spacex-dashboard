export const getLaunchesByYear = (data = []) =>{
    const dataset = {};
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const year = data[i].date_utc.slice(0, 4);
        
        if(dataset[year]) {
            dataset[year] = dataset[year] + 1;
        } else {
            dataset[year] = 1;
        }
    }
        

    
    return dataset;
};