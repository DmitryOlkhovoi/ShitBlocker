export function findByXpath(dictionary: string[]) {
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

export function findByLink(dictionary: string[]) {
    const nodesList: Element[] = [];

    dictionary.forEach((item) => {
        document.querySelectorAll(`a[href="${item}"]`)
            .forEach((element) => nodesList.push(element))
    });

    return nodesList;
}