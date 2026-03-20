/** chunk id: 440938 params = (module,exports,require) **/
n.d(t, {
    R9: () => o,
    uM: () => r
});
var a = n(627968),
    i = n(64700);
let l = i.createContext(null);

function r() {
    return i.useContext(l)
}

function o(e) {
    let {
        newValue: t,
        children: n
    } = e, o = r(), s = i.useMemo(() => ({
        ...o,
        ...t
    }), [o, t]);
    return (0, a.jsx)(l.Provider, {
        value: s,
        children: n
    })
}