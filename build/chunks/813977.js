/** chunk id: 813977 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(827343),
    a = i(430452),
    o = i(723702),
    d = i(652215),
    u = i(985018);

function c(e) {
    let t = !o.isPlatformEmbedded,
        i = (0, l.bG)([a.Ay], () => a.Ay.getMode()),
        c = (t, l) => (0, n.jsx)(r.iDA, {
            id: t,
            group: "input-modes",
            label: l,
            checked: i === t,
            action: () => s.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [c(d.TBI.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)), c(d.TBI.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL))]
}