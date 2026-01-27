/** Chunk was on 92917 **/
/** chunk id: 933762, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(734057),
    s = n(763754),
    o = n(888675),
    c = n(985018),
    u = n(324208);

function d(e) {
    var t;
    let {
        message: n,
        compact: d,
        usernameHook: p,
        onClickThread: m,
        onClickViewThreads: f,
        onContextMenuThread: g
    } = e, h = (0, s.Ay)(n), _ = p(h), b = (0, i.bG)([a.A], () => {
        var e;
        return a.A.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id)
    }), A = c.intl.format(c.t.cZ9Uf2, {
        actorName: h.nick,
        actorHook: _,
        threadName: null != (t = null == b ? void 0 : b.name) ? t : n.content,
        threadOnClick: {
            onClick: m,
            onContextMenu: g
        },
        viewThreadsOnClick: f
    });
    return (0, r.jsx)(o.A, {
        iconNode: (0, r.jsx)(l.ysw, {
            size: "md",
            color: "currentColor",
            className: u.K
        }),
        timestamp: n.timestamp,
        compact: d,
        children: A
    })
}