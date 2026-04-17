/** chunk id: 440938 params = (module,exports,require) **/
n.d(t, {
    R9: () => s,
    uM: () => r
});
var l = n(627968),
    a = n(64700);
let i = a.createContext(null);

function r() {
    return a.useContext(i)
}

function s(e) {
    let {
        newValue: t,
        children: n
    } = e, s = r(), o = a.useMemo(() => ({
        ...s,
        ...t
    }), [s, t]);
    return (0, l.jsx)(i.Provider, {
        value: o,
        children: n
    })
}