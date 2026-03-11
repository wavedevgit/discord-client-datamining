/** chunk id: 301541 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(308528),
    d = n(267102),
    o = n(474397),
    s = n(961350),
    u = n(652215),
    c = n(985018);

function A(e, t, n) {
    let A = (0, d.aL)();
    return (0, i.bG)([s.default], () => s.default.getId() === e) || t === u.BRT.POPOUT ? null : (0, l.jsx)(a.Drp, {
        id: "message-user",
        label: c.intl.string(c.t.OAJQlP),
        action: () => {
            (0, o.A)(t, !0), r.A.openPrivateChannel({
                recipientIds: e
            }), A.dispatch(u.jej.POPOUT_CLOSE), (0, a.s7G)()
        },
        icon: n,
        leadingAccessory: null != n ? {
            type: "icon",
            icon: n
        } : void 0
    })
}