/** chunk id: 915953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(791498),
    r = n(244242);

function o(e) {
    let {
        node: t
    } = e, {
        setValue: n,
        getInitialValue: o,
        minValue: d,
        maxValue: c,
        useDefaultValue: u,
        useTitle: _,
        useSubtitle: g,
        useHintText: m,
        useDisabled: A,
        useExternalValue: h,
        onValueRender: p,
        asValueChanges: x,
        markers: E,
        onMarkerRender: T,
        stickToMarkers: S,
        fieldLayout: C
    } = t, [f] = s.useState(() => o()), I = h?.(), b = _(), N = g?.(), v = m?.(), j = A?.(), O = u?.(), R = (0, a.q)(t);
    return (0, i.jsxs)(r.L, {
        children: [(0, i.jsx)(l.Apm, {
            label: b,
            description: N,
            disabled: j,
            initialValue: f,
            value: I,
            minValue: d,
            maxValue: c,
            defaultValue: O,
            onValueRender: p,
            asValueChanges: x,
            onValueChange: e => {
                R(), n?.(e)
            },
            orientation: "horizontal",
            markers: E,
            onMarkerRender: T,
            stickToMarkers: S,
            layout: C
        }), null != v && (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: v
        })]
    })
}