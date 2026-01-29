/** Chunk was on 4670 **/
/** chunk id: 509725, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Z: () => d
});
var n = i(311907),
    l = i(734066),
    s = i(274372),
    r = i(399925),
    a = i(419954),
    u = i(780964),
    o = i(985018);
let d = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
    useTitle: () => o.intl.string(o.t["3zwNf6"]),
    useSubtitle: () => o.intl.string(o.t.m4Cjj9),
    useValue: () => (0, n.bG)([s.A], () => s.A.getSettings().remindersEnabled),
    setValue: e => r.Mt(e),
    usePredicate: () => {
        let {
            showClipsHeaderEntrypoint: e
        } = l.L_.useExperiment({
            location: "clips_recording_settings"
        }, {
            autoTrackExposure: !1
        });
        return e
    }
})