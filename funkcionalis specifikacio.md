# Funkcionális specifikáció
##  Áttekintés
    Egy olyan webalkalmazást fejlesztünk, mellyel bárki bebizonyíthatja magáról, hogy robot-e vagy sem. 
    
    Ezt a tesztet teljesítve a felhasználó lehetőséget kap teljesítményének bizonyítására, mivel pdf formátumban kap eredményéről certifikációt, melyet kinyomtathat. 
    Az oldalon különböző feladatokat kell sikeresen megoldania a felhasználónak. 
    Ezek a feladatok a felhasználó emberi létét kérdőjelezik meg fantasztikus kacifántosságukkal. 
    
    A feltételezett két végkimenetel helyett,a teszt alapján kiderülhet, hogy a felhasználó cyborg, cyberman organizmus vagy esetlegesen choblik. 
    Az alkalmazásunk jótékonysági mellékcélja az utolsó choblik megtalálása, emiatt tettük bele ezt a szűrési funkciót.
## Jelenlegi helyzet

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

## Jelenlegi üzleti folyamatok modellje
A Captcha technológiák régóta nagy jelentőséggel bírnak. Az évek során sokat fejlődtek, és az egyszerű, képfelismerésre épülő megoldásoktól eljutottak a 
háttérben futó, felhasználói viselkedésmintákat figyelő eljárásokig. Alkalmazásunk célja ezeknek a bővítése újabb, egyedi megoldásokkal.

## Igényelt üzleti folyamatok
1. A felhasználó a főoldalon fog megismerkedni a teszt céljával és az ahhoz tartozó fontos információkkal.
2. A főoldalon található gombbal átirányításra kerül a tesztre.
3. Azt átirányítást követően már láthatja is az első teszt feladatot.
4. A feladat kitöltése után a felhasználó a következő feladathoz léphet egy gomb megnyomásával
5. A 4. pontot addig ismétli, míg el nem érkezik az eredményt mutató oldalhoz
6. Az eredmény oldalon egy pdf kiterjesztésű fájl letöltésére lesz lehetősége a felhasználónak, melyen a felhasználó által megadott név, emellett a készítők aláírása fog szerepelni.

## Használati esetek

## Megfeleltetés, hogyan fedik le a használati esetek a követelményeket

## Képernyőtervek

## Forgatókönyv

## Funkció-követelmény megfeleltetés
###Funkcionális követelmények megfeleltetése:
- Nyomtatás: A pontszámokról ettől függetlenül is értesül a tesztet kitöltő felhasználó, nem feltétlen fontos. 6/10
- Következő Tesztre való lépés: Gomb segítségével, a teszt következő részére léphet a felhasználó, ezért kritikus jelentősséggel bír az applikációban, mivel ha nem működik, az egész program futását befolyásolja. 8/10
- Kitöltés: Az egyik típusú részfeladat fontos része, mivel a felhasználó a megoldását itt adhatja meg, ami alapján a végeredmény létre fog jönni. 7/10
- Kép Kiválasztása: Az egyik típusú részfeladat fontos része, mivel a képek kiválasztására kapja a felhasználó a pontszámot. 7/10
- Jelölőnégyzet használata: Ha a felhasználó nem tud pipát helyezni a Jelölőnégyzetbe, akkor a feladatra nem kap pontot sem, nem szükséges a megfelelő futáshoz. 7/10

###Nem Funkcionális követelmények megfeleltetése:
- Látványos és egyedülálló dizájn: A szemek kényeztetése csak azután kerül előtérbe, miután már minden megfelelően működik. 5/10
- Egyszerű, gyorsan értelmezhető, letisztult felhasználói felület: Elképesztően fontos, az egész program magja, ezért a legnagyobb figyelmet igényli. 10/10
- Részfeladatok megfelelő megjelenítése: Fontos a megfelelő megjelenítés, mivel ha ez nem teljesül, nem garantált, hogy egyértelműen megoldható a feladat. 9/10

## Fogalomszótár