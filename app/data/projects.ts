export interface Project {
    id: string;
    title: string;
    description: string;
    details: string;
    image?: string;
    period?: string;
    skills?: string[][];
    place?: string;
    realisations?: string[][];
}

export const projects: Project[] = [
    {
        id: "stage-irrifrance",
        title: "Développeur full-stack (stage)",
        description: "Gestion des différentes applications de l'entreprise.",
        details: `Irrifrance est une entreprise spécialisée dans la production de machines agricoles, principalement destinées à l'irrigation des cultures. 
        
        Mon équipe était composée de trois personnes et j'occupais un rôle de développeur full-stack.
        
        J'ai essentiellement travaillé sur deux applications :
            – Le Back-Office, application interne développée avec Symfony, notamment utilisée dans des tâches de gestion par les employés, mais surtout présente pour faire le lien entre les données de l'ERP et les données du site client.
            – Le site client, composé en deux parties, avec une API développée avec Symfony et un front-end développé avec Angular.`,
        image: "/img/irrifrance_pivot.jpg",
        period: "4 mois (Avril 2025 - Juillet 2025)",
        place: "Irrifrance, Paulhan",
        skills: [["Langages et framewroks", "PHP", "Symfony", "TypeScript", "Angular", "HTML/CSS", "JavaScript", "Bootstrap"],["Outils et applications", "Git", "GitLab", "GitHub", "Bruno"],["Données", "PostgreSQL", "MySQL", "SQL"]],
        realisations: [["Developpement", "Synchronisation des données entre les différentes applications", "Exporter les données des machines sous forme de fichier excel", "Tutoriels interractifs pour aider les utilisateurs avec les nouvelles fonctionnalités", "Gestion des accès", "Trier les tableaux par colonne, modifier les informations, supprimer des produits, etc."],
            ["Maintenance", "Identification de bugs et correction", "Documentation technique"],
            ["Analyse", "Trier les informations retournées par les client pour en definir un besoin"]]
    },
    {
        id: "sae-s5",
        title: "Gestion des SAEs",
        description: "Application permettant de gérer les SAE du BUT Informatique.",
        details:
            `Les SAEs (situations d'apprentissage et d'évaluation) sont des projets donnés aux étudiants du BUT. Ils ont souvent pour objectif de simuler ce à quoi un projet dans un contexte professionnel pourrait ressembler.
            
            Durant la troisième et dernière année de mon diplôme, j'ai travaillé sur une SAE visant à créer une application permettant de gérer les SAEs.
            
            Cette application devait notamment permettre aux professeurs de créer des SAEs, ou encore d'évaluer les étudiants. Elle devait aussi permettre aux étudiants de créer des équipes, ou encore de visualiser leurs résultats.
            
            À cause de certaines circonstances (abandons et changements de parcours), je me suis retrouvé seul sur ce projet, initialement conçu pour une équipe de 4 ou 5.`,
        image: "/img/saes5.png",
        period: "5 mois (Septembre 2024 - Janvier 2025)",
        place: "IUT Montpellier-Sète, Sète",
        skills: [["Langages et framewroks", "PHP", "Symfony", "HTML/CSS", "JavaScript"],["Outils et applications", "Git", "GitLab", "Trello", "Docker"]],
        realisations: [["Developpement", "Travailler dans un environnement Docker", "Définir des accès selon le rôle", "Travailler en autonomie"],
            ["Analyse", "Identifier, définir et prioriser les tâches"]]
    },
    {
        id: "stage-hexis",
        title: "Développeur web (stage)",
        description: "Refonte d'un site et développement d'une application.",
        details:
            `Hexis est une entreprise internationale qui travaille principalement sur les films PVC.
            
             Ce stage a eu lieu durant la seconde année de mon BUT Informatique. 
             
             J'ai travaillé dans le service communication, où il y avait un autre développeur travaillant à distance.`,
        image: "/img/hexis.png",
        period: "3 mois (Avril 2024 - Juin 2024)",
        place: "Hexis, Frontignan",
        skills: [["Langages et framewroks", "PHP", "HTML/CSS", "JavaScript", "jQuery"],["Outils et applications", "WordPress", "Elementor", "WP Plugins", "Figma", "Teams"],
            ["Méthodologies", "Réunions", "Maquettage"]],
        realisations: [["Refonte du site des formations", "J'ai réalisé la refonte du site proposant des formations, en utilisant d'abord Figma pour le maquettage, et ensuite WordPress et des plugins comme Elementor pour intégrer ces maquettes."],
            ["Application de feedback", "J’ai créé une application utilisée lors d’un événement organisé par l’entreprise. Cette application permettait aux invités de laisser un avis sur les stands en leur offrant la possibilité de noter et d’écrire un commentaire après avoir scanné des QR codes. Elle a été développée en PHP, JavaScript et HTML/CSS."]]
    },
    {
        id: "portfolio",
        title: "Portfolio",
        description: "Réalisation de mon portfolio.",
        details:
            `J'ai décidé de refaire mon portfolio afin de pouvoir clairement exposer mes compétences et mon profil.`,
        image: "/img/portfolio.png",
        period: "Novembre 2025 - Maintenant",
        skills: [["Langages et framewroks", "React", "Tailwind", "HTML/CSS", "JavaScript", "TypeScript", "Animate UI"]],
        realisations: [["Utilisation de nouvelles technologies", "Dans une démarche de veille technologique et d'apprentissage, j'ai conçu ce portfolio en utilisant React et d'autres outils tels que Tailwind."]]
    },
    {
        id: "sae-s3",
        title: "Gestion des stages et des alternances",
        description: "Application permettant de gérer les stages et les alternances du BUT Informatique.",
        details:
            `Les SAEs (situations d'apprentissage et d'évaluation) sont des projets donnés aux étudiants du BUT. Ils ont souvent pour objectif de simuler ce à quoi un projet dans un contexte professionnel pourrait ressembler.
            
            Durant la seconde année de ma formation, j'ai travaillé sur une SAE visant à créer une application permettant au personnel de l'IUT de gérer les stages et les alternances des étudiants.
            
            Ce projet a été réalisé en groupe de cinq personnes.`,
        image: "/img/sae3.PNG",
        period: "5 mois (Septembre 2023 - Janvier 2024)",
        place: "IUT Montpellier-Sète, Montpellier",
        skills: [["Langages et framewroks", "PHP", "HTML/CSS", "JavaScript"],["Outils et applications", "GitLab", "Trello"],["Méthodologies", "Méthodes agiles (SCRUM)"],["Données", "SQL", "MySQL"]],
        realisations: [["Management", "Utilisation des méthodes agiles, avec un Scrum master et un product owner"],
            ["Analyse", "Conception des user stories", "planification de projet"]]
    },
];
