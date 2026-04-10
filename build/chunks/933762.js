/** chunk id: 933762 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(47167),
    s = n(734057),
    o = n(763754),
    c = n(888675),
    u = n(985018),
    d = n(449105);

function _(e) {
    let {
        message: t,
        compact: n,
        usernameHook: _,
        onClickThread: A,
        onClickViewThreads: m,
        onContextMenuThread: E
    } = e, T = (0, o.Ay)(t), I = _(T), g = (0, l.bG)([s.A], () => s.A.getChannel(t.messageReference?.channel_id)), N = (0, r.Ay)(g), f = u.intl.format(u.t.cZ9Uf2, {
        actorName: T.nick,
        actorHook: I,
        threadName: N ?? t.content,
        threadOnClick: {
            onClick: A,
            onContextMenu: E
        },
        viewThreadsOnClick: m
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(a.ysw, {
            size: "md",
            color: "currentColor",
            className: d.K
        }),
        timestamp: t.timestamp,
        compact: n,
        children: f
    })
}