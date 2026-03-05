/** chunk id: 82770 params = (module,exports,require) **/
n.d(i, {
    A: () => c
});
var t = n(627968);
n(64700);
var l = n(397927),
    a = n(837057),
    r = n(310419),
    d = n(488995),
    s = n(985018);

function c(e) {
    return (0, t.jsx)(l.Drp, {
        id: "application-directory",
        label: s.intl.string(s.t.AKcFUj),
        icon: l.k9F,
        leadingAccessory: {
            type: "icon",
            icon: l.k9F
        },
        action: () => {
            (0, a.transitionToGlobalDiscovery)({
                tab: d.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: {
                        name: r.sW.GUILD_HEADER_POPOUT
                    },
                    guildId: e.id
                }
            })
        }
    })
}