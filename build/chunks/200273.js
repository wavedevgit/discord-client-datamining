/** chunk id: 200273 params = (module,exports,require) **/
i.d(n, {
    A: () => d
});
var e = i(627968);
i(64700);
var l = i(397927),
    r = i(435183),
    a = i(406704),
    s = i(985018);

function d(t) {
    let n = (0, a.NI)(t),
        i = (0, a.Id)(t),
        d = (0, a.s5)(t);
    return !n || !i || d || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, e.jsx)(l.Drp, {
        id: "edit-thread",
        label: t.isForumPost() ? s.intl.string(s.t.NP1yHG) : s.intl.string(s.t["2Mk1TP"]),
        action: () => {
            (0, l.s7G)(), r.Ay.open(t.id)
        }
    })
}