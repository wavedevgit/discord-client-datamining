/** Chunk was on 5606 **/
/** chunk id: 332921, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    p = n(985018);

function _() {
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
        _ = (0, d.A)(o.A);
    return (0, r.jsxs)(l.lVW, {
        children: [(0, r.jsx)(l.dOG, {
            label: p.intl.string(p.t.AGDDkH),
            description: p.intl.string(p.t["wW9/zQ"]),
            checked: e,
            onChange: e => u.eQ({
                allowVoiceRecording: e
            })
        }), t && _ && (0, r.jsx)(l.dOG, {
            label: p.intl.string(p.t.NWw7kY),
            description: p.intl.string(p.t["0vjy8N"]),
            checked: n,
            onChange: e => u.Wn({
                enabled: e,
                trackAnalytics: !0
            })
        })]
    })
}