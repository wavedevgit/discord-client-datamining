/** chunk id: 46537, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Qc: () => h,
    b7: () => S,
    bc: () => I
});
var i = r(64700),
    l = r(311907),
    s = r(576030),
    n = r(287809),
    u = r(403362),
    a = r(427262),
    d = r(594832),
    o = r(652215),
    c = r(985018);

function h(e) {
    return null != e.title && null == e.body && null == e.renderIcon
}

function I(e, t) {
    return i.useMemo(() => {
        let r = e.map(e => {
                let {
                    item: t,
                    source: r
                } = e;
                return {
                    productLine: t.skuProductLine,
                    source: r,
                    renderIcon: s.GM
                }
            }),
            i = a.Ay.getName(t),
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
            }(r);
        return l || n ? r.map(e => !l && n ? {
            title: e.source === d.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: i
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
                username: i
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.renderIcon,
            shouldShow: !0
        }) : r.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function S(e, t) {
    let r = (0, l.yK)([n.default], () => e.map(e => n.default.getUser(e.gifterUserId)).filter(u.Vq), [e]),
        d = i.useMemo(() => r.reduce((e, t) => (e[t.id] = t, e), {}), [r]);
    return i.useMemo(() => {
        let r = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let i = t && e.isOwned && null != e.gifterUserId && null != d[e.gifterUserId],
                l = null != e.gifterUserId && null != d[e.gifterUserId] ? a.Ay.getName(d[e.gifterUserId]) : null;
            return r || i ? {
                title: i ? c.intl.formatToPlainString(c.t.TL4ktE, {
                    username: l
                }) : e.skuProductLine === o.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
                body: i ? e.skuName : void 0,
                renderIcon: i ? s.uq : e.skuProductLine === o.EZt.SOCIAL_LAYER_GAME_ITEM ? s.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, d])
}