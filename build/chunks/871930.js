/** chunk id: 871930 params = (module,exports,require) **/
_.d(e, {
    _: () => R,
    h: () => d
});
var E = _(627968);
_(64700);
var A = _(503698),
    I = _.n(A),
    n = _(397927),
    S = _(195043),
    T = _(725010),
    C = _(446541),
    i = _(480357),
    l = _(606360);

function R(t) {
    let {
        header: e,
        description: _,
        relatedId: A,
        disabled: S
    } = t;
    return (0, E.jsxs)("div", {
        className: l.wx,
        children: [(0, E.jsx)(n.Heading, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, E.jsx)("label", {
                htmlFor: A,
                className: I()(l.DD, {
                    [l.r9]: S
                }),
                children: e
            })
        }), (0, E.jsx)(n.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: I()(l.h_, {
                [l.r9]: S
            }),
            children: _
        })]
    })
}

function r(t) {
    let {
        className: e,
        children: _
    } = t;
    return (0, E.jsx)("div", {
        className: I()(l.kL, e),
        children: _
    })
}

function u(t) {
    let {
        setting: e,
        className: _,
        children: A
    } = t;
    return (0, E.jsx)(S.x, {
        setting: e,
        children: (0, E.jsx)("div", {
            className: I()(l.kL, _),
            children: A
        })
    })
}

function s(t) {
    let {
        setting: e,
        className: _,
        children: A,
        scrollPosition: n,
        scrollHighlightDelay: R
    } = t, r = (0, T.s)(n);
    return (0, E.jsx)(S.x, {
        setting: e,
        children: (0, E.jsxs)("div", {
            className: I()(l.kL, _, {
                [i.m]: null != n
            }),
            ref: r,
            children: [A, null != n ? (0, E.jsx)(C.A, {
                animationDelay: R,
                scrollPosition: n
            }) : null]
        })
    })
}

function d(t) {
    return null != t.scrollPosition ? (0, E.jsx)(s, {
        ...t
    }) : null != t.setting ? (0, E.jsx)(u, {
        ...t
    }) : (0, E.jsx)(r, {
        ...t
    })
}