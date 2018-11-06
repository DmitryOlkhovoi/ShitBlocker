type ProcessItems = (elements: NodeListOf<Element>) => void;

interface Rule {
  name: string;
  selector: string;
  processItems?: ProcessItems
}

interface Rules {
  remove: Rule[];
}

interface RulesIndex {
  [key: string]: Rules
}
