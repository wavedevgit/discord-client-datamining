/** chunk id: 570622 params = (module,exports,require) **/
n.d(t, {
    z: () => d
});
var l = n(311907),
    s = n(554146),
    i = n(826673),
    a = n(932001),
    r = n(309010),
    u = n(93055),
    o = n(652215);
let c = new Set([o.rbe.DM, o.rbe.GROUP_DM, o.rbe.GUILD_TEXT, o.rbe.GUILD_ANNOUNCEMENT, o.rbe.GUILD_FORUM]);

function d(e) {
    let {
        location: t,
        isChannelSelected: n,
        isTargetInViewport: o = !0,
        channelType: d,
        isPopoverAllowed: m = !0
    } = e, A = (0, i.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO), {
        isExperimentEnabled: E
    } = (0, u.TW)(t), p = (0, l.bG)([r.A], () => null != r.A.getVoiceChannelId()), f = E && o && n && c.has(d) && m && !p, [S, h] = (0, a.kn)(f && A ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return {
        showMenuItemPopover: S === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        markMenuItemPopoverAsDismissed: h
    }
}