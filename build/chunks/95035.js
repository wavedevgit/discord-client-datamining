/** chunk id: 95035 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    s = n(976860),
    a = n(652215);
let o = r.forwardRef(function(t, e) {
    let {
        href: n,
        children: o,
        onClick: c,
        onKeyPress: d,
        focusProps: u,
        ...h
    } = t, A = r.useCallback(t => {
        t.repeat || ((t.charCode === a.Ks6.SPACE || t.charCode === a.Ks6.ENTER) && (t.preventDefault(), null != n && (0, s.pX)(n), c?.()), d?.(t))
    }, [n, d, c]), _ = r.useCallback(t => {
        t.metaKey || t.shiftKey || 0 !== t.button || (t.preventDefault(), t.stopPropagation(), null != n && (0, s.pX)(n), c?.())
    }, [n, c]), C = (0, i.jsx)("a", {
        ref: e,
        href: n,
        onClick: _,
        onKeyPress: A,
        ...h,
        children: o
    });
    return (0, i.jsx)(l.vN3, {
        ...u,
        children: C
    })
})