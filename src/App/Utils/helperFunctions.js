export const getLaunchesByYear = (data = []) =>{
    const dataset = {};

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

export const getSuccessRate = (data = []) => {

    const counter = {
        successes: 0,
        failures: 0
    };

    for (let launch of data) {
        launch.success ? counter.successes++: counter.failures++;
    }

    return counter;

};

export const getCrewRate = (data = []) => {

    const counter = {
        manned: 0,
        unmanned: 0
    };

    for (let launch of data) {
        launch.crew.length > 0 ? counter.manned++: counter.unmanned++;
    }
    return counter;

};

export const getLaunchesByRocket = (data = []) =>{
    const dataset = {};

    for (let launch of data) {
        const rocketName = launch.rocket.name;
        
        if(dataset[rocketName]) {
            dataset[rocketName] = dataset[rocketName] + 1;
        } else {
            dataset[rocketName] = 1;
        }
    }
    
    return dataset;
};

export const colorGenerator = (str) => { // A function that takes in a string and converts it to a Hex code color. Found on Stack Overflow.

    const h = [...str].reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    const s = 95, l = 35 / 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}