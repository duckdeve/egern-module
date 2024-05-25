let obj = JSON.parse($response.body)
obj = 
{
  "success": true,
  "data": {
    "token": "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnFkR2tpT2lJMU5EUTFOMlV6WVMwNVpEWXpMVFF6TkRBdE9XVmhZaTAwT0Roak16QTROMk0yTnpJaUxDSjFjMlZ5YVdRaU9pSTJNMlZtWm1OaE16QTJNekZoWXpKak1UaGxaVGhrTmpBaUxDSnVZVzFsSWpvaU5qTmxabVpqWVRNd05qTXhZV015WXpFNFpXVTRaRFl3SWl3aVpYaHdJam94T0RBd09URTNNakkyTENKcGMzTWlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBMeUlzSW1GMVpDSTZJbWgwZEhBNkx5OXNiMk5oYkdodmMzUXZJbjAuSkRFQl9fdkpKODNPZTdPQ2pMYUE0bkxSNzBTb3lKVXItUUdmN1N6VTl2cw==",
    "refreshTK": "1",
    "user": {
      "Active": 1,
      "UserType": 0,
      "DanhHieu": "Tu Sĩ Cấp Thấp",
      "Email": "dangminhnhat2807@gmail.com",
      "CongHien": 0,
      "ID": "63effca30631ac2c18ee8d60",
      "IsVipMember": false,
      "Avatar": "dangminhnhat2807.jpg?v=1682778187",
      "UserName": "dangminhnhat2807",
      "Password": "",
      "DangCap": {
        "CongHienYeuCau": 0,
        "Id": "61430d1815c3c513e8741b49",
        "SoThuTu": 4,
        "DangCapName": "Nhất Lưu Võ Giả",
        "MongoId": "61430d1815c3c513e8741b49",
        "TriKinhNghiem": 800
      },
      "Wallpaper": null,
      "KinhNghiem": 80,
      "NumKNB": 33806,
      "NhomDich": "Chưa có",
      "DateVip": "2023-04-19T07:22:33.817Z"
    }
  }
}
$done({body:JSON.stringify(obj)})