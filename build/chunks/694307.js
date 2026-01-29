/** Chunk was on 4670 **/
/** chunk id: 694307, original params: e,t,i (module,exports,require) **/
i.d(t, {
    F: () => o
});
var n = i(419954),
    l = i(954571),
    s = i(253932),
    r = i(780964),
    a = i(652215),
    u = i(985018);
let o = (0, n.zD)(r.X.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => u.intl.string(u.t["3Ppr1h"]),
    useSubtitle: () => u.intl.string(u.t.WNbX4O),
    useValue: s.bm.useSetting,
    setValue: e => {
        s.bm.updateSetting(e), l.default.track(a.HAw.UPDATE_USER_SETTINGS_LOCAL, {
            always_preview_video: e
        })
    }
})