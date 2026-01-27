/** Chunk was on web.js **/
/** chunk id: 977418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => i
});
var r = n(757260);

function i(e, t, n) {
    let {
        labelProps: i,
        inputProps: a,
        isSelected: o,
        isPressed: s,
        isDisabled: l,
        isReadOnly: c
    } = (0, r.e)(e, t, n);
    return {
        labelProps: i,
        inputProps: {
            ...a,
            role: "switch",
            checked: o
        },
        isSelected: o,
        isPressed: s,
        isDisabled: l,
        isReadOnly: c
    }
}