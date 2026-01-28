/** Chunk was on 5606 **/
/** chunk id: 915953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(244242);

function a(e) {
    let {
        node: t
    } = e, {
        setValue: n,
        getInitialValue: a,
        minValue: o,
        maxValue: c,
        useDefaultValue: d,
        useTitle: u,
        useSubtitle: p,
        useHintText: _,
        useDisabled: m,
        onValueRender: g,
        asValueChanges: f,
        markers: b,
        onMarkerRender: h,
        stickToMarkers: A,
        fieldLayout: E
    } = t, [x] = i.useState(() => a()), O = u(), C = null == p ? void 0 : p(), y = null == _ ? void 0 : _(), j = null == m ? void 0 : m(), T = null == d ? void 0 : d();
    return (0, r.jsxs)(s.L, {
        children: [(0, r.jsx)(l.Apm, {
            label: O,
            description: C,
            disabled: j,
            initialValue: x,
            minValue: o,
            maxValue: c,
            defaultValue: T,
            onValueRender: g,
            asValueChanges: f,
            onValueChange: n,
            orientation: "horizontal",
            markers: b,
            onMarkerRender: h,
            stickToMarkers: A,
            layout: E
        }), null != y && (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: y
        })]
    })
}