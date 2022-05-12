# Het kopieer-maatplak voor Eric 
Dit project draait om het maken van een applicatie voor één persoon. Deze persoon is Eric. Eric zit in een rolstoel en kan minder gemakkelijk gebruik maken van het web. Aan mij de taak om een applicatie te maken waarin Eric kan kopieren en plakken met zijn stem. 

## Table of contents
- [Probleem en case](#Probleem-en-case)
- [Installation](#Installation)
- [De eerste test](#De-eerste-test)
- [De tweede test](#De-tweede-test)
- [De derde test](#De-derde-test)

## Probleem en case 💼
Eric wilt graag makkelijker kunnen kopieren en plakken tussen verschillende applicaties op zijn laptop. Omdat Eric geen beschikking heeft over de fijne motoriek zijn grote muisbewegingen lastig voor hem. Ook is kopieren en plakken erg omslachtig. En omdat Eric veel administratieve taken moet doen voor de gemeente Amsterdam, mag dit allemaal wel iets makkelijker. Vandaar de case: * Eric wil graag met zijn stem basishandelingen kunnen uitvoeren binnen documenten, zoals copy/paste. Hier is het de taak om uit te zoeken welke handelingen hij nog meer vaak gebruikt, en hoe je die op een voor Eric zo prettig mogelijke manier kunt laten werken.*

## Installation
```git clone https://github.com/JuulVrasdonk/human-centered-design```

## De eerste test
De eerste test was meer een soort kennismaking. Omdat ik moeilijk in kon schatten wat Eric makkelijke en moeilijke handelingen vond op een computer. 
Hierom wilde ik nog niet een heel concept ver uitwerken. 

### Waarnemingen 
- Ik vond dat **het selecteren van tekst erg soepel ging**. 
- Eric gebruikt vooral Edge als browser
- Hij kan zowel muis als trackpad vrij goed gebruiken. Maar zijn voorkeur ligt bij een muis. 
- Dingen waar je meerdere vingers voor moet gebruiken is relatief lastig en vermoeiend.
- Eric vond dat er soms iets te veel, of beter gezegd, te chaotisch feedback werd gegeven op zijn spraak. 
- Eric vond het belangrijk dat er gezocht kon worden op woorden in een document, met spraak. (Denk aan cmd + f) 
- Er werd veel gesproken over verschillende programma's als Excel en Word. (Chrome extension?)
- De applicatie moet het liefst 2 talen kunnen verstaan. 
- Het belangrijkste is: **kopiëren-plakken moet extreem soepel gaan met spraak. Daarnaast moet tekst makkelijk gezocht, geselecteerd en gekopieerd kunnen worden.**

### Mijn ideeën
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

### Mijn ideeën
Na de tweede test weet ik nu echt zeker wat Eric goed kan gaan helpen. Ik wil een deel van de browser simuleren zodat ik kan kijken hoe Eric omgaat met een applicatie die lijkt op een typische Chrome extentie. Zie de schets: 
![alt text](https://github.com/JuulVrasdonk/human-centered-design/blob/main/assets/schets.png)


## De derde test
