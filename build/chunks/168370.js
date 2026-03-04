/** chunk id: 168370, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.OVERLAY_RPC_LOGS, {
    useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
    useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
    useValue: () => (0, n.bG)([a.default], () => a.default.isLoggingOverlayEvents),
    setValue: t => (0, l.x)({
        logOverlayEvents: t
    })
})