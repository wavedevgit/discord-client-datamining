/** Chunk was on 1113 **/
/** chunk id: 224648, original params: e,t,n (module,exports,require) **/
n.d(t, {
    RG: () => p,
    Uo: () => h
}), n(321073), n(896048);
var r = n(64700),
    l = n(735438),
    i = n(311907),
    s = n(59520),
    a = n(313961),
    o = n(996439),
    c = n(63995),
    u = n(113783),
    d = n(69407);

function h(e) {
    let t = (0, u.zy)(e, d.ip.AUDIENCE),
        [n, l] = r.useState(!1);
    return r.useEffect(() => {
        t > 100 ? l(!0) : t < 75 && l(!1)
    }, [t]), 5e3 * !!n
}

function p(e, t, n) {
    let u, h, p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = (u = (0, i.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D), h = (0, i.bG)([a.A], () => a.A.getSelectedParticipantId(e), [e]), r.useMemo(() => {
            let n = [],
                r = [],
                i = -1,
                s = [];
            if (p)
                for (let t of c.A.getMutableParticipants(e, d.ip.SPEAKER))
                    if (t.type === d.wY.STREAM) t.id !== h && s.push(t), i++;
                    else break;
            let a = (e, t, s) => {
                    let a = s ? e.filter((e, t) => e.id !== h && t > i) : e,
                        o = (0, l.chunk)(a, t);
                    r.push(o), n.push(o.length)
                },
                o = null != h ? c.A.getParticipant(e, h) : null;
            return (null == o ? void 0 : o.speaker) ? a([o], 1, !1) : a([], 1, !1), [d.ip.SPEAKER, d.ip.AUDIENCE].forEach(e => {
                a(c.A.getMutableParticipants(u[0], e), t[e], e === d.ip.SPEAKER)
            }), a(s, 1, !1), [n, r]
        }, [u, t, h, p, e])),
        [f, m] = g,
        [b, A] = (0, s.J)(g, n, [t[d.ip.AUDIENCE]]);
    return [
        [f[3 * !!p], f[1], b[2]],
        [m[3 * !!p], m[1], A[2]]
    ]
}