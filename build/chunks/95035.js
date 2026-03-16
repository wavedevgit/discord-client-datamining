/** chunk id: 95035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(976860),
    l = n(652215);
let o = a.forwardRef(function(e, t) {
    let {
        href: n,
        children: o,
        onClick: c,
        onKeyPress: _,
        focusProps: d,
        ...u
    } = e, I = a.useCallback(e => {
        e.repeat || ((e.charCode === l.Ks6.SPACE || e.charCode === l.Ks6.ENTER) && (e.preventDefault(), null != n && (0, s.pX)(n), c?.()), _?.(e))
    }, [n, _, c]), g = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n), c?.())
    }, [n, c]), b = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: g,
        onKeyPress: I,
        ...u,
        children: o
    });
    return (0, i.jsx)(r.vN3, {
        ...d,
        children: b
    })
})