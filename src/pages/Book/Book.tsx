import React, { FC } from "react";
/* components */
import { BookDetailsBox } from "components/BookDetailsBox";
import { BookDescriptionText } from "components/BookDescriptionText";
import { CommentsGrid } from "components/CommentsGrid";
import { CommentInputBox } from "components/CommentInputBox";
import { AclService } from "services/rbac";
import { Col } from "components/Col";
import { Row } from "components/Row";

/* modules */
import { randomDate } from "helpers/randomDate";
import { useParams } from "react-router-dom";
import { DocumentTitle } from "components/DocumentTitle";
import { useCreateComment, useDeleteComment } from "services/api/operations";

const Book: FC = props => {
    const { bookId } = useParams<{ bookId: string }>();

    /* initiating operations hooks */
    const [createComment] = useCreateComment();
    const [deleteComment] = useDeleteComment();

    const handleSubmitComment = (comment: string) => {
        /* create comment api call */
        createComment({ bookId, comment });
        console.log(`submitting comment: ${comment} from bookId`, bookId);
    };

    const handleDeleteComment = (commentId: string) => {
        /* delete comment api call */
        deleteComment({ commentId });
        console.log(`deleting comment with the commentId: ${commentId} `);
    };

    const comments = [
        {
            id: "123",
            username: "سمیه",
            date: randomDate(new Date("2020/1/1")),
            body: "خیلی خوب بود :)",
        },
    ];
    const description = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`;

    return (
        <Row>
            <DocumentTitle title="کتاب" />
            <Col xl={4}>
                <BookDetailsBox title="کتاب جز از کل" author="استیو تولتز" />
                <AclService permission="comments.create">
                    <CommentInputBox onSubmit={handleSubmitComment} />
                </AclService>
            </Col>

            <Col xl={8} className="mt-3 mt-xl-0">
                <BookDescriptionText description={description} />
                <AclService permission="comments.read">
                    <CommentsGrid
                        onDelete={handleDeleteComment}
                        comments={comments}
                    />
                </AclService>
            </Col>
        </Row>
    );
};

export default Book;
