/** Chunk was on 5606 **/
/** chunk id: 397808, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(23339),
    l = n(417597),
    s = n(397927),
    a = n(260509),
    o = n(695515),
    c = n(254847),
    d = n(432882);
let u = e => {
    let {
        guildId: t
    } = e, n = (0, l.bG)([o.A], () => o.A.getGuild(t));
    if (void 0 === n) return null;
    let {
        name: u
    } = n, p = (0, a.Iv)(n, 40, !0), _ = null, m = 10;
    return null == n.icon && null != u && (_ = (0, i.oN)(u), m = (0, c.Y)(_)), (0, r.jsx)("div", {
        className: d.k,
        children: (0, r.jsxs)("div", {
            style: {
                fontSize: m
            },
            children: [null != _ ? (0, r.jsx)("div", {
                className: d.X,
                "aria-hidden": !0,
                children: _
            }) : null, null != p ? (0, r.jsx)(s.euF, {
                src: p,
                size: s._3J.SIZE_40,
                "aria-hidden": !0
            }) : null]
        })
    })
}