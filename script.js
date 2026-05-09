// menu mobile : fermer au clic
document.querySelectorAll('header nav a').forEach(function(a) {
  a.onclick = function() {
    document.querySelector('header nav').classList.remove('open');
  };
});

// catégories veille : afficher seulement la catégorie sélectionnée
document.querySelectorAll('.cat-btn').forEach(function(b) {
  b.onclick = function() {
    document.querySelectorAll('.cat-btn').forEach(function(x) { x.classList.remove('actif'); });
    b.classList.add('actif');
    var cat = b.dataset.cat;
    document.querySelectorAll('#actus .actu').forEach(function(a) {
      a.style.display = (a.dataset.cat === cat) ? '' : 'none';
    });
  };
});

// filtres tâches (E5 et E6)
document.querySelectorAll('.filtres-taches').forEach(function(grp) {
  var btns = grp.querySelectorAll('.filtre-tache');
  var section = grp.parentElement;
  var taches = section.querySelectorAll('.tache');
  btns.forEach(function(b) {
    b.onclick = function() {
      btns.forEach(function(x) { x.classList.remove('actif'); });
      b.classList.add('actif');
      var f = b.dataset.filt;
      taches.forEach(function(t) {
        if (f === 'toutes' || t.dataset.milieu === f) {
          t.style.display = '';
        } else {
          t.style.display = 'none';
        }
      });
    };
  });
});

// filtres veille
var filtres = document.querySelectorAll('.filtre');
var actus = document.querySelectorAll('.actu');

filtres.forEach(function(b) {
  b.onclick = function() {
    filtres.forEach(function(x) { x.classList.remove('actif'); });
    b.classList.add('actif');
    var cat = b.dataset.cat;
    actus.forEach(function(a) {
      if (cat === 'tous' || a.dataset.cat === cat) {
        a.style.display = '';
      } else {
        a.style.display = 'none';
      }
    });
  };
});

// formulaire (démo)
var f = document.querySelector('form');
if (f) {
  f.onsubmit = function(e) {
    e.preventDefault();
    var b = f.querySelector('button');
    b.innerText = 'Envoyé ✓';
    setTimeout(function() {
      b.innerText = 'Envoyer →';
      f.reset();
    }, 2000);
  };
}
