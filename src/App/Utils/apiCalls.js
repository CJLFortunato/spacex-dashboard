export const callHistoryAPI = async () => {

    const body = {
        "query": {},
        "options": {
            "select": {
                "title": 1,
                "event_date_utc": 1,
                "details": 1
            },
            "pagination": false,
            "sort": { "event_date_utc": -1 }
        }
    };

    const response = await fetch('https://api.spacexdata.com/v4/history/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    if(!response.ok) {
        throw new Error("The request to the History API failed");
    }

    const data = await response.json() ;

    return data;
};

export const callRoadsterAPI = async () => {

    const body = {
        "query": {},
        "options": {
            "select": {
                "earth_distance_km": 1
            }
        }
    };

    const response = await fetch('https://api.spacexdata.com/v4/roadster/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    if(!response.ok) {
        throw new Error("The request to the History API failed");
    }

    const data = await response.json() ;

    return data;
};