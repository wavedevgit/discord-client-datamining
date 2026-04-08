/** chunk id: 915953 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(600812),
    r = n(791498),
    o = n(244242);

function d(e) {
    let {
        node: t
    } = e, {
        setValue: n,
        getInitialValue: d,
        minValue: c,
        maxValue: u,
        useDefaultValue: m,
        useTitle: g,
        useSubtitle: _,
        useHintText: x,
        useDisabled: A,
        useExternalValue: h,
        onValueRender: p,
        asValueChanges: T,
        markers: f,
        onMarkerRender: S,
        stickToMarkers: b,
        fieldLayout: E,
        usePersistentBadge: C,
        getDismissibleBadges: N
    } = t, [v] = s.useState(() => d()), I = h?.(), j = g(), y = _?.(), O = x?.(), R = A?.(), L = m?.(), P = C?.(), D = N?.(), G = (0, a.A)({
        persistentBadge: P,
        dismissibleBadges: D
    }), M = (0, r.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: j,
            description: y,
            disabled: R,
            initialValue: v,
            value: I,
            minValue: c,
            maxValue: u,
            defaultValue: L,
            onValueRender: p,
            asValueChanges: T,
            onValueChange: e => {
                M(), n?.(e)
            },
            orientation: "horizontal",
            markers: f,
            onMarkerRender: S,
            stickToMarkers: b,
            layout: E,
            badge: G
        }), null != O && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
        })]
    })
}