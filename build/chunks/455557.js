/** Chunk was on 10758 **/
/** chunk id: 455557, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => p
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    c = n(808728),
    o = n(911612),
    a = n(153594),
    s = n(531335),
    u = n(652215),
    d = n(985018);

function p(e) {
    let {
        guild: t,
        onSelect: n
    } = e, p = c.Ay.getDefaultChannel(t.id, !0, u.xBc.CREATE_INSTANT_INVITE), b = (0, a.A)(t.id), y = (0, o.A)(t), O = (0, s.A)({
        guild: t,
        source: u.PE1.GUILD_CONTEXT_MENU,
        channel: p
    });
    return (0, r.jsxs)(i.W1t, {
        "data-menu-needs-migration": !0,
        navId: "guild-context",
        "aria-label": d.intl.string(d.t.HpQykc),
        onClose: l.Z_,
        onSelect: n,
        children: [(0, r.jsx)(i.rXV, {
            children: b
        }), (0, r.jsxs)(i.rXV, {
            children: [y, O]
        })]
    })
}