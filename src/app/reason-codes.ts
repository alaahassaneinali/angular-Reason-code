export class ItemIssue {
  orderNumber: number;

  constructor(orderNumber: number) {
    this.orderNumber = orderNumber;
  }
}

export class Issues {
  itemIssue: ItemIssue;

  constructor(itemIssue: ItemIssue) {
    this.itemIssue = itemIssue;
  }
}

export class ReasonCode {
  rcKey: string;

  rcID: string;

  rcValue: string;

  rcName: string;

  displayText: string;

  hierarchy: string;

  issues: Issues;

  constructor(
    rcKey: string,
    rcID: string,
    rcValue: string,
    rcName: string,
    displayText: string,
    hierarchy: string,
    issues: Issues
  ) {
    this.rcID = rcID;
    this.rcKey = rcKey;
    this.rcValue = rcValue;
    this.rcName = rcName;
    this.displayText = displayText;
    this.hierarchy = hierarchy;
    this.issues = issues;
  }
}

const reasonCodesList = [
  {
    rcKey: '14',
    rcID: '14',
    rcValue: 'option1',
    rcName: 'Customer Choice',
    displayText: 'option1',
    hierarchy: '5',
    issues: {
      itemIssue: { orderNumber: 1 },
    },
  },
  {
    rcKey: '1',
    rcID: '11',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option2',
    hierarchy: '1',
    issues: {
      itemIssue: { orderNumber: 1 },
    },
  },
  {
    rcKey: '2',
    rcID: '1',
    rcValue: 'option3',
    rcName: 'option2',
    displayText: 'option3',
    hierarchy: '2',
    issues: {
      itemIssue: { orderNumber: 2 },
    },
  },
  {
    rcKey: '3',
    rcID: '1',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option4',
    hierarchy: '2',
    issues: {
      itemIssue: { orderNumber: 3 },
    },
  },
  {
    rcKey: '4',
    rcID: '1',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option5',
    hierarchy: '2',
    issues: {
      itemIssue: { orderNumber: 4 },
    },
  },
  {
    rcKey: '5',
    rcID: '11',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option6',
    hierarchy: '1',
    issues: {
      itemIssue: { orderNumber: 5 },
    },
  },
  {
    rcKey: '6',
    rcID: '1',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option7',
    hierarchy: '2',
    issues: {
      itemIssue: { orderNumber: 6 },
    },
  },
  {
    rcKey: '7',
    rcID: '1',
    rcValue: 'option8',
    rcName: 'option8',
    displayText: 'option8',
    hierarchy: '2',
    issues: {
      itemIssue: { orderNumber: 7 },
    },
  },
  {
    rcKey: '8',
    rcID: '9',
    rcValue: 'option2',
    rcName: 'option9',
    displayText: 'option9',
    hierarchy: '4',
    issues: {
      itemIssue: { orderNumber: 1 },
    },
  },
  {
    rcKey: '9',
    rcID: '9',
    rcValue: 'option2',
    rcName: 'option10',
    displayText: 'option10',
    hierarchy: '4',
    issues: {
      itemIssue: { orderNumber: 2 },
    },
  },
  {
    rcKey: '10',
    rcID: '12',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option11',
    hierarchy: '3',
    issues: {
      itemIssue: { orderNumber: 3 },
    },
  },
  {
    rcKey: '11',
    rcID: '12',
    rcValue: '',
    rcName: 'option2',
    displayText: 'option12',
    hierarchy: '3',
    issues: {
      itemIssue: { orderNumber: 4 },
    },
  },
  {
    rcKey: '12',
    rcID: '9',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option13',
    hierarchy: '4',
    issues: {
      itemIssue: { orderNumber: 5 },
    },
  },
  {
    rcKey: '13',
    rcID: '1',
    rcValue: 'option2',
    rcName: 'option2',
    displayText: 'option14',
    hierarchy: '2',
    issues: {
      itemIssue: { orderNumber: 6 },
    },
  },
];
const reasonsCodesMap = new Map<number, ReasonCode>([]);

export function getReasonCodes(): Map<number, ReasonCode> {
  reasonCodesList.forEach((code: ReasonCode) => {
    reasonsCodesMap.set(Number(code.rcKey), code);
  });
  return reasonsCodesMap;
}
