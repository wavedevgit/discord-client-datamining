/** chunk id: 24933 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    i = n(827343),
    o = n(430452),
    s = n(533488),
    _ = n(509381),
    c = n(985018);

function u(e) {
    let {
        enabledInputProfiles: t
    } = (0, s.d)({
        location: "useInputProfileItems"
    }), n = {
        [_.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
        [_.m.STUDIO]: c.intl.string(c.t.VZPR0R),
        [_.m.CUSTOM]: c.intl.string(c.t["N/PQjv"])
    }, u = (0, r.bG)([o.Ay], () => o.Ay.getActiveInputProfile()), d = t.map(t => (0, a.jsx)(l.iDA, {
        id: t,
        group: "input-profiles",
        label: n[t],
        checked: t === (u ?? _.m.CUSTOM),
        action: () => i.A.setActiveInputProfile(t, {
            analyticsLocations: e
        })
    }, t));
    return (0, a.jsx)(l.Drp, {
        id: "input-profiles",
        label: c.intl.string(c.t.LM3U3k),
        subtext: n[u ?? _.m.CUSTOM],
        children: d
    })
}