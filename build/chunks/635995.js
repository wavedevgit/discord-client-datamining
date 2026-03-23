/** chunk id: 635995 params = (module,exports,require) **/
n.d(t, {
    In: () => d,
    T0: () => E,
    fY: () => _
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(732955),
    a = n(397927),
    o = n(818348),
    c = n(985018),
    u = n(659039);
let d = e => {
        let {
            children: t
        } = e;
        return (0, i.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: u.ut,
            children: t
        })
    },
    _ = e => {
        let {
            text: t,
            onClick: n
        } = e;
        return (0, i.jsx)(s.$nd, {
            onClick: n,
            text: t,
            size: "sm",
            icon: a.tvc,
            variant: "secondary"
        })
    };

function E(e) {
    let {
        className: t,
        ref: n,
        children: l,
        onClick: s
    } = e;
    return (0, i.jsx)(a.NPJ, {
        theme: o.NJ.DARKER,
        children: e => (0, i.jsxs)("div", {
            ref: n,
            className: r()(u.lm, e, t),
            children: [(0, i.jsx)("div", {
                className: u.qZ,
                children: l
            }), (0, i.jsx)(a.DUT, {
                focusProps: {
                    offset: 6
                },
                className: u.b,
                onClick: s,
                "aria-label": c.intl.string(c.t.WAI6xu),
                children: (0, i.jsx)(a.PGe, {
                    size: "sm"
                })
            })]
        })
    })
}