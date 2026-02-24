/** chunk id: 819027, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(688810),
    s = n(474397),
    a = n(780964),
    o = n(840065),
    c = n(652215),
    d = n(355097),
    A = n(985018);

function u(e) {
    let {
        analyticsLocations: t
    } = (0, l.Ay)();
    return (0, i.jsx)(r.Drp, {
        id: "voice-settings",
        label: A.intl.string(A.t.NiTd0e),
        action: () => {
            (0, o.openUserSettings)(a.X.VOICE_AND_VIDEO_PANEL, {
                section: c.nc_.VOICE,
                subsection: d.V5,
                analyticsLocations: t,
                appContext: e
            }), (0, s.A)(e, e === c.BRT.POPOUT)
        },
        icon: r.Zes,
        leadingAccessory: {
            type: "icon",
            icon: r.Zes
        }
    })
}