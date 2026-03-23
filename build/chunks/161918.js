/** chunk id: 161918 params = (module,exports,require) **/
a.d(t, {
    Mk: () => s,
    iM: () => i
});
var l = a(627968),
    n = a(64700);
let r = n.createContext(null);

function s() {
    return n.useContext(r)
}

function i(e) {
    let {
        tab: t,
        children: a
    } = e, s = n.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, l.jsx)(r.Provider, {
        value: s,
        children: a
    })
}