/** chunk id: 387945 params = (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968);
r(64700);
var l = r(575593),
    i = r(397927),
    s = r(320447),
    a = r(536572),
    o = r(561769),
    u = r(985018);
let c = e => {
    let {
        skuId: t,
        className: r
    } = e, c = (0, o.Vm)(t), d = (0, a.VG)(c), {
        enabled: p
    } = (0, s.P)("ProductCardName"), k = p && null != c && c.type === l.R.BUNDLE && c.items.length > 0;
    return (0, n.jsx)(i.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: k ? u.intl.format(u.t.UTc0ny, {
            count: c.items.length,
            productName: d
        }) : d
    })
}