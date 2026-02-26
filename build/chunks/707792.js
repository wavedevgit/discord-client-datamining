/** chunk id: 707792, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => s
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(867455),
    a = e(406704),
    d = e(985018);

function s(t) {
    let n = (0, a.H_)(t),
        e = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel())) return e ? (0, i.jsx)(l.Drp, {
        id: "unlock-thread",
        label: t.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
        action: () => r.A.unlockThread(t)
    }) : (0, i.jsx)(l.Drp, {
        id: "lock-thread",
        label: t.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
        action: () => r.A.lockThread(t)
    })
}