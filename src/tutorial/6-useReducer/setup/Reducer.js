const Reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPerson = [...state.people, action.payload];
        return {
            ...state,
            people: newPerson,
            isModalOpen: true,
            modalContent: 'Person Added'
        };
    } else if (action.type === 'DELETE') {
      // filter person from list based on id
      const removePersonById = state.people.filter((person) => {
        return person.id !== action.payload
      })
      return {
            ...state,
            people: removePersonById,
            isModalOpen: true,
            modalContent: 'Person Deleted'
        };
    } else if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Name cannot be blank'
        };
    } else if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false
        };
    }

    throw new Error('No matching action type');
};

export default Reducer