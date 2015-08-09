# mta-realtime-test

Node app to consume and transform GTFS-realtime data from the New York City Subway.  

The MTA's GTFS-RT feed for the 1,2,3,4,5,6, and S trains resides at http://datamine.mta.info/mta_esi.php?key={YOURAPIKEY}&feed_id=1 

When you hit this endpoint, the response will be in protocol buffer format.  This app uses the protobufjs node library to consume the raw data and convert it into a JSON object.

The `/` endpoint returns the JSON for the `entities` feed, which includes `TripUpdate` and `VehiclePosition` messages

### Getting started

Make sure you have `node` and `npm`, then clone the repo, then install
requirements:

    npm install

Then, copy `config.sample` to `config.js` and make sure `YOUR_API_KEY` is
filled in with your MTA developer API key.

Starting the server with:

    node app.js

The API endpoints will then be available at
[http://localhost:3000](http://localhost:3000).

### Notes

Based on [yuningalexliu/mta-realtime](https://github.com/yuningalexliu/mta-realtime), but removed frontend parts and just made it a simple JSON endpoint.

Read the MTA's [GTFS realtime specification document](http://datamine.mta.info/sites/all/files/pdfs/GTFS-Realtime-NYC-Subway%20version%201%20dated%207%20Sep.pdf) for more details on what you're looking at.

The results look like this when prettified using the JSONview chrome plugin:
![localhost_3000](https://cloud.githubusercontent.com/assets/1833820/9156029/cfe53bbe-3e99-11e5-8b33-f29992d0119d.png)
