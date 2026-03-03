/** chunk id: 161918, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Mk: () => a,
    iM: () => s
});
var i = l(627968),
    r = l(64700);
let n = r.createContext(null);

function a() {
    return r.useContext(n)
}

function s(e) {
    let {
        tab: t,
        children: l
    } = e, a = r.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, i.jsx)(n.Provider, {
        value: a,
        children: l
    })
}