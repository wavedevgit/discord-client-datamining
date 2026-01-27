/** Chunk was on 64850 **/
/** chunk id: 168393, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    SubscriptionDetailsModal: () => f
}), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(885996),
    s = n(423090),
    o = n(397927),
    a = n(272859),
    c = n(955440),
    d = n(3432),
    u = n(185438),
    x = n(371794),
    p = n(998218),
    m = n(550732),
    v = n(376374),
    _ = n(86889);

function f(e) {
    var t, n;
    let {
        appId: f,
        subscriptionType: j,
        onClose: h,
        skuId: b,
        guildId: g,
        transitionState: y,
        onHeaderTitleClick: S
    } = e, {
        data: T
    } = (0, c.A)(b), E = null == T ? void 0 : T[0], {
        data: I
    } = (0, a.d)(b), O = r.useMemo(() => {
        var e;
        return (null == I ? void 0 : I.thumbnail) != null && null != (e = p.A.toURLSafe((0, x.YE)(f, I.thumbnail, 256))) ? e : void 0
    }, [f, null == I ? void 0 : I.thumbnail]), A = r.useMemo(() => {
        let e = null == I ? void 0 : I.benefits;
        if (null != e && 0 !== e.length) return e.map(e => ({
            id: e.id,
            title: e.name,
            description: e.description,
            icon: (0, d.N)(f, e.icon)
        }))
    }, [f, null == I ? void 0 : I.benefits]), {
        openModal: R,
        subscriptionPurchaseButtonState: N
    } = (0, u.A)({
        skuId: b,
        initialSubscribeForGuild: null != g ? g : void 0
    });
    return null == I ? null : (0, l.jsx)(m.C, {
        appId: f,
        skuId: b,
        transitionState: y,
        onHeaderTitleClick: null != S ? S : h,
        onClose: h,
        footer: (0, l.jsx)(v.rc, {
            onClick: R,
            appId: f,
            subscriptionType: j,
            skuId: b,
            subscriptionPlan: E,
            state: N
        }),
        children: (0, l.jsx)(_.D, {
            appId: f,
            skuId: b,
            benefits: null != A ? A.map(e => (0, l.jsx)(i.FY, {
                header: e.title,
                icon: e.icon,
                description: e.description
            }, e.id)) : void 0,
            description: null != (t = I.description) ? t : void 0,
            imgSrc: O,
            title: null != (n = null == E ? void 0 : E.name) ? n : I.summary,
            tag: (0, l.jsx)(s.M, {
                type: j
            }),
            FallbackIcon: o.bhD
        })
    })
}