/** chunk id: 664962, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.AXE_AUDITING, {
    useTitle: () => "Enable Accessibility Auditing",
    useSubtitle: () => "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
    usePredicate: () => !1,
    useValue: () => (0, n.bG)([a.default], () => a.default.isAxeEnabled),
    setValue: t => (0, l.x)({
        axeEnabled: t
    })
})