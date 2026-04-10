/** chunk id: 95035 params = (module,exports,require) **/
r.d(t, {
    A: () => l
});
var i = r(627968),
    a = r(64700),
    n = r(397927),
    o = r(976860),
    s = r(652215);
let l = a.forwardRef(function(e, t) {
    let {
        href: r,
        children: l,
        onClick: c,
        onKeyPress: p,
        focusProps: _,
        transitionExtras: u,
        ...d
    } = e, b = a.useCallback(e => {
        e.repeat || ((e.charCode === s.Ks6.SPACE || e.charCode === s.Ks6.ENTER) && (e.preventDefault(), null != r && (0, o.pX)(r, u), c?.()), p?.(e))
    }, [r, p, c, u]), v = a.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != r && (0, o.pX)(r, u), c?.())
    }, [r, c, u]), f = (0, i.jsx)("a", {
        ref: t,
        href: r,
        onClick: v,
        onKeyPress: b,
        ...d,
        children: l
    });
    return (0, i.jsx)(n.vN3, {
        ..._,
        children: f
    })
})