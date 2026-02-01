/** chunk id: 707792, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(867455),
    a = n(406704),
    o = n(985018);

function s(t) {
    let e = (0, a.H_)(t),
        n = t.isLockedThread();
    if (!(!e || t.isModeratorReportChannel())) return n ? (0, i.jsx)(r.Drp, {
        id: "unlock-thread",
        label: t.isForumPost() ? o.intl.string(o.t["/OKSxp"]) : o.intl.string(o.t["jeyb/W"]),
        action: () => l.A.unlockThread(t)
    }) : (0, i.jsx)(r.Drp, {
        id: "lock-thread",
        label: t.isForumPost() ? o.intl.string(o.t["Ur/0Na"]) : o.intl.string(o.t.HoCqm8),
        action: () => l.A.lockThread(t)
    })
}