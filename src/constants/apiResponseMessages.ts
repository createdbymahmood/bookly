const API_RESPONSE_MESSAGES = {
    user: {
        delete: {
            success: `کاربر با موفقیت حذف شد!`,
            error: `مشکلی در حذف کردن کاربر پیش آمد!`,
        },
        changeRole: {
            success: `نقش کاربر با موفقیت به روزرسانی شد!`,
            error: `مشکلی در به روز رسانی نقش کاربر پیش آمد`,
        },
    },
    book: {
        submit: {
            success: `کتاب شما با موفقیت ثبت شد`,
            error: "مشکلی در ثبت کردن کتاب پیش آمد!",
        },

        delete: {
            success: "کتاب با موفقیت حذف شد",
            error: "مشکلی در حذف کردن کتاب پیش آمد",
        },
        like: {
            success: "کتاب با موفقیت لایک شد!",
            error: "مشکلی در لایک کردن کتاب پیش آمد",
        },
        update: {
            success: "کتاب با موفقیت به رزورسانی شد",
            error: "مشکلی در به رزورسانی کتاب پیش آمد",
        },
    },
    comment: {
        create: {
            success: "نظر با موفقت ثبت شد",
            error: "مشکلی در ثبت نظر پیش آمد",
        },
        delete: {
            success: "نظر با موفقیت حذف شد",
            error: "مشکلی در حذف کردن نظر پیش آمد",
        },

        update: {
            success: "نظر با موفقیت به روزرسانی شد",
            error: "مشکلی در به روزرسانی نظر پیش آمد",
        },
    },
    publisher: {
        follow: {
            success: `ناشر با موفقیت فالو شد`,
            error: "مشکلی در دنبال کردن ناشر پیش آمد!",
        },

        unfollow: {
            success: `فالو ناشر لغو شد`,
            error: "مشکلی در لغو کردن فالوئینگ ناشر پیش آمد!",
        },
    },
    register: {
        error: "مشکلی در ثبت نام پیش آمد!",
        success: "ثبت نام با موفقیت انجام شد",
    },
    login: {
        error: "نام کاربری یا رمز عبور اشتباه می باشد!",
        success: "با موفقیت وارد شدید :)",
    },
    profile: {
        update: {
            success: "پروفایل با موفقیت به روز رسانی شد",
            error: "مشکلی در به روزرسانی پروفایل پیش آمد!",
        },
    },
};

export default API_RESPONSE_MESSAGES;
