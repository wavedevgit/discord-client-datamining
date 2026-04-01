/** chunk id: 819027 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(688810),
    l = n(474397),
    s = n(780964),
    o = n(840065),
    _ = n(652215),
    u = n(985018);

function c(e) {
    let {
        analyticsLocations: t
    } = (0, i.Ay)();
    return (0, r.jsx)(a.Drp, {
        id: "voice-settings",
        label: u.intl.string(u.t.NiTd0e),
        action: () => {
            (0, o.openUserSettings)(s.X.VOICE_CATEGORY, {
                analyticsLocations: t,
                appContext: e
            }), (0, l.A)(e, e === _.BRT.POPOUT)
        },
        icon: a.Zes,
        leadingAccessory: {
            type: "icon",
            icon: a.Zes
        }
    })
}