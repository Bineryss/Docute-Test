/* globals Docute */

new Docute({
    target: '#docute',
    sourcePath: './docs/',
    plugins: [
        docuteMermaid()
    ],
    nav: [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        }
    ],
    sidebar: [
        {
            title: 'Home',
            links: [
                {
                    title: 'Introduction',
                    link: '/introduction'
                },
                {
                    title: 'Installation',
                    link: '/installation'
                }
            ]
        },
        {
            title: 'React',
            links: [
                {
                    title: 'React im Projekt',
                    link: '/react/reactOverview'
                },
                {
                    title: 'Material UI',
                    link: '/react/MaterialUi'
                },
                {
                    title: 'Aufbau einer Komponente',
                    link: '/react/AufbauKomponente'
                },
            ]
        },
        {
            title: 'Middleware',
            links: [
                {
                    title: 'Redux',
                    link: '/middleware/Redux'
                }
            ]
        }
    ]
});
