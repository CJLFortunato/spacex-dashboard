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
    // console.log(data);
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
        throw new Error("The request to the Roadster API failed");
    }

    const data = await response.json() ;
    // console.log(data);
    return data;
};

export const callLaunchesAPI = async () => {

    const body = {
        "query": {},
        "options": {
            "select": {
                "title": 1,
                "date_utc": 1,
                "rocket": 1,
                "success": 1,
                "crew": 1,
                "fairings.recovered": 1
            },
            "pagination": false,
            "populate": [
                {
                    "path":"rocket",
                    "select": {
                        "name": 1
                    }
                }
            ]
        }
    };

    const response = await fetch('https://api.spacexdata.com/v4/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    let data;

    if(response.ok) {
        data = await response.json();
    } else {
        data = {};
    }
    // console.log(data);
    return data;
};

export const callLaunchesAPIUpcoming = async () => {

    const body = {
        "query":{
            "upcoming":true
         },
         "options":{
            "limit":1,
            "sort":{
               "flight_number":"asc"
            },
            "select": {
                "date_utc": 1,
                "name": 1
            }
         }
    };

    const response = await fetch('https://api.spacexdata.com/v4/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    let data;

    if(response.ok) {
        data = await response.json();
    } else {
        data = {};
    }
    // console.log(data);
    return data;
};

export const callRocketsAPI = async () => {

    const body = {
        "query": {},
        "options": {
            "select": {
                "name": 1,
                "active": 1,
                "height.meters": 1,
                "mass.kg": 1,
                "reusable": 1,
                "cost_per_launch": 1,
                "flickr_images": 1,
                "success_rate_pct": 1,
                "first_flight": 1
            },
            "pagination": false,
        }
    };

    const response = await fetch('https://api.spacexdata.com/v4/rockets/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    let data;

    if(response.ok) {
        data = await response.json();
    } else {
        data = {};
    }
    // console.log(data);
    return data;
};

export const callLandPadsAPI = async () => {

    const body = {
        "query": {},
        "options": {
            "select": {
                "full_name": 1,
                "status": 1,
                "locality": 1,
                "region": 1,
                "landing_attempts": 1,
                "landing_successes": 1,
                "latitude": 1,
                "longitude": 1
            },
            "pagination": false,
        }
    };

    const response = await fetch('https://api.spacexdata.com/v4/landpads/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    let data;

    if(response.ok) {
        data = await response.json();
    } else {
        data = {};
    }
    // console.log(data);
    return data;
};
export const callLaunchPadsAPI = async () => {

    const body = {
        "query": {},
        "options": {
            "select": {
                "full_name": 1,
                "status": 1,
                "locality": 1,
                "region": 1,
                "landing_attempts": 1,
                "landing_successes": 1,
                "latitude": 1,
                "longitude": 1
            },
            "pagination": false,
        }
    };

    const response = await fetch('https://api.spacexdata.com/v4/launchpads/query', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });

    let data;

    if(response.ok) {
        data = await response.json();
    } else {
        data = {};
    }
    // console.log(data);
    return data;
};