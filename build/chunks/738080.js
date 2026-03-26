/** chunk id: 738080 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(556445),
    r = i(833349),
    s = i(90644),
    a = i(652215);

function o(e) {
    let {
        activity: t,
        user: i,
        guildId: o,
        channelId: d,
        source: u,
        onAction: c
    } = e;
    return null != t && (0, r.A)(t, a.jUm.SYNC) && (0, s.A)(t) ? (0, n.jsx)(l.A, {
        size: "sm",
        variant: "secondary",
        user: i,
        activity: t,
        guildId: o ?? void 0,
        channelId: d,
        source: u,
        onAction: c
    }) : null
}