var g5 = JSON.parse($response.body);

g5 =
{
  "success": true,
  "data": {
    "token": "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnFkR2tpT2lJM1pEZ3lNMlEzTnkxak1qQXpMVFJpTVRJdFlUTXlaUzA1TTJaa09HWTBORGhsTkdVaUxDSjFjMlZ5YVdRaU9pSTJNbVkyTjJFMk9EQTJNekZoWkRRMU1EUTFaRGN4WlRZaUxDSnVZVzFsSWpvaU5qSm1OamRoTmpnd05qTXhZV1EwTlRBME5XUTNNV1UySWl3aVpYaHdJam94T0RBd09URTJPVEl6TENKcGMzTWlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBMeUlzSW1GMVpDSTZJbWgwZEhBNkx5OXNiMk5oYkdodmMzUXZJbjAuNk5tTnpvMW1IYXl0ejlPVF9MTDJSSk5Bbk15TW9QR3FFYkozcjdnYjd4QQ==",
    "refreshTK": "1",
    "user": {
      "Active": 1,
      "UserType": 0,
      "DanhHieu": "Tu Sĩ Cấp Thấp",
      "Email": "ngocquadia89@gmail.com",
      "CongHien": 0,
      "ID": "62f67a680631ad45045d71e6",
      "IsVipMember": false,
      "Avatar": "lehoangphuc.jpg?v=1697770026",
      "UserName": "lehoangphuc",
      "Password": "",
      "DangCap": {
        "CongHienYeuCau": 0,
        "Id": "61430dfc15c3c513e8741b56",
        "SoThuTu": 17,
        "DangCapName": "Luyện Khí Tầng 11",
        "MongoId": "61430dfc15c3c513e8741b56",
        "TriKinhNghiem": 27000
      },
      "Wallpaper": null,
      "KinhNghiem": 25744,
      "NumKNB": 2222,
      "NhomDich": "Chưa có",
      "DateVip": "2023-03-17T20:21:51.429Z"
    }
  }
}
$done({body: JSON.stringify(g5)});
