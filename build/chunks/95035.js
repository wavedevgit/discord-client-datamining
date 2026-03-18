/** chunk id: 95035 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(976860),
    s = n(652215);
let c = a.forwardRef(function(e, t) {
    let {
        href: n,
        children: c,
        onClick: o,
        onKeyPress: d,
        focusProps: u,
        ...m
    } = e, x = a.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != n && (0, r.pX)(n), o?.()), d?.(e))
    }, [n, d, o]), h = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, r.pX)(n), o?.())
    }, [n, o]), f = (0, l.jsx)("a", {
        ref: t,
        href: n,
        onClick: h,
        onKeyPress: x,
        ...m,
        children: c
    });
    return (0, l.jsx)(i.vN3, {
        ...u,
        children: f
    })
})