/** Chunk was on 91042 **/
/** chunk id: 301541, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(308528),
    o = n(267102),
    d = n(474397),
    s = n(961350),
    u = n(652215),
    c = n(985018);

function A(e, t, n) {
    let A = (0, o.aL)();
    return (0, i.bG)([s.default], () => s.default.getId() === e) || t === u.BRT.POPOUT ? null : (0, l.jsx)(r.Drp, {
        id: "message-user",
        label: c.intl.string(c.t.OAJQlP),
        action: () => {
            (0, d.A)(t, !0), a.A.openPrivateChannel({
                recipientIds: e
            }), A.dispatch(u.jej.POPOUT_CLOSE), (0, r.s7G)()
        },
        icon: n
    })
}