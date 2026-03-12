/** chunk id: 95035 params = (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968),
    r = i(64700),
    l = i(397927),
    s = i(976860),
    a = i(652215);
let o = r.forwardRef(function(t, e) {
    let {
        href: i,
        children: o,
        onClick: c,
        onKeyPress: d,
        focusProps: u,
        ...h
    } = t, C = r.useCallback(t => {
        t.repeat || ((t.charCode === a.Ks6.SPACE || t.charCode === a.Ks6.ENTER) && (t.preventDefault(), null != i && (0, s.pX)(i), c?.()), d?.(t))
    }, [i, d, c]), g = r.useCallback(t => {
        t.metaKey || t.shiftKey || 0 !== t.button || (t.preventDefault(), t.stopPropagation(), null != i && (0, s.pX)(i), c?.())
    }, [i, c]), A = (0, n.jsx)("a", {
        ref: e,
        href: i,
        onClick: g,
        onKeyPress: C,
        ...h,
        children: o
    });
    return (0, n.jsx)(l.vN3, {
        ...u,
        children: A
    })
})