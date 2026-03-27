/** chunk id: 470934 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(311907),
    l = n(985018),
    s = n(645619),
    o = n(998418),
    a = n(568065),
    d = n(333354);

function u(e, t, n) {
    let u = (0, i.bG)([s.A], () => s.A.getStateForGuild(e)),
        c = (0, o.Ay)(e, t);
    return r.useMemo(() => {
        if (null == u || c.type === a.b_.LEVEL_ACTIVATED) return {
            disabled: !0,
            reason: void 0
        };
        let {
            allPowerups: e,
            unlockedPowerups: r
        } = u, i = n ? Object.values(r).find(e => e.sku?.dependent_sku_id === t.skuId)?.sku_id : t.dependencies.find(e => null == r[e]);
        return {
            disabled: null != i,
            reason: null != i && null != e[i] ? l.intl.formatToPlainString(n ? d.default.vCEBiS : d.default["1B8AZr"], {
                perk: e[i]?.title
            }) : void 0
        }
    }, [u, t.skuId, t.dependencies, n, c.type])
}