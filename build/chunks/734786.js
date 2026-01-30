/** chunk id: 734786, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(38181),
    o = n(767599),
    c = n(985018),
    d = n(471100),
    u = n(842503);
let p = function(e) {
    let {
        selectedCategoryId: t,
        searchAllCategories: n
    } = e, p = (0, i.bG)([s.A], () => s.A.getCategories()), h = l.useMemo(() => {
        var e;
        return null == (e = p.find(e => e.id === t)) ? void 0 : e.name
    }, [p, t]), m = t === o.lj || null == h ? c.intl.string(c.t["FVJt+8"]) : c.intl.formatToPlainString(c.t.FjCaNB, {
        categoryName: h
    }), g = t === o.lj ? c.intl.string(c.t.GXiMta) : c.intl.format(c.t.JaLoFF, {
        onClick: n
    });
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [(0, r.jsx)("img", {
            alt: "",
            src: u,
            className: d.Sl
        }), (0, r.jsx)(a.Heading, {
            variant: "heading-xl/semibold",
            className: d.wx,
            children: m
        }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: g
        })]
    })
}