/** chunk id: 161918, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Mk: () => a,
    iM: () => s
});
var r = l(627968),
    n = l(64700);
let i = n.createContext(null);

function a() {
    return n.useContext(i)
}

function s(e) {
    let {
        tab: t,
        children: l
    } = e, a = n.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, r.jsx)(i.Provider, {
        value: a,
        children: l
    })
}