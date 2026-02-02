/** chunk id: 46537, original params: e,t,r (module,exports,require) **/
r.d(t, {
    b: () => f,
    u: () => h
}), r(896048);
var n = r(64700),
    i = r(311907),
    l = r(576030),
    s = r(287809),
    a = r(403362),
    u = r(427262),
    o = r(594832),
    c = r(652215),
    d = r(985018);

function f(e, t) {
    return n.useMemo(() => {
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
            n = u.Ay.getName(t),
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
            }(r);
        return i || s ? r.map(e => !i && s ? {
            title: e.source === o.uS.WISHLIST ? d.intl.formatToPlainString(d.t.p3RmJF, {
                username: n
            }) : d.intl.string(d.t.Ig6VDH),
            renderIcon: e.productLine !== c.EZt.COLLECTIBLES ? e.renderIcon : void 0,
            shouldShow: !0
        } : i && !s ? {
            title: e.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
            renderIcon: e.renderIcon,
            shouldShow: !0
        } : {
            title: e.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
            body: e.source === o.uS.WISHLIST ? d.intl.formatToPlainString(d.t.p3RmJF, {
                username: n
            }) : d.intl.string(d.t.Ig6VDH),
            renderIcon: e.renderIcon,
            shouldShow: !0
        }) : r.map(() => ({
            shouldShow: !1
        }))
    }, [e, t])
}

function h(e, t) {
    let r = (0, i.yK)([s.default], () => e.map(e => s.default.getUser(e.gifterUserId)).filter(a.Vq), [e]),
        o = n.useMemo(() => r.reduce((e, t) => (e[t.id] = t, e), {}), [r]);
    return n.useMemo(() => {
        let r = new Set(e.map(e => e.skuProductLine)).size > 1;
        return e.map(e => {
            let n = t && e.isOwned && null != e.gifterUserId && null != o[e.gifterUserId],
                i = null != e.gifterUserId && null != o[e.gifterUserId] ? u.Ay.getName(o[e.gifterUserId]) : null;
            return r || n ? {
                title: n ? d.intl.formatToPlainString(d.t.TL4ktE, {
                    username: i
                }) : e.skuProductLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? d.intl.string(d.t["4yiU7x"]) : d.intl.string(d.t.HFhcqh),
                body: n ? e.skuName : void 0,
                renderIcon: n ? l.uq : e.skuProductLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? l.GM : void 0,
                shouldShow: !0
            } : {
                shouldShow: !1
            }
        })
    }, [e, t, o])
}