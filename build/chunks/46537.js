/** chunk id: 46537, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Qc: () => I,
    b7: () => S,
    bc: () => h
});
var r = i(64700),
    l = i(311907),
    s = i(576030),
    n = i(287809),
    u = i(403362),
    a = i(427262),
    d = i(594832),
    o = i(652215),
    c = i(985018);

function I(e) {
    return null != e.title && null == e.body && null == e.renderIcon
}

function h(e, t) {
    return r.useMemo(() => {
        let i = e.map(e => {
                let {
                    item: t,
                    source: i
                } = e;
                return {
                    productLine: t.skuProductLine,
                    source: i,
                    renderIcon: s.GM
                }
            }),
            r = a.Ay.getName(t),
            {
                hasMultipleTypes: l,
                hasMultipleSources: n
            } = function(e) {
                if (0 === e.length) return {
                    hasMultipleTypes: !1,
                    hasMultipleSources: !1
                };
                let t = e[0];
                return {
                    hasMultipleTypes: e.some(e => e.productLine !== t.productLine),
                    hasMultipleSources: e.some(e => e.source !== t.source)
                }
            }(i);
        return l || n ? i.map(e => !l && n ? {
            title: e.source === d.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: r
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.productLine !== o.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : l && !n ? {
            title: e.productLine === o.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            renderIcon: e.renderIcon,
            shouldShow: !0
        } : {
            title: e.productLine === o.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            body: e.source === d.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: r
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.renderIcon,
            shouldShow: !0
        }) : i.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function S(e, t) {
    let i = (0, l.yK)([n.default], () => e.map(e => n.default.getUser(e.gifterUserId)).filter(u.Vq), [e]),
        d = r.useMemo(() => i.reduce((e, t) => (e[t.id] = t, e), {}), [i]);
    return r.useMemo(() => {
        let i = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let r = t && e.isOwned && null != e.gifterUserId && null != d[e.gifterUserId],
                l = null != e.gifterUserId && null != d[e.gifterUserId] ? a.Ay.getName(d[e.gifterUserId]) : null;
            return i || r ? {
                title: r ? c.intl.formatToPlainString(c.t.TL4ktE, {
                    username: l
                }) : e.skuProductLine === o.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
                body: r ? e.skuName : void 0,
                renderIcon: r ? s.uq : e.skuProductLine === o.EZt.SOCIAL_LAYER_GAME_ITEM ? s.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, d])
}