/** chunk id: 397808 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(23339),
    l = n(417597),
    r = n(397927),
    a = n(260509),
    o = n(695515),
    d = n(254847),
    c = n(452340);
let u = e => {
    let {
        guildId: t
    } = e, n = (0, l.bG)([o.A], () => o.A.getGuild(t));
    if (void 0 === n) return null;
    let {
        name: u
    } = n, _ = (0, a.Iv)(n, 40, !0), m = null, g = 10;
    return null == n.icon && null != u && (m = (0, s.oN)(u), g = (0, d.Y)(m)), (0, i.jsx)("div", {
        className: c.k,
        children: (0, i.jsxs)("div", {
            style: {
                fontSize: g
            },
            children: [null != m ? (0, i.jsx)("div", {
                className: c.X,
                "aria-hidden": !0,
                children: m
            }) : null, null != _ ? (0, i.jsx)(r.euF, {
                src: _,
                size: r._3J.SIZE_40,
                "aria-hidden": !0
            }) : null]
        })
    })
}