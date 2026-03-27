/** chunk id: 760459 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(627968),
    i = n(942528),
    l = n(409626);

function r(e) {
    let {
        entry: t,
        viewId: n,
        officialGuildId: r,
        source: s
    } = e;
    return (0, a.jsx)(i.A, {
        ...e,
        onReaction: () => {
            (0, l.Tn)({
                action: l.Ws.SendMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: r,
                source: s
            })
        },
        onRequestOpen: () => {
            (0, l.Tn)({
                action: l.Ws.ClickMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: r,
                source: s
            })
        }
    })
}