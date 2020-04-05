const accessToken =
  "pk.eyJ1IjoiY211dGFnb3JhbWEiLCJhIjoiY2swNnJmN2JzMDQ5OTNrbWNneWx2cGF5MiJ9.KyxshHlzkGiVOtMFiSRVDQ";

export const mapServices = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Mapbox",
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/cmutagorama/ck8m9lrxn1f851inx445hgud3/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`,
  },
];
