export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea1dfd323c564ca90bdfffc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-zf497enh',
                  apiId: '47705d5e-ce26-425f-9abc-eccef6cb56d4'
                },
                {
                  buildHookId: '5ea1dfd476a9d69b30aae844',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-cyvebp8x',
                  apiId: '41aef47d-3b3b-44e9-9cdd-c9f52b89af64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dragonrapstar/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-cyvebp8x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
