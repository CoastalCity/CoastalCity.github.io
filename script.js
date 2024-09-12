// Warten, bis die Seite vollständig geladen ist, um den Loader auszublenden
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');  // Loader aktivieren

    // Wenn die Seite vollständig geladen ist
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');  // Loader ausblenden
    });
});
