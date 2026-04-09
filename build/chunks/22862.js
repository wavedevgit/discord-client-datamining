/** chunk id: 22862 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(191711),
    s = n(282026),
    o = n(926277),
    d = n(931222),
    c = n(44440),
    u = n(985018),
    A = n(120494);

function _(e) {
    let {
        loadId: t
    } = e, n = s.A.useField("categoryId"), _ = (0, d.L)(), h = (0, o.r)({
        categoryId: n
    }), m = a.useCallback(e => {
        (0, c.j)({
            loadId: t,
            categoryId: Number(e)
        })
    }, [t]), g = a.useMemo(() => null == _ ? [] : _.map(e => {
        let [t] = e;
        return t
    }), [_]), p = (0, o.o)({
        categoryIds: g
    }), E = a.useMemo(() => null == _ ? [] : _.map(e => {
        let [t, n] = e;
        return {
            id: `${t}`,
            name: p[t] ?? "",
            count: n
        }
    }), [_, p]);
    return null == _ ? null : (0, i.jsxs)("div", {
        className: A.k,
        children: [(0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: u.intl.string(u.t.f09BQJ)
        }), (0, i.jsx)(l.A, {
            items: E,
            title: h,
            onSelect: m,
            selected: `${n}`,
            "aria-label": u.intl.string(u.t.Ng5cTK),
            variant: l.H.FILLED
        })]
    })
}