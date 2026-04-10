/** chunk id: 24933 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var n = a(627968);
a(64700);
var r = a(311907),
    i = a(397927),
    l = a(827343),
    o = a(430452),
    s = a(533488),
    _ = a(509381),
    c = a(985018);

function d(e) {
    let {
        enabledInputProfiles: t
    } = (0, s.d)({
        location: "useInputProfileItems"
    }), a = {
        [_.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
        [_.m.STUDIO]: c.intl.string(c.t.VZPR0R),
        [_.m.CUSTOM]: c.intl.string(c.t["N/PQjv"])
    }, d = (0, r.bG)([o.Ay], () => o.Ay.getActiveInputProfile()), u = t.map(t => (0, n.jsx)(i.iDA, {
        id: t,
        group: "input-profiles",
        label: a[t],
        checked: t === (d ?? _.m.CUSTOM),
        action: () => l.A.setActiveInputProfile(t, {
            analyticsLocations: e
        })
    }, t));
    return (0, n.jsx)(i.Drp, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: a[d ?? _.m.CUSTOM],
        children: u
    })
}