

# Követelmény specifikáció

##  Áttekintés
Egy olyan webalkalmazást fejlesztünk, mellyel bárki bebizonyíthatja magáról, hogy robot-e vagy sem. Ezt a tesztet teljesítve a felhasználó lehetőséget kap teljesítményének bizonyítására, mivel pdf formátumban kap eredményéről certifikációt, melyet kinyomtathat. Az oldalon különböző feladatokat kell sikeresen megoldania a felhasználónak. Ezek a feladatok a felhasználó emberi létét kérdőjelezik meg fantasztikus kacifántosságukkal. Azt gondolhatnánk, hogy a tesztnek csupán két végkimenetele lehet, ámbár a teszt alapján kiderülhet, hogy az delikvens cyborg, cyberman organizmus vagy esetlegesen choblik. Az alkalmazásunk jótékonysági mellékcélja az utolsó choblik megtalálása, emiatt tettük bele ezt a szűrési funkciót.

## Jelenlegi helyzet
A mai reCaptchák minden oldalon különböznek és változóan pontosak, és nem tudják pontosan megmondani a felhasználó faji mivoltát. Vannak Captchák melyek egy checkbox bepipálásából nyernek ki információt a felhasználó mivoltáról, vannak melyek képeken kerestetnek meg tárgyakat a felhasználóval. Ezek gyors viszont pontatlan megoldások, emellett egy felhasználónak ezt minden oldalon újra meg kell tennie, és nem tudja felhasználni az egyik oldalon szerzett eredményét. 

## Vágyálom rendszer
- Egy olyan webalkalmazást fejlesztése a cél, mellyel egy személy bebizonyíthatja magáról, hogy robot-e vagy sem.
-  Tökéletes esetben egy olyan tesztet hozunk létre melyet teljesítve a felhasználó kihívások sorozatával 
    bizonyíthatja emberi mivoltát. 
- A teszt eredménye szempontjából szeretnénk megvalósítani, hogy több kategória is lehetséges legyen a felhasználó teljesítménye alapján. 
- Az első feladat sikeres teljesítése az ideális esetben: Több képsorozat közül kiválasztja a feladatban megadottat.
- A második feladat sikeres teljesítése az ideális esetben: Egy véletlenszerűen generált matematikai művelet eredményét helyesen adja meg.
- A harmadik feladat sikeres teljesítése az ideális esetben: Jelölőnégyzetek közül kell kiválasztania a megfelelőt.

## Funkcionális követelmények
- **Nyomtatás:** Nyomtatásra kész formátumban, PDF kiterjesztésben, a felhasználó az elért eredményéről kap tájékoztatást.
- **Következő Tesztre való lépés:** Gomb segítségével, a teszt következő részére léphet a felhasználó.
- **Kitöltés:** A teszt kérdésére válasz adási lehetőség.
- **Kép Kiválasztása:** Megadott téma szerinti képek kiválasztása.
- **Jelölőnégyzet használata:** A jelölőnégyzetbe való pipa helyezése.

## Rendszerre vonatkozó törvények, szabványok, ajánlás
### Rendszerszabványok:
- Trello
- Discord
- Github
- Github Desktop
- Gitkraken
- Sublime text
- Visual studio code
- xampp 3.2.4 
- PHP 7.4.10
- HTML,CSS
- Javascript

## Jelenlegi üzleti folyamatok modellje
Elvégzi a felhasználó a tesztet -> jogot kap tovább lépni
				-> nem kap jogot tovább lépni mert robotnak lett ítélve

## Igényelt üzleti folyamatok
1. A felhasználó a főoldalon fog megismerkedni a teszt céljával és az ahhoz tartozó fontos információkkal.
2. A főoldalon található gombbal átirányításra kerül a tesztre.
3. Azt átirányítást követően már láthatja is az első teszt feladatot.
4. A feladat kitöltése után a felhasználó a következő feladathoz léphet egy gomb megnyomásával
5. A 4. pontot addig ismétli, míg el nem érkezik az eredményt mutató oldalhoz
6. Az eredmény oldalon egy pdf kiterjesztésű fájl letöltésére lesz lehetősége a felhasználónak, melyen a felhasználó által megadott név, emellett a készítők aláírása fog szerepelni.

## Követelménylista

### Funkcionális követelmények:
- Nyomtatás: Nyomtatásra kész formátumban, PDF kiterjesztésben, a felhasználó az elért eredményéről kap tájékoztatást.
- Következő Tesztre való lépés: Gomb segítségével, a teszt következő részére léphet a felhasználó.
- Kitöltés: A teszt kérdésére válasz adási lehetőség.
- Kép Kiválasztása: Megadott téma szerinti képek kiválasztása.
- Jelölőnégyzet használata: A jelölőnégyzetbe való pipa helyezése.

### Nem Funkcionális követelmények:
- Látványos és egyedülálló dizájn
- Egyszerű, gyorsan értelmezhető, letisztult felhasználói felület
- Részfeladatok megfelelő megjelenítése

## Riportok
- Kivitelező: Kérem jelemmezze, mire lenne szüksége!
- Megrendelő: Sokat gondolkodtam azon, hogyan lehetne a Captcha teszteket egy új szintre emelni.
- Kivitelező: Miért szeretné ezt?
- Megrendelő: Egy olyan alkalmazás az álmom, ahol nem csak egy teszt a továbblépés feltétele.
- Kivitelező: Ezt könnyedén orvosolhatjuk, ha különálló részekre bontunk egy tesztet és ellátjuk több, apróbb feladattal.
- Megrendelő: Igen, valami hasonló megoldásra gondoltam.
- Kivitelező: Mindezt egy weboldalon lenne a legcélszerűbb megvalósítani, ahol különböző szórakoztatási elemekkel láthatnánk el a részfeladatokat.
- Megrendelő: Igen, ez talán megkönnyíthetné és élvezetesebbé tenné a teszt kitöltésének folyamatát.
- Megrendelő: Azt szeretném, ha minden eddigi Captcha tesztekkel való tapasztalataiból a legjobbakat használná fel az applikéció elkészítéséhez.
- Kivitelező: Rendben, a legjobb tudásunk szerint fogunk cselekedni.

## Fogalomtár
### Fogalmak:
- **bug:** hiba a program futása során.
- **backend:** egy adott rendszer alsóbb, tényleges feldolgozást végző rétege.
- **frontend:** A front-end réteg feladata a rendszerből kijutó adatok prezentálása, illetve a bejövő adatok fogadása.
- **Captcha:** automatikus teszt, mely képes megkülönböztetni az emberi felhasználót a számítógéptől.

	
