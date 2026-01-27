/** Chunk was on 88974 **/
/** chunk id: 41402, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => A
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(579872),
    d = i(435470),
    o = i(867455),
    s = i(406704),
    u = i(734057),
    c = i(746080),
    h = i(985018);

function A(t) {
    let n = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        i = (0, s.H_)(t),
        A = (0, d.Eh)(t);
    return (null == n ? void 0 : n.isForumLikeChannel()) && i ? t.hasFlag(c.lx.PINNED) ? (0, e.jsx)(l.Drp, {
        id: "unpin-thread",
        label: h.intl.string(h.t.trD8ao),
        action: () => o.A.unpin(t)
    }) : (0, e.jsx)(l.Drp, {
        id: "pin-thread",
        label: h.intl.string(h.t.EnaWhu),
        action: function() {
            null != A ? a.A.show({
                title: h.intl.string(h.t.IMbjxo),
                body: h.intl.string(h.t["mi5+Vl"]),
                onConfirm: async () => {
                    await o.A.unpin(A), o.A.pin(t)
                }
            }) : o.A.pin(t)
        }
    }) : null
}