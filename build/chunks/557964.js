/** chunk id: 557964 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var a = n(435546),
    l = n(466853),
    s = n(120791);

function r(e) {
    let {
        user: t,
        widget: n,
        guildId: r,
        channelId: o,
        disableInteraction: d,
        ...c
    } = e;
    return (0, i.jsx)(l.A, {
        userId: t.id,
        widget: n,
        disableInteraction: d,
        ...c,
        children: n.games.length > 0 ? (0, i.jsx)(s.A, {
            userId: t.id,
            widgetType: n.type,
            games: n.games,
            guildId: r,
            channelId: o,
            disableInteraction: d
        }) : (0, i.jsx)(a.A, {
            widget: n
        })
    })
}