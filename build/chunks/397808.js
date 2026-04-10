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
    c = n(751673);
let u = e => {
    let {
        guildId: t
    } = e, n = (0, l.bG)([o.A], () => o.A.getGuild(t));
    if (void 0 === n) return null;
    let {
        name: u
    } = n, m = (0, a.Iv)(n, 40, !0), g = null, _ = 10;
    return null == n.icon && null != u && (g = (0, s.oN)(u), _ = (0, d.Y)(g)), (0, i.jsx)("div", {
        className: c.k,
        children: (0, i.jsxs)("div", {
            style: {
                fontSize: _
            },
            children: [null != g ? (0, i.jsx)("div", {
                className: c.X,
                "aria-hidden": !0,
                children: g
            }) : null, null != m ? (0, i.jsx)(r.euF, {
                src: m,
                size: r._3J.SIZE_40,
                "aria-hidden": !0
            }) : null]
        })
    })
}