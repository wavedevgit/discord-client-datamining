/** chunk id: 440938 params = (module,exports,require) **/
a.d(t, {
    R9: () => i,
    uM: () => s
});
var l = a(627968),
    r = a(64700);
let n = r.createContext(null);

function s() {
    return r.useContext(n)
}

function i(e) {
    let {
        newValue: t,
        children: a
    } = e, i = s(), o = r.useMemo(() => ({
        ...i,
        ...t
    }), [i, t]);
    return (0, l.jsx)(n.Provider, {
        value: o,
        children: a
    })
}