/** chunk id: 82770, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => d
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(837057),
    a = t(310419),
    c = t(488995),
    o = t(985018);

function d(e) {
    return (0, i.jsx)(r.Drp, {
        id: "application-directory",
        label: o.intl.string(o.t.AKcFUj),
        icon: r.k9F,
        leadingAccessory: {
            type: "icon",
            icon: r.k9F
        },
        action: () => {
            (0, l.transitionToGlobalDiscovery)({
                tab: c.GlobalDiscoveryTab.APPS,
                newSessionState: {
                    entrypoint: {
                        name: a.sW.GUILD_HEADER_POPOUT
                    },
                    guildId: e.id
                }
            })
        }
    })
}