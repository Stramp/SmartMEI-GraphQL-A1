import React, { createContext, useState, useContext } from 'react'

const ModalContext = createContext({});

const ContextProvider: React.FC = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalItem, setModalItem] = useState({});

    return (
        <ModalContext.Provider value={
            {
                modalVisible,
                setModalVisible,
                modalItem,
                setModalItem
            }
        }>
            {children}
        </ModalContext.Provider>
    )
}

export default ContextProvider;

export function useModal() {
    const context: any = useContext(ModalContext);
    return context;
}