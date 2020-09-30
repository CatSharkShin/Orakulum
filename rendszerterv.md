# Rendszerterv
## A rendszer célja,

## Projektterv
### Szerepkörök
- Designer: Csontos Dominik
- Developer: Palotai Martin
- Developer: Kóder László
- Developer: Sirák Norbert

### Egyéni Projekt Munkálatok
- Desing elkészítése: Csontos Dominik
- Keretrendszer elkészítése: Palotai Martin
- Matek művelet applikáció elkészítése: Kóder László
- Képválasztási applikáció elkészítése: Sirák Norbert
- Jelölőnégyzet applikáció: Csontos Dominik
- Nyomtatási művelet elkészítése: Palotai Martin
- Tárgyak megnevezése képről applikáció: Sirák Norbert

### Közös feladatok
- Követelmény Specifikáció megírásában történő közreműködés
- Funkcionális Specifikáció megírásában történő közreműködés
- Rendszerterv megírásában történő közreműködés

### Mérföldkövek
1. Keretrendszer elkészítése
2. Applikációk elkészítése
- Matek művelet applikáció elkészítése
- Képválasztási applikáció elkészítése
- Jelölőnégyzet applikáció
- Tárgyak megnevezése képről applikáció
- Nyomtatási művelet elkészítése
3. Desing elkészítése

## Üzleti folyamatok modellje
![Üzleti folyamatok modellje](uzleti_modell.jpg)

## Követelmények
### Funkcionális Követelmények
- Feladatok pontszámainak összesítése
- Feladatok kiértékelése
- Webes környezeten történő működés
- Teszt feladatok megfelelő futtatása
- Továbblépésként funkcionáló gomb működése
- Eredmények nyomtatásának megfelelő működése

### Nem Funkcionális Követelmények
- Látványos és egyedülálló dizájn
- Egyszerű, gyorsan értelmezhető, letisztult felhasználói felület
- Részfeladatok megfelelő megjelenítése

## Funkcionális terv
- Felhasználó: Képes lesz a teszt kitöltésére majd a kitöltés végén a teszt eredményének nyomtatására.

## Fizikai környezet
A teszt webes környezetben és minden böngészőben reszponzívnak készül el.
Nincsenek megvásárolt komponenseink.
Fejlesztői eszközök:
    Sublime text
    Visual studio code

## Architekturális terv

## Implementációs terv
### Capcha tesztet készítünk webalkalmazás formájában.
Egyedi keretrendszerben készítjük alkalmazásunkat, melynek lényege,
hogy PHP és JavaScript oldalakban formok és függvények segítségével
külön kezeljük az egyes applikációkat (a teszt részeit), ezáltal
könnyen áttekinthetővé téve a kódot és könnyebbé téve a léptetés és
a pontok összesítésének folyamatát.
Az egyes részalkalmazások elkészítését külön-külön osztjuk fel 
a fejlesztők között, valamint a keretrendszer és a design
elkészítését is.

### Használt technólógiák:
- Trello - projekt szervezése, rendezése
- Discord - verbális kommunikáció
- HTML - A weboldal struktúrális vázát adja meg
- CSS - A kinézethez manipulálására használatos
- Git, GitHub - Alkalmazás verzióinak követése
- KitKraken - Git grafikus reprezentációja
- Rajzolóprogramok az ábrákhoz
- PHP - elsősorban formokhoz
- JS - elsősorban az egyes részapplikációkhoz
- Kódszerkesztők (VS, SubLime, Notepad++, stb.)

## Tesztterv

## Telepítési terv
- Webes alkalmazás
A webalkalmazás használatához csupán egy internetkapcsolattal rendelkező számítógépre vagy mobiltelefonra vagy szükségünk, melyen
valamelyik böngésző, mint például: Google Chrome, Firefox, Safari megtalálható.
Ha rendelkezünk böngészővel, akkor fel kell keresnünk a weboldalt, amelyet az orakulum.hu címen érhetünk el.

## Karbantartási terv