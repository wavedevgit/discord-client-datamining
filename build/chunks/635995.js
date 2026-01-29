/** Chunk was on 73734 **/
/** chunk id: 635995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    In: () => E,
    T0: () => _,
    fY: () => d
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(732955),
    o = n(397927),
    s = n(818348),
    c = n(985018),
    u = n(659039);
let E = e => {
        let {
            children: t
        } = e;
        return (0, r.jsx)(o.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: u.ut,
            children: t
        })
    },
    d = e => {
        let {
            text: t,
            onClick: n
        } = e;
        return (0, r.jsx)(a.$nd, {
            onClick: n,
            text: t,
            size: "sm",
            icon: o.tvc,
            variant: "secondary"
        })
    };

function _(e) {
    let {
        className: t,
        ref: n,
        children: i,
        onClick: a
    } = e;
    return (0, r.jsx)(o.NPJ, {
        theme: s.NJ.DARKER,
        children: e => (0, r.jsxs)("div", {
            ref: n,
            className: l()(u.lm, e, t),
            children: [(0, r.jsx)("div", {
                className: u.qZ,
                children: i
            }), (0, r.jsx)(o.DUT, {
                focusProps: {
                    offset: 6
                },
                className: u.b,
                onClick: a,
                "aria-label": c.intl.string(c.t.WAI6xu),
                children: (0, r.jsx)(o.PGe, {
                    size: "sm"
                })
            })]
        })
    })
}