/** chunk id: 617514, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(311907),
    l = n(554146),
    a = n(397927),
    r = n(793574),
    o = n(932001),
    d = n(657331),
    c = n(961350),
    u = n(128450),
    _ = n(212168),
    g = n(49999),
    m = n(518477),
    A = n(985018),
    h = n(133788);
let p = () => {
    let [e, t] = (0, o.kn)([l.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]), n = e === l.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, p = (0, s.bG)([c.default], () => c.default.getId());
    return (0, i.jsx)(u.A, {
        title: A.intl.string(A.t.Jzj9q4),
        description: A.intl.string(A.t.lfF1Sp),
        titleIcon: n ? (0, i.jsx)(a.LpS, {
            className: h.A,
            text: A.intl.string(A.t.y2b7CA)
        }) : null,
        borderType: _.i.LIMITED,
        showBorder: n,
        hasBackground: n,
        children: (0, i.jsx)(a.Button, {
            text: A.intl.string(A.t.Geikwq),
            onClick: () => {
                n && t(g.i.TAKE_ACTION), (0, d.openUserProfileModal)({
                    userId: p,
                    sourceAnalyticsLocations: [r.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: m.RP.WIDGETS
                })
            },
            size: "sm"
        })
    })
}