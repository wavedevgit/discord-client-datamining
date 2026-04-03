/** chunk id: 813977 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    l = n(827343),
    s = n(430452),
    o = n(723702),
    d = n(652215),
    c = n(985018);

function _(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, r.bG)([s.Ay], () => s.Ay.getMode()),
        _ = (t, r) => (0, i.jsx)(a.iDA, {
            id: t,
            group: "input-modes",
            label: r,
            checked: n === t,
            action: () => l.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [_(d.TBI.VOICE_ACTIVITY, c.intl.string(c.t.cHCEOJ)), _(d.TBI.PUSH_TO_TALK, t ? c.intl.string(c.t["1AINrB"]) : c.intl.string(c.t.Q8gkVL))]
}