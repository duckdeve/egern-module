var g5 = JSON.parse($response.body);

g5 =
{
  "success": true,
  "data": {
    "token": "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnFkR2tpT2lJellqTTBOams1WkMwM016STFMVFEyTkdRdE9XSTVaUzA0TmpNd016QmxOVE0yTjJVaUxDSjFjMlZ5YVdRaU9pSTJOV00yTXpabFlqQTFOVGRqT0RFellUQTRPVGhtTVRNaUxDSnVZVzFsSWpvaU5qVmpOak0yWldJd05UVTNZemd4TTJFd09EazRaakV6SWl3aVpYaHdJam94T0RBME9EVTFNRFkxTENKcGMzTWlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBMeUlzSW1GMVpDSTZJbWgwZEhBNkx5OXNiMk5oYkdodmMzUXZJbjAuekVkbG1Kc2ZFVVA5bENoLW1oTzNCUnh0Y2o4RnE1S2wxSUV4VXkxV1BBTQ==",
    "refreshTK": "1",
    "user": {
      "Active": 1,
      "UserType": 0,
      "DanhHieu": "Tu Sĩ Cấp Thấp",
      "Email": "specid@yahoo.com",
      "CongHien": 0,
      "ID": "65c636eb0557c813a0898f13",
      "IsVipMember": false,
      "Avatar": "ranke777.jpg",
      "UserName": "ranke777",
      "Password": "",
      "DangCap": {
        "CongHienYeuCau": 0,
        "Id": "61430d9d15c3c513e8741b4d",
        "SoThuTu": 8,
        "DangCapName": "Luyện Khí Tầng 2",
        "MongoId": "61430d9d15c3c513e8741b4d",
        "TriKinhNghiem": 2600
      },
      "Wallpaper": null,
      "KinhNghiem": 180,
      "NumKNB": 59628,
      "NhomDich": "Chưa có",
      "DateVip": "2024-02-08T14:30:03.329Z"
    }
  }
}
$done({body: JSON.stringify(g5)});
