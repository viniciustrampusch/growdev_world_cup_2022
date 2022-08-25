import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routers from './Routers';
import { store, persistor } from './store';
import './styles/main.css';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routers/>
            </PersistGate>
        </Provider>
    );
};

export default App;