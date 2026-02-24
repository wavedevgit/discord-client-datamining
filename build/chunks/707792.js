/** chunk id: 707792, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => d
});
var i = e(627968);
e(64700);
var a = e(397927),
    l = e(867455),
    r = e(406704),
    s = e(985018);

function d(t) {
    let n = (0, r.H_)(t),
        e = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel())) return e ? (0, i.jsx)(a.Drp, {
        id: "unlock-thread",
        label: t.isForumPost() ? s.intl.string(s.t["/OKSxp"]) : s.intl.string(s.t["jeyb/W"]),
        action: () => l.A.unlockThread(t)
    }) : (0, i.jsx)(a.Drp, {
        id: "lock-thread",
        label: t.isForumPost() ? s.intl.string(s.t["Ur/0Na"]) : s.intl.string(s.t.HoCqm8),
        action: () => l.A.lockThread(t)
    })
}