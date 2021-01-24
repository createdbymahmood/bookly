import React, { FunctionComponent, useState } from "react";
/* components */
import { Drawer } from "components/Drawer";
import { MenuBarItem } from "components/MenuBarItem";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
/* types */
import { MainDrawerComponentProps } from "./MainDrawer.types";
/* styles */
import s from "./MainDrawer.module.scss";

export const MainDrawer: FunctionComponent<MainDrawerComponentProps> = props => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div>
            <MenuIcon className={s.menuIcon} onClick={toggle}>
                باز کن
            </MenuIcon>
            <Drawer visible={open} onClose={toggle} {...props}>
                <div className="d-flex flex-column">
                    <MenuBarItem
                        className="mb-3"
                        title="کاربران"
                        link="/path/to/somewhere"
                        permission="books.read"
                    />
                    <MenuBarItem
                        className="mb-3"
                        title="کتاب ها"
                        link="/path/to/somewhere"
                        permission="books.read"
                    />
                    <MenuBarItem
                        className="mb-3"
                        title="کاربران"
                        link="/path/to/somewhere"
                        permission="books.read"
                    />
                    <MenuBarItem
                        className="mb-3"
                        title="کاربران"
                        link="/path/to/somewhere"
                        permission="books.read"
                    />
                </div>
            </Drawer>
        </div>
    );
};
