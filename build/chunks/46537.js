/** chunk id: 46537 params = (module,exports,require) **/
n.d(t, {
    Qc: () => m,
    b7: () => h,
    bc: () => I
});
var s = n(64700),
    r = n(311907),
    i = n(576030),
    l = n(287809),
    o = n(403362),
    u = n(427262),
    d = n(594832),
    a = n(652215),
    c = n(985018);

function m(e) {
    return null != e.title && null == e.body && null == e.renderIcon
}

function I(e, t) {
    return s.useMemo(() => {
        let n = e.map(e => {
                let {
                    item: t,
                    source: n
                } = e;
                return {
                    productLine: t.skuProductLine,
                    source: n,
                    renderIcon: i.GM
                }
            }),
            s = u.Ay.getName(t),
            {
                hasMultipleTypes: r,
                hasMultipleSources: l
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
            }(n);
        return r || l ? n.map(e => !r && l ? {
            title: e.source === d.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: s
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.productLine !== a.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : r && !l ? {
            title: e.productLine === a.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            renderIcon: e.renderIcon,
            shouldShow: !0
        } : {
            title: e.productLine === a.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            body: e.source === d.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: s
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.renderIcon,
            shouldShow: !0
        }) : n.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function h(e, t) {
    let n = (0, r.yK)([l.default], () => e.map(e => l.default.getUser(e.gifterUserId)).filter(o.Vq), [e]),
        d = s.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
    return s.useMemo(() => {
        let n = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let s = t && e.isOwned && null != e.gifterUserId && null != d[e.gifterUserId],
                r = null != e.gifterUserId && null != d[e.gifterUserId] ? u.Ay.getName(d[e.gifterUserId]) : null;
            return n || s ? {
                title: s ? c.intl.formatToPlainString(c.t.TL4ktE, {
                    username: r
                }) : e.skuProductLine === a.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
                body: s ? e.skuName : void 0,
                renderIcon: s ? i.uq : e.skuProductLine === a.EZt.SOCIAL_LAYER_GAME_ITEM ? i.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, d])
}