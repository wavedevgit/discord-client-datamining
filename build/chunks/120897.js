/** Chunk was on 60449 **/
/** chunk id: 120897, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(195043),
    r = n(954571),
    a = n(253932),
    o = n(531525),
    c = n(652215),
    d = n(985018);

function u() {
    let e = a.bm.useSetting();
    return (0, i.jsx)(l.x, {
        setting: o.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
        children: (0, i.jsx)(s.dOG, {
            label: d.intl.string(d.t["3Ppr1h"]),
            description: d.intl.string(d.t.WNbX4O),
            checked: e,
            onChange: e => {
                a.bm.updateSetting(e), r.default.track(c.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                    always_preview_video: e
                })
            }
        })
    })
}