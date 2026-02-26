/** chunk id: 182061, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => o
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(715757),
    a = e(867455),
    d = e(406704),
    s = e(985018);

function o(t) {
    let n = (0, r.V)(t),
        e = (0, d.NI)(t),
        o = (0, d.lK)(t);
    if ((t.isArchivedThread() ? o : e) && !n) return t.threadMetadata?.archived ? (0, i.jsx)(l.Drp, {
        id: "unarchive-thread",
        label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
        action: () => a.A.unarchiveThread(t, !1)
    }) : (0, i.jsx)(l.Drp, {
        id: "archive-thread",
        label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
        action: () => a.A.archiveThread(t, !1)
    })
}