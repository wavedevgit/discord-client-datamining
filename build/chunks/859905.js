/** chunk id: 859905 params = (module,exports,require) **/
n.d(t, {
    K: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.KEYBOARD_MISMATCHES, {
    useTitle: () => "Enable Logging of Keyboard Mismatches",
    useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
    useValue: () => (0, i.bG)([r.default], () => r.default.logKeyboardMismatches),
    setValue: e => (0, s.x)({
        logKeyboardMismatches: e
    })
})