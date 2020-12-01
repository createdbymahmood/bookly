import React, { FunctionComponent } from "react";
/* components */
import { Col } from "components/Col";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* helpers */
/* types */
import { BookCategoryBoxComponentProps } from "./BookCategoryBox.types";
/* styles */
import s from "./BookCategoryBox.module.scss";
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";
import { uniqueId } from "helpers/uniqueId";

export const BookCategoryBox: FunctionComponent<BookCategoryBoxComponentProps> = props => {
    const { className, id: categoryId, categoryTitle, ...restProps } = props;

    return (
        <Col xl={3} sm={6} className="mb-3">
            <Link to={routeTo("category", { categoryId })}>
                <div
                    className={clsx(s.box, `shadow`, className)}
                    {...restProps}
                >
                    <div
                        className={s.image}
                        style={{
                            background: `linear-gradient(
                                to left,
                                rgba(0, 0, 0, 0.3),
                                rgba(0, 0, 0, 0.3)
                            ), url(https://source.unsplash.com/500x500/?book&sig=${uniqueId()})`,
                        }}
                    >
                        <Text className={s.title}>{categoryTitle}</Text>
                    </div>
                </div>
            </Link>
        </Col>
    );
};
