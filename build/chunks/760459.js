/** chunk id: 760459, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => s
});
var n = i(627968),
    l = i(942528),
    a = i(409626);

function s(e) {
    let {
        entry: t,
        viewId: i,
        officialGuildId: s,
        source: r
    } = e;
    return (0, n.jsx)(l.A, {
        ...e,
        onReaction: () => {
            (0, a.Tn)({
                action: a.Ws.SendMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: i,
                officialGuildId: s,
                source: r
            })
        },
        onRequestOpen: () => {
            (0, a.Tn)({
                action: a.Ws.ClickMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: i,
                officialGuildId: s,
                source: r
            })
        }
    })
}