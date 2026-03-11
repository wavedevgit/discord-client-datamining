/** chunk id: 635443 params = (module,exports,require) **/
i.d(n, {
    A: () => c
});
var t = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    s = i(308528),
    d = i(734057),
    a = i(287809),
    o = i(985018);

function c(e, n) {
    let i = (0, r.bG)([a.default], () => a.default.getCurrentUser(), []),
        c = (0, r.bG)([d.A], () => d.A.getChannel(n), [n]);
    return null == c || c.isOwner(e) || null == i || !c.isOwner(i.id) || !c.recipients?.includes(e) ? null : (0, t.jsx)(l.Drp, {
        id: "remove",
        label: o.intl.string(o.t["n5zMI+"]),
        action: () => s.A.removeRecipient(n, e),
        color: "danger"
    })
}