/** chunk id: 95035 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(976860),
    s = n(652215);
let o = l.forwardRef(function(e, t) {
    let {
        href: n,
        children: o,
        onClick: c,
        onKeyPress: d,
        focusProps: u,
        ...m
    } = e, x = l.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != n && (0, r.pX)(n), c?.()), d?.(e))
    }, [n, d, c]), f = l.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, r.pX)(n), c?.())
    }, [n, c]), h = (0, a.jsx)("a", {
        ref: t,
        href: n,
        onClick: f,
        onKeyPress: x,
        ...m,
        children: o
    });
    return (0, a.jsx)(i.vN3, {
        ...u,
        children: h
    })
})