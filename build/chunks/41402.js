/** chunk id: 41402, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => f
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(579872),
    o = n(435470),
    s = n(867455),
    d = n(406704),
    u = n(734057),
    c = n(746080),
    A = n(985018);

function f(t) {
    let e = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        n = (0, d.H_)(t),
        f = (0, o.Eh)(t);
    return (null == e ? void 0 : e.isForumLikeChannel()) && n ? t.hasFlag(c.lx.PINNED) ? (0, i.jsx)(l.Drp, {
        id: "unpin-thread",
        label: A.intl.string(A.t.trD8ao),
        action: () => s.A.unpin(t)
    }) : (0, i.jsx)(l.Drp, {
        id: "pin-thread",
        label: A.intl.string(A.t.EnaWhu),
        action: function() {
            null != f ? a.A.show({
                title: A.intl.string(A.t.IMbjxo),
                body: A.intl.string(A.t["mi5+Vl"]),
                onConfirm: async () => {
                    await s.A.unpin(f), s.A.pin(t)
                }
            }) : s.A.pin(t)
        }
    }) : null
}