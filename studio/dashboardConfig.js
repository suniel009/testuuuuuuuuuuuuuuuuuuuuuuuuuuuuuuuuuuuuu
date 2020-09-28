export default {
  widgets: [
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
                  buildHookId: '5f718446f9a2316613cffc8b',
                  title: 'Sanity Studio',
                  name: 'testuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu-studio',
                  apiId: '3a7a2be1-2436-4c79-a704-045142d065a2'
                },
                {
                  buildHookId: '5f7184466d30c45f98514045',
                  title: 'Blog Website',
                  name: 'testuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
                  apiId: 'ca33cc3c-3bbf-4b32-b096-11e36e32ca8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/testuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://testuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
