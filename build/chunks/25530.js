/** chunk id: 25530, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var l = n(435546),
    a = n(466853),
    s = n(294868);

function r(e) {
    let {
        user: t,
        widget: n,
        guildId: r,
        channelId: o,
        disableInteraction: c,
        ...d
    } = e;
    return (0, i.jsx)(a.A, {
        userId: t.id,
        widget: n,
        disableInteraction: c,
        ...d,
        children: n.games.length > 0 ? (0, i.jsx)(s.A, {
            user: t,
            widgetType: n.type,
            games: n.games,
            guildId: r,
            channelId: o,
            disableInteraction: c
        }) : (0, i.jsx)(l.A, {
            widget: n
        })
    })
}