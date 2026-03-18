/** chunk id: 46537 params = (module,exports,require) **/
r.d(t, {
    Qc: () => I,
    b7: () => m,
    bc: () => h
});
var i = r(64700),
    n = r(311907),
    l = r(576030),
    s = r(287809),
    u = r(403362),
    o = r(427262),
    d = r(594832),
    c = r(652215),
    a = r(985018);

function I(e) {
    return null != e.title && null == e.body && null == e.renderIcon
}

function h(e, t) {
    return i.useMemo(() => {
        let r = e.map(e => {
                let {
                    item: t,
                    source: r
                } = e;
                return {
                    productLine: t.skuProductLine,
                    source: r,
                    renderIcon: l.GM
                }
            }),
            i = o.Ay.getName(t),
            {
                hasMultipleTypes: n,
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
            }(r);
        return n || s ? r.map(e => !n && s ? {
            title: e.source === d.uS.WISHLIST ? a.intl.formatToPlainString(a.t.p3RmJF, {
                username: i
            }) : a.intl.string(a.t.Ig6VDH),
            renderIcon: e.productLine !== c.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : n && !s ? {
            title: e.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? a.intl.string(a.t["4yiU7x"]) : a.intl.string(a.t.HFhcqh),
            renderIcon: e.renderIcon,
            shouldShow: !0
        } : {
            title: e.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? a.intl.string(a.t["4yiU7x"]) : a.intl.string(a.t.HFhcqh),
            body: e.source === d.uS.WISHLIST ? a.intl.formatToPlainString(a.t.p3RmJF, {
                username: i
            }) : a.intl.string(a.t.Ig6VDH),
            renderIcon: e.renderIcon,
            shouldShow: !0
        }) : r.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function m(e, t) {
    let r = (0, n.yK)([s.default], () => e.map(e => s.default.getUser(e.gifterUserId)).filter(u.Vq), [e]),
        d = i.useMemo(() => r.reduce((e, t) => (e[t.id] = t, e), {}), [r]);
    return i.useMemo(() => {
        let r = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let i = t && e.isOwned && null != e.gifterUserId && null != d[e.gifterUserId],
                n = null != e.gifterUserId && null != d[e.gifterUserId] ? o.Ay.getName(d[e.gifterUserId]) : null;
            return r || i ? {
                title: i ? a.intl.formatToPlainString(a.t.TL4ktE, {
                    username: n
                }) : e.skuProductLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? a.intl.string(a.t["4yiU7x"]) : a.intl.string(a.t.HFhcqh),
                body: i ? e.skuName : void 0,
                renderIcon: i ? l.uq : e.skuProductLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? l.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, d])
}