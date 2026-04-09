/** chunk id: 416082 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(747550),
    o = n(282026),
    d = n(997590),
    c = n(324580),
    u = n(985018),
    A = n(456057),
    _ = n(842503);
let h = function(e) {
    let {
        loadId: t
    } = e, n = o.A.useField("categoryId"), h = (0, r.bG)([d.A], () => d.A.getCategoryName(n)), m = a.useCallback(() => {
        o.A.setState({
            categoryId: c.Iq
        }), s.A.loadCategoryResults({
            loadId: t,
            categoryId: c.Iq,
            query: o.A.getField("fetchedQuery"),
            languageCode: o.A.getField("languageCode")
        })
    }, [t]), g = n === c.Iq ? u.intl.string(u.t.Ivw1Is) : u.intl.formatToPlainString(u.t["+1WAFb"], {
        categoryName: h
    }), p = n === c.Iq ? u.intl.string(u.t.aXvEjd) : u.intl.format(u.t.XLioqn, {
        onClick: m
    });
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [(0, i.jsx)("img", {
            alt: "",
            src: _,
            className: A.Sl
        }), (0, i.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            className: A.wx,
            children: g
        }), (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: p
        })]
    })
}