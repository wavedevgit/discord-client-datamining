/** chunk id: 312579, original params: e,t,i (module,exports,require) **/
i.d(t, {
    i: () => d
});
var n = i(311907),
    l = i(684013),
    s = i(994322),
    r = i(419954),
    a = i(256415),
    u = i(780964),
    o = i(985018);
let d = (0, r.zD)(u.X.OVERLAY_SHOW_KEYBIND_INDICATORS_SETTING, {
    usePredicate: () => (0, s.A)({
        location: "overlay_user_settings"
    }),
    useValue: () => (0, n.bG)([a.default], () => a.default.showKeybindIndicators),
    setValue: e => {
        l.A.setShowKeybindIndicators(e)
    },
    useTitle: () => o.intl.string(o.t.XZTl9r)
})