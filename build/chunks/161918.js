/** chunk id: 161918 params = (module,exports,require) **/
i.d(t, {
    Mk: () => s,
    iM: () => u
});
var r = i(627968),
    l = i(64700);
let n = l.createContext(null);

function s() {
    return l.useContext(n)
}

function u(e) {
    let {
        tab: t,
        children: i
    } = e, s = l.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, r.jsx)(n.Provider, {
        value: s,
        children: i
    })
}