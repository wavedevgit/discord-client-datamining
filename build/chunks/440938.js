/** chunk id: 440938 params = (module,exports,require) **/
n.d(t, {
    R9: () => s,
    uM: () => r
});
var a = n(627968),
    i = n(64700);
let l = i.createContext(null);

function r() {
    return i.useContext(l)
}

function s(e) {
    let {
        newValue: t,
        children: n
    } = e, s = r(), c = i.useMemo(() => ({
        ...s,
        ...t
    }), [s, t]);
    return (0, a.jsx)(l.Provider, {
        value: c,
        children: n
    })
}