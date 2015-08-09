# mta-realtime-test
Node app to consume and transform GTFS-realtime data from the New York City Subway.  

The MTA's GTFS-RT feed for the 1,2,3,4,5,6, and S trains resides at http://datamine.mta.info/mta_esi.php?key={YOURAPIKEY}&feed_id=1 

When you hit this endpoint, the response will be in protocol buffer format.  This app uses the protobufjs node library to consume the raw data and convert it into a JSON object.

The `/` endpoint returns the JSON for the `entities` object, which includes TripUpdate and VehiclePosition messages

Based on [yuningalexliu/mta-realtime](https://github.com/yuningalexliu/mta-realtime), but removed frontend parts and just made it a simple JSON endpoint.
