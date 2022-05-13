# Het kopieer-maatplak voor Eric 
Dit project draait om het maken van een applicatie voor één persoon. Deze persoon is Eric. Eric zit in een rolstoel en kan minder gemakkelijk gebruik maken van het web. Aan mij de taak om een applicatie te maken waarin Eric kan kopieren en plakken met zijn stem. 

## Table of contents
- [Probleem en case](#Probleem-en-case)
- [Installation](#Installation)
- [De eerste test](#De-eerste-test)
- [De tweede test](#De-tweede-test)
- [De derde test](#De-derde-test)
- [User Scenario](#User-Scenario)
- [Wat het moet worden](#Wat-het-moet-worden)
- [Mijn concept tegen velle licht van de exclusive design principles](#Mijn-concept-tegen-velle-licht-van-de-exclusive-design-principles)

## Probleem en case 💼
Eric wilt graag makkelijker kunnen kopieren en plakken tussen verschillende applicaties op zijn laptop. Omdat Eric geen beschikking heeft over de fijne motoriek zijn grote muisbewegingen lastig voor hem. Ook is kopieren en plakken erg omslachtig. En omdat Eric veel administratieve taken moet doen voor de gemeente Amsterdam, mag dit allemaal wel iets makkelijker. Vandaar de case: * Eric wil graag met zijn stem basishandelingen kunnen uitvoeren binnen documenten, zoals copy/paste. Hier is het de taak om uit te zoeken welke handelingen hij nog meer vaak gebruikt, en hoe je die op een voor Eric zo prettig mogelijke manier kunt laten werken.*

## Installation
```git clone https://github.com/JuulVrasdonk/human-centered-design```

## De eerste test
De eerste test was meer een soort kennismaking. Omdat ik moeilijk in kon schatten wat Eric makkelijke en moeilijke handelingen vond op een computer. 
Hierom wilde ik nog niet een heel concept ver uitwerken. 

### Waarnemingen 
- Ik vond dat **het selecteren van tekst erg soepel** ging. 
- Eric gebruikt vooral Edge als browser
- Hij kan zowel muis als trackpad vrij goed gebruiken. Maar zijn voorkeur ligt bij een muis. 
- Dingen waar je meerdere vingers voor moet gebruiken is relatief lastig en vermoeiend.
- Eric vond dat er soms iets te veel, of beter gezegd, te chaotisch feedback werd gegeven op zijn spraak. 
- Eric vond het belangrijk dat er gezocht kon worden op woorden in een document, met spraak. (Denk aan cmd + f) 
- Er werd veel gesproken over verschillende programma's als Excel en Word. (Chrome extension?)
- De applicatie moet het liefst 2 talen kunnen verstaan. 
- Het belangrijkste is: **kopiëren-plakken moet extreem soepel gaan met spraak. Daarnaast moet tekst makkelijk gezocht, geselecteerd en gekopieerd kunnen worden.**

### Reflectie
Na de eerste test weet ik een stuk beter hoe Eric zijn computer gebruikt. Het viel me op dat hij nog vrij soepel kan kopiëren en plakken. Omdat Eric sprak over verschillende programma's als Excel en Word. Leek het mij logisch om een soort Chrome extentie te maken waarbij met spraak tussen de verschillende tabjes in de browser genavigeerd kan worden. En uiteraard ook gekopieerd en geplakt kan worden. 

## De tweede test
Tijdens de tweede kon verder worden getest op de aanpassingen die volgde uit de waarnemingen van test 1. De tweede test was veel meer een echte test, in vergelijking met test 1. 

### Waarnemingen
- Tijdens het testen merkte ik dat grote bewegingen met de muis lastig zijn en veel moeite kosten. (dus zo min mogelijk bewegingen met de muis.) 
- Een keer klikken om de mic aan te zetten. Mic vervolgens aan laten. Nog een keer klikken -> mic uit. 
- Scrollen is ook niet gemakkelijk. (Met spraak? Of met de cmd + f en "volgende" door het document heen?)
- Hij wilt graag kunnen kopiëren door te zeggen "kopieer...".
- Eric vond dat ik een goed concept had met de Chrome extentie.
- Eric denkt dat de tekst is gekopieerd als hij zegt "selecteer". (Dus miss een keyword voor selecteren en kopiëren tegelijk).
- De mic moet luisteren naar: 
- - Kopieer / kopiëren / copy
- - Plak / plakken / paste
- - **Ga naar** *"tab 3"* / **Navigeer naar** *"tab 3"*
- - **Selecteer** *Lorem... tot ...ipsum* / **Selecteer** *Lorem*
- - - **Volgende** 
- - - **Vorige**

### Reflectie
Na de tweede test weet ik nu echt zeker wat Eric goed kan gaan helpen. Ik wil een deel van de browser simuleren zodat ik kan kijken hoe Eric omgaat met een applicatie die lijkt op een typische Chrome extentie. Zie de schets: 
![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/schets.png)


## De derde test
Voor de derde wilde ik alle functionaliteiten die in de bovenstaande afbeelding beschreven zijn inbouwen. Dit is me alleen niet helemaal gelukt. Het is me alleen niet gelukt om optijd de selecteer-functie te kunnen bouwen. Verder heb ik de "scroll naar" functie ook niet uitgewerkt. Omdat deze functie in deze fase van development nog niet relevant was. Kortom, ik moest prioriteiten stellen. 

### Waarnemingen
- Eric wilde meteen praten. => Hij drukte niet eerst op mic knop. (cta of hint toevoegen?) 
- Eric begreep de commands goed. 
- Doordat ik geen feedback gaf bij het kopieren wist Eric niet dat het kopieren was gelukt. 
- Het selecteren ging Eric vrij soepel af. Hij zei dat hij dat wel kon maar een vriendin van hem niet. Dus selecteren moest op een manier makkelijker, dus niet perse met spraak. (selectie-modus met muis of knoppen?) 
- Bij het Word tabje moet de textarea automatisch gefocust worden. 
- Het feit dat ik enkele worden toonde als feedback op spraak leken Eric minder af te leiden. 

### Reflectie
De derde test was echt nog broodnodig. Er zijn nog een aantal aanpassingen nodig om het uiteindelijke concept echt voor Eric te maken. Het belangrijkste punt is denk ik echt de feedback bij het uitvoeren van bepaalde taken als kopiëren-plakken. Ik ben er wel van overtuigd dat dit vrij subtiele feedback kan zijn. Omdat het bij het testen van anderen hun concepten soms leek of Eric iets te veel prikkels kreeg (van te veel feedback), waardoor hij minder de tijd leek te nemen om zich te focussen op het gene waar hij mee bezig leek te zijn. Verder denk ik dat selecteren met spraak toch niet de juiste oplossing is. Dit leek bij veel tests ook erg moeizaam te gaan. Een selectie-modus zou mij na het testen een betere uitkomst lijken, hier ga ik later op in. 

## User Scenario
Eric is een gehandicapte man van middelbare leeftijd. Hij werkt voor de gemeente van Amsterdam als expert op het gebied van toegankelijkheid voor mensen in een rolstoel, in de gebouwen in Amsterdam. Zelf zit hij ook in een rolstoel en fijne motorische handelingen kosten hem een stuk meer moeite. Voor zijn werk moet hij ook aardig wat administratieve handelingen verrichten. Hiervoor maakt hij gebruik van programma's als Word, Excel en zijn mail. Omdat handelingen als kopiëren-plakken Eric meer moeite kost, wilt hij graag met spraak deze handelingen op zijn computer kunnen uitvoeren. Eric wilt graag de handelingen die hem de meeste moeite kosten met spraak kunnen doen. In mijn concept kan Eric met zijn stem tekst kopiëren en plakken, navigeren tussen de applicaties die hij gebruikt voor werk en teksten dicteren. Ook is het selecteren van tekst robuuster gemaakt door middel van een selectie-modus. 

## Wat het moet worden
Na de 3 tests heb ik een vrij goed beeld gekregen van wat Eric wilt. Eric wilt namelijk gewoon makkelijk kunnen kopiëren-plakken tussen de applicaties die hij vaak gebruikt. Daarom presenteer ik hier mijn concept. 

1. De zero state

![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/zero-state.png)

De zero state is in essentie vrijwel hetzelfde als mijn concept dat ik voorlegde bij test 3. Alleen heb ik een kleine hint toegevoegd zodat de mic is sneller wordt gevonden. Ook zitten de mogelijke commands nu verstopt onder mic knop. Dit om Eric niet af te leiden van de main action van deze state. 

2. Er wordt gesproken...

![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/first-word.png)

Op het moment dat de mic wordt geactiveerd worden de commands meteen getoond. Ook wordt er op de achtergrond een animatie gestart. Waarbij verschillende (vage) kleuren bewegen op de spraak. Als er te lang niet wordt gesproken gaat de mic weer terug naar haar zero state. 

3. Command gevonden 

![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/command-found.png)

Als er een command wordt gehoord geeft de extentie een melding. Deze melding geeft aan of actie die bij het commando hoort goed is uitgevoerd of niet. 

4. Double trouble! 

![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/double-commands.png)

Bij dubbele commands wordt de extentie eerste geladen als er een "dubbel command" wordt gehoord. Vervolgens wordt er weer een melding gegeven als het tweede van de command goed is begrepen. Of er wordt een melding gegeven waarbij er wordt gevraagd om herhaling van het tweede command. 

5. Selectie-modus 

![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/selection-mode.png)

Als de selectie-modus aan staat worden alle woorden in een document klikbaar, zoals een knop klikbaar is. Op het moment dat er op een woord geklikt wordt start de selectie gestart. Eric zei dat selecteren zo makkelijk mogelijk moest. Daarom kan de selectie worden vergroot of verkleint door de linker en rechter helft van het toetsenbord te gebruiken. Rechts is het volgende woord erbij, links is het huidige woord eraf. Zo zonde dat ik deze feature niet kan testen...


## Mijn concept tegen velle licht van de exclusive design principles
Hier bespreek beknopt mijn kijk op de exclusive design principles en hun rol in mijn proces. 

### Study situation
Dit design principle is in mijn het fundament voor de andere drie principles. Hierom heb ik hier het meest opgelet tijdens [de eerste test](#De-eerste-test). De inzichten uit de eerste test legde het fundament voor wat uiteindelijk mijn concept is geworden. Zo kwam ik erachter dat Eric zelf de muis nog vrij goed kan gebruiken. Maar grote bewegingen waren lastig. Zo zei hij dat navigeren tussen applicaties vermoeiend was. Dit is zo'n fundamenteel inzicht voor mijn concept. 

### Ignore conventions
Mijn concept zou als 'normaal' design waarschijnlijk ook nog wel bediend kunnen worden door Eric. Maar sommige handelingen zijn nou eenmaal vermoeiend of omslachtig voor Eric. Kopiëren en plakken kan hij wel, maar het is omslachtig. Hierom heb ik in mijn concept spraakbediening toegevoegd. Dit kan hij gebruiken als hij dat wilt. De spraakbediening focust vooral op het helpen bij 'grote' handelingen als switchen tussen applicaties. 

### Prioritise identity
Ik vond het lastig om visueel een echte identiteit voor Eric te maken. Maar tijdens het testen bleek dat hij wel van kleine grapjes hield en hij had ook wel oog voor satisfying micro-interactie's. Hij vond dat mic knop goed in elkaar zat. In mijn uiteindelijke concept heb ik er nog een schepje bovenop gedaan. 

### Add nonsense
In de eerste twee tests had ik geen nonsense toegevoegd, omdat het werkend krijgen van de spraakbediening te veel tijd in beslag nam. In de derde test had ik een kleine easter-egg ingebouwd. Op het moment dat Eric "doe een dansje" zei, werd de achtergrond voor 5 seconde een disco. Complete nonsense dus. Maar hierdoor bedacht ik me wel dat ik mijn concept speelser en leuker te gebruiken moet maken. Hier heb ik op gelet bij mijn laatste concept.








