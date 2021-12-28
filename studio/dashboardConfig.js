export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61cb64dfc24929a255dcad2c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6gnm187p',
                  apiId: '07cf8b27-18e3-4052-95aa-4f18000ab1b1'
                },
                {
                  buildHookId: '61cb64df87cc538cd9ec2eba',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ht6a8o75',
                  apiId: 'fc7144ab-a363-41c5-afb4-93fec4b61952'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/angelokeirsebilck/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ht6a8o75.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
