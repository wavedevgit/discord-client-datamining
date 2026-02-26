/** chunk id: 200273, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => s
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(435183),
    a = e(406704),
    d = e(985018);

function s(t) {
    let n = (0, a.NI)(t),
        e = (0, a.Id)(t),
        s = (0, a.s5)(t);
    return !n || !e || s || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, i.jsx)(l.Drp, {
        id: "edit-thread",
        label: t.isForumPost() ? d.intl.string(d.t.NP1yHG) : d.intl.string(d.t["2Mk1TP"]),
        action: () => {
            (0, l.s7G)(), r.Ay.open(t.id)
        }
    })
}