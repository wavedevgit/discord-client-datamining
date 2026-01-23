/** Chunk was on web.js **/
/** chunk id: 521767, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => c,
    t: () => l
});
var r = n(825913),
    i = n(967158),
    a = n(498430),
    s = n(803082),
    o = n(64700);
let l = (0, o.createContext)({}),
    c = (0, o.forwardRef)(function(e, t) {
        var n, c;
        [e, t] = (0, r.JT)(e, t, l);
        let {
            isDisabled: u,
            isInvalid: d,
            isReadOnly: f,
            onHoverStart: p,
            onHoverChange: _,
            onHoverEnd: h,
            ...m
        } = e, {
            hoverProps: g,
            isHovered: E
        } = (0, i.M)({
            onHoverStart: p,
            onHoverChange: _,
            onHoverEnd: h,
            isDisabled: u
        }), {
            isFocused: y,
            isFocusVisible: b,
            focusProps: O
        } = (0, a.o)({
            within: !0
        });
        null != u || (u = !!e["aria-disabled"] && "false" !== e["aria-disabled"]), null != d || (d = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let v = (0, r.Sl)({
            ...e,
            values: {
                isHovered: E,
                isFocusWithin: y,
                isFocusVisible: b,
                isDisabled: u,
                isInvalid: d
            },
            defaultClassName: "react-aria-Group"
        });
        return o.createElement("div", {
            ...(0, s.v)(m, O, g),
            ...v,
            ref: t,
            role: null != (n = e.role) ? n : "group",
            slot: null != (c = e.slot) ? c : void 0,
            "data-focus-within": y || void 0,
            "data-hovered": E || void 0,
            "data-focus-visible": b || void 0,
            "data-disabled": u || void 0,
            "data-invalid": d || void 0,
            "data-readonly": f || void 0
        }, v.children)
    })