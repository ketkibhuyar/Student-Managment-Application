/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const firstName_validation = {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    id: 'firstName',
    placeholder: 'write your first name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const lastName_validation = {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    id: 'lastName',
    placeholder: 'write your last name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const address_validation = {
    name: 'address',
    label: 'Address',
    type: 'text',
    id: 'address',
    placeholder: 'Enter address',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 100,
        message: '100 characters max',
      },
    },
  }
  
  export const num_validation = {
    name: 'mobileNumber',
    label: 'number',
    type: 'number',
    id: 'mobileNumber',
    placeholder: 'Enter your mobile number',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
  }
  
  export const dob_validation = {
    name: 'dateOfBirth',
    label: 'Date of birth',
    type: 'email',
    id: 'dateOfBirth',
    placeholder: 'Enter date of birth',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
        "^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$",
        message: 'not valid',
      },
    },
  }