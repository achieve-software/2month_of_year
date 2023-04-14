let month = new Date().getMonth(); // bugünün hangi ay olduğunu alır
switch (month) {
  case 11:
  case 0:
  case 1:
    console.log("Kış");
    break;
  case 2:
  case 3:
  case 4:
    console.log("İlkbahar");
    break;
  case 5:
  case 6:
  case 7:
    console.log("Yaz");
    break;
  case 8:
  case 9:
  case 10:
    console.log("Sonbahar");
    break;
  default:
    console.log("Geçersiz ay");
}
