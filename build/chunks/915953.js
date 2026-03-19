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
        useTitle: m,
        useSubtitle: g,
        useHintText: A,
        useDisabled: x,
        useExternalValue: h,
        onValueRender: p,
        asValueChanges: T,
        markers: E,
        onMarkerRender: S,
        stickToMarkers: C,
        fieldLayout: f,
        usePersistentBadge: N,
        getDismissibleBadges: I
    } = t, [b] = s.useState(() => d()), v = h?.(), j = m(), y = g?.(), O = A?.(), R = x?.(), L = _?.(), D = N?.(), P = I?.(), G = (0, a.A)({
        persistentBadge: D,
        dismissibleBadges: P
    }), M = (0, r.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: j,
            description: y,
            disabled: R,
            initialValue: b,
            value: v,
            minValue: c,
            maxValue: u,
            defaultValue: L,
            onValueRender: p,
            asValueChanges: T,
            onValueChange: e => {
                M(), n?.(e)
            },
            orientation: "horizontal",
            markers: E,
            onMarkerRender: S,
            stickToMarkers: C,
            layout: f,
            badge: G
        }), null != O && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
        })]
    })
}