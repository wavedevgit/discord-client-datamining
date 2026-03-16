/** chunk id: 95035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(976860),
    s = n(652215);
let _ = a.forwardRef(function(e, t) {
    let {
        href: n,
        children: _,
        onClick: o,
        onKeyPress: c,
        focusProps: d,
        ...u
    } = e, g = a.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != n && (0, l.pX)(n), o?.()), c?.(e))
    }, [n, c, o]), b = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, l.pX)(n), o?.())
    }, [n, o]), I = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: b,
        onKeyPress: g,
        ...u,
        children: _
    });
    return (0, i.jsx)(r.vN3, {
        ...d,
        children: I
    })
})