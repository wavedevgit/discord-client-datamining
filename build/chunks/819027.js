/** chunk id: 819027 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var n = a(627968);
a(64700);
var r = a(397927),
    i = a(688810),
    l = a(474397),
    o = a(780964),
    s = a(858897),
    _ = a(652215),
    c = a(985018);

function d(e) {
    let {
        analyticsLocations: t
    } = (0, i.Ay)();
    return (0, n.jsx)(r.Drp, {
        id: "voice-settings",
        label: c.intl.string(c.t.NiTd0e),
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