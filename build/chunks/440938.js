/** chunk id: 440938 params = (module,exports,require) **/
l.d(t, {
    R9: () => o,
    uM: () => s
});
var a = l(627968),
    r = l(64700);
let n = r.createContext(null);

function s() {
    return r.useContext(n)
}

function o(e) {
    let {
        newValue: t,
        children: l
    } = e, o = s(), i = r.useMemo(() => ({
        ...o,
        ...t
    }), [o, t]);
    return (0, a.jsx)(n.Provider, {
        value: i,
        children: l
    })
}