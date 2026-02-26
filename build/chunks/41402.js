/** chunk id: 41402, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => A
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(579872),
    d = e(435470),
    s = e(867455),
    o = e(406704),
    u = e(734057),
    c = e(746080),
    g = e(985018);

function A(t) {
    let n = (0, l.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        e = (0, o.H_)(t),
        A = (0, d.Eh)(t);
    return n?.isForumLikeChannel() && e ? t.hasFlag(c.lx.PINNED) ? (0, i.jsx)(r.Drp, {
        id: "unpin-thread",
        label: g.intl.string(g.t.trD8ao),
        action: () => s.A.unpin(t)
    }) : (0, i.jsx)(r.Drp, {
        id: "pin-thread",
        label: g.intl.string(g.t.EnaWhu),
        action: function() {
            null != A ? a.A.show({
                title: g.intl.string(g.t.IMbjxo),
                body: g.intl.string(g.t["mi5+Vl"]),
                onConfirm: async () => {
                    await s.A.unpin(A), s.A.pin(t)
                }
            }) : s.A.pin(t)
        }
    }) : null
}