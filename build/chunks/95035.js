/** chunk id: 95035 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    i = n(64700),
    l = n(397927),
    r = n(976860),
    s = n(652215);
let c = i.forwardRef(function(e, t) {
    let {
        href: n,
        children: c,
        onClick: o,
        onKeyPress: d,
        focusProps: u,
        ...m
    } = e, x = i.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != n && (0, r.pX)(n), o?.()), d?.(e))
    }, [n, d, o]), h = i.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, r.pX)(n), o?.())
    }, [n, o]), g = (0, a.jsx)("a", {
        ref: t,
        href: n,
        onClick: h,
        onKeyPress: x,
        ...m,
        children: c
    });
    return (0, a.jsx)(l.vN3, {
        ...u,
        children: g
    })
})