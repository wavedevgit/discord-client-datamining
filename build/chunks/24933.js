/** chunk id: 24933, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(827343),
    a = n(430452),
    o = n(77735),
    c = n(509381),
    d = n(985018);

function A(e) {
    let {
        enabledInputProfiles: t
    } = (0, o.d)({
        location: "useInputProfileItems"
    }), n = {
        [c.m.VOICE_ISOLATION]: d.intl.string(d.t.cjPbpT),
        [c.m.STUDIO]: d.intl.string(d.t.VZPR0R),
        [c.m.CUSTOM]: d.intl.string(d.t["N/PQjv"])
    }, A = (0, r.bG)([a.Ay], () => a.Ay.getActiveInputProfile()), u = t.map(t => (0, i.jsx)(l.iDA, {
        id: t,
        group: "input-profiles",
        label: n[t],
        checked: t === (A ?? c.m.CUSTOM),
        action: () => s.A.setActiveInputProfile(t, {
            analyticsLocations: e
        })
    }, t));
    return (0, i.jsx)(l.Drp, {
        id: "input-profiles",
        label: d.intl.string(d.t.LM3U3k),
        subtext: n[A ?? c.m.CUSTOM],
        children: u
    })
}