/** chunk id: 570622 params = (module,exports,require) **/
n.d(t, {
    z: () => d
});
var s = n(311907),
    l = n(554146),
    a = n(826673),
    i = n(932001),
    r = n(309010),
    o = n(93055),
    u = n(652215);
let c = new Set([u.rbe.DM, u.rbe.GROUP_DM, u.rbe.GUILD_TEXT, u.rbe.GUILD_ANNOUNCEMENT, u.rbe.GUILD_FORUM]);

function d(e) {
    let {
        location: t,
        isChannelSelected: n,
        isTargetInViewport: u = !0,
        channelType: d,
        isPopoverAllowed: m = !0
    } = e, A = (0, a.JZ)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO), {
        isExperimentEnabled: E
    } = (0, o.TW)(t), f = (0, s.bG)([r.A], () => null != r.A.getVoiceChannelId()), p = E && u && n && c.has(d) && m && !f, [h, x] = (0, i.kn)(p && A ? [l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return {
        showMenuItemPopover: h === l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        markMenuItemPopoverAsDismissed: x
    }
}