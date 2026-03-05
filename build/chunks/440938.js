/** chunk id: 440938 params = (module,exports,require) **/
a.d(n, {
    R9: () => s,
    uM: () => r
});
var t = a(627968),
    i = a(64700);
let l = i.createContext(null);

function r() {
    return i.useContext(l)
}

function s(e) {
    let {
        newValue: n,
        children: a
    } = e, s = r(), o = i.useMemo(() => ({
        ...s,
        ...n
    }), [s, n]);
    return (0, t.jsx)(l.Provider, {
        value: o,
        children: a
    })
}