/** Chunk was on 77870 **/
/** chunk id: 264250, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(934551),
    i = n(367513),
    s = n(812771),
    a = n(58736),
    o = n(43189),
    c = n(985018);

function u(e) {
    let {
        channel: t,
        maxWidth: n
    } = e, u = (0, r.jsx)(a.Ay.Icon, {
        icon: l.XSmallIcon,
        tooltip: c.intl.string(c.t.cpT0Cq),
        onClick: () => i.A.toggleParticipantsList(t.id, !1)
    });
    return (0, r.jsx)(s.A, {
        sidebarType: s.X.ParticipantsSidebar,
        maxWidth: n,
        floatingLayer: o.Ay,
        children: (0, r.jsxs)(a.Ay, {
            toolbar: u,
            "aria-label": c.intl.string(c.t["jNqDh/"]),
            children: [(0, r.jsx)(a.Ay.Icon, {
                icon: l.GroupIcon,
                disabled: !0,
                "aria-label": c.intl.string(c.t["jNqDh/"])
            }), (0, r.jsx)(a.Ay.Title, {
                children: c.intl.string(c.t["jNqDh/"])
            })]
        })
    })
}