/** chunk id: 24933, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => b
});
var n = r(627968);
r(64700);
var o = r(311907),
    i = r(397927),
    l = r(827343),
    a = r(430452),
    u = r(77735),
    c = r(509381),
    s = r(985018);

function b(e) {
    let {
        enabledInputProfiles: t
    } = (0, u.d)({
        location: "useInputProfileItems"
    }), r = {
        [c.my.VOICE_ISOLATION]: s.intl.string(s.t.cjPbpT),
        [c.my.STUDIO]: s.intl.string(s.t.VZPR0R),
        [c.my.CUSTOM]: s.intl.string(s.t["N/PQjv"])
    }, b = (0, o.bG)([a.A], () => a.A.getActiveInputProfile()), d = t.map(t => (0, n.jsx)(i.iDA, {
        id: t,
        group: "input-profiles",
        label: r[t],
        checked: t === (null != b ? b : c.my.CUSTOM),
        action: () => l.A.setActiveInputProfile(t, {
            analyticsLocations: e
        })
    }, t));
    return (0, n.jsx)(i.Drp, {
        id: "input-profiles",
        label: s.intl.string(s.t.LM3U3k),
        subtext: r[null != b ? b : c.my.CUSTOM],
        children: d
    })
}