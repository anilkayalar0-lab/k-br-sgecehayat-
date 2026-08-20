# Security Policy

Kibris Catalog statik bir GitHub Pages sitesidir. Bu projede gizli anahtar,
admin sifresi veya API token dosyalara eklenmemelidir.

## Iletisim

Guvenlik veya erisim sorunu fark ederseniz:

- E-posta: anilkayalar0@gmail.com
- Site: https://kıbrıscatalog.com.tr

## Admin Notu

`/admin/` altindaki panel gizli veri tutmayan bir yonetim merkezidir.
`/admin/*` yolu Cloudflare Access ile korunur ve yalnizca yetkili hesaplar
tarafindan acilabilir. Bu katman kaldirilmamali veya giris bilgileri kaynak
dosyalarina eklenmemelidir.
