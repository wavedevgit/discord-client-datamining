/** chunk id: 836629 params = (module,exports,require) **/
n.d(t, {
    $: () => _
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    o = n(538451),
    d = n(562153),
    c = n(460696),
    u = n(442078);

function _(e) {
    let {
        guildId: t,
        channelId: n,
        users: s,
        ...r
    } = e, o = l.useCallback(e => (0, i.jsx)(m, {
        users: e,
        guildId: t,
        channelId: n
    }), [t, n]);
    return (0, i.jsx)(a.YNO, {
        renderPopout: () => o(s),
        ...r
    })
}

function m(e) {
    let {
        users: t,
        guildId: n,
        channelId: l
    } = e;
    return (0, i.jsx)(a.HOs, {
        className: r()(u.popover, c.o),
        style: {
            "--custom-popover-width": "200px"
        },
        children: (0, i.jsx)("div", {
            children: t.map(e => (0, i.jsx)(o.A, {
                user: e,
                guildId: n ?? void 0,
                channelId: l,
                nick: d.Ay.getNickname(n, l, e)
            }, e.id))
        })
    })
}