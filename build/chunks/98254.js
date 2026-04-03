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
        getDismissibleBadges: T
    } = t, f = n(), S = c?.(), b = u(), E = g(), C = p?.(), N = T?.(), v = (0, a.A)({
        persistentBadge: C,
        dismissibleBadges: N
    }), I = (0, r.q)(t), j = s.useMemo(() => ({
        selectionMode: h,
        value: b,
        onSelectionChange: d(m, I)
    }), [h, b, m, I]);
    return (0, i.jsx)(o.L, {
        children: (0, i.jsx)(l.l6P, {
            ...j,
            label: f,
            description: S,
            options: E,
            wrapTags: A,
            closeOnSelect: x,
            clearable: _,
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: v
        })
    })
}