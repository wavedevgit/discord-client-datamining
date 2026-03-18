/** chunk id: 59544 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    Q: () => c
});
var l = n(64700),
    a = n(25171),
    i = n(880405);

function r() {
    let [e, t] = l.useState(!1);
    return l.useEffect(() => {
        a.A.isProtocolRegistered("steam").then(t)
    }, []), e
}

function s(e) {
    let t = r();
    return (0, i.Qq)(e, t)
}

function c(e) {
    let t = r();
    return l.useMemo(() => e.map(e => (0, i.Qq)(e, t)), [e, t])
}