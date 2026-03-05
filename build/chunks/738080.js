/** chunk id: 738080, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(556445),
    r = i(833349),
    s = i(90644),
    a = i(652215);

function o(t) {
    let {
        activity: e,
        user: i,
        guildId: o,
        channelId: d,
        source: u,
        onAction: c
    } = t;
    return null != e && (0, r.A)(e, a.jUm.SYNC) && (0, s.A)(e) ? (0, n.jsx)(l.A, {
        size: "sm",
        variant: "secondary",
        user: i,
        activity: e,
        guildId: o ?? void 0,
        channelId: d,
        source: u,
        onAction: c
    }) : null
}