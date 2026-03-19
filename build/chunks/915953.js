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
        usePersistentBadge: b,
        getDismissibleBadges: N
    } = t, [I] = s.useState(() => d()), v = h?.(), j = m(), y = g?.(), R = A?.(), O = x?.(), P = _?.(), L = b?.(), D = N?.(), M = (0, a.A)({
        persistentBadge: L,
        dismissibleBadges: D
    }), G = (0, r.q)(t);
    return (0, i.jsxs)(o.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: j,
            description: y,
            disabled: O,
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
            onMarkerRender: S,
            stickToMarkers: C,
            layout: f,
            badge: M
        }), null != R && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R
        })]
    })
}