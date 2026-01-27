/** Chunk was on 92917 **/
/** chunk id: 229673, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var i = n(934551),
    l = n(429913),
    a = n(769015),
    s = n(975571),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(652215),
    p = n(985018),
    m = n(953837);

function f(e) {
    let {
        message: t,
        channel: n,
        author: f,
        compact: g
    } = e, {
        nick: h
    } = (0, o.d8)(f, n), _ = (0, c.P)({
        user: f,
        channelId: n.id,
        guildId: void 0,
        messageId: void 0
    })(), b = (0, l.h)(t.applicationId);
    if (null == b) return null;
    let A = p.intl.format(p.t.m7Lwas, {
        username: h,
        usernameHook: _,
        gameName: b.name,
        gameIconHook: e => (0, r.jsxs)("span", {
            className: m.Y_,
            children: [(0, r.jsx)(a.A, {
                game: b,
                size: a.M.XXSMALL,
                className: m.p4
            }), " ", e]
        }),
        helpdeskArticle: s.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, r.jsx)(u.A, {
        iconNode: (0, r.jsx)(i.GameControllerIcon, {
            size: "sm"
        }),
        compact: g,
        contentClassName: m.Qs,
        children: (0, r.jsx)("div", {
            children: A
        })
    })
}