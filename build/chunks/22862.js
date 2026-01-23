/** Chunk was on 21738 **/
/** chunk id: 22862, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(191711),
    s = n(282026),
    o = n(926277),
    c = n(931222),
    u = n(44440),
    d = n(985018),
    p = n(430556);

function h(e) {
    let {
        count: t,
        categoryId: n
    } = e, i = (0, o.r)({
        categoryId: n
    });
    return (0, r.jsx)(a.kR, {
        count: t,
        name: i
    })
}

function g(e) {
    let {
        loadId: t
    } = e, n = s.A.useField("categoryId"), g = (0, c.L)(), f = (0, o.r)({
        categoryId: n
    }), m = i.useCallback(e => {
        (0, u.j)({
            loadId: t,
            categoryId: Number(e)
        })
    }, [t]), A = i.useMemo(() => null == g ? [] : g.map(e => {
        let [t, n] = e;
        return {
            id: "".concat(t),
            label: (0, r.jsx)(h, {
                categoryId: t,
                count: n
            })
        }
    }), [g]);
    return null == g ? null : (0, r.jsxs)("div", {
        className: p.k,
        children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: d.intl.string(d.t.f09BQJ)
        }), (0, r.jsx)(a.Ay, {
            items: A,
            title: f,
            onSelect: m,
            selected: "".concat(n),
            "aria-label": d.intl.string(d.t.Ng5cTK),
            variant: a.Hb.FILLED
        })]
    })
}