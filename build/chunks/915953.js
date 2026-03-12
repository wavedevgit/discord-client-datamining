/** chunk id: 915953 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(600812),
    a = n(791498),
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
        useDisabled: h,
        useExternalValue: x,
        onValueRender: p,
        asValueChanges: T,
        markers: E,
        onMarkerRender: C,
        stickToMarkers: S,
        fieldLayout: f,
        usePersistentBadge: N,
        getDismissibleBadges: b
    } = t, [I] = s.useState(() => d()), v = x?.(), j = m(), O = g?.(), y = A?.(), R = h?.(), P = _?.(), D = N?.(), L = b?.(), M = (0, r.A)({
        persistentBadge: D,
        dismissibleBadges: L
    }), G = (0, a.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: j,
            description: O,
            disabled: R,
            initialValue: I,
            value: v,
            minValue: c,
            maxValue: u,
            defaultValue: P,
            onValueRender: p,
            asValueChanges: T,
            onValueChange: e => {
                G(), n?.(e)
            },
            orientation: "horizontal",
            markers: E,
            onMarkerRender: C,
            stickToMarkers: S,
            layout: f,
            badge: M
        }), null != y && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: y
        })]
    })
}