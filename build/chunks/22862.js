/** chunk id: 22862 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(191711),
    s = n(282026),
    o = n(926277),
    d = n(931222),
    c = n(44440),
    u = n(985018),
    A = n(706174);

function h(e) {
    let {
        loadId: t
    } = e, n = s.A.useField("categoryId"), h = (0, d.L)(), _ = (0, o.r)({
        categoryId: n
    }), m = a.useCallback(e => {
        (0, c.j)({
            loadId: t,
            categoryId: Number(e)
        })
    }, [t]), g = a.useMemo(() => null == h ? [] : h.map(e => {
        let [t] = e;
        return t
    }), [h]), p = (0, o.o)({
        categoryIds: g
    }), E = a.useMemo(() => null == h ? [] : h.map(e => {
        let [t, n] = e;
        return {
            id: `${t}`,
            name: p[t] ?? "",
            count: n
        }
    }), [h, p]);
    return null == h ? null : (0, i.jsxs)("div", {
        className: A.k,
        children: [(0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: u.intl.string(u.t.f09BQJ)
        }), (0, i.jsx)(r.A, {
            items: E,
            title: _,
            onSelect: m,
            selected: `${n}`,
            "aria-label": u.intl.string(u.t.Ng5cTK),
            variant: r.H.FILLED
        })]
    })
}