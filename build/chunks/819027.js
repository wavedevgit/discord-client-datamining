/** chunk id: 819027 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(688810),
    s = n(474397),
    r = n(780964),
    o = n(858897),
    c = n(652215),
    d = n(985018);

function u(e) {
    let {
        analyticsLocations: t
    } = (0, a.Ay)();
    return (0, i.jsx)(l.Drp, {
        id: "voice-settings",
        label: d.intl.string(d.t.NiTd0e),
        action: () => {
            (0, o.openUserSettings)(r.X.VOICE_CATEGORY, {
                analyticsLocations: t,
                appContext: e
            }), (0, s.A)(e, e === c.BRT.POPOUT)
        },
        icon: l.Zes,
        leadingAccessory: {
            type: "icon",
            icon: l.Zes
        }
    })
}