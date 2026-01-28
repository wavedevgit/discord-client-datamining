/** Chunk was on 95153 **/
/** chunk id: 813977, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(827343),
    o = n(430452),
    c = n(723702),
    s = n(652215),
    d = n(985018);

function u(e) {
    let t = !c.isPlatformEmbedded,
        n = (0, l.bG)([o.A], () => o.A.getMode()),
        u = (t, l) => (0, r.jsx)(i.iDA, {
            id: t,
            group: "input-modes",
            label: l,
            checked: n === t,
            action: () => a.A.setMode(t, void 0, void 0, {
                analyticsLocations: e
            })
        }, t);
    return [u(s.TBI.VOICE_ACTIVITY, d.intl.string(d.t.cHCEOJ)), u(s.TBI.PUSH_TO_TALK, t ? d.intl.string(d.t["1AINrB"]) : d.intl.string(d.t.Q8gkVL))]
}