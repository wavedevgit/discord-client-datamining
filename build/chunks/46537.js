/** chunk id: 46537, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Qc: () => h,
    b7: () => f,
    bc: () => I
});
var r = l(64700),
    i = l(311907),
    n = l(576030),
    s = l(287809),
    u = l(403362),
    a = l(427262),
    o = l(594832),
    d = l(652215),
    c = l(985018);

function h(e) {
    return null != e.title && null == e.body && null == e.renderIcon
}

function I(e, t) {
    return r.useMemo(() => {
        let l = e.map(e => {
                let {
                    item: t,
                    source: l
                } = e;
                return {
                    productLine: t.skuProductLine,
                    source: l,
                    renderIcon: n.GM
                }
            }),
            r = a.Ay.getName(t),
            {
                hasMultipleTypes: i,
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
            }(l);
        return i || s ? l.map(e => !i && s ? {
            title: e.source === o.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: r
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.productLine !== d.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : i && !s ? {
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
        }) : l.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function f(e, t) {
    let l = (0, i.yK)([s.default], () => e.map(e => s.default.getUser(e.gifterUserId)).filter(u.Vq), [e]),
        o = r.useMemo(() => l.reduce((e, t) => (e[t.id] = t, e), {}), [l]);
    return r.useMemo(() => {
        let l = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let r = t && e.isOwned && null != e.gifterUserId && null != o[e.gifterUserId],
                i = null != e.gifterUserId && null != o[e.gifterUserId] ? a.Ay.getName(o[e.gifterUserId]) : null;
            return l || r ? {
                title: r ? c.intl.formatToPlainString(c.t.TL4ktE, {
                    username: i
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