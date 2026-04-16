/** chunk id: 184487 params = (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(197305),
    o = n(711014),
    d = n(827693),
    c = n(985018),
    u = n(942300);

function m() {
    let e = (0, l.bG)([a.A], () => a.A.affinities),
        t = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        n = s.useMemo(() => {
            let n = e.slice(0, 3).map(e => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i)
            }
            return n
        }, [e, t]);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
        className: u.i,
        children: [(0, i.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: c.intl.string(c.t.r90Wgo)
        }), (0, i.jsx)("div", {
            className: u.k,
            children: n.map(e => (0, i.jsx)(d.A, {
                guildId: e
            }, e))
        })]
    })
}