
# Követelmény specifikáció

##  Áttekintés
Egy olyan webalkalmazást fejlesztünk, mellyel bárki bebizonyíthatja magáról, hogy robot-e vagy sem. Ezt a tesztet teljesítve a felhasználó lehetőséget kap teljesítményének bizonyítására, mivel pdf formátumban kap eredményéről certifikációt, melyet kinyomtathat. Az oldalon különböző feladatokat kell sikeresen megoldania a felhasználónak. Ezek a feladatok a felhasználó emberi létét kérdőjelezik meg fantasztikus kacifántosságukkal. Azt gondolhatnánk, hogy a tesztnek csupán két végkimenetele lehet, ámbár a teszt alapján kiderülhet, hogy az delikvens cyborg, cyberman organizmus vagy esetlegesen choblik. Az alkalmazásunk jótékonysági mellékcélja az utolsó choblik megtalálása, emiatt tettük bele ezt a szűrési funkciót.

## Jelenlegi helyzet
Vannak olyan robot programok, amelyeket abból a célból készítettek, hogy megtalálja a weboldalon az adat 
vagy email küldésére képes formokat vagy regisztrációs űrlapokat, és emaileket küldjön vagy regisztráljon a weboldalon. 
Amennyiben nincs az oldalon Captcha, akkor ez minden esetben káros a weboldal tulajdonosának, illetve a tárhely 
szolgáltatónak egyaránt: a weboldal tulajdonosa azt veszi észre ilyenkor, hogy tömegesen regisztrálnak a weboldalán 
mindenféle fura nevű és email című felhasználók, vagy pedig spameket küldenek a weboldal nevében különféle email címekre. 
Utóbbi esetben a levelek kézbesíthetetlenségéről pattan vissza email arra az email címre, amelyet a weboldal tulajdonosa 
megadott az űrlapnak. Ennek kiküszöbölésére való ez a program.

## Vágyálom rendszer
    Egy olyan webalkalmazást fejlesztése a cél, mellyel egy személy bebizonyíthatja magáról, hogy robot-e vagy sem.
    
    Tökéletes esetben egy olyan tesztet hozunk létre melyet teljesítve a felhasználó kihívások sorozatával 
    bizonyíthatja emberi mivoltát. 
    
    A teszt eredménye szempontjából szeretnénk megvalósítani, hogy több kategória is lehetséges legyen a felhasználó teljesítménye alapján. 
    
    Az első feladat sikeres teljesítése az ideális esetben: Több képsorozat közül kiválasztja a feladatban megadottat.
    
    A második feladat sikeres teljesítése az ideális esetben: Egy véletlenszerűen generált matematikai művelet eredményét helyesen adja meg.
    
    A harmadik feladat sikeres teljesítése az ideális esetben: Jelölőnégyzetek közül kell kiválasztania a megfelelőt.

## Funkcionális követelmények
- Nyomtatás: Nyomtatásra kész formátumban, PDF kiterjesztésben, a felhasználó az elért eredményéről kap tájékoztatást.
- Következő Tesztre való lépés: Gomb segítségével, a teszt következő részére léphet a felhasználó.
- Kitöltés: A teszt kérdésére válasz adási lehetőség.
- Kép Kiválasztása: Megadott téma szerinti képek kiválasztása.
- Jelölőnégyzet használata: A jelölőnégyzetbe való pipa helyezése.

## Rendszerre vonatkozó törvények, szabványok, ajánlás
    Rendszerszabványok:
    
    Trello

    Discord
    
    Github

    Gitkraken

    Sublime text
    
    Visual studio code
    
    xampp 3.2.4 

    PHP 7.4.10

    HTML,CSS

    Javascript

## Jelenlegi üzleti folyamatok modellje
A Captcha technológiák régóta velünk vannak annak érdekében, hogy a spammerek, illetve a robotok elleni küzdelemből 
kivegyék a részüket. Az évek során sokat fejlődtek, és az egyszerű, képfelismerésre épülő megoldásoktól eljutottak a 
háttérben futó, felhasználói viselkedésmintákat figyelő eljárásokig. Alkalmazásunk célja ezeknek a megoldásoknak a 
bővítése újabb, egyedi megoldásokkal.

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
	- bug: hiba a program futása során.
	- backend: egy adott rendszer alsóbb, tényleges feldolgozást végző rétege.
	- frontend: A front-end réteg feladata a rendszerből kijutó adatok prezentálása, illetve a bejövő adatok fogadása.
	- Captcha: automatikus teszt, mely képes megkülönböztetni az emberi felhasználót a számítógéptől.
	
	
