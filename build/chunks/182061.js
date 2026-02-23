/** chunk id: 182061, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => o
});
var i = e(627968);
e(64700);
var a = e(397927),
    l = e(715757),
    r = e(867455),
    s = e(406704),
    d = e(985018);

function o(t) {
    let n = (0, l.V)(t),
        e = (0, s.NI)(t),
        o = (0, s.lK)(t);
    if ((t.isArchivedThread() ? o : e) && !n) return t.threadMetadata?.archived ? (0, i.jsx)(a.Drp, {
        id: "unarchive-thread",
        label: t.isForumPost() ? d.intl.string(d.t.cnRubV) : d.intl.string(d.t.S9E4G7),
        action: () => r.A.unarchiveThread(t, !1)
    }) : (0, i.jsx)(a.Drp, {
        id: "archive-thread",
        label: t.isForumPost() ? d.intl.string(d.t.BTs4Kb) : d.intl.string(d.t.wiIevd),
        action: () => r.A.archiveThread(t, !1)
    })
}