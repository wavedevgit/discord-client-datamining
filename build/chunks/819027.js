/** chunk id: 819027 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968);
n(64700);
var r = n(397927),
    i = n(688810),
    l = n(474397),
    o = n(780964),
    s = n(858897),
    _ = n(652215),
    u = n(985018);

function c(e) {
    let {
        analyticsLocations: t
    } = (0, i.Ay)();
    return (0, a.jsx)(r.Drp, {
        id: "voice-settings",
        label: u.intl.string(u.t.NiTd0e),
        action: () => {
            (0, s.openUserSettings)(o.X.VOICE_CATEGORY, {
                analyticsLocations: t,
                appContext: e
            }), (0, l.A)(e, e === _.BRT.POPOUT)
        },
        icon: r.Zes,
        leadingAccessory: {
            type: "icon",
            icon: r.Zes
        }
    })
}