/** chunk id: 198168 params = (module,exports,require) **/
n.d(t, {
    N: () => s
});
var i = n(837057),
    r = n(310419),
    a = n(967198),
    l = n(488995);
let s = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getGuildId() ?? void 0;
        (0, i.transitionToGlobalDiscovery)({
            tab: l.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: e ?? null,
                entrypoint: {
                    name: r.sW.KEYBOARD_SHORTCUT
                }
            }
        })
    }
}