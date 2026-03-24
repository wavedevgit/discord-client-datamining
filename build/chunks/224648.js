/** chunk id: 224648 params = (module,exports,require) **/
"use strict";
n.d(t, {
    RG: () => A,
    Uo: () => h
}), n(321073);
var i = n(64700),
    s = n(735438),
    l = n(311907),
    a = n(59520),
    r = n(313961),
    o = n(996439),
    c = n(63995),
    d = n(113783),
    u = n(69407);

function h(e) {
    let t = (0, d.zy)(e, u.ip.AUDIENCE),
        [n, s] = i.useState(!1);
    return i.useEffect(() => {
        t > 100 ? s(!0) : t < 75 && s(!1)
    }, [t]), 5e3 * !!n
}

function A(e, t, n) {
    let d, h, A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        m = (d = (0, l.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D), h = (0, l.bG)([r.A], () => r.A.getSelectedParticipantId(e), [e]), i.useMemo(() => {
            let n = [],
                i = [],
                l = -1,
                a = [];
            if (A)
                for (let t of c.A.getMutableParticipants(e, u.ip.SPEAKER))
                    if (t.type === u.wY.STREAM) t.id !== h && a.push(t), l++;
                    else break;
            let r = (e, t, a) => {
                    let r = a ? e.filter((e, t) => e.id !== h && t > l) : e,
                        o = (0, s.chunk)(r, t);
                    i.push(o), n.push(o.length)
                },
                o = null != h ? c.A.getParticipant(e, h) : null;
            return o?.speaker ? r([o], 1, !1) : r([], 1, !1), [u.ip.SPEAKER, u.ip.AUDIENCE].forEach(e => {
                r(c.A.getMutableParticipants(d[0], e), t[e], e === u.ip.SPEAKER)
            }), r(a, 1, !1), [n, i]
        }, [d, t, h, A, e])),
        [p, _] = m,
        [g, f] = (0, a.J)(m, n, [t[u.ip.AUDIENCE]]);
    return [
        [p[3 * !!A], p[1], g[2]],
        [_[3 * !!A], _[1], f[2]]
    ]
}