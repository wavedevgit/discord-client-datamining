/** chunk id: 662826, original params: e,t,i (module,exports,require) **/
i.d(t, {
    g: () => c
});
var n = i(311907),
    l = i(274372),
    s = i(915618),
    r = i(399925),
    a = i(670470),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    T = i(985018);
let c = (0, u.zD)(d.X.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
    useTitle: () => T.intl.string(T.t.NWw7kY),
    useSubtitle: () => T.intl.string(T.t["0vjy8N"]),
    useValue: function() {
        return (0, n.bG)([l.A], () => l.A.getSettings().viewerClipsEnabled)
    },
    setValue: e => r.Wn({
        enabled: e,
        trackAnalytics: !0
    }),
    usePredicate: function() {
        let {
            enableViewerClipping: e
        } = a.A.useExperiment({
            location: "Data & Privacy"
        }, {
            autoTrackExposure: !1
        }), t = (0, n.bG)([o.A], () => (0, s.A)(o.A));
        return e && t
    }
})