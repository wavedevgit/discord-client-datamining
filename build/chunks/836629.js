/** chunk id: 836629 params = (module,exports,require) **/
n.d(t, {
    $: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(397927),
    o = n(538451),
    d = n(562153),
    c = n(460696),
    u = n(442078);

function m(e) {
    let {
        guildId: t,
        channelId: n,
        users: r,
        ...s
    } = e, o = l.useCallback(e => (0, i.jsx)(_, {
        users: e,
        guildId: t,
        channelId: n
    }), [t, n]);
    return (0, i.jsx)(a.YNO, {
        renderPopout: () => o(r),
        ...s
    })
}

function _(e) {
    let {
        users: t,
        guildId: n,
        channelId: l
    } = e;
    return (0, i.jsx)(a.HOs, {
        className: s()(u.popover, c.o),
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