/** chunk id: 82821, original params: e,t,r (module,exports,require) **/
r.d(t, {
    H: () => s
}), r(927092), r(212978), r(201528), r(393431), r(752391), r(532706), r(42231), r(232424), r(757074), r(949626), r(767709), r(65162);
var n = r(64700),
    l = r(311907),
    u = r(149597),
    i = r(787392);

function s(e) {
    let {
        userId: t,
        keyToOmit: r
    } = e, s = n.useMemo(() => {
        if (null == r) return null;
        let e = new Uint8Array(r);
        return (0, u.uo)(e)
    }, [r]);
    return (0, l.bG)([i.A], () => {
        let e = i.A.getUserVerifiedKeys(t);
        return null == e ? 0 : Object.keys(e).filter(e => e !== s).length
    }, [s, t])
}