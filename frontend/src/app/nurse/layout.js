import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function NurseLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar role="nurse" />
            <div className="flex-1 flex flex-col">
                <Header role="nurse" />
                <main className="p-6 bg-gray-50 flex-1">{children}</main>
            </div>
        </div>
    );
}
