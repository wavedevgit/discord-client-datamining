/** chunk id: 182061 params = (module,exports,require) **/
i.d(n, {
    A: () => o
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(715757),
    a = i(867455),
    s = i(406704),
    d = i(985018);

function o(t) {
    let n = (0, l.V)(t),
        i = (0, s.NI)(t),
        o = (0, s.lK)(t);
    if ((t.isArchivedThread() ? o : i) && !n) return t.threadMetadata?.archived ? (0, e.jsx)(r.Drp, {
        id: "unarchive-thread",
        label: t.isForumPost() ? d.intl.string(d.t.cnRubV) : d.intl.string(d.t.S9E4G7),
        action: () => a.A.unarchiveThread(t, !1)
    }) : (0, e.jsx)(r.Drp, {
        id: "archive-thread",
        label: t.isForumPost() ? d.intl.string(d.t.BTs4Kb) : d.intl.string(d.t.wiIevd),
        action: () => a.A.archiveThread(t, !1)
    })
}