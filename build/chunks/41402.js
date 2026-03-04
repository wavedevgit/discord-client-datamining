/** chunk id: 41402, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => A
});
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(579872),
    s = i(435470),
    d = i(867455),
    o = i(406704),
    u = i(734057),
    c = i(746080),
    g = i(985018);

function A(t) {
    let n = (0, l.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        i = (0, o.H_)(t),
        A = (0, s.Eh)(t);
    return n?.isForumLikeChannel() && i ? t.hasFlag(c.lx.PINNED) ? (0, e.jsx)(r.Drp, {
        id: "unpin-thread",
        label: g.intl.string(g.t.trD8ao),
        action: () => d.A.unpin(t)
    }) : (0, e.jsx)(r.Drp, {
        id: "pin-thread",
        label: g.intl.string(g.t.EnaWhu),
        action: function() {
            null != A ? a.A.show({
                title: g.intl.string(g.t.IMbjxo),
                body: g.intl.string(g.t["mi5+Vl"]),
                onConfirm: async () => {
                    await d.A.unpin(A), d.A.pin(t)
                }
            }) : d.A.pin(t)
        }
    }) : null
}