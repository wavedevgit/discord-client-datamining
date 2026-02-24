/** chunk id: 301541, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => h
});
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(308528),
    s = t(267102),
    d = t(474397),
    o = t(961350),
    c = t(652215),
    u = t(985018);

function h(e, n, t) {
    let h = (0, s.aL)();
    return (0, l.bG)([o.default], () => o.default.getId() === e) || n === c.BRT.POPOUT ? null : (0, i.jsx)(r.Drp, {
        id: "message-user",
        label: u.intl.string(u.t.OAJQlP),
        action: () => {
            (0, d.A)(n, !0), a.A.openPrivateChannel({
                recipientIds: e
            }), h.dispatch(c.jej.POPOUT_CLOSE), (0, r.s7G)()
        },
        icon: t,
        leadingAccessory: null != t ? {
            type: "icon",
            icon: t
        } : void 0
    })
}