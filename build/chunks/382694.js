/** chunk id: 382694 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(397927),
    l = n(744064),
    o = n(189024),
    c = n(985018),
    d = n(494353);

function u(e) {
    let {
        glowingPerkId: t = null
    } = e, n = (0, o.A)();
    return (0, i.jsxs)("div", {
        className: d.uW,
        children: [(0, i.jsx)(s.Heading, {
            variant: "display-sm",
            className: d.R_,
            children: c.intl.string(c.t.Aw5DRm)
        }), (0, i.jsx)("div", {
            className: d.Ui,
            children: n.map((e, n) => {
                if (null == e) return;
                let r = 0 === n && !0 === e.featured;
                return (0, i.jsx)(l.S, {
                    ...e,
                    glowing: t === e.id,
                    featured: r,
                    containerClassName: a()(d.Nr, {
                        [d.Nq]: r
                    })
                }, e.id)
            })
        })]
    })
}