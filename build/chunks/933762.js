/** chunk id: 933762 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(734057),
    s = n(763754),
    o = n(888675),
    c = n(985018),
    d = n(135066);

function u(e) {
    let {
        message: t,
        compact: n,
        usernameHook: u,
        onClickThread: m,
        onClickViewThreads: _,
        onContextMenuThread: A
    } = e, f = (0, s.Ay)(t), E = u(f), h = (0, l.bG)([r.A], () => r.A.getChannel(t.messageReference?.channel_id)), g = c.intl.format(c.t.cZ9Uf2, {
        actorName: f.nick,
        actorHook: E,
        threadName: h?.name ?? t.content,
        threadOnClick: {
            onClick: m,
            onContextMenu: A
        },
        viewThreadsOnClick: _
    });
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(a.ysw, {
            size: "md",
            color: "currentColor",
            className: d.K
        }),
        timestamp: t.timestamp,
        compact: n,
        children: g
    })
}