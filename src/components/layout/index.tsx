import { ReactNode } from "react";
import Header from "./Header";

interface IProps {
    children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
    return (
        <>
            <Header />
            <main className="mt-[72px]">{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
