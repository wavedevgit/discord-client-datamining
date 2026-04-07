/** chunk id: 302005 params = (module,exports,require) **/
n.d(t, {
    z: () => A
});
var l = n(311907),
    s = n(554146),
    i = n(192308),
    r = n(826673),
    a = n(932001),
    o = n(309010),
    u = n(93055),
    c = n(652215);
let d = new Set([c.rbe.DM, c.rbe.GROUP_DM, c.rbe.GUILD_TEXT, c.rbe.GUILD_ANNOUNCEMENT, c.rbe.GUILD_FORUM]);

function A(e) {
    let {
        location: t,
        isChannelSelected: n,
        isTargetInViewport: c = !0,
        channelType: A,
        isPopoverAllowed: m = !0
    } = e, E = (0, r.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO), {
        isExperimentEnabled: f
    } = (0, u.TW)(t), _ = (0, l.bG)([o.A], () => null != o.A.getVoiceChannelId()), N = (0, i.useHasAnyModalOpen)(), T = f && c && n && d.has(A) && m && !_ && !N, [p, g] = (0, a.kn)(T && E ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return {
        showMenuItemPopover: p === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        markMenuItemPopoverAsDismissed: g
    }
}