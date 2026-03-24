/** chunk id: 95035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(976860),
    o = n(652215);
let l = a.forwardRef(function(e, t) {
    let {
        href: n,
        children: l,
        onClick: c,
        onKeyPress: _,
        focusProps: d,
        ...u
    } = e, b = a.useCallback(e => {
        e.repeat || ((e.charCode === o.Ks6.SPACE || e.charCode === o.Ks6.ENTER) && (e.preventDefault(), null != n && (0, s.pX)(n), c?.()), _?.(e))
    }, [n, _, c]), I = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n), c?.())
    }, [n, c]), g = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: I,
        onKeyPress: b,
        ...u,
        children: l
    });
    return (0, i.jsx)(r.vN3, {
        ...d,
        children: g
    })
})