/** chunk id: 24933 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    l = n(827343),
    o = n(430452),
    s = n(533488),
    _ = n(509381),
    u = n(985018);

function c(e) {
    let {
        enabledInputProfiles: t
    } = (0, s.d)({
        location: "useInputProfileItems"
    }), n = {
        [_.m.VOICE_ISOLATION]: u.intl.string(u.t.cjPbpT),
        [_.m.STUDIO]: u.intl.string(u.t.VZPR0R),
        [_.m.CUSTOM]: u.intl.string(u.t["N/PQjv"])
    }, c = (0, r.bG)([o.Ay], () => o.Ay.getActiveInputProfile()), d = t.map(t => (0, a.jsx)(i.iDA, {
        id: t,
        group: "input-profiles",
        label: n[t],
        checked: t === (c ?? _.m.CUSTOM),
        action: () => l.A.setActiveInputProfile(t, {
            analyticsLocations: e
        })
    }, t));
    return (0, a.jsx)(i.Drp, {
        id: "input-profiles",
        label: u.intl.string(u.t.LM3U3k),
        subtext: n[c ?? _.m.CUSTOM],
        children: d
    })
}