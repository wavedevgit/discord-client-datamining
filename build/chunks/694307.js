/** chunk id: 694307 params = (module,exports,require) **/
n.d(t, {
    F: () => d
});
var i = n(419954),
    s = n(954571),
    l = n(253932),
    r = n(780964),
    a = n(652215),
    o = n(985018);
let d = (0, i.zD)(r.X.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => o.intl.string(o.t["3Ppr1h"]),
    useSubtitle: () => o.intl.string(o.t.WNbX4O),
    useValue: l.bm.useSetting,
    setValue: e => {
        l.bm.updateSetting(e), s.default.track(a.HAw.UPDATE_USER_SETTINGS_LOCAL, {
            always_preview_video: e
        })
    }
})