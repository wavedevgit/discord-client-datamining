/** Chunk was on 44667 **/
/** chunk id: 754333, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Y: () => u,
    r: () => d
}), n(896048), n(638769);
var r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(311907),
    l = n(961350),
    c = n(620733),
    o = n(985018);

function d() {
    let e = (0, a.cf)([c.A], () => c.A.getSessions());
    return r.useMemo(() => {
        let t = [...e],
            n = null,
            r = l.default.getAuthSessionIdHash();
        if (null != r) {
            let e = t.findIndex(e => e.id_hash === r);
            e >= 0 && (n = t.splice(e, 1)[0])
        }
        return t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
            currentSession: n,
            otherSessions: t
        }
    }, [e])
}

function u(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? o.intl.string(o.t.TXCmfL) : s()(e).fromNow()
}