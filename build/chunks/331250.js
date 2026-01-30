/** chunk id: 331250, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => o
});
var r = n(284054),
    i = n(260431),
    a = n(803082);

function o(e, t, n) {
    let {
        isSelected: o
    } = t, {
        isPressed: s,
        buttonProps: l
    } = (0, r.s)({
        ...e,
        onPress: (0, i.c)(t.toggle, e.onPress)
    }, n);
    return {
        isPressed: s,
        isSelected: o,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, a.v)(l, {
            "aria-pressed": o
        })
    }
}