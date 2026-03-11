/** chunk id: 497600 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    r = n(612630),
    d = n(657331),
    o = n(961350),
    s = n(351906),
    u = n(652215),
    c = n(518477),
    A = n(985018);

function g(e) {
    let {
        user: t,
        guildId: n,
        channelId: g,
        context: m
    } = e, {
        id: b
    } = t, {
        loading: f,
        note: E
    } = (0, r.A)(b), x = !f && null != E && E.length > 0, h = m === u.BRT.POPOUT || m === u.BRT.OVERLAY, {
        analyticsLocations: C
    } = (0, a.Ay)();
    return b === o.default.getId() || s.A.hidePersonalInformation || h ? null : (0, l.jsx)(i.Drp, {
        id: "note",
        label: f ? A.intl.string(A.t["WLKx/9"]) : x ? A.intl.string(A.t.sHHsOM) : A.intl.string(A.t.Dglxrf),
        subtext: A.intl.string(A.t.r1BOdd),
        action: () => {
            (0, d.openUserProfileModal)({
                userId: t.id,
                tabSection: c.RP.USER_INFO,
                scrollTarget: c.bk.NOTE,
                guildId: n,
                channelId: g,
                sourceAnalyticsLocations: C,
                appContext: m
            })
        }
    })
}