/** chunk id: 488331, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968);
n(64700);
var i = n(793574),
    l = n(688810),
    a = n(735991),
    s = n(485724),
    o = n(429913),
    c = n(246097),
    u = n(96440),
    d = n(768349);

function p(e) {
    let {
        applicationId: t,
        customId: n,
        referrerId: p,
        linkId: m,
        message: f
    } = e, {
        analyticsLocations: g
    } = (0, l.Ay)(i.A.ACTIVITY_BOOKMARK), [_] = (0, o.A)([t]), h = null != _ && (0, a.Ag)(_), {
        data: b,
        error: A
    } = (0, c.K)(null == _ ? void 0 : _.id, m);
    return null == _ || !1 === h ? null : null != m && null == A && null != b ? (0, r.jsx)(l.f5, {
        value: g,
        children: (0, r.jsx)(u.W, {
            application: _,
            customId: n,
            customLink: b,
            referrerId: p,
            message: f
        })
    }) : (0, r.jsx)(l.f5, {
        value: g,
        children: (0, r.jsx)(s.W, {
            app: _,
            linkType: d.J.ACTIVITY,
            activityCustomId: n,
            activityReferrerId: p,
            message: f
        })
    })
}