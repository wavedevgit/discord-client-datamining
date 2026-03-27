/** chunk id: 813977 params = (module,exports,require) **/
i.d(e, {
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

function c(t) {
    let e = !o.isPlatformEmbedded,
        i = (0, l.bG)([a.Ay], () => a.Ay.getMode()),
        c = (e, l) => (0, n.jsx)(r.iDA, {
            id: e,
            group: "input-modes",
            label: l,
            checked: i === e,
            action: () => s.A.setMode(e, void 0, void 0, {
                analyticsLocations: t
            })
        }, e);
    return [c(d.TBI.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOJ)), c(d.TBI.PUSH_TO_TALK, e ? u.intl.string(u.t["1AINrB"]) : u.intl.string(u.t.Q8gkVL))]
}