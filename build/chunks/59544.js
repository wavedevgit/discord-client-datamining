/** chunk id: 59544 params = (module,exports,require) **/
n.d(e, {
    A: () => a,
    Q: () => s
});
var r = n(64700),
    i = n(25171),
    o = n(880405);

function l() {
    let [t, e] = r.useState(!1);
    return r.useEffect(() => {
        i.A.isProtocolRegistered("steam").then(e)
    }, []), t
}

function a(t) {
    let e = l();
    return (0, o.Qq)(t, e)
}

function s(t) {
    let e = l();
    return r.useMemo(() => t.map(t => (0, o.Qq)(t, e)), [t, e])
}