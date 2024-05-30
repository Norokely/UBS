/*FonctionSubmit pour gérer la soumission du formulaire*/
function handleSubmit(event){
    // récupérer l'élément formulaire avec l'identifiant 'contacct-form'
    const form = document.getElementById('contact-form');
    //encode l'objet du message du formulaire pour l'inclure dans une URL
    const subject = encodeURIComponent(form.subject.value);
    //encode le corps du message du formulaire pour l'inclure dans une URL
    const body = encodeURIComponent(
    `Nom: ${form.nom.value}\n` + //récupère et encode le nom de famille
    `Prénom:${form.prenom.value}\n` +
    `Date de naissance:${form.date.value}\n` +
    `Formations souhaitées à l'ENSIBS:${form.formations.value}\n` +
    `Actuellement, vous êtes:${form.annee.value}\n` +
    `Langues parlées:${Array.from(form.langues).filter(langue => langue.checked).
        map(langue=>langue.value).join(',')}\n\n` +
        /*form.langues : checkboxes; Aray.from(form.langues) : converti checkboxes en un tableau*/
        /*filter(langue => langue.checked): checcked est vrai*/
        /* map(langue=>langue.value): crée un nouveau tableau contenant les valeurs des checkboxes cochées*/
        /*join(','): les éléments du tableau en  une seule chaine de caractères*/
        `Demande spécifique:\n${form.date.value}` 

    );
    //rediriger vers la messagerie
    window.location.href =`mailto:prenom.nom@univ-ubs.fr?subject=${subject}&body=${body}`;
}