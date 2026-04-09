/** chunk id: 44440 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    j: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(773669),
    d = n(747550),
    c = n(282026),
    u = n(926277),
    A = n(931222),
    _ = n(509596);

function h(e) {
    let {
        categoryId: t,
        loadId: n
    } = e;
    c.A.setState({
        categoryId: t
    }), d.A.loadCategoryResults({
        loadId: n,
        categoryId: t,
        query: c.A.getField("fetchedQuery"),
        languageCode: c.A.getField("languageCode")
    })
}

function m(e) {
    let {
        loadId: t,
        categoryId: n,
        count: r
    } = e, d = a.useCallback(() => {
        h({
            categoryId: n,
            loadId: t
        })
    }, [n, t]), A = c.A.useField("categoryId") === n, m = r.toLocaleString(o.default.locale), g = (0, u.r)({
        categoryId: n
    });
    return (0, i.jsxs)(s.DUT, {
        onClick: d,
        className: l()(_.L1, {
            [_.wH]: A
        }),
        children: [(0, i.jsx)(s.Text, {
            className: _.UU,
            variant: "text-sm/medium",
            color: "text-strong",
            children: g
        }), (0, i.jsx)(s.Text, {
            className: _.U9,
            variant: "text-sm/normal",
            color: "text-muted",
            children: m
        })]
    })
}
let g = function(e) {
    let {
        loadId: t
    } = e, n = (0, A.L)();
    return null == n ? null : (0, i.jsx)("div", {
        className: _.LZ,
        children: n.map(e => {
            let [n, a] = e;
            return (0, i.jsx)(m, {
                loadId: t,
                categoryId: n,
                count: a
            }, n)
        })
    })
}