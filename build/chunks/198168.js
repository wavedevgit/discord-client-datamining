/** chunk id: 198168, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => l
});
var i = n(837057),
    r = n(310419),
    a = n(967198),
    s = n(488995);
let l = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getGuildId() ?? void 0;
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