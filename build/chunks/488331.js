/** Chunk was on 92917 **/
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
    } = (0, l.Ay)(i.A.ACTIVITY_BOOKMARK), [h] = (0, o.A)([t]), _ = null != h && (0, a.Ag)(h), {
        data: b,
        error: A
    } = (0, c.K)(null == h ? void 0 : h.id, m);
    return null == h || !1 === _ ? null : null != m && null == A && null != b ? (0, r.jsx)(l.f5, {
        value: g,
        children: (0, r.jsx)(u.W, {
            application: h,
            customId: n,
            customLink: b,
            referrerId: p,
            message: f
        })
    }) : (0, r.jsx)(l.f5, {
        value: g,
        children: (0, r.jsx)(s.W, {
            app: h,
            linkType: d.J.ACTIVITY,
            activityCustomId: n,
            activityReferrerId: p,
            message: f
        })
    })
}