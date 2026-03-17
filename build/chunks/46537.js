/** chunk id: 46537 params = (module,exports,require) **/
n.d(t, {
    Qc: () => h,
    b7: () => m,
    bc: () => I
});
var s = n(64700),
    i = n(311907),
    l = n(576030),
    r = n(287809),
    o = n(403362),
    u = n(427262),
    a = n(594832),
    d = n(652215),
    c = n(985018);

function h(e) {
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
                    renderIcon: l.GM
                }
            }),
            s = u.Ay.getName(t),
            {
                hasMultipleTypes: i,
                hasMultipleSources: r
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
        return i || r ? n.map(e => !i && r ? {
            title: e.source === a.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: s
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.productLine !== d.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : i && !r ? {
            title: e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            renderIcon: e.renderIcon,
            shouldShow: !0
        } : {
            title: e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
            body: e.source === a.uS.WISHLIST ? c.intl.formatToPlainString(c.t.p3RmJF, {
                username: s
            }) : c.intl.string(c.t.Ig6VDH),
            renderIcon: e.renderIcon,
            shouldShow: !0
        }) : n.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function m(e, t) {
    let n = (0, i.yK)([r.default], () => e.map(e => r.default.getUser(e.gifterUserId)).filter(o.Vq), [e]),
        a = s.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
    return s.useMemo(() => {
        let n = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let s = t && e.isOwned && null != e.gifterUserId && null != a[e.gifterUserId],
                i = null != e.gifterUserId && null != a[e.gifterUserId] ? u.Ay.getName(a[e.gifterUserId]) : null;
            return n || s ? {
                title: s ? c.intl.formatToPlainString(c.t.TL4ktE, {
                    username: i
                }) : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? c.intl.string(c.t["4yiU7x"]) : c.intl.string(c.t.HFhcqh),
                body: s ? e.skuName : void 0,
                renderIcon: s ? l.uq : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? l.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, a])
}