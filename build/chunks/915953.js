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
        useExternalValue: p,
        onValueRender: h,
        asValueChanges: f,
        markers: T,
        onMarkerRender: E,
        stickToMarkers: S,
        fieldLayout: b,
        usePersistentBadge: C,
        getDismissibleBadges: N
    } = t, [v] = s.useState(() => d()), I = p?.(), j = _(), y = g?.(), O = A?.(), R = x?.(), L = m?.(), P = C?.(), D = N?.(), M = (0, a.A)({
        persistentBadge: P,
        dismissibleBadges: D
    }), G = (0, r.q)(t);
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
            onValueRender: h,
            asValueChanges: f,
            onValueChange: e => {
                G(), n?.(e)
            },
            orientation: "horizontal",
            markers: T,
            onMarkerRender: E,
            stickToMarkers: S,
            layout: b,
            badge: M
        }), null != O && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
        })]
    })
}