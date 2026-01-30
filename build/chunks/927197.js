/** chunk id: 927197, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(610411),
    c = n(894010),
    l = n(495756),
    u = n(985018);

function s(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getMute(e)),
        s = !n;
    return (0, r.jsx)(a.sLh, {
        id: "mute-game",
        label: u.intl.string(u.t["6EwEwp"]),
        checked: n,
        action: () => {
            (0, o.i1)({
                gameName: t,
                applicationId: e,
                label: s ? o.VD.MUTED : o.VD.UNMUTED,
                source: o.eh.GAME_CONTEXT_MENU
            }), (0, c.b)(e, s)
        }
    })
}