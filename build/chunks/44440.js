/** chunk id: 44440, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m,
    j: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(773669),
    c = n(747550),
    u = n(282026),
    d = n(926277),
    p = n(931222),
    h = n(503330);

function f(e) {
    let {
        categoryId: t,
        loadId: n
    } = e;
    u.A.setState({
        categoryId: t
    }), c.A.loadCategoryResults({
        loadId: n,
        categoryId: t,
        query: u.A.getField("fetchedQuery"),
        languageCode: u.A.getField("languageCode")
    })
}

function g(e) {
    let {
        loadId: t,
        categoryId: n,
        count: l
    } = e, c = i.useCallback(() => {
        f({
            categoryId: n,
            loadId: t
        })
    }, [n, t]), p = u.A.useField("categoryId") === n, g = l.toLocaleString(o.default.locale), m = (0, d.r)({
        categoryId: n
    });
    return (0, r.jsxs)(s.DUT, {
        onClick: c,
        className: a()(h.L1, {
            [h.wH]: p
        }),
        children: [(0, r.jsx)(s.Text, {
            className: h.UU,
            variant: "text-sm/medium",
            color: "text-strong",
            children: m
        }), (0, r.jsx)(s.Text, {
            className: h.U9,
            variant: "text-sm/normal",
            color: "text-muted",
            children: g
        })]
    })
}
let m = function(e) {
    let {
        loadId: t
    } = e, n = (0, p.L)();
    return null == n ? null : (0, r.jsx)("div", {
        className: h.LZ,
        children: n.map(e => {
            let [n, i] = e;
            return (0, r.jsx)(g, {
                loadId: t,
                categoryId: n,
                count: i
            }, n)
        })
    })
}