# Dokumentacja Aplikacji Siłowni w React

## Wprowadzenie

Dokumentacja ta zawiera szczegółowe informacje dotyczące aplikacji Siłowni w React. Aplikacja została stworzona w celu obsługi systemu siłowni, umożliwiając zarządzanie użytkownikami, treningami, sprzętem i innymi aspektami związanymi z prowadzeniem siłowni.

## Spis Treści

1. [Instalacja](#instalacja)
2. [Struktura Projektu](#struktura-projektu)
3. [Konfiguracja](#konfiguracja)
4. [Komponenty](#komponenty)
5. [Routing](#routing)
6. [Stan Aplikacji](#stan-aplikacji)
7. [Zarządzanie Użytkownikami](#zarzadzanie-uzytkownikami)
8. [Zarządzanie Treningami](#zarzadzanie-treningami)
9. [Zarządzanie Sprzętem](#zarzadzanie-sprzetem)
10. [Testowanie](#testowanie)
11. [Dalsze Kroki](#dalsze-kroki)

## Instalacja
Aby zainstalować aplikację, wykonaj poniższe kroki:
1. Pobierz i zainstaluj WebStorm
2. Po zainstalowaniu wybierz "get from VCS
3. alt+F12 otworzy się terminal
4. W terminalu wpisz komendę npm install i naciśnij ctrl+enter
5. Może otworzyć się okno z konfiguracją npm, w Node interpreter wybierz to z appdata (u mnie tam się zrobił folder)
6. Po zainstalowaniu wszystkich pakietów, aby uruchomić aplikację wpisz w terminalu (tym w webstorm alt+F12) npm start i znowu ctrl+enter
7. Uruchomi się środowisko deweloperskie które po pełnym uruchomieniu uruchomi przeglądarkę i a następnie załaduje stronę, proces ten trwa dłuższą chwilę
8. Żeby zmienić bazowe url serwera wejdź do src/axiosConfig.js i zmień stałą BASE_URL na url serwera\

```bash
git clone https://github.com/twoje_repozytorium/silownia-react.git
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

