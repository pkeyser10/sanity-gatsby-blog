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
                  buildHookId: '60405cf1c6f0bb5045e8bf9a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-35asyhq9',
                  apiId: 'ee74f8d3-864b-46d5-bd0d-e44199e83aee'
                },
                {
                  buildHookId: '60405cf2607dd55dd908e5e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tye4zr9c',
                  apiId: '7ef071a3-c452-4297-957c-e169ce8cc3f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tye4zr9c.netlify.app', category: 'apps' }
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
