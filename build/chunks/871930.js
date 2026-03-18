/** chunk id: 871930 params = (module,exports,require) **/
e.d(_, {
    _: () => C,
    h: () => l
});
var E = e(627968);
e(64700);
var A = e(503698),
    I = e.n(A),
    T = e(397927),
    S = e(195043),
    n = e(606360);

function C(t) {
    let {
        header: _,
        description: e,
        relatedId: A,
        disabled: S
    } = t;
    return (0, E.jsxs)("div", {
        className: n.wx,
        children: [(0, E.jsx)(T.Heading, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, E.jsx)("label", {
                htmlFor: A,
                className: I()(n.DD, {
                    [n.r9]: S
                }),
                children: _
            })
        }), (0, E.jsx)(T.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: I()(n.h_, {
                [n.r9]: S
            }),
            children: e
        })]
    })
}

function R(t) {
    let {
        className: _,
        children: e
    } = t;
    return (0, E.jsx)("div", {
        className: I()(n.kL, _),
        children: e
    })
}

function i(t) {
    let {
        setting: _,
        className: e,
        children: A
    } = t;
    return (0, E.jsx)(S.x, {
        setting: _,
        children: (0, E.jsx)("div", {
            className: I()(n.kL, e),
            children: A
        })
    })
}

function l(t) {
    return null != t.setting ? (0, E.jsx)(i, {
        ...t
    }) : (0, E.jsx)(R, {
        ...t
    })
}