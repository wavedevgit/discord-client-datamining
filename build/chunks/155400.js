/** chunk id: 155400 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var l = n(435546),
    a = n(466853),
    s = n(742710);

function r(e) {
    let {
        user: t,
        widget: n,
        guildId: r,
        channelId: o,
        disableInteraction: d,
        ...c
    } = e, u = n.games[0];
    return (0, i.jsx)(a.A, {
        userId: t.id,
        widget: n,
        disableInteraction: d,
        ...c,
        children: null != u ? (0, i.jsx)(s.A, {
            user: t,
            widgetType: n.type,
            game: u,
            guildId: r,
            channelId: o,
            disableInteraction: d
        }) : (0, i.jsx)(l.A, {
            widget: n
        })
    })
}