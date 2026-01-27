/** Chunk was on web.js **/
/** chunk id: 294902, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(685073),
    o = n(31432),
    s = n(810396),
    l = n(442228),
    c = n(192867),
    u = n(696451),
    d = n(351906),
    f = n(385612),
    p = n(996988),
    _ = n(183959);

function h(e) {
    let {
        user: t,
        displayProfile: n,
        guild: h,
        pendingAvatar: m,
        pendingNickname: g,
        pendingGlobalName: E,
        pendingBio: y,
        pendingPronouns: b,
        pendingLegacyUsernameDisabled: O,
        pendingBadges: v,
        pendingDisplayNameStyles: A,
        pendingPrimaryGuildId: I,
        isTryItOut: S,
        hideBioSection: T,
        shouldOpenBadgeTooltip: C
    } = e, N = (0, i.bG)([u.Ay], () => null == h ? null : u.Ay.getMember(h.id, t.id)), w = (0, i.bG)([d.A], () => d.A.hidePersonalInformation), R = null == n ? void 0 : n.getPreviewBio(y), P = null != b ? b : null == n ? void 0 : n.pronouns, D = (0, f.eh)({
        pendingNickname: g,
        pendingGlobalName: E,
        user: t,
        guildMember: N
    }), L = (0, a.gS)(I), x = () => {
        if (null != N && null !== m && (null != N.avatar || null != m)) return (0, r.jsx)(c.A, {
            user: t,
            nickname: D
        })
    };
    return (0, r.jsxs)("div", {
        className: _.rf,
        inert: !0,
        children: [(0, r.jsx)(s.A, {
            user: t,
            guildId: null == h ? void 0 : h.id,
            usernameIcon: x(),
            nickname: D,
            pendingDisplayNameStyles: A,
            pronouns: P,
            primaryGuild: L,
            isTryItOut: S,
            tags: (0, r.jsx)(o.A, {
                displayProfile: n,
                themeType: p.d.POPOUT,
                pendingLegacyUsernameDisabled: O,
                pendingBadges: v,
                shouldOpenBadgeTooltip: C
            })
        }), !T && null != R && "" !== R && (0, r.jsx)(l.A, {
            user: t,
            bio: R,
            hidePersonalInformation: w,
            viewFullBioDisabled: !0
        })]
    })
}