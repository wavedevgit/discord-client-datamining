/** Chunk was on web.js **/
/** chunk id: 823807, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => a
});
var r = n(492313),
    i = n(64700);

function a(e = {}) {
    var t;
    let {
        isReadOnly: n
    } = e, [o, s] = (0, r.P)(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = (0, i.useState)(o);

    function c(e) {
        n || s(e)
    }

    function u() {
        n || s(!o)
    }
    return {
        isSelected: o,
        defaultSelected: null != (t = e.defaultSelected) ? t : l,
        setSelected: c,
        toggle: u
    }
}