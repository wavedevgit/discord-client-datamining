/** Chunk was on 60667 **/
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
        useSubtitle: _,
        useHintText: p,
        useDisabled: m,
        onValueRender: g,
        asValueChanges: A,
        markers: f,
        onMarkerRender: h,
        stickToMarkers: b,
        fieldLayout: E
    } = t, [x] = i.useState(() => a()), O = u(), C = null == _ ? void 0 : _(), T = null == p ? void 0 : p(), I = null == m ? void 0 : m(), S = null == d ? void 0 : d();
    return (0, r.jsxs)(s.L, {
        children: [(0, r.jsx)(l.Apm, {
            label: O,
            description: C,
            disabled: I,
            initialValue: x,
            minValue: o,
            maxValue: c,
            defaultValue: S,
            onValueRender: g,
            asValueChanges: A,
            onValueChange: n,
            orientation: "horizontal",
            markers: f,
            onMarkerRender: h,
            stickToMarkers: b,
            layout: E
        }), null != T && (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: T
        })]
    })
}