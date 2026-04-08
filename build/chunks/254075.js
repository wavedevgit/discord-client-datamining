/** chunk id: 254075 params = (module,exports,require) **/
i.d(t, {
    A: () => m
});
var n = i(627968),
    a = i(64700),
    l = i(735438),
    o = i(417597),
    r = i(3137),
    s = i(620141),
    c = i(966598),
    d = i(224964),
    u = i(31408);

function h(e) {
    let {
        reactionRef: t,
        count: i
    } = e, n = a.useRef(i), s = (0, o.bG)([r.A], () => r.A.getState()), u = (0, d.A)(), h = (0, c.A)(t);
    return a.useEffect(() => {
        if (i > n.current && null != h) {
            let e = (0, l.clamp)(i, s.confettiCount / 2, 2 * s.confettiCount);
            u.fire(h.x, h.y, {
                count: e
            })
        }
        n.current = i
    }, [i, h, u, s.confettiCount]), null
}

function m(e) {
    return (0, n.jsx)(s.A, {
        confettiLocation: u.k.REACTION,
        children: (0, n.jsx)(h, {
            ...e
        })
    })
}