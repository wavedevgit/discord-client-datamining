/** chunk id: 416082 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(747550),
    o = n(282026),
    d = n(997590),
    c = n(324580),
    u = n(985018),
    A = n(516616),
    h = n(842503);
let _ = function(e) {
    let {
        loadId: t
    } = e, n = o.A.useField("categoryId"), _ = (0, l.bG)([d.A], () => d.A.getCategoryName(n)), m = r.useCallback(() => {
        o.A.setState({
            categoryId: c.Iq
        }), s.A.loadCategoryResults({
            loadId: t,
            categoryId: c.Iq,
            query: o.A.getField("fetchedQuery"),
            languageCode: o.A.getField("languageCode")
        })
    }, [t]), g = n === c.Iq ? u.intl.string(u.t.Ivw1Is) : u.intl.formatToPlainString(u.t["+1WAFb"], {
        categoryName: _
    }), p = n === c.Iq ? u.intl.string(u.t.aXvEjd) : u.intl.format(u.t.XLioqn, {
        onClick: m
    });
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [(0, i.jsx)("img", {
            alt: "",
            src: h,
            className: A.Sl
        }), (0, i.jsx)(a.Heading, {
            variant: "heading-xl/semibold",
            className: A.wx,
            children: g
        }), (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: p
        })]
    })
}