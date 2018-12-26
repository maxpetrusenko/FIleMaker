const FileMakerStartAnnotation = `<INSERT StartAnnotation HERE>`;
const FileMakerQueryLocation = `<INSERT StartLocation HERE>`;
const FileMakerQueryCallout = `<INSERT Callout HERE>`;
const FileMakerBase64EncodedImage = `<INSERT BASE-64 ENCODED CalloutIcon HERE>`;
const FileMakerEndAnnotation = `<INSERT EndAnnotation HERE>`;
const FileMakerQueryDestination = `<INSERT EndLocation HERE>`;
const FileMakerMeans = `<INSERT Means HERE>`;
const onClick = id => {
  window.open(`http://maps.apple.com/?address=${FileMakerQueryLocation}`);
};

mapkit.init({
  authorizationCallback: done => {
    done(
      "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJNNlpBSFI1VjUifQ.eyJpc3MiOiJMRTNHNDhHWDI0IiwiaWF0IjoxNTM4NjcxMTkxLjgzNCwiZXhwIjoxODU0MDMxMTkxLjgzNH0.PAMPehD94htNBAPz-7SKaz5QPRRcAWlYwvsTOKZwyWzUFtcR2lE5bo8p_QLYGwQxyDeM9Rx8SgEb2B2ivWUyeQ"
    );
  }
});
var geocoder = new mapkit.Geocoder({
  getsUserLocation: false
});

/* Following code is based on Custom Callout https://developer.apple.com/maps/mapkitjs/ */
var CALLOUT_OFFSET = new DOMPoint(-160, -65);
var landmarkAnnotationCallout = {
  calloutElementForAnnotation: annotation => {
    return calloutForLandmarkAnnotation(annotation);
  },
  calloutAnchorOffsetForAnnotation: (annotation, element) => {
    return CALLOUT_OFFSET;
  },
  calloutAppearanceAnimationForAnnotation: annotation => {
    return "scale-and-fadein .4s 0 1 normal cubic-bezier(0.4, 0, 0, 1.5)";
  }
};

const calloutForLandmarkAnnotation = annotation => {
  var div = document.createElement("div");
  div.className = "landmark";
  var title = div.appendChild(document.createElement("h1"));
  title.textContent = annotation.landmark.title;
  var section = div.appendChild(document.createElement("section"));
  var address = section.appendChild(document.createElement("p"));
  address.className = "address";
  address.textContent = annotation.landmark.address;
  var link = section.appendChild(document.createElement("p"));
  link.className = "homepage";
  var a = link.appendChild(document.createElement("a"));
  a.href = annotation.landmark.url;
  a.textContent = "Open Maps";
  return div;
};
/* Preceding code is based on Custom Callout https://developer.apple.com/maps/mapkitjs/ */

const createShowMapsButton = map => {
  /* Takes in the 'map' object from Apple MapKit */
  mapDiv = document.getElementById("map");
  let showMapsButton = document.createElement("button");
  showMapsButton.appendChild(document.createTextNode("Open Maps"));
  showMapsButton.setAttribute("id", "showMapsButton");
  showMapsButton.setAttribute("onclick", "onClick()");
  document.getElementById("map").appendChild(showMapsButton);
};

geocoder.lookup(`${FileMakerQueryLocation}`, (err, data) => {
  if (err) throw err;

  let Site = null;
  var { results } = data;
  if (results && results.length > 0) {
    Site = new mapkit.CoordinateRegion(results[0].coordinate);
  }
  var map = new mapkit.Map("map");
  if (Site) {
    /* Query had a match */
    var search = new mapkit.Search({
      region: Site
    });
  } else {
    createShowMapsButton(map);
    return;
  }

  var zoomOut = null;
  search.search(`${FileMakerQueryLocation}`, (err, data) => {
    if (err) throw err;
    let places = data.places;
    let annotations = places.map(landmark => {
      let annotation;
      /* Following code is based on Add Annotations https://developer.apple.com/maps/mapkitjs/ */
      annotation = new mapkit.MarkerAnnotation(landmark.coordinate);
      annotation.title = FileMakerStartAnnotation;
      annotation.subtitle = landmark.formattedAddress;
      annotation.color = "#1D2935";
      annotation.glyphText = "";
      annotation.selected = false;
      return annotation;
      /* Preceding code is based on Add Annotations https://developer.apple.com/maps/mapkitjs/ */
    });
    map.showItems(annotations);
  });

  createShowMapsButton(map);

  /* Following code is based on a combination of:
  https://developer.apple.com/documentation/mapkitjs/directionsrequest
  https://developer.apple.com/documentation/mapkitjs/mapkit/polylineoverlay
  */
  let style = new mapkit.Style({
    lineWidth: 6,
    lineJoin: "round",
    strokeColor: "#4094cd"
  });
  var myDirections = new mapkit.Directions();

  let transportType;
  if (FileMakerMeans == "Drive") {
    transportType = mapkit.Directions.Transport.Automobile;
  } else if (FileMakerMeans == "Walk") {
    transportType = mapkit.Directions.Transport.Walking;
  }
  myDirections.route(
    {
      origin: FileMakerQueryLocation,
      destination: FileMakerQueryDestination,
      transportType
    },
    function(error, data) {
      let drivingDirections = [];
      let coordinatePoints = [];

      const { routes } = data;
      const firstPath = routes[0].path;
      const finalStep = firstPath[firstPath.length - 1];
      const finalPoint = finalStep[finalStep.length - 1];

      if (firstPath && firstPath.length > 0) {
        /* ******************** BEGIN Code for zooming out to region ************************* */
        let firstStep = firstPath[0];
        let firstPoint = firstStep[0];
        let finalStep = firstPath[firstPath.length - 1];
        let finalPoint = finalStep[finalStep.length - 1];

        let eastLongitude, northLatitude, southLatitude, westLongitude;

        if (firstPoint.longitude < finalPoint.longitude) {
          /* firstPoint is west of finalPoint */
          eastLongitude = finalPoint.longitude;
          westLongitude = firstPoint.longitude;
        } else {
          /* firstPoint is east of finalPoint */
          eastLongitude = firstPoint.longitude;
          westLongitude = finalPoint.longitude;
        }

        if (firstPoint.latitude > finalPoint.latitude) {
          /* firstPoint is north of finalPoint */
          northLatitude = firstPoint.latitude;
          southLatitude = finalPoint.latitude;
        } else {
          /* firstPoint is south of finalPoint */
          northLatitude = finalPoint.latitude;
          southLatitude = firstPoint.latitude;
        }

        /* Begin BoundingRegion. documentation: https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion */
        let boundingRegion;
        boundingRegion = new mapkit.BoundingRegion(
          northLatitude,
          eastLongitude + 0.05,
          southLatitude,
          westLongitude - 0.05
        );
        var zoomOutRegion = boundingRegion.toCoordinateRegion();
        /* End BoundingRegion. documentation: https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion */
        zoomOut = () => {
          map.setRegionAnimated(zoomOutRegion);
        };
        /* ******************** END Code for zooming out to region ************************* */

        let allAnnotationsAlongRoute = [];
        for (let i of firstPath) {
          drivingDirections.push(
            new mapkit.PolylineOverlay(i, {
              style
            })
          );
          for (let j of firstPath) {
            for (let k of j) {
              coordinatePoints.push(k);
            }
          }
        }

        let coordinatePointsFiltered = [];
        for (let i = 0; i < coordinatePoints.length; i++) {
          if (i % 300 == 0) {
            coordinatePointsFiltered.push(coordinatePoints[i]);
          }
        }
        console.log(coordinatePoints);
        console.log(coordinatePointsFiltered);
        map.addOverlays(drivingDirections);

        let usedLandmarks = [];
        for (let i of coordinatePointsFiltered) {
          geocoder.reverseLookup(i, (err, data) => {
            if (err) throw err;

            let Site = null;
            var { results } = data;
            if (results && results.length > 0) {
              Site = new mapkit.CoordinateRegion(results[0].coordinate);
            }
            if (Site) {
              var search = new mapkit.Search({
                region: Site
              });
            }

            search.search(`${FileMakerQueryCallout}`, (err, data) => {
              if (err) throw err;
              let places;
              places = data.places.map(place => {
                const {
                  coordinate,
                  formattedAddress: address,
                  region,
                  name: title
                } = place;
                tokenizedURL = place._wpURL.split("place?q=");
                return {
                  coordinate,
                  region,
                  url: `${tokenizedURL[0] + "q=" + tokenizedURL[1]}`,
                  title,
                  address
                };
              });
              let annotations;
              let uniqueAnnotations = [];
              annotations = places.map(landmark => {
                for (let i of usedLandmarks) {
                  if (i == landmark.address) {
                    return null;
                  }
                }
                usedLandmarks.push(landmark.address);
                let annotation;
                /* Following code is based on Custom Callout https://developer.apple.com/maps/mapkitjs/ */
                annotation = new mapkit.MarkerAnnotation(landmark.coordinate, {
                  callout: landmarkAnnotationCallout
                });
                annotation.landmark = landmark;
                annotation.title = landmark.title;
                annotation.glyphImage = {
                  1: `data:image/png;base64,${FileMakerBase64EncodedImage}`
                };
                return annotation;
                /* Preceding code is based on Custom Callout https://developer.apple.com/maps/mapkitjs/ */
              });

              for (let i = 0; i < annotations.length; i++) {
                if (annotations[i] != null) {
                  uniqueAnnotations.push(annotations[i]);
                }
              }
              map.showItems(uniqueAnnotations);
              zoomOut();
            });
          });
        }
      }

      map.showItems(
        new mapkit.MarkerAnnotation(finalPoint, {
          title: FileMakerEndAnnotation,
          color: "#1D2935",
          glyphText: ""
        })
      );
      /* End of driving directions callback */
    }
  );
  /* Preceding code is based on a combination of:
  https://developer.apple.com/documentation/mapkitjs/directionsrequest
  https://developer.apple.com/documentation/mapkitjs/mapkit/polylineoverlay
  */
});
