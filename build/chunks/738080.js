/** chunk id: 738080 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var a = i(556445),
    l = i(833349),
    s = i(90644),
    r = i(652215);

function o(e) {
    let {
        activity: t,
        user: i,
        guildId: o,
        channelId: c,
        source: d,
        onAction: u
    } = e;
    return null != t && (0, l.A)(t, r.jUm.SYNC) && (0, s.A)(t) ? (0, n.jsx)(a.A, {
        size: "sm",
        variant: "secondary",
        user: i,
        activity: t,
        guildId: o ?? void 0,
        channelId: c,
        source: d,
        onAction: u
    }) : null
}