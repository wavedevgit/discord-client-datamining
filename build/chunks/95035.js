/** chunk id: 95035 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(627968),
    r = n(64700),
    a = n(397927),
    s = n(976860),
    o = n(652215);
let l = r.forwardRef(function(e, t) {
    let {
        href: n,
        children: l,
        onClick: u,
        onKeyPress: c,
        focusProps: d,
        transitionExtras: A,
        ..._
    } = e, E = r.useCallback(e => {
        e.repeat || ((e.charCode === o.Ks6.SPACE || e.charCode === o.Ks6.ENTER) && (e.preventDefault(), null != n && (0, s.pX)(n, A), u?.()), c?.(e))
    }, [n, c, u, A]), f = r.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, s.pX)(n, A), u?.())
    }, [n, u, A]), R = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: f,
        onKeyPress: E,
        ..._,
        children: l
    });
    return (0, i.jsx)(a.vN3, {
        ...d,
        children: R
    })
})