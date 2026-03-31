/** chunk id: 813977 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(827343),
    r = i(430452),
    o = i(723702),
    c = i(652215),
    d = i(985018);

function u(e) {
    let t = !o.isPlatformEmbedded,
        i = (0, a.bG)([r.Ay], () => r.Ay.getMode()),
        u = (t, a) => (0, n.jsx)(l.iDA, {
            id: t,
            group: "input-modes",
            label: a,
            checked: i === t,
            action: () => s.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [u(c.TBI.VOICE_ACTIVITY, d.intl.string(d.t.cHCEOJ)), u(c.TBI.PUSH_TO_TALK, t ? d.intl.string(d.t["1AINrB"]) : d.intl.string(d.t.Q8gkVL))]
}