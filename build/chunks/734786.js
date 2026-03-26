/** chunk id: 734786 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968),
    i = a(64700),
    l = a(311907),
    s = a(397927),
    r = a(38181),
    o = a(767599),
    c = a(985018),
    d = a(498983),
    u = a(842503);
let m = function(e) {
    let {
        selectedCategoryId: t,
        searchAllCategories: a
    } = e, m = (0, l.bG)([r.A], () => r.A.getCategories()), h = i.useMemo(() => m.find(e => e.id === t)?.name, [m, t]), p = t === o.lj || null == h ? c.intl.string(c.t["FVJt+8"]) : c.intl.formatToPlainString(c.t.FjCaNB, {
        categoryName: h
    }), _ = t === o.lj ? c.intl.string(c.t.GXiMta) : c.intl.format(c.t.JaLoFF, {
        onClick: a
    });
    return (0, n.jsxs)("div", {
        className: d.kL,
        children: [(0, n.jsx)("img", {
            alt: "",
            src: u,
            className: d.Sl
        }), (0, n.jsx)(s.Heading, {
            variant: "heading-xl/semibold",
            className: d.wx,
            children: p
        }), (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: _
        })]
    })
}