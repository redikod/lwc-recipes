import { createElement } from 'lwc';
import RecordEditFormStaticContact from 'c/recordEditFormStaticContact';

describe('c-record-edit-form-static-contact', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders lightning-record-edit-form with given input values', () => {
        const RECORD_ID_INPUT = '0031700000pJRRSAA4';
        const OBJECT_API_NAME_INPUT = 'Contact';

        // Create initial element
        const element = createElement('c-record-edit-form-static-contact', {
            is: RecordEditFormStaticContact
        });

        element.recordId = RECORD_ID_INPUT;
        element.objectApiName = OBJECT_API_NAME_INPUT;

        document.body.appendChild(element);

        const formEl = element.shadowRoot.querySelector(
            'lightning-record-edit-form'
        );
        expect(formEl.recordId).toBe(RECORD_ID_INPUT);
        expect(formEl.objectApiName).toBe(OBJECT_API_NAME_INPUT);

        const buttonEl = element.shadowRoot.querySelector('lightning-button');
        expect(buttonEl.type).toBe('submit');
        expect(buttonEl.label).toBe('Save');
    });

    it('renders given set of lightning-output-field`s in specific order', () => {
        const INPUT_FIELDS = [
            {
                fieldApiName: 'AccountId',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Name',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Title',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Phone',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Email',
                objectApiName: 'Contact'
            }
        ];
        const RECORD_ID_INPUT = '0031700000pJRRSAA4';
        const OBJECT_API_NAME_INPUT = 'Contact';

        // Create initial element
        const element = createElement('c-record-edit-form-static-contact', {
            is: RecordEditFormStaticContact
        });

        element.recordId = RECORD_ID_INPUT;
        element.objectApiName = OBJECT_API_NAME_INPUT;

        document.body.appendChild(element);

        const outputFieldNames = Array.from(
            element.shadowRoot.querySelectorAll('lightning-input-field')
        ).map(outputField => outputField.fieldName);
        expect(outputFieldNames).toEqual(INPUT_FIELDS);
    });
});
