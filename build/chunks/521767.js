/** chunk id: 521767 params = (module,exports,require) **/
t.d(a, {
    Y: () => s,
    t: () => u
});
var r = t(825913),
    n = t(967158),
    i = t(498430),
    l = t(803082),
    o = t(64700);
let u = (0, o.createContext)({}),
    s = (0, o.forwardRef)(function(e, a) {
        var t, s;
        [e, a] = (0, r.JT)(e, a, u);
        let {
            isDisabled: d,
            isInvalid: c,
            isReadOnly: m,
            onHoverStart: h,
            onHoverChange: y,
            onHoverEnd: D,
            ...p
        } = e, {
            hoverProps: g,
            isHovered: v
        } = (0, n.M)({
            onHoverStart: h,
            onHoverChange: y,
            onHoverEnd: D,
            isDisabled: d
        }), {
            isFocused: f,
            isFocusVisible: b,
            focusProps: A
        } = (0, i.o)({
            within: !0
        });
        null != d || (d = !!e["aria-disabled"] && "false" !== e["aria-disabled"]), null != c || (c = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let R = (0, r.Sl)({
            ...e,
            values: {
                isHovered: v,
                isFocusWithin: f,
                isFocusVisible: b,
                isDisabled: d,
                isInvalid: c
            },
            defaultClassName: "react-aria-Group"
        });
        return o.createElement("div", {
            ...(0, l.v)(p, A, g),
            ...R,
            ref: a,
            role: null != (t = e.role) ? t : "group",
            slot: null != (s = e.slot) ? s : void 0,
            "data-focus-within": f || void 0,
            "data-hovered": v || void 0,
            "data-focus-visible": b || void 0,
            "data-disabled": d || void 0,
            "data-invalid": c || void 0,
            "data-readonly": m || void 0
        }, R.children)
    })