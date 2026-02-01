/** chunk id: 416082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(747550),
    o = n(282026),
    c = n(997590),
    u = n(324580),
    d = n(985018),
    p = n(516616),
    h = n(842503);
let g = function(e) {
    let {
        loadId: t
    } = e, n = o.A.useField("categoryId"), g = (0, l.bG)([c.A], () => c.A.getCategoryName(n)), m = i.useCallback(() => {
        o.A.setState({
            categoryId: u.Iq
        }), s.A.loadCategoryResults({
            loadId: t,
            categoryId: u.Iq,
            query: o.A.getField("fetchedQuery"),
            languageCode: o.A.getField("languageCode")
        })
    }, [t]), f = n === u.Iq ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], {
        categoryName: g
    }), A = n === u.Iq ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, {
        onClick: m
    });
    return (0, r.jsxs)("div", {
        className: p.kL,
        children: [(0, r.jsx)("img", {
            alt: "",
            src: h,
            className: p.Sl
        }), (0, r.jsx)(a.Heading, {
            variant: "heading-xl/semibold",
            className: p.wx,
            children: f
        }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: A
        })]
    })
}