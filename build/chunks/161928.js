/** Chunk was on 86142 **/
/** chunk id: 161928, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(587895),
    u = n(854378),
    d = n(769015),
    h = n(242874),
    p = n(75825),
    g = n(287809),
    f = n(97352),
    _ = n(67480),
    m = n(615396),
    A = n(652215),
    x = n(788868),
    E = n(985018),
    v = n(440526),
    y = n(20976),
    b = n(473169);
let j = a.Ay.connectStores([_.A, c.A, f.A, g.default], e => {
    let {
        giftCode: t
    } = e, n = _.A.get(t.skuId), {
        subscriptionPlanId: r
    } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, m.c9)(r) : null,
        application: c.A.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId)
    }
})(e => {
    let {
        error: t,
        giftCode: n,
        gifter: s,
        sku: a,
        application: c,
        subscriptionPlan: g
    } = e, f = null == s ? E.intl.string(E.t.lTGZAl) : E.intl.formatToPlainString(E.t.TjWdPc, {
        username: s.username
    }), _ = a.name;
    return null != g && (_ = E.intl.formatToPlainString(g.interval === x.WT.MONTH ? E.t.CTpcCZ : E.t["rgPWG/"], {
        skuName: a.name,
        intervalCount: g.intervalCount
    })), (0, r.jsxs)(i.Fragment, {
        children: [null != n.giftStyle ? (0, r.jsx)(p.A, {
            defaultAnimationState: h.oA.LOOP,
            giftStyle: n.giftStyle,
            className: v.e
        }) : (0, r.jsx)(u.eu, {
            src: null != s ? s.getAvatarURL(void 0, 100) : null,
            size: o._3J.DEPRECATED_SIZE_100,
            className: b.SX
        }), null != t ? (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(u.tK, {
                children: E.intl.string(E.t.mDFGFj)
            }), (0, r.jsx)(u.hE, {
                children: t
            })]
        }) : (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(u.tK, {
                children: f
            }), (0, r.jsxs)(u.hE, {
                className: l()(b.Ot, y.tR),
                children: [a.productLine !== A.EZt.COLLECTIBLES && (0, r.jsx)(d.A, {
                    size: d.M.MEDIUM,
                    className: v.I,
                    game: c,
                    skuId: a.id
                }), _]
            })]
        })]
    })
})