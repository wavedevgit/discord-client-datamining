/** Chunk was on 88974 **/
/** chunk id: 182061, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => s
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(715757),
    a = i(867455),
    d = i(406704),
    o = i(985018);

function s(t) {
    var n;
    let i = (0, l.V)(t),
        s = (0, d.NI)(t),
        u = (0, d.lK)(t);
    if ((t.isArchivedThread() ? u : s) && !i) return (null == (n = t.threadMetadata) ? void 0 : n.archived) ? (0, e.jsx)(r.Drp, {
        id: "unarchive-thread",
        label: t.isForumPost() ? o.intl.string(o.t.cnRubV) : o.intl.string(o.t.S9E4G7),
        action: () => a.A.unarchiveThread(t, !1)
    }) : (0, e.jsx)(r.Drp, {
        id: "archive-thread",
        label: t.isForumPost() ? o.intl.string(o.t.BTs4Kb) : o.intl.string(o.t.wiIevd),
        action: () => a.A.archiveThread(t, !1)
    })
}