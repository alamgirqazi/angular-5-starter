import { Injectable } from '@angular/core';

/**
 * Helper Services and Functions
 */
@Injectable()
export class MiscHelperService {
  constructor() {}

  statesListing = [
    {
      name: 'Alabama',
      abbreviation: 'AL'
    },
    {
      name: 'Alaska',
      abbreviation: 'AK'
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS'
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ'
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR'
    },
    {
      name: 'California',
      abbreviation: 'CA'
    },
    {
      name: 'Colorado',
      abbreviation: 'CO'
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT'
    },
    {
      name: 'Delaware',
      abbreviation: 'DE'
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC'
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM'
    },
    {
      name: 'Florida',
      abbreviation: 'FL'
    },
    {
      name: 'Georgia',
      abbreviation: 'GA'
    },
    {
      name: 'Guam',
      abbreviation: 'GU'
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI'
    },
    {
      name: 'Idaho',
      abbreviation: 'ID'
    },
    {
      name: 'Illinois',
      abbreviation: 'IL'
    },
    {
      name: 'Indiana',
      abbreviation: 'IN'
    },
    {
      name: 'Iowa',
      abbreviation: 'IA'
    },
    {
      name: 'Kansas',
      abbreviation: 'KS'
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY'
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA'
    },
    {
      name: 'Maine',
      abbreviation: 'ME'
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH'
    },
    {
      name: 'Maryland',
      abbreviation: 'MD'
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA'
    },
    {
      name: 'Michigan',
      abbreviation: 'MI'
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN'
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS'
    },
    {
      name: 'Missouri',
      abbreviation: 'MO'
    },
    {
      name: 'Montana',
      abbreviation: 'MT'
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE'
    },
    {
      name: 'Nevada',
      abbreviation: 'NV'
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH'
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ'
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM'
    },
    {
      name: 'New York',
      abbreviation: 'NY'
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC'
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND'
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP'
    },
    {
      name: 'Ohio',
      abbreviation: 'OH'
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK'
    },
    {
      name: 'Oregon',
      abbreviation: 'OR'
    },
    {
      name: 'Palau',
      abbreviation: 'PW'
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA'
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR'
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI'
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC'
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD'
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN'
    },
    {
      name: 'Texas',
      abbreviation: 'TX'
    },
    {
      name: 'Utah',
      abbreviation: 'UT'
    },
    {
      name: 'Vermont',
      abbreviation: 'VT'
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI'
    },
    {
      name: 'Virginia',
      abbreviation: 'VA'
    },
    {
      name: 'Washington',
      abbreviation: 'WA'
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV'
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI'
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY'
    }
  ];

  // This will return true if string is a URL else False
  isUrl(str) {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  get getstatesListing(): any {
    return this.statesListing;
  }

  /**
   * @Author Alam
   * @Name replaceNumberToCurrency
   * @Parameter @amount
   * * @Purpose Convert number to Currency
   * @Return Input with comma if any
   */
  replaceNumberToCurrency(event) {
    let newVal = event.replace(/\D/g, '');
    let response;
    const rawValue = newVal;
    // don't show braces for empty value
    if (newVal.length == 0) {
      newVal = '';
    }
    // don't show braces for empty groups at the end
    else {
      while (newVal.charAt(0) == '0') {
        newVal = newVal.substr(1);
      }

      newVal = newVal.replace(/[^\d.\',']/g, '');

      const point = newVal.indexOf('.');
      if (point >= 0) {
        newVal = newVal.slice(0, point + 3);
      }

      const decimalSplit = newVal.split('.');
      let intPart = decimalSplit[0];
      let decPart = decimalSplit[1];

      intPart = intPart.replace(/[^\d]/g, '');
      if (intPart.length > 3) {
        let intDiv = Math.floor(intPart.length / 3);
        while (intDiv > 0) {
          let lastComma = intPart.indexOf(',');
          if (lastComma < 0) {
            lastComma = intPart.length;
          }

          if (lastComma - 3 > 0) {
            intPart = intPart.splice(lastComma - 3, 0, ',');
          }
          intDiv--;
        }
      }

      if (decPart === undefined) {
        decPart = '';
      } else {
        decPart = '.' + decPart;
      }
      response = intPart + decPart;
    }
    return response;
  }

  /**
   * @Author Alam
   * @Name replaceCommaFromString
   * @Parameter @amount
   * * @Purpose Convert currency back to Number/Int
   * @Return Input without comma
   */

  replaceCommaFromString(input) {
    if (Number.isInteger(input)) {
      return input;
    } else {
      const result = input.replace(/,/g, '');
      return parseInt(result);
    }
  }

  async destroyDataTable(tableId, dtElement) {
    dtElement.forEach(async alertInstance => {
      if (alertInstance['el'].nativeElement.id === tableId) {
        if (alertInstance.dtInstance) {
          await alertInstance.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
        }
      }
    });
  }
}
