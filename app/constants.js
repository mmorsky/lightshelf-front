export default {
  // Action types
  BOOKS: {
    FIND: 'FIND_BOOK',
    LIST: {
      REQUEST: 'LIST_BOOKS_REQUEST',
      RESPONSE: 'LIST_BOOKS_RESPONSE',
      //states
      SUCCESS: 'LOAN_RETURN_SUCCESS',
      FAILED: 'LOAN_RETURN_FAILED'
    },
    RETURN: {
      REQUEST: 'LOAN_RETURN_RESPONSE',
      RESPONSE: 'LOAN_RETURN_REQUEST',
      //states
      SUCCESS: 'LOAN_RETURN_SUCCESS',
      FAILED: 'LOAN_RETURN_FAILED'
    },
    BORROW: {
      REQUEST: 'LOAN_BORROW_REQUEST',
      RESPONSE: 'LOAN_BORROW_RESPONSE',
      //states
      SUCCESS: 'LOAN_BORROW_SUCCESS',
      FAILED: 'LOAN_BORROW_FAILED'
    },
    ADD: {
      REQUEST: 'ADD_BOOK_REQUEST',
      RESPONSE: 'ADD_BOOK_RESPONSE',
      //states
      SUCCESS: 'ADD_BOOK_SUCCESS',
      FAILED: 'ADD_BOOK_FAILED'
    },

    // states
    FETCHED: 'BOOKS_FETCHED',
    NOT_FETCHED: 'BOOKS_NOT_FETCHED'
  },
  SEARCH: {
    REQUEST:'SEARCH_REQUEST',
    RESPONSE: 'SEARCH_RESPONSE',
    // states
    SUCCESS: 'SEARCH_SUCCESS',
    FAILED: 'SEARCH_FAILED'
  },
  AUTHENTICATION: {
    LOGIN: {
      REQUEST: 'LOGIN_REQUEST',
      RESPONSE: 'LOGIN_RESPONSE'
    },
    REGISTER: {
      REQUEST: 'REGISTER_REQUEST',
      RESPONSE: 'REGISTER_RESPONSE',
      //
      SUCCESS: 'REGISTER_SUCCESS',
      FAILED: 'REGISTER_FAILED'
    },
    // states
    PERMISSION: {
      GRANTED: 'AUTHORIZED',
      DENIED: 'UNAUTHORIZED'
    }
  },

  ROUTING: {
    GO: 'GO_TO_ROUTE',
    // states
    ARRIVED: 'AT_ROUTE'
  },

  // deprecated?
  ADD_SENT: 'ADD_SENT',
  ADD_WAITING: 'ADD_WAITING',
  ADD_COMPLETE: 'ADD_COMPLETE',
  ADD_FAILED: 'ADD_FAILED',
  BORROW_SENT: 'BORROW_SENT',
  BORROW_WAITING: 'BORROW_WAITIG',
  BORROW_COMPLETE: 'BORROW_COMPLETE',
  BORROW_FAILED: 'BORROW_FAILED'
};
