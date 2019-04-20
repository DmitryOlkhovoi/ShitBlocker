import douDictionary from './dictionaries/dou.ua';

function findByXpath(dictionary: string[]) {
    const nodesList: Element[] = [];
    let node;

    dictionary.forEach((xpath) => {
        const found = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        
        while (node = found.iterateNext() as Element) {
            nodesList.push(node);
        }
    })

    return nodesList;
}

function findByLink(dictionary: string[]) {
    const nodesList: Element[] = [];

    dictionary.forEach((item) => {
        document.querySelectorAll(`a[href="${item}"]`)
            .forEach((element) => nodesList.push(element))
    });

    return nodesList;
}

export default [
    {
        host: 'dou.ua',
        remove: [
            () => {
                const topics = findByXpath(douDictionary.words)
                    .map((topic) => topic.closest('article')).filter((topic) => topic);
                
                const topicsByUsers = findByLink(douDictionary.users)
                    .map((topic) => topic.closest('article')).filter((topic) => topic);

                const commentsByUsers = findByLink(douDictionary.users)
                    .map((topic) => topic.closest('.comment')).filter((comment) => comment);

                return [...topics, ...topicsByUsers, ...commentsByUsers];
            },
            '.b-sidebar-comments', // Sidebar comments
            '.b-index-discussions', // Centered comments
            '.mini-header', // Ad
            '.b-sponsors' // Ad
        ]
    }
];