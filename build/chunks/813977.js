/** chunk id: 813977 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    s = n(827343),
    l = n(430452),
    o = n(723702),
    d = n(652215),
    _ = n(985018);

function c(e) {
    let t = !o.isPlatformEmbedded,
        n = (0, r.bG)([l.Ay], () => l.Ay.getMode()),
        c = (t, r) => (0, i.jsx)(a.iDA, {
            id: t,
            group: "input-modes",
            label: r,
            checked: n === t,
            action: () => s.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [c(d.TBI.VOICE_ACTIVITY, _.intl.string(_.t.cHCEOJ)), c(d.TBI.PUSH_TO_TALK, t ? _.intl.string(_.t["1AINrB"]) : _.intl.string(_.t.Q8gkVL))]
}