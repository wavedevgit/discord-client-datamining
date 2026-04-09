/** chunk id: 440938 params = (module,exports,require) **/
i.d(t, {
    R9: () => u,
    uM: () => s
});
var r = i(627968),
    l = i(64700);
let n = l.createContext(null);

function s() {
    return l.useContext(n)
}

function u(e) {
    let {
        newValue: t,
        children: i
    } = e, u = s(), o = l.useMemo(() => ({
        ...u,
        ...t
    }), [u, t]);
    return (0, r.jsx)(n.Provider, {
        value: o,
        children: i
    })
}