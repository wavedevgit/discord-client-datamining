/** chunk id: 836629 params = (module,exports,require) **/
n.d(t, {
    $: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(538451),
    d = n(562153),
    c = n(581448),
    u = n(824078);

function _(e) {
    let {
        guildId: t,
        channelId: n,
        users: l,
        ...s
    } = e, o = a.useCallback(e => (0, i.jsx)(m, {
        users: e,
        guildId: t,
        channelId: n
    }), [t, n]);
    return (0, i.jsx)(r.YNO, {
        renderPopout: () => o(l),
        ...s
    })
}

function m(e) {
    let {
        users: t,
        guildId: n,
        channelId: a
    } = e;
    return (0, i.jsx)(r.HOs, {
        className: s()(u.popover, c.o),
        style: {
            "--custom-popover-width": "200px"
        },
        children: (0, i.jsx)("div", {
            children: t.map(e => (0, i.jsx)(o.A, {
                user: e,
                guildId: n ?? void 0,
                channelId: a,
                nick: d.Ay.getNickname(n, a, e)
            }, e.id))
        })
    })
}