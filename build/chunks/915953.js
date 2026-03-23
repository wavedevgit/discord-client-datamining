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
        asValueChanges: T,
        markers: E,
        onMarkerRender: f,
        stickToMarkers: S,
        fieldLayout: C,
        usePersistentBadge: b,
        getDismissibleBadges: N
    } = t, [I] = s.useState(() => d()), v = p?.(), j = _(), y = g?.(), O = A?.(), R = x?.(), L = m?.(), P = b?.(), D = N?.(), M = (0, a.A)({
        persistentBadge: P,
        dismissibleBadges: D
    }), G = (0, r.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: j,
            description: y,
            disabled: R,
            initialValue: I,
            value: v,
            minValue: c,
            maxValue: u,
            defaultValue: L,
            onValueRender: h,
            asValueChanges: T,
            onValueChange: e => {
                G(), n?.(e)
            },
            orientation: "horizontal",
            markers: E,
            onMarkerRender: f,
            stickToMarkers: S,
            layout: C,
            badge: M
        }), null != O && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: O
        })]
    })
}