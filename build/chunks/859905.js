/** chunk id: 859905, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => u
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    a = i(111162),
    r = i(780964);
let u = (0, s.zD)(r.X.KEYBOARD_MISMATCHES, {
    useTitle: () => "Enable Logging of Keyboard Mismatches",
    useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
    useValue: () => (0, n.bG)([a.default], () => a.default.logKeyboardMismatches),
    setValue: t => (0, l.x)({
        logKeyboardMismatches: t
    })
})