/** chunk id: 182061, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(715757),
    a = n(867455),
    o = n(406704),
    s = n(985018);

function d(t) {
    var e;
    let n = (0, l.V)(t),
        d = (0, o.NI)(t),
        u = (0, o.lK)(t);
    if ((t.isArchivedThread() ? u : d) && !n) return (null == (e = t.threadMetadata) ? void 0 : e.archived) ? (0, i.jsx)(r.Drp, {
        id: "unarchive-thread",
        label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
        action: () => a.A.unarchiveThread(t, !1)
    }) : (0, i.jsx)(r.Drp, {
        id: "archive-thread",
        label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
        action: () => a.A.archiveThread(t, !1)
    })
}