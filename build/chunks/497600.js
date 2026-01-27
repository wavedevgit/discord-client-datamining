/** Chunk was on 91042 **/
/** chunk id: 497600, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(688810),
    a = n(612630),
    o = n(657331),
    s = n(961350),
    d = n(351906),
    u = n(652215),
    c = n(518477),
    A = n(985018);

function b(e) {
    let {
        user: t,
        guildId: n,
        channelId: b,
        context: g
    } = e, {
        id: f
    } = t, {
        loading: m,
        note: p
    } = (0, a.A)(f), O = !m && null != p && p.length > 0, y = g === u.BRT.POPOUT || g === u.BRT.OVERLAY, {
        analyticsLocations: v
    } = (0, r.Ay)();
    return f === s.default.getId() || d.A.hidePersonalInformation || y ? null : (0, l.jsx)(i.Drp, {
        id: "note",
        label: m ? A.intl.string(A.t["WLKx/9"]) : O ? A.intl.string(A.t.sHHsOM) : A.intl.string(A.t.Dglxrf),
        subtext: A.intl.string(A.t.r1BOdd),
        action: () => {
            (0, o.openUserProfileModal)({
                userId: t.id,
                tabSection: c.RP.USER_INFO,
                scrollTarget: c.bk.NOTE,
                guildId: n,
                channelId: b,
                sourceAnalyticsLocations: v,
                appContext: g
            })
        }
    })
}