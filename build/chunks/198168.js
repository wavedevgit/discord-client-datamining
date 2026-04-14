/** chunk id: 198168 params = (module,exports,require) **/
n.d(t, {
    N: () => o
});
var i = n(837057),
    r = n(310419),
    l = n(967198),
    s = n(488995);
let o = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.A.getGuildId() ?? void 0;
        (0, i.transitionToGlobalDiscovery)({
            tab: s.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: e ?? null,
                entrypoint: {
                    name: r.sW.KEYBOARD_SHORTCUT
                }
            }
        })
    }
}