/* eslint-disable */

// import { permissions } from "./permissions";
import { get } from "lodash";
import { usePermissions } from "./usePermissions";

export const rbacRender = (component: JSX.Element, path: string) => {
    const { role, permissions } = usePermissions();
    const canPerform = get(permissions, `${role}.${path}`);

    if (canPerform) {
        return component;
    }
    return null;
};
