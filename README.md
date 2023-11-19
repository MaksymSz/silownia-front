# Poradnik instalacji
1. Pobierz i zainstaluj WebStorm
2. Po zainstalowaniu wybierz "get from VCS
3. alt+F12 otworzy się terminal
4. w terminalu wpisz komendę npm install i naciśnij ctrl+enter
5. może otworzyć się okno z konfiguracją npm, w Node interpreter wybierz to z appdata (u mnie tam się zrobił folder)
6. po zainstalowaniu wszystkich pakietów wpisz w terminalu (tym w webstorm alt+F12) npm start i znowu ctrl+enter
7. uruchomi się środowisko deweloperskie które po pełnym uruchomieniu uruchomi przeglądarkę i a następnie załaduje stronę, proces ten trwa dłuższą chwilę
8. strona działa, możesz przetestować sztuczne endpointy ale mogą one nie działać z tego względu że Beeceptor ogranicza dzienne zapytania do ~40
9. Żeby zmienić bazowe url serwera wejdź do src/axiosConfig.js i zmień stałą BASE_URL na url serwera
