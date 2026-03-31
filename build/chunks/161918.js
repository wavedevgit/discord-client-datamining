/** chunk id: 161918 params = (module,exports,require) **/
n.d(t, {
    Mk: () => r,
    iM: () => s
});
var a = n(627968),
    i = n(64700);
let l = i.createContext(null);

function r() {
    return i.useContext(l)
}

function s(e) {
    let {
        tab: t,
        children: n
    } = e, r = i.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, a.jsx)(l.Provider, {
        value: r,
        children: n
    })
}