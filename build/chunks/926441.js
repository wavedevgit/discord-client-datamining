/** chunk id: 926441, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(64700),
    i = n(498419),
    l = n.n(i),
    a = n(481613),
    s = n.n(a),
    o = n(311907),
    c = n(800828),
    u = n(912309),
    d = n(458294),
    p = n(803224),
    h = n(994500),
    g = n(503509),
    m = n(723702),
    f = n(837921),
    A = n(726249),
    _ = n(652215),
    b = n(985018);
let E = new Set(["Blink", "Gecko", "WebKit"]),
    O = _.tEg;
if (m.isPlatformEmbedded) O = e => f.Ay.setBadge(e);
else if (E.has(s().layout)) {
    let e = new(l())({
        animation: "none"
    });
    O = t => {
        try {
            (0, A.sF)(t), e.badge(-1 === t ? "•" : t)
        } catch (e) {}
    }
}

function y() {
    let e = (0, o.bG)([g.A], () => g.A.hasIncomingCalls()),
        t = (0, o.bG)([d.default, h.A, p.A, c.A], () => {
            let e = d.default.getTotalMentionCount(),
                t = (0, u.dH)([h.A, c.A]),
                n = d.default.hasAnyUnread(),
                r = p.A.getDisableUnreadBadge(),
                i = e + t;
            return 0 === i && n && !r && (i = -1), i
        });
    r.useEffect(() => {
        if (!e) return;
        let t = f.Ay.bounceDock("critical"),
            n = (0, A.iA)({
                messages: [b.intl.string(b.t["fk1/bX"])],
                count: 50
            });
        return () => {
            null == t || t(), n()
        }
    }, [e]), r.useEffect(() => {
        O(t)
    }, [t]), r.useEffect(() => () => O(0), [])
}