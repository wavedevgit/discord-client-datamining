/** chunk id: 557964 params = (module,exports,require) **/
i.d(t, {
    A: () => r
});
var n = i(627968);
i(64700);
var s = i(435546),
    l = i(466853),
    a = i(120791);

function r(e) {
    let {
        user: t,
        widget: i,
        guildId: r,
        channelId: o,
        disableInteraction: d,
        ...c
    } = e;
    return (0, n.jsx)(l.A, {
        userId: t.id,
        widget: i,
        disableInteraction: d,
        ...c,
        children: i.games.length > 0 ? (0, n.jsx)(a.A, {
            userId: t.id,
            widgetType: i.type,
            games: i.games,
            guildId: r,
            channelId: o,
            disableInteraction: d
        }) : (0, n.jsx)(s.A, {
            widget: i
        })
    })
}