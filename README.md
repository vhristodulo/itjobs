`Praktikum iz WP`
# jobs.it

jobs.it je aplikacija za pregled i postavljanje poslova u IT industriji. Poslovi su kategorizovani (programeri, dizajneri, ostalo) i mogu biti tipa stalni, privremeni i povremeni. Postoji mogućnost dodavanja posla bez registracije i prijave na mailing listu.

`Komponente`
- `app` - glavna komponenta (navigacija, logovanje)
- `home` - početna stranica
- `jobs` - prikaz liste poslova
- `job` - prikaz detalja o poslu
- `add-job` - dodavanje novog posla
- `subscribe` - prijava na mailing listu
- `mails` - stranica za pregled i brisanje adresa sa mailing liste
- `spinner` - spinner komponenta
- `not-found` - nepostojeća stranica

`Moduli`
- `app` - glavni modul
- `app-routing` - modul za rutiranje (rutiranje)

`Servisi`
- `auth` - servis za logovanje
- `auth-guard` - servis za zaštitu stranica od neovlašćenog pristupa
- `jobs` - servis za rad sa api-jem

`Pipes`
- `reverse` - obrtanje niza

`Animacije`
- `animations` - animacije fade i slide
