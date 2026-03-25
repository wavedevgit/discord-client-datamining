/** chunk id: 95035 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968),
    l = i(64700),
    s = i(397927),
    a = i(976860),
    r = i(652215);
let u = l.forwardRef(function(e, t) {
    let {
        href: i,
        children: u,
        onClick: d,
        onKeyPress: o,
        focusProps: A,
        ...c
    } = e, _ = l.useCallback(e => {
        e.repeat || ((e.charCode === r.Ks6.SPACE || e.charCode === r.Ks6.ENTER) && (e.preventDefault(), null != i && (0, a.pX)(i), d?.()), o?.(e))
    }, [i, o, d]), E = l.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != i && (0, a.pX)(i), d?.())
    }, [i, d]), I = (0, n.jsx)("a", {
        ref: t,
        href: i,
        onClick: E,
        onKeyPress: _,
        ...c,
        children: u
    });
    return (0, n.jsx)(s.vN3, {
        ...A,
        children: I
    })
})