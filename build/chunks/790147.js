/** chunk id: 790147 params = (module,exports,require) **/
n.d(t, {
    z: () => u
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(253932),
    o = n(780964),
    d = n(698723),
    c = n(985018);
let u = (0, l.zD)(o.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => c.intl.string(c.t["0CEP6e"]),
    useSubtitle: () => c.intl.string(c.t["kBXuW+"]),
    useValue: function() {
        return (0, i.bG)([r.default], () => r.default.isStreamInfoOverlayEnabled)
    },
    setValue: function(e) {
        let t = r.default.isStreamInfoOverlayEnabled;
        (0, d.A)("stream_info_overlay_enabled", e, t), (0, s.x)({
            isStreamInfoOverlayEnabled: e
        })
    },
    usePredicate: function() {
        return a.Q_.useSetting()
    }
})