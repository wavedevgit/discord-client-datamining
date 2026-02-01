/** chunk id: 200273, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(435183),
    a = n(406704),
    o = n(985018);

function s(t) {
    let e = (0, a.NI)(t),
        n = (0, a.Id)(t),
        s = (0, a.s5)(t);
    return !e || !n || s || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, i.jsx)(r.Drp, {
        id: "edit-thread",
        label: t.isForumPost() ? o.intl.string(o.t.NP1yHG) : o.intl.string(o.t["2Mk1TP"]),
        action: () => {
            (0, r.s7G)(), l.Ay.open(t.id)
        }
    })
}