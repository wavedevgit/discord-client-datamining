/** chunk id: 471303 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    i = n(311907),
    l = n(435371),
    s = n(397927),
    r = n(461213),
    o = n(427262),
    d = n(818348),
    c = n(985018),
    u = n(762400);

function m() {
    let e = (0, i.bG)([r.A], () => r.A.getStatus()),
        t = (0, o.MU)(e) ?? "",
        n = e === d.cl.INVISIBLE || e === d.cl.OFFLINE;
    return (0, a.jsxs)("div", {
        className: u.k,
        children: [(0, a.jsxs)(s.AC4, {
            tag: "div",
            children: [c.intl.string(c.t.AHoLf4), ":"]
        }), t, t.length > 0 && n && (0, a.jsx)(l.m_, {
            text: c.intl.string(c.t.L99HQm),
            children: (0, a.jsx)(s.EpV, {
                size: "xs",
                color: s.LU0.colors.STATUS_WARNING,
                "aria-label": c.intl.string(c.t.L99HQm)
            })
        })]
    })
}