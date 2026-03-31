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
        transitionExtras: m,
        ...x
    } = e, h = i.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != n && (0, r.pX)(n, m), o?.()), d?.(e))
    }, [n, d, o, m]), f = i.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, r.pX)(n, m), o?.())
    }, [n, o, m]), g = (0, a.jsx)("a", {
        ref: t,
        href: n,
        onClick: f,
        onKeyPress: h,
        ...x,
        children: c
    });
    return (0, a.jsx)(l.vN3, {
        ...u,
        children: g
    })
})