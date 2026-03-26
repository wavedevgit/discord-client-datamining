/** chunk id: 440938 params = (module,exports,require) **/
a.d(t, {
    R9: () => i,
    uM: () => s
});
var l = a(627968),
    n = a(64700);
let r = n.createContext(null);

function s() {
    return n.useContext(r)
}

function i(e) {
    let {
        newValue: t,
        children: a
    } = e, i = s(), o = n.useMemo(() => ({
        ...i,
        ...t
    }), [i, t]);
    return (0, l.jsx)(r.Provider, {
        value: o,
        children: a
    })
}