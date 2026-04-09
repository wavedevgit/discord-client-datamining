/** chunk id: 155400 params = (module,exports,require) **/
i.d(t, {
    A: () => r
});
var n = i(627968);
i(64700);
var s = i(435546),
    l = i(466853),
    a = i(742710);

function r(e) {
    let {
        user: t,
        widget: i,
        guildId: r,
        channelId: o,
        disableInteraction: d,
        ...c
    } = e, u = i.games[0];
    return (0, n.jsx)(l.A, {
        userId: t.id,
        widget: i,
        disableInteraction: d,
        ...c,
        children: null != u ? (0, n.jsx)(a.A, {
            user: t,
            widgetType: i.type,
            game: u,
            guildId: r,
            channelId: o,
            disableInteraction: d
        }) : (0, n.jsx)(s.A, {
            widget: i
        })
    })
}