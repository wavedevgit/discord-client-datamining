/** chunk id: 813977, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(397927),
    a = i(827343),
    o = i(430452),
    r = i(723702),
    c = i(652215),
    u = i(985018);

function d(e) {
    let t = !r.isPlatformEmbedded,
        i = (0, s.bG)([o.Ay], () => o.Ay.getMode()),
        d = (t, s) => (0, n.jsx)(l.iDA, {
            id: t,
            group: "input-modes",
            label: s,
            checked: i === t,
            action: () => a.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [d(c.TBI.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)), d(c.TBI.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL))]
}