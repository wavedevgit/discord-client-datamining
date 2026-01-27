/** Chunk was on 60667 **/
/** chunk id: 502395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(688810),
    o = n(195043),
    c = n(430452),
    d = n(531525),
    u = n(985018);

function _() {
    let {
        sidechainEnabled: e,
        sidechainStrength: t
    } = (0, i.cf)([c.A], () => ({
        sidechainEnabled: c.A.getSidechainCompression(),
        sidechainStrength: c.A.getSidechainCompressionStrength()
    })), {
        analyticsLocations: n
    } = (0, a.Ay)();
    return (0, r.jsxs)(o.x, {
        setting: d.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: [(0, r.jsx)(l.dOG, {
            label: u.intl.string(u.t["/jwMtn"]),
            description: u.intl.string(u.t.zlA23F),
            checked: e,
            onChange: e => s.A.setSidechainCompression(e, {
                analyticsLocations: n
            })
        }), (0, r.jsx)(l.Apm, {
            label: u.intl.string(u.t.fhEzfj),
            initialValue: t,
            minValue: 1,
            onValueChange: e => s.A.setSidechainCompressionStrength(e, {
                analyticsLocations: n
            })
        })]
    })
}