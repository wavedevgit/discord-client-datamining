/** chunk id: 506305, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => _
});
var i = n(311907),
    s = n(955572),
    l = n(775602),
    a = n(419954),
    r = n(780964),
    o = n(358776),
    d = n(840065),
    c = n(652215),
    u = n(985018);
let _ = (0, a.zD)(r.X.SYNC_PROFILE_THEMES, {
    useTitle: () => (0, o.bp)("SyncProfileThemes_useTitle") ? u.intl.string(u.t.C00w4l) : u.intl.string(u.t["sSY+mD"]),
    useSubtitle: () => (0, o.bp)("SyncProfileThemes_useSubtitle") ? void 0 : u.intl.format(u.t.u6UjrL, {
        onThemeClick() {
            (0, d.openUserSettings)(r.X.APPEARANCE_PANEL, {
                section: c.nc_.APPEARANCE
            })
        }
    }),
    useValue: () => (0, i.bG)([l.A], () => l.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, s.M1)()
})