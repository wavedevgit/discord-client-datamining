/** chunk id: 754333, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Y: () => d,
    r: () => u
}), n(896048), n(638769);
var r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(311907),
    c = n(961350),
    o = n(620733),
    l = n(985018);

function u() {
    let t = (0, a.cf)([o.A], () => o.A.getSessions());
    return r.useMemo(() => {
        let e = [...t],
            n = null,
            r = c.default.getAuthSessionIdHash();
        if (null != r) {
            let t = e.findIndex(t => t.id_hash === r);
            t >= 0 && (n = e.splice(t, 1)[0])
        }
        return e.sort((t, e) => e.approx_last_used_time.valueOf() - t.approx_last_used_time.valueOf()), {
            currentSession: n,
            otherSessions: e
        }
    }, [t])
}

function d(t) {
    return (Date.now() - t.valueOf()) / 1e3 / 60 / 60 < 1 ? l.intl.string(l.t.TXCmfL) : s()(t).fromNow()
}