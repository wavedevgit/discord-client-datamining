/** chunk id: 95035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(976860),
    o = n(652215);
let c = a.forwardRef(function(e, t) {
    let {
        href: n,
        children: c,
        onClick: l,
        onKeyPress: _,
        focusProps: d,
        ...u
    } = e, b = a.useCallback(e => {
        e.repeat || ((e.charCode === o.Ks6.SPACE || e.charCode === o.Ks6.ENTER) && (e.preventDefault(), null != n && (0, s.pX)(n), l?.()), _?.(e))
    }, [n, _, l]), g = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n), l?.())
    }, [n, l]), m = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: g,
        onKeyPress: b,
        ...u,
        children: c
    });
    return (0, i.jsx)(r.vN3, {
        ...d,
        children: m
    })
})