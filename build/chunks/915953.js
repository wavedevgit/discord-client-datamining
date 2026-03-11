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
        useDefaultValue: _,
        useTitle: g,
        useSubtitle: A,
        useHintText: m,
        useDisabled: h,
        useExternalValue: p,
        onValueRender: x,
        asValueChanges: E,
        markers: T,
        onMarkerRender: S,
        stickToMarkers: C,
        fieldLayout: I,
        usePersistentBadge: f,
        getDismissibleBadges: N
    } = t, [b] = s.useState(() => d()), v = p?.(), O = g(), j = A?.(), R = m?.(), y = h?.(), P = _?.(), D = f?.(), L = N?.(), G = (0, a.A)({
        persistentBadge: D,
        dismissibleBadges: L
    }), M = (0, r.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: O,
            description: j,
            disabled: y,
            initialValue: b,
            value: v,
            minValue: c,
            maxValue: u,
            defaultValue: P,
            onValueRender: x,
            asValueChanges: E,
            onValueChange: e => {
                M(), n?.(e)
            },
            orientation: "horizontal",
            markers: T,
            onMarkerRender: S,
            stickToMarkers: C,
            layout: I,
            badge: G
        }), null != R && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R
        })]
    })
}