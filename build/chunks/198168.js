/** Chunk was on 60667 **/
/** chunk id: 198168, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => a
});
var r = n(837057),
    i = n(310419),
    l = n(967198),
    s = n(488995);
let a = {
    binds: ["mod+ctrl+a"],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        let t = null != (e = l.A.getGuildId()) ? e : void 0;
        (0, r.transitionToGlobalDiscovery)({
            tab: s.GlobalDiscoveryTab.APPS,
            newSessionState: {
                guildId: null != t ? t : null,
                entrypoint: {
                    name: i.sW.KEYBOARD_SHORTCUT
                }
            }
        })
    }
}