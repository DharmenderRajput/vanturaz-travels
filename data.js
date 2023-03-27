const data = [
  {
    destination: 'Italy',
    img: './img/destination/1.png',
    tagline: '',
    places: [
      {
        name: 'Rome',
        img: 'https://images.thrillophilia.com/image/upload/s--dYEUPD42--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/178/736/original/1573646646_rome.jpg.jpg',
        stars: 4,
        tripDuration: 4,
      },
      {
        name: 'Venice',
        img: 'https://images.thrillophilia.com/image/upload/s--nqY478mA--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/179/438/original/1584940115_Venice.jpg.jpg',
        stars: 4,
        tripDuration: 4,
      },
      {
        name: 'Florence',
        img: 'https://images.thrillophilia.com/image/upload/s--D0v6Zbfx--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/178/963/original/1584785116_FLorence.jpg.jpg',
        stars: 4,
        tripDuration: 4,
      },
      {
        name: 'Milan',
        img: 'https://images.thrillophilia.com/image/upload/s--BmH9EnyD--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/181/221/original/1586518315_milan.jpg.jpg',
        stars: 4,
        tripDuration: 4,
      },
    ],
  },
  {
    destination: 'Brazil',
    img: './img/destination/2.png',
    tagline: '',
    places: [],
  },
];

function destinationListing(devId, count = 6) {
  // generate destination cols based on data
  var destCol = data.map((key, index) => {
    if (index < count) {
      return (
        '<div class="col-lg-4 col-md-6"><div class="single_destination"><div class="thumb"><img src="' +
        key.img +
        '" alt=""></div><div class="content"><p class="d-flex align-items-center">' +
        key.destination +
        ' <a href="travel-destination.html?dest=' +
        key.destination +
        '">  ' +
        key.places.length +
        ' Places</a> </p></div></div></div>'
      );
    }
  });

  //   get requested div and set HTML inside
  if (document.getElementById(devId)) {
    var element = document.getElementById(devId);
    element.innerHTML = '<div class="row">' + destCol.join('') + '</div>';
  } else {
    console.log('invalid dev id provided!');
  }
}

function placesListing(devId, count = null, search = null) {
  // generate place cols based on data
  var placesCol = data.map((key, index) => {
    // check length of places array
    if (key.places.length > 0) {
      // checks for count cond.
      // if ve have a value then return required no. of results
      // else it will display all
      if (count !== null && index >= count) {
        return;
      }

      // checking search condition
      //   if we have search cond. then loop through all places for the required search dest
      if (search !== null && search !== '') {
        if (key.destination === search) {
          console.log(search);
          // loop through all places
          const places = key.places.map((place, index) => {
            console.log('we are here');
            return (
              '<div class="col-lg-4 col-md-6"> <div class="single_place"> <div class="thumb"> <img src="' +
              place.img +
              '" alt=""> <a href="#" class="prise">$500</a> </div> <div class="place_info"> <a href="destination_details.html"><h3>' +
              place.name +
              '</h3></a> <p>' +
              key.destination +
              '</p> <div class="rating_days d-flex justify-content-between"> <span class="d-flex justify-content-center align-items-center"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <a href="#">(20 Review)</a> </span> <div class="days"> <i class="fa fa-clock-o"></i> <a href="#">' +
              place.tripDuration +
              ' Days</a> </div> </div> </div> </div> </div>'
            );
          });
          return places.join('');
        } else {
          // no match, simply return
          return;
        }
      }

      return (
        '<div class="col-lg-4 col-md-6"> <div class="single_place"> <div class="thumb"> <img src="' +
        key.places[0].img +
        '" alt=""> <a href="#" class="prise">$500</a> </div> <div class="place_info"> <a href="destination_details.html"><h3>' +
        key.places[0].name +
        '</h3></a> <p>' +
        key.destination +
        '</p> <div class="rating_days d-flex justify-content-between"> <span class="d-flex justify-content-center align-items-center"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <a href="#">(20 Review)</a> </span> <div class="days"> <i class="fa fa-clock-o"></i> <a href="#">' +
        key.places[0].tripDuration +
        ' Days</a> </div> </div> </div> </div> </div>'
      );
    }
  });

  //   get requested div and set HTML inside
  if (document.getElementById(devId)) {
    var element = document.getElementById(devId);
    console.log(placesCol);
    element.innerHTML = '<div class="row">' + placesCol.join('') + '</div>';
  } else {
    console.log('invalid dev id provided!');
  }
}
