/** chunk id: 738080 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(556445),
    r = n(833349),
    s = n(90644),
    a = n(652215);

function o(t) {
    let {
        activity: e,
        user: n,
        guildId: o,
        channelId: u,
        source: d,
        onAction: c
    } = t;
    return null != e && (0, r.A)(e, a.jUm.SYNC) && (0, s.A)(e) ? (0, i.jsx)(l.A, {
        size: "sm",
        variant: "secondary",
        user: n,
        activity: e,
        guildId: o ?? void 0,
        channelId: u,
        source: d,
        onAction: c
    }) : null
}