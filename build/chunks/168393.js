/** chunk id: 168393 params = (module,exports,require) **/
l.r(e), l.d(e, {
    SubscriptionDetailsModal: () => j
});
var s = l(627968),
    n = l(64700),
    i = l(885996),
    r = l(423090),
    a = l(397927),
    o = l(272859),
    c = l(955440),
    d = l(3432),
    u = l(185438),
    x = l(371794),
    _ = l(998218),
    m = l(550732),
    h = l(376374),
    p = l(86889);

function j(t) {
    let {
        appId: e,
        subscriptionType: l,
        onClose: j,
        skuId: v,
        guildId: S,
        transitionState: T,
        onHeaderTitleClick: A
    } = t, {
        data: E
    } = (0, c.A)(v), f = E?.[0], {
        data: g
    } = (0, o.d)(v), I = n.useMemo(() => g?.thumbnail != null ? _.A.toURLSafe((0, x.YE)(e, g.thumbnail, 256)) ?? void 0 : void 0, [e, g?.thumbnail]), C = n.useMemo(() => {
        let t = g?.benefits;
        if (null != t && 0 !== t.length) return t.map(t => ({
            id: t.id,
            title: t.name,
            description: t.description,
            icon: (0, d.N)(e, t.icon)
        }))
    }, [e, g?.benefits]), {
        openModal: R,
        subscriptionPurchaseButtonState: b
    } = (0, u.A)({
        skuId: v,
        initialSubscribeForGuild: S ?? void 0
    });
    return null == g ? null : (0, s.jsx)(m.C, {
        appId: e,
        skuId: v,
        transitionState: T,
        onHeaderTitleClick: A ?? j,
        onClose: j,
        footer: (0, s.jsx)(h.rc, {
            onClick: R,
            appId: e,
            subscriptionType: l,
            skuId: v,
            subscriptionPlan: f,
            state: b
        }),
        children: (0, s.jsx)(p.D, {
            appId: e,
            skuId: v,
            benefits: null != C ? C.map(t => (0, s.jsx)(i.FY, {
                header: t.title,
                icon: t.icon,
                description: t.description
            }, t.id)) : void 0,
            description: g.description ?? void 0,
            imgSrc: I,
            title: f?.name ?? g.summary,
            tag: (0, s.jsx)(r.M, {
                type: l
            }),
            FallbackIcon: a.bhD
        })
    })
}