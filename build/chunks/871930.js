/** chunk id: 871930 params = (module,exports,require) **/
A.d(_, {
    _: () => N,
    h: () => r
});
var I = A(627968);
A(64700);
var T = A(503698),
    S = A.n(T),
    t = A(397927),
    e = A(195043),
    C = A(725010),
    O = A(446541),
    R = A(792691),
    n = A(4354);

function N(E) {
    let {
        header: _,
        description: A,
        relatedId: T,
        disabled: e
    } = E;
    return (0, I.jsxs)("div", {
        className: n.wx,
        children: [(0, I.jsx)(t.Heading, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, I.jsx)("label", {
                htmlFor: T,
                className: S()(n.DD, {
                    [n.r9]: e
                }),
                children: _
            })
        }), (0, I.jsx)(t.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: S()(n.h_, {
                [n.r9]: e
            }),
            children: A
        })]
    })
}

function P(E) {
    let {
        className: _,
        children: A
    } = E;
    return (0, I.jsx)("div", {
        className: S()(n.kL, _),
        children: A
    })
}

function i(E) {
    let {
        setting: _,
        className: A,
        children: T
    } = E;
    return (0, I.jsx)(e.x, {
        setting: _,
        children: (0, I.jsx)("div", {
            className: S()(n.kL, A),
            children: T
        })
    })
}

function l(E) {
    let {
        setting: _,
        className: A,
        children: T,
        scrollPosition: t,
        scrollHighlightDelay: N
    } = E, P = (0, C.s)(t);
    return (0, I.jsx)(e.x, {
        setting: _,
        children: (0, I.jsxs)("div", {
            className: S()(n.kL, A, {
                [R.m]: null != t
            }),
            ref: P,
            children: [T, null != t ? (0, I.jsx)(O.A, {
                animationDelay: N,
                scrollPosition: t
            }) : null]
        })
    })
}

function r(E) {
    return null != E.scrollPosition ? (0, I.jsx)(l, {
        ...E
    }) : null != E.setting ? (0, I.jsx)(i, {
        ...E
    }) : (0, I.jsx)(P, {
        ...E
    })
}