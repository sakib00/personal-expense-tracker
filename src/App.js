import Filters from './components/Filters';
import Header from './components/Header';
import Content from './components/Content';

function App() {
    return (
        <div className='App '>
            <Header />
            <div className='w-full lg:flex lg:justify-center lg:px-60 space-x-5'>
                <Filters />
                <Content />
            </div>
        </div>
    );
}

export default App;
