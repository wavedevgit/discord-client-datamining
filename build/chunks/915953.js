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
        useTitle: _,
        useSubtitle: g,
        useHintText: A,
        useDisabled: x,
        useExternalValue: h,
        onValueRender: p,
        asValueChanges: f,
        markers: T,
        onMarkerRender: S,
        stickToMarkers: E,
        fieldLayout: b,
        usePersistentBadge: C,
        getDismissibleBadges: v
    } = t, [N] = s.useState(() => d()), I = h?.(), j = _(), y = g?.(), O = A?.(), R = x?.(), L = m?.(), P = C?.(), D = v?.(), G = (0, a.A)({
        persistentBadge: P,
        dismissibleBadges: D
    }), M = (0, r.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: j,
            description: y,
            disabled: R,
            initialValue: N,
            value: I,
            minValue: c,
            maxValue: u,
            defaultValue: L,
            onValueRender: p,
            asValueChanges: f,
            onValueChange: e => {
                M(), n?.(e)
            },
            orientation: "horizontal",
            markers: T,
            onMarkerRender: S,
            stickToMarkers: E,
            layout: b,
            badge: G
        }), null != O && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
        })]
    })
}