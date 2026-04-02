/** chunk id: 416082 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(747550),
    o = n(282026),
    d = n(997590),
    c = n(324580),
    u = n(985018),
    A = n(456057),
    h = n(842503);
let _ = function(e) {
    let {
        loadId: t
    } = e, n = o.A.useField("categoryId"), _ = (0, l.bG)([d.A], () => d.A.getCategoryName(n)), m = a.useCallback(() => {
        o.A.setState({
            categoryId: c.Iq
        }), s.A.loadCategoryResults({
            loadId: t,
            categoryId: c.Iq,
            query: o.A.getField("fetchedQuery"),
            languageCode: o.A.getField("languageCode")
        })
    }, [t]), p = n === c.Iq ? u.intl.string(u.t.Ivw1Is) : u.intl.formatToPlainString(u.t["+1WAFb"], {
        categoryName: _
    }), g = n === c.Iq ? u.intl.string(u.t.aXvEjd) : u.intl.format(u.t.XLioqn, {
        onClick: m
    });
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [(0, i.jsx)("img", {
            alt: "",
            src: h,
            className: A.Sl
        }), (0, i.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            className: A.wx,
            children: p
        }), (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: g
        })]
    })
}