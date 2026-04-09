/** chunk id: 926441 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(64700),
    a = n(498419),
    r = n.n(a),
    l = n(481613),
    s = n.n(l),
    o = n(311907),
    d = n(800828),
    c = n(912309),
    u = n(458294),
    A = n(803224),
    _ = n(994500),
    h = n(503509),
    m = n(723702),
    g = n(837921),
    p = n(726249),
    E = n(652215),
    I = n(985018);
let f = new Set(["Blink", "Gecko", "WebKit"]),
    C = E.tEg;
if (m.isPlatformEmbedded) C = e => g.Ay.setBadge(e);
else if (f.has(s().layout)) {
    let e = new(r())({
        animation: "none"
    });
    C = t => {
        try {
            (0, p.sF)(t), e.badge(-1 === t ? "•" : t)
        } catch (e) {}
    }
}

function T() {
    let e = (0, o.bG)([h.A], () => h.A.hasIncomingCalls()),
        t = (0, o.bG)([u.default, _.A, A.A, d.A], () => {
            let e = u.default.getTotalMentionCount(),
                t = (0, c.dH)([_.A, d.A]),
                n = u.default.hasAnyUnread(),
                i = A.A.getDisableUnreadBadge(),
                a = e + t;
            return 0 === a && n && !i && (a = -1), a
        });
    i.useEffect(() => {
        if (!e) return;
        let t = g.Ay.bounceDock("critical"),
            n = (0, p.iA)({
                messages: [I.intl.string(I.t["fk1/bX"])],
                count: 50
            });
        return () => {
            t?.(), n()
        }
    }, [e]), i.useEffect(() => {
        C(t)
    }, [t]), i.useEffect(() => () => C(0), [])
}