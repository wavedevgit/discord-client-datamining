/** Chunk was on 78528 **/
/** chunk id: 470934, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    l = n(311907),
    i = n(985018),
    s = n(645619),
    a = n(998418),
    o = n(568065),
    c = n(333354);

function u(e, t, n) {
    let u = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
        d = (0, a.Ay)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === o.b_.LEVEL_ACTIVATED) return {
            disabled: !0,
            reason: void 0
        };
        let {
            allPowerups: l,
            unlockedPowerups: s
        } = u, a = n ? null == (e = Object.values(s).find(e => {
            var n;
            return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId
        })) ? void 0 : e.sku_id : t.dependencies.find(e => null == s[e]);
        return {
            disabled: null != a,
            reason: null != a && null != l[a] ? i.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
                perk: null == (r = l[a]) ? void 0 : r.title
            }) : void 0
        }
    }, [u, t.skuId, t.dependencies, n, d.type])
}