/** chunk id: 506305, original params: t,e,i (module,exports,require) **/
i.d(e, {
    p: () => T
});
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    a = i(780964),
    u = i(358776),
    o = i(840065),
    d = i(652215),
    A = i(985018);
let T = (0, r.zD)(a.X.SYNC_PROFILE_THEMES, {
    useTitle: () => (0, u.bp)("SyncProfileThemes_useTitle") ? A.intl.string(A.t.C00w4l) : A.intl.string(A.t["sSY+mD"]),
    useSubtitle: () => (0, u.bp)("SyncProfileThemes_useSubtitle") ? void 0 : A.intl.format(A.t.u6UjrL, {
        onThemeClick() {
            (0, o.openUserSettings)(a.X.APPEARANCE_PANEL, {
                section: d.nc_.APPEARANCE
            })
        }
    }),
    useValue: () => (0, n.bG)([s.A], () => s.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, l.M1)()
})