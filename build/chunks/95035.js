/** chunk id: 95035 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(976860),
    a = n(652215);
let d = s.forwardRef(function(e, t) {
    let {
        href: n,
        children: d,
        onClick: o,
        onKeyPress: h,
        focusProps: u,
        transitionExtras: c,
        ...C
    } = e, g = s.useCallback(e => {
        e.repeat || ((e.charCode === a.Ks6.SPACE || e.charCode === a.Ks6.ENTER) && (e.preventDefault(), null != n && (0, l.pX)(n, c), o?.()), h?.(e))
    }, [n, h, o, c]), A = s.useCallback(e => {
        e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, l.pX)(n, c), o?.())
    }, [n, o, c]), I = (0, i.jsx)("a", {
        ref: t,
        href: n,
        onClick: A,
        onKeyPress: g,
        ...C,
        children: d
    });
    return (0, i.jsx)(r.vN3, {
        ...u,
        children: I
    })
})