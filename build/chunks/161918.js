/** chunk id: 161918 params = (module,exports,require) **/
n.d(t, {
    Mk: () => r,
    iM: () => s
});
var l = n(627968),
    a = n(64700);
let i = a.createContext(null);

function r() {
    return a.useContext(i)
}

function s(e) {
    let {
        tab: t,
        children: n
    } = e, r = a.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, l.jsx)(i.Provider, {
        value: r,
        children: n
    })
}