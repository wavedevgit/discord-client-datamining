/** Chunk was on web.js **/
/** chunk id: 731359, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    z: () => d
});
var r = n(146968),
    i = n(803082),
    a = n(290424),
    s = n(702992),
    o = n(64700),
    l = n(8321),
    c = n(946020),
    u = n(96441);

function d(e, t, n) {
    let {
        value: d,
        children: f,
        "aria-label": p,
        "aria-labelledby": _,
        onPressStart: h,
        onPressEnd: m,
        onPressChange: g,
        onPress: E,
        onPressUp: y,
        onClick: b
    } = e, O = e.isDisabled || t.isDisabled, v = t.selectedValue === d, A = e => {
        e.stopPropagation(), t.setSelectedValue(d)
    }, {
        pressProps: I,
        isPressed: S
    } = (0, l.d)({
        onPressStart: h,
        onPressEnd: m,
        onPressChange: g,
        onPress: E,
        onPressUp: y,
        onClick: b,
        isDisabled: O
    }), {
        pressProps: T,
        isPressed: C
    } = (0, l.d)({
        onPressStart: h,
        onPressEnd: m,
        onPressChange: g,
        onPressUp: y,
        onClick: b,
        isDisabled: O,
        onPress(e) {
            var r;
            null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus()
        }
    }), {
        focusableProps: N
    } = (0, c.Wc)((0, i.v)(e, {
        onFocus: () => t.setLastFocusedValue(d)
    }), n), w = (0, i.v)(I, N), R = (0, a.$)(e, {
        labelable: !0
    }), P = -1;
    null != t.selectedValue ? t.selectedValue === d && (P = 0) : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (P = 0), O && (P = void 0);
    let {
        name: D,
        form: x,
        descriptionId: L,
        errorMessageId: j,
        validationBehavior: M
    } = r.V.get(t);
    return (0, s.F)(n, t.defaultSelectedValue, t.setSelectedValue), (0, u.X)({
        validationBehavior: M
    }, t, n), {
        labelProps: (0, i.v)(T, (0, o.useMemo)(() => ({
            onClick: e => e.preventDefault(),
            onMouseDown: e => e.preventDefault()
        }), [])),
        inputProps: (0, i.v)(R, {
            ...w,
            type: "radio",
            name: D,
            form: x,
            tabIndex: P,
            disabled: O,
            required: t.isRequired && "native" === M,
            checked: v,
            value: d,
            onChange: A,
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? j : null, L].filter(Boolean).join(" ") || void 0
        }),
        isDisabled: O,
        isSelected: v,
        isPressed: S || C
    }
}