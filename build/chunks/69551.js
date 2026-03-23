/** chunk id: 69551 params = (module,exports,require) **/
n.d(t, {
    l: () => g
});
var i = n(311907),
    s = n(890138),
    l = n(817281),
    a = n(47671),
    r = n(419954),
    o = n(284016),
    d = n(544028),
    c = n(253932),
    u = n(780964),
    m = n(652215),
    _ = n(985018);
let g = (0, r.zD)(u.X.DISPLAY_SYNC_THEME, {
    useTitle: () => _.intl.string(_.t["/B+kEV"]),
    useSearchTerms: () => [_.intl.string(_.t.Ksh3ik)],
    useValue: function() {
        return (0, i.bG)([o.A], () => !1 !== o.A.shouldSync("appearance"))
    },
    setValue: function(e) {
        let t = d.A.theme,
            n = a.A.gradientPreset?.id ?? null,
            i = c.eh.getSetting()?.customUserThemeSettings != null;
        (0, s.u)(m.HAw.SYNC_ACROSS_CLIENTS_TOGGLED, {
            is_sync_enabled: e,
            base_theme: t,
            client_theme: n,
            has_custom_theme: i
        }), l.Ay.setShouldSyncAppearanceSettings(e)
    }
})