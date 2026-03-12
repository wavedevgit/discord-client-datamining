/** chunk id: 470934 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(64700),
    s = n(311907),
    l = n(985018),
    a = n(645619),
    r = n(998418),
    o = n(568065),
    c = n(136708);

function d(e, t, n) {
    let d = (0, s.bG)([a.A], () => a.A.getStateForGuild(e)),
        u = (0, r.Ay)(e, t);
    return i.useMemo(() => {
        if (null == d || u.type === o.b_.LEVEL_ACTIVATED) return {
            disabled: !0,
            reason: void 0
        };
        let {
            allPowerups: e,
            unlockedPowerups: i
        } = d, s = n ? Object.values(i).find(e => e.sku?.dependent_sku_id === t.skuId)?.sku_id : t.dependencies.find(e => null == i[e]);
        return {
            disabled: null != s,
            reason: null != s && null != e[s] ? l.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
                perk: e[s]?.title
            }) : void 0
        }
    }, [d, t.skuId, t.dependencies, n, u.type])
}