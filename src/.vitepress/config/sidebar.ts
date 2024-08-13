import type { DefaultTheme } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';


export const sidebar: DefaultTheme.Config['sidebar'] = {
    
    '/': [
        {
            text: 'Examples',
            items: [
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ]
}