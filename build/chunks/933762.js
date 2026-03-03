/** chunk id: 933762, original params: e,t,n (module,exports,require) **/
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
    d = n(324208);

function u(e) {
    let {
        message: t,
        compact: n,
        usernameHook: u,
        onClickThread: m,
        onClickViewThreads: _,
        onContextMenuThread: A
    } = e, f = (0, s.Ay)(t), h = u(f), g = (0, l.bG)([r.A], () => r.A.getChannel(t.messageReference?.channel_id)), E = c.intl.format(c.t.cZ9Uf2, {
        actorName: f.nick,
        actorHook: h,
        threadName: g?.name ?? t.content,
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
        children: E
    })
}