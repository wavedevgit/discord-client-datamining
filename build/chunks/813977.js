/** chunk id: 813977 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(827343),
    o = n(430452),
    a = n(723702),
    d = n(652215),
    c = n(985018);

function u(e) {
    let t = !a.isPlatformEmbedded,
        n = (0, r.bG)([o.Ay], () => o.Ay.getMode()),
        u = (t, r) => (0, i.jsx)(l.iDA, {
            id: t,
            group: "input-modes",
            label: r,
            checked: n === t,
            action: () => s.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [u(d.TBI.VOICE_ACTIVITY, c.intl.string(c.t.cHCEOJ)), u(d.TBI.PUSH_TO_TALK, t ? c.intl.string(c.t["1AINrB"]) : c.intl.string(c.t.Q8gkVL))]
}