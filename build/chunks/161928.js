/** Chunk was on 86142 **/
/** chunk id: 161928, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
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
    m = n(97352),
    f = n(67480),
    _ = n(615396),
    A = n(652215),
    x = n(788868),
    E = n(985018),
    v = n(440526),
    j = n(20976),
    y = n(473169);
let b = a.Ay.connectStores([f.A, c.A, m.A, g.default], e => {
    let {
        giftCode: t
    } = e, n = f.A.get(t.skuId), {
        subscriptionPlanId: r
    } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.c9)(r) : null,
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
    } = e, m = null == s ? E.intl.string(E.t.lTGZAl) : E.intl.formatToPlainString(E.t.TjWdPc, {
        username: s.username
    }), f = a.name;
    return null != g && (f = E.intl.formatToPlainString(g.interval === x.WT.MONTH ? E.t.CTpcCZ : E.t["rgPWG/"], {
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
            className: y.SX
        }), null != t ? (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(u.tK, {
                children: E.intl.string(E.t.mDFGFj)
            }), (0, r.jsx)(u.hE, {
                children: t
            })]
        }) : (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(u.tK, {
                children: m
            }), (0, r.jsxs)(u.hE, {
                className: l()(y.Ot, j.tR),
                children: [a.productLine !== A.EZt.COLLECTIBLES && (0, r.jsx)(d.A, {
                    size: d.M.MEDIUM,
                    className: v.I,
                    game: c,
                    skuId: a.id
                }), f]
            })]
        })]
    })
})