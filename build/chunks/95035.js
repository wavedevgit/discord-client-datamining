/** chunk id: 95035 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(976860),
    s = n(652215);
let o = a.forwardRef(function(e, t) {
    let {
        href: n,
        children: o,
        onClick: c,
        onKeyPress: d,
        focusProps: u,
        ..._
    } = e, h = a.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != n && (0, l.pX)(n), c?.()), d?.(e))
    }, [n, d, c]), C = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, l.pX)(n), c?.())
    }, [n, c]), g = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: C,
        onKeyPress: h,
        ..._,
        children: o
    });
    return (0, i.jsx)(r.vN3, {
        ...u,
        children: g
    })
})