/** chunk id: 98254 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(600812),
    r = n(791498),
    o = n(244242);

function d(e, t) {
    return n => {
        t(), e(n)
    }
}

function c(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        useSubtitle: c,
        useValue: u,
        setValue: m,
        useOptions: g,
        clearable: _,
        closeOnSelect: x,
        wrapTags: A,
        selectionMode: h,
        usePersistentBadge: p,
        getDismissibleBadges: f
    } = t, T = n(), E = c?.(), S = u(), b = g(), C = p?.(), N = f?.(), v = (0, a.A)({
        persistentBadge: C,
        dismissibleBadges: N
    }), I = (0, r.q)(t), j = s.useMemo(() => ({
        selectionMode: h,
        value: S,
        onSelectionChange: d(m, I)
    }), [h, S, m, I]);
    return (0, i.jsx)(o.L, {
        children: (0, i.jsx)(l.l6P, {
            ...j,
            label: T,
            description: E,
            options: b,
            wrapTags: A,
            closeOnSelect: x,
            clearable: _,
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: v
        })
    })
}