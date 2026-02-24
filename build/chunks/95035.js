/** chunk id: 95035, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var a = n(627968),
    i = n(64700),
    r = n(397927),
    o = n(976860),
    c = n(652215);
let s = i.forwardRef(function(e, t) {
    let {
        href: n,
        children: s,
        onClick: l,
        onKeyPress: _,
        focusProps: d,
        ...u
    } = e, g = i.useCallback(e => {
        e.repeat || ((e.charCode === c.Ks6.SPACE || e.charCode === c.Ks6.ENTER) && (e.preventDefault(), null != n && (0, o.pX)(n), l?.()), _?.(e))
    }, [n, _, l]), b = i.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, o.pX)(n), l?.())
    }, [n, l]), m = (0, a.jsx)("a", {
        ref: t,
        href: n,
        onClick: b,
        onKeyPress: g,
        ...u,
        children: s
    });
    return (0, a.jsx)(r.vN3, {
        ...d,
        children: m
    })
})