/** chunk id: 332921, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(670470),
    a = n(253932),
    o = n(430452),
    c = n(274372),
    d = n(915618),
    u = n(399925),
    _ = n(985018);

function p() {
    let e = a.Q$.useSetting(),
        {
            enableViewerClipping: t
        } = s.A.useExperiment({
            location: "Clips Settings"
        }, {
            autoTrackExposure: !1
        }),
        {
            viewerClipsEnabled: n
        } = (0, i.cf)([c.A], () => c.A.getSettings()),
        p = (0, d.A)(o.A);
    return (0, r.jsxs)(l.lVW, {
        children: [(0, r.jsx)(l.dOG, {
            label: _.intl.string(_.t.AGDDkH),
            description: _.intl.string(_.t["wW9/zQ"]),
            checked: e,
            onChange: e => u.eQ({
                allowVoiceRecording: e
            })
        }), t && p && (0, r.jsx)(l.dOG, {
            label: _.intl.string(_.t.NWw7kY),
            description: _.intl.string(_.t["0vjy8N"]),
            checked: n,
            onChange: e => u.Wn({
                enabled: e,
                trackAnalytics: !0
            })
        })]
    })
}