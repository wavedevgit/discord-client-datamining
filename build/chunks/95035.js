/** chunk id: 95035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var a = n(627968),
    i = n(64700),
    r = n(397927),
    c = n(976860),
    o = n(652215);
let s = i.forwardRef(function(e, t) {
    let {
        href: n,
        children: s,
        onClick: _,
        onKeyPress: l,
        focusProps: d,
        ...u
    } = e, g = i.useCallback(e => {
        e.repeat || ((e.charCode === o.Ks6.SPACE || e.charCode === o.Ks6.ENTER) && (e.preventDefault(), null != n && (0, c.pX)(n), _?.()), l?.(e))
    }, [n, l, _]), b = i.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, c.pX)(n), _?.())
    }, [n, _]), I = (0, a.jsx)("a", {
        ref: t,
        href: n,
        onClick: b,
        onKeyPress: g,
        ...u,
        children: s
    });
    return (0, a.jsx)(r.vN3, {
        ...d,
        children: I
    })
})