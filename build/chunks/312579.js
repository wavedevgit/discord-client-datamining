/** chunk id: 312579, original params: t,e,i (module,exports,require) **/
i.d(e, {
    i: () => d
});
var n = i(311907),
    l = i(684013),
    s = i(994322),
    r = i(419954),
    u = i(256415),
    a = i(780964),
    o = i(985018);
let d = (0, r.zD)(a.X.OVERLAY_SHOW_KEYBIND_INDICATORS_SETTING, {
    usePredicate: () => (0, s.A)({
        location: "overlay_user_settings"
    }),
    useValue: () => (0, n.bG)([u.default], () => u.default.showKeybindIndicators),
    setValue: t => {
        l.A.setShowKeybindIndicators(t)
    },
    useTitle: () => o.intl.string(o.t.XZTl9r)
})