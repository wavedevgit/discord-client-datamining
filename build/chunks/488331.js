/** chunk id: 488331 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(793574),
    l = n(688810),
    a = n(735991),
    s = n(485724),
    o = n(429913),
    d = n(246097),
    c = n(96440),
    u = n(768349);

function _(e) {
    let {
        applicationId: t,
        customId: n,
        referrerId: _,
        linkId: m,
        message: h
    } = e, {
        analyticsLocations: p
    } = (0, l.Ay)(r.A.ACTIVITY_BOOKMARK), [g] = (0, o.A)([t]), A = null != g && (0, a.Ag)(g), {
        data: x,
        error: f
    } = (0, d.K)(g?.id, m);
    return null == g || !1 === A ? null : null != m && null == f && null != x ? (0, i.jsx)(l.f5, {
        value: p,
        children: (0, i.jsx)(c.W, {
            application: g,
            customId: n,
            customLink: x,
            referrerId: _,
            message: h
        })
    }) : (0, i.jsx)(l.f5, {
        value: p,
        children: (0, i.jsx)(s.W, {
            app: g,
            linkType: u.J.ACTIVITY,
            activityCustomId: n,
            activityReferrerId: _,
            message: h
        })
    })
}