import douDictionary from './dictionaries/dou.ua'
import { findByXpath, findByLink } from './u'

export default [
    {
        host: 'dou.ua',
        remove: [
            () => {
                return [
                    ...findByXpath(douDictionary.words)
                        .map((topic) => topic.closest('article')),
                    ...findByLink(douDictionary.users)
                        .map((topic) => topic.closest('article')),
                    ...findByLink(douDictionary.users)
                        .map((topic) => topic.closest('.comment'))
                ];
            },
            '.b-sidebar-comments', // Sidebar comments
            '.b-index-discussions', // Centered comments
            '.mini-header', // Ad
            '.b-sponsors' // Ad
        ]
    },
    {
        host: 'censor.net.ua', // Are you okay?
        remove: [
            'body'
        ]
    },
    {
        host: 'itc.ua',
        remove: [
            '#disqus_thread' // Protection from xiaomi/android lovers
        ]
    }
];