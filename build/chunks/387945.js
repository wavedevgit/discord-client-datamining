/** chunk id: 387945 params = (module,exports,require) **/
r.d(e, {
    A: () => c
});
var n = r(627968);
r(64700);
var i = r(575593),
    l = r(397927),
    s = r(320447),
    a = r(536572),
    u = r(561769),
    o = r(985018);
let c = t => {
    let {
        skuId: e,
        className: r
    } = t, c = (0, u.Vm)(e), d = (0, a.VG)(c), {
        enabled: k
    } = (0, s.P)("ProductCardName"), p = k && null != c && c.type === i.R.BUNDLE && c.items.length > 0;
    return (0, n.jsx)(l.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: p ? o.intl.format(o.t.UTc0ny, {
            count: c.items.length,
            productName: d
        }) : d
    })
}