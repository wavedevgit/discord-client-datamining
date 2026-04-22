/** chunk id: 161918 params = (module,exports,require) **/
l.d(t, {
    Mk: () => s,
    iM: () => o
});
var a = l(627968),
    r = l(64700);
let n = r.createContext(null);

function s() {
    return r.useContext(n)
}

function o(e) {
    let {
        tab: t,
        children: l
    } = e, s = r.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, a.jsx)(n.Provider, {
        value: s,
        children: l
    })
}