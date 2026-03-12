/** chunk id: 126768 params = (module,exports,require) **/
t.d(s, {
    default: () => d
});
var a = t(627968),
    n = t(64700),
    i = t(158954),
    r = t(707539),
    l = t(617011),
    o = t(985018),
    c = t(969444);

function d(e) {
    let {
        channel: s,
        onClose: t,
        transitionState: d
    } = e;
    return n.useEffect(() => {
        (0, r.D3)()
    }, []), (0, a.jsx)(i.dWK, {
        transitionState: d,
        "aria-label": o.intl.string(o.t.B2panI),
        size: "lg",
        onClose: t,
        children: (0, a.jsx)(l.A, {
            className: c.T,
            channel: s,
            onClose: t,
            context: "modal"
        })
    })
}