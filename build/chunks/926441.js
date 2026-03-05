/** chunk id: 926441 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(64700),
    r = n(498419),
    l = n.n(r),
    a = n(481613),
    s = n.n(a),
    o = n(311907),
    d = n(800828),
    c = n(912309),
    u = n(458294),
    A = n(803224),
    h = n(994500),
    _ = n(503509),
    m = n(723702),
    g = n(837921),
    p = n(726249),
    E = n(652215),
    I = n(985018);
let f = new Set(["Blink", "Gecko", "WebKit"]),
    C = E.tEg;
if (m.isPlatformEmbedded) C = e => g.Ay.setBadge(e);
else if (f.has(s().layout)) {
    let e = new(l())({
        animation: "none"
    });
    C = t => {
        try {
            (0, p.sF)(t), e.badge(-1 === t ? "•" : t)
        } catch (e) {}
    }
}

function T() {
    let e = (0, o.bG)([_.A], () => _.A.hasIncomingCalls()),
        t = (0, o.bG)([u.default, h.A, A.A, d.A], () => {
            let e = u.default.getTotalMentionCount(),
                t = (0, c.dH)([h.A, d.A]),
                n = u.default.hasAnyUnread(),
                i = A.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r
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