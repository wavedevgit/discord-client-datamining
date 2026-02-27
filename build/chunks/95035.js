/** chunk id: 95035, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var a = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(976860),
    l = n(652215);
let o = r.forwardRef(function(e, t) {
    let {
        href: n,
        children: o,
        onClick: c,
        onKeyPress: u,
        focusProps: d,
        ..._
    } = e, m = r.useCallback(e => {
        e.repeat || ((e.charCode === l.Ks6.SPACE || e.charCode === l.Ks6.ENTER) && (e.preventDefault(), null != n && (0, s.pX)(n), c?.()), u?.(e))
    }, [n, u, c]), g = r.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n), c?.())
    }, [n, c]), p = (0, a.jsx)("a", {
        ref: t,
        href: n,
        onClick: g,
        onKeyPress: m,
        ..._,
        children: o
    });
    return (0, a.jsx)(i.vN3, {
        ...d,
        children: p
    })
})