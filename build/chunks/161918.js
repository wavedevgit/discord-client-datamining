/** chunk id: 161918, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Mk: () => s,
    iM: () => u
});
var r = l(627968),
    i = l(64700);
let n = i.createContext(null);

function s() {
    return i.useContext(n)
}

function u(e) {
    let {
        tab: t,
        children: l
    } = e, s = i.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, r.jsx)(n.Provider, {
        value: s,
        children: l
    })
}