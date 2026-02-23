/** chunk id: 871930, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => _,
    h: () => h
});
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(397927),
    l = n(195043),
    o = n(725010),
    c = n(446541),
    d = n(480357),
    u = n(606360);

function _(e) {
    let {
        header: t,
        description: n,
        relatedId: s,
        disabled: l
    } = e;
    return (0, i.jsxs)("div", {
        className: u.wx,
        children: [(0, i.jsx)(r.Heading, {
            variant: "text-md/medium",
            color: "text-strong",
            children: (0, i.jsx)("label", {
                htmlFor: s,
                className: a()(u.DD, {
                    [u.r9]: l
                }),
                children: t
            })
        }), (0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: a()(u.h_, {
                [u.r9]: l
            }),
            children: n
        })]
    })
}

function m(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, i.jsx)("div", {
        className: a()(u.kL, t),
        children: n
    })
}

function A(e) {
    let {
        setting: t,
        className: n,
        children: s
    } = e;
    return (0, i.jsx)(l.x, {
        setting: t,
        children: (0, i.jsx)("div", {
            className: a()(u.kL, n),
            children: s
        })
    })
}

function g(e) {
    let {
        setting: t,
        className: n,
        children: s,
        scrollPosition: r,
        scrollHighlightDelay: _
    } = e, m = (0, o.s)(r);
    return (0, i.jsx)(l.x, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: a()(u.kL, n, {
                [d.m]: null != r
            }),
            ref: m,
            children: [s, null != r ? (0, i.jsx)(c.A, {
                animationDelay: _,
                scrollPosition: r
            }) : null]
        })
    })
}

function h(e) {
    return null != e.scrollPosition ? (0, i.jsx)(g, {
        ...e
    }) : null != e.setting ? (0, i.jsx)(A, {
        ...e
    }) : (0, i.jsx)(m, {
        ...e
    })
}