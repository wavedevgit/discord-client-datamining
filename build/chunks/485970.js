/** Chunk was on 1113 **/
/** chunk id: 485970, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(71393),
    s = n(403362),
    a = n(645619),
    o = n(864310),
    c = n(568065);

function u(e, t) {
    var n;
    let u = (0, l.bG)([i.A], () => i.A.getGuild(e)),
        d = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        {
            spent: h
        } = (0, o.A)(e),
        p = r.useMemo(() => {
            if (null == t || t.type !== c.o9.LEVEL || null == d) return [];
            let e = c.y7[t.skuId];
            return null == e ? [] : Object.entries(c.wr).filter(t => {
                let [n, r] = t;
                return r === e && null != d.unlockedPowerups[n]
            }).map(e => {
                let [t] = e;
                return d.allPowerups[t]
            }).filter(s.Vq)
        }, [t, d]),
        g = null == p ? void 0 : p.reduce((e, t) => e + t.cost, 0);
    return Math.max((null != (n = null == u ? void 0 : u.premiumSubscriberCount) ? n : 0) - h + (null != g ? g : 0), 0)
}