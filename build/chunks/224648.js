/** chunk id: 224648, original params: e,t,n (module,exports,require) **/
n.d(t, {
    RG: () => h,
    Uo: () => p
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

function p(e) {
    let t = (0, u.zy)(e, d.ip.AUDIENCE),
        [n, l] = r.useState(!1);
    return r.useEffect(() => {
        t > 100 ? l(!0) : t < 75 && l(!1)
    }, [t]), 5e3 * !!n
}

function h(e, t, n) {
    let u, p, h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        g = (u = (0, i.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D), p = (0, i.bG)([a.A], () => a.A.getSelectedParticipantId(e), [e]), r.useMemo(() => {
            let n = [],
                r = [],
                i = -1,
                s = [];
            if (h)
                for (let t of c.A.getMutableParticipants(e, d.ip.SPEAKER))
                    if (t.type === d.wY.STREAM) t.id !== p && s.push(t), i++;
                    else break;
            let a = (e, t, s) => {
                    let a = s ? e.filter((e, t) => e.id !== p && t > i) : e,
                        o = (0, l.chunk)(a, t);
                    r.push(o), n.push(o.length)
                },
                o = null != p ? c.A.getParticipant(e, p) : null;
            return (null == o ? void 0 : o.speaker) ? a([o], 1, !1) : a([], 1, !1), [d.ip.SPEAKER, d.ip.AUDIENCE].forEach(e => {
                a(c.A.getMutableParticipants(u[0], e), t[e], e === d.ip.SPEAKER)
            }), a(s, 1, !1), [n, r]
        }, [u, t, p, h, e])),
        [f, m] = g,
        [b, A] = (0, s.J)(g, n, [t[d.ip.AUDIENCE]]);
    return [
        [f[3 * !!h], f[1], b[2]],
        [m[3 * !!h], m[1], A[2]]
    ]
}