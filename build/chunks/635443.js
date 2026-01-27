/** Chunk was on 62891 **/
/** chunk id: 635443, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    o = n(308528),
    s = n(734057),
    a = n(287809),
    d = n(985018);

function c(e, t) {
    var n;
    let c = (0, r.bG)([a.default], () => a.default.getCurrentUser(), []),
        u = (0, r.bG)([s.A], () => s.A.getChannel(t), [t]);
    return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null == (n = u.recipients) ? void 0 : n.includes(e)) ? null : (0, i.jsx)(l.Drp, {
        id: "remove",
        label: d.intl.string(d.t["n5zMI+"]),
        action: () => o.A.removeRecipient(t, e),
        color: "danger"
    })
}