/** chunk id: 707792 params = (module,exports,require) **/
i.d(n, {
    A: () => d
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(867455),
    a = i(406704),
    s = i(985018);

function d(t) {
    let n = (0, a.H_)(t),
        i = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel())) return i ? (0, e.jsx)(r.Drp, {
        id: "unlock-thread",
        label: t.isForumPost() ? s.intl.string(s.t["/OKSxp"]) : s.intl.string(s.t["jeyb/W"]),
        action: () => l.A.unlockThread(t)
    }) : (0, e.jsx)(r.Drp, {
        id: "lock-thread",
        label: t.isForumPost() ? s.intl.string(s.t["Ur/0Na"]) : s.intl.string(s.t.HoCqm8),
        action: () => l.A.lockThread(t)
    })
}