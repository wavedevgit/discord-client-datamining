/** chunk id: 819027, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var n = r(627968);
r(64700);
var o = r(397927),
    i = r(688810),
    l = r(474397),
    a = r(780964),
    u = r(840065),
    c = r(652215),
    s = r(355097),
    b = r(985018);

function d(e) {
    let {
        analyticsLocations: t
    } = (0, i.Ay)();
    return (0, n.jsx)(o.Drp, {
        id: "voice-settings",
        label: b.intl.string(b.t.NiTd0e),
        action: () => {
            (0, u.openUserSettings)(a.X.VOICE_AND_VIDEO_PANEL, {
                section: c.nc_.VOICE,
                subsection: s.V5,
                analyticsLocations: t,
                appContext: e
            }), (0, l.A)(e, e === c.BRT.POPOUT)
        },
        icon: o.Zes,
        leadingAccessory: {
            type: "icon",
            icon: o.Zes
        }
    })
}