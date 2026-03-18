/** chunk id: 46537 params = (module,exports,require) **/
i.d(t, {
    Qc: () => h,
    b7: () => S,
    bc: () => I
});
var r = i(64700),
    l = i(311907),
    n = i(576030),
    s = i(287809),
    u = i(403362),
    a = i(427262),
    o = i(594832),
    d = i(652215),
    c = i(985018);

function h(e) {
    return null != e.title && null == e.body && null == e.renderIcon
}

function I(e, t) {
    return r.useMemo(() => {
        let i = e.map(e => {
                let {
                    item: t,
                    source: i
                } = e;
                return {
                    productLine: t.skuProductLine,
                    source: i,
                    renderIcon: n.GM
                }
            }),
            r = a.Ay.getName(t),
            {
                hasMultipleTypes: l,
                hasMultipleSources: s
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
        return l || s ? i.map(e => !l && s ? {
            title: e.source === o.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: r
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.productLine !== d.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : l && !s ? {
            title: e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            renderIcon: e.renderIcon,
            shouldShow: !0
        } : {
            title: e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            body: e.source === o.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
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
    let i = (0, l.yK)([s.default], () => e.map(e => s.default.getUser(e.gifterUserId)).filter(u.Vq), [e]),
        o = r.useMemo(() => i.reduce((e, t) => (e[t.id] = t, e), {}), [i]);
    return r.useMemo(() => {
        let i = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let r = t && e.isOwned && null != e.gifterUserId && null != o[e.gifterUserId],
                l = null != e.gifterUserId && null != o[e.gifterUserId] ? a.Ay.getName(o[e.gifterUserId]) : null;
            return i || r ? {
                title: r ? c.intl.formatToPlainString(c.t.TL4ktE, {
                    username: l
                }) : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
                body: r ? e.skuName : void 0,
                renderIcon: r ? n.uq : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? n.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, o])
}