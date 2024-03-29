# Dokumentacja Aplikacji Siłowni w React

## Wprowadzenie

Dokumentacja ta zawiera szczegółowe informacje dotyczące aplikacji Siłowni w React. Aplikacja została stworzona w celu obsługi systemu siłowni, umożliwiając zarządzanie użytkownikami, treningami, sprzętem i innymi aspektami związanymi z prowadzeniem siłowni.

## Spis Treści

1. [Instalacja](#instalacja)
2. [Struktura Projektu](#struktura-projektu)
3. [Komponenty](#komponenty)
4. [Konfiguracja](#konfiguracja)
5. [Routing](#routing)
6. [Testowanie](#testowanie)
7. [Dokumentacja kodu](#dokumentacja-kodu)
8. [Dokumentacja użytkownika](#dokumentacja-użytkownika)

## Instalacja
Aby zainstalować aplikację, wykonaj poniższe kroki:
1. Pobierz i zainstaluj WebStorm
2. Po zainstalowaniu wybierz "get from VCS
3. alt+F12 otworzy się terminal
4. W terminalu wpisz komendę npm install i naciśnij ctrl+enter
5. Może otworzyć się okno z konfiguracją npm, w Node interpreter wybierz to z appdata (u mnie tam się zrobił folder)
6. Po zainstalowaniu wszystkich pakietów, aby uruchomić aplikację wpisz w terminalu (tym w webstorm alt+F12) npm start i znowu ctrl+enter
7. Uruchomi się środowisko deweloperskie które po pełnym uruchomieniu uruchomi przeglądarkę i a następnie załaduje stronę, proces ten trwa dłuższą chwilę
8. Żeby zmienić bazowe url serwera wejdź do src/axiosConfig.js i zmień stałą BASE_URL na url serwera wystawiającego endpointy

```bash
git clone https://github.com/MaksymSz/silownia-front.git
cd silownia-react
npm install
npm start
```

## Struktura projektu
```lua
/silownia-react
|-- /.idea
|   |-- /inspectionProfiles
|-- /public
|   |-- /images
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- manifest.json
|-- /src
|   |-- /components
|       |-- /sites
|       |-- custom-sidebar.css
|       |-- siebar.js
|   |-- App.css
|   |-- App.js
|   |-- App.test.js
|   |-- axiosConfig.js
|   |-- index.js
|   |-- logo.svg
|   |-- reportWebVitals.js
|   |-- setupTests.js
|   |-- utils.js
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```
## Konfiguracja
W pliku axiosConfig.js znajdują się metody konfigurujące działanie zapytań realizowanych za pomocą axios.

## Komponenty
W folderze src/components znajdują się komponenty React odpowiedzialne za interfejs użytkownika.
Poza tym folderem znajduje się komponent całościowy aplikacji(App.js) oraz komponent paska nawigacyjnego(sidebar.js).

## Routing
Aplikacja wykorzystuje React Router do obsługi nawigacji między różnymi widokami.

## Testowanie
Kod został poddany statycznej analizie kodu za pomocą ESlint. Wyniki zostały umieszczone jako plik html z odnośnikiem na stronie głównej dokumentacji.

## Dokumentacja kodu
Dokumentacja kodu aplikacji została stworzona za pomocą JSDocs,a następnie udostępiona za pomocą [github-pages](https://maksymsz.github.io/silownia-front/).
W dokumentacji znajdują się wyniki statycznej analizy kodu.

## Dokumentacja użytkownika
Dokumentacja użytkownika znajduje się w pliku [user_doc.pdf](https://github.com/MaksymSz/silownia-front/blob/master/user_doc.pdf)

