/** chunk id: 168370 params = (module,exports,require) **/
n.d(t, {
    J: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.OVERLAY_RPC_LOGS, {
    useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
    useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
    useValue: () => (0, i.bG)([r.default], () => r.default.isLoggingOverlayEvents),
    setValue: e => (0, s.x)({
        logOverlayEvents: e
    })
})