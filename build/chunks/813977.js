/** chunk id: 813977, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    s = t(827343),
    c = t(430452),
    r = t(723702),
    o = t(652215),
    d = t(985018);

function u(e) {
    let n = !r.isPlatformEmbedded,
        t = (0, l.bG)([c.Ay], () => c.Ay.getMode()),
        u = (n, l) => (0, i.jsx)(a.iDA, {
            id: n,
            group: "input-modes",
            label: l,
            checked: t === n,
            action: () => s.A.setMode(n, void 0, void 0, {
                analyticsLocations: e
            })
        }, n);
    return [u(o.TBI.VOICE_ACTIVITY, d.intl.string(d.t.cHCEOJ)), u(o.TBI.PUSH_TO_TALK, n ? d.intl.string(d.t["1AINrB"]) : d.intl.string(d.t.Q8gkVL))]
}