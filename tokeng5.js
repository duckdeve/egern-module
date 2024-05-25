let obj = JSON.parse($response.body)
obj = 
{
  "success": true,
  "data": {
    "token": "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnFkR2tpT2lJeVpEYzBaREpsTlMwd1lUWmtMVFJqTmpZdFltSm1OaTA0Tm1Nek1qZzVZamMzWkRraUxDSjFjMlZ5YVdRaU9pSTJNMlJsTWpsaE5UQTJNekZoWXpNMk9UZzFaVEF4TkdJaUxDSnVZVzFsSWpvaU5qTmtaVEk1WVRVd05qTXhZV016TmprNE5XVXdNVFJpSWl3aVpYaHdJam94TnprNU56Y3dOVEl5TENKcGMzTWlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBMeUlzSW1GMVpDSTZJbWgwZEhBNkx5OXNiMk5oYkdodmMzUXZJbjAuWkZIdnd2enkySE9MdGJteTh0MEpHdHNCZFUwMnBFNE1PNzVDR2JuV2lzbw==",
    "refreshTK": "1",
    "user": {
      "Active": 1,
      "UserType": 0,
      "DanhHieu": "Tu Sĩ Cấp Thấp",
      "Email": "gaboom911@gmail.com",
      "CongHien": 0,
      "ID": "63de29a50631ac36985e014b",
      "IsVipMember": false,
      "Avatar": "trantudai.jpg?v=1684884158",
      "UserName": "trantudai",
      "Password": "",
      "DangCap": {
        "CongHienYeuCau": 0,
        "Id": "61430db815c3c513e8741b50",
        "SoThuTu": 11,
        "DangCapName": "Luyện Khí Tầng 5",
        "MongoId": "61430db815c3c513e8741b50",
        "TriKinhNghiem": 8000
      },
      "Wallpaper": null,
      "KinhNghiem": 1290,
      "NumKNB": 56300,
      "NhomDich": "Chưa có",
      "DateVip": "2023-05-16T23:53:17.683Z"
    }
  }
}
$done({body:JSON.stringify(obj)})