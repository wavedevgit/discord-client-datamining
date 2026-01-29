/** Chunk was on 2827 **/
/** chunk id: 617514, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    i = n(311907),
    l = n(554146),
    s = n(397927),
    a = n(793574),
    o = n(379848),
    c = n(657331),
    d = n(961350),
    u = n(128450),
    _ = n(212168),
    p = n(49999),
    m = n(518477),
    g = n(985018),
    A = n(133788);
let f = () => {
    let [e, t] = (0, o.kn)([l.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]), n = e === l.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, f = (0, i.bG)([d.default], () => d.default.getId());
    return (0, r.jsx)(u.A, {
        title: g.intl.string(g.t.Jzj9q4),
        description: g.intl.string(g.t.lfF1Sp),
        titleIcon: n ? (0, r.jsx)(s.LpS, {
            className: A.A,
            text: g.intl.string(g.t.y2b7CA)
        }) : null,
        borderType: _.i.LIMITED,
        showBorder: n,
        hasBackground: n,
        children: (0, r.jsx)(s.Button, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                n && t(p.i.TAKE_ACTION), (0, c.openUserProfileModal)({
                    userId: f,
                    sourceAnalyticsLocations: [a.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: m.RP.WIDGETS
                })
            },
            size: "sm"
        })
    })
}