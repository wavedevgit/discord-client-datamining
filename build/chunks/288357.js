/** chunk id: 288357, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    o = n(928658),
    u = n(698441),
    a = n(985018);

function c(e) {
    let t = (0, r.bG)([u.Ay], () => u.Ay.getGuildScheduledEvent(e), [e]);
    return null == e || null == t ? null : (0, l.jsx)(i.Drp, {
        id: "report-event",
        label: a.intl.string(a.t.IBA5wX),
        action: () => (0, o.uA)(t),
        icon: i.iFK,
        color: "danger"
    })
}