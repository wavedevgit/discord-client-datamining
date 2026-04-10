/** chunk id: 635995 params = (module,exports,require) **/
n.d(e, {
    In: () => u,
    T0: () => _,
    fY: () => E
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(732955),
    a = n(397927),
    o = n(818348),
    c = n(985018),
    d = n(843194);
let u = t => {
        let {
            children: e
        } = t;
        return (0, i.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: d.ut,
            children: e
        })
    },
    E = t => {
        let {
            text: e,
            onClick: n
        } = t;
        return (0, i.jsx)(s.$nd, {
            onClick: n,
            text: e,
            size: "sm",
            icon: a.tvc,
            variant: "secondary"
        })
    };

function _(t) {
    let {
        className: e,
        ref: n,
        children: l,
        onClick: s
    } = t;
    return (0, i.jsx)(a.NPJ, {
        theme: o.NJ.DARKER,
        children: t => (0, i.jsxs)("div", {
            ref: n,
            className: r()(d.lm, t, e),
            children: [(0, i.jsx)("div", {
                className: d.qZ,
                children: l
            }), (0, i.jsx)(a.DUT, {
                focusProps: {
                    offset: 6
                },
                className: d.b,
                onClick: s,
                "aria-label": c.intl.string(c.t.WAI6xu),
                children: (0, i.jsx)(a.PGe, {
                    size: "sm"
                })
            })]
        })
    })
}