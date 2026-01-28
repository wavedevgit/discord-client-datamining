/** Chunk was on 78572 **/
/** chunk id: 738080, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(556445),
    l = n(833349),
    a = n(90644),
    s = n(652215);

function o(e) {
    let {
        activity: t,
        user: n,
        guildId: o,
        channelId: c,
        source: u,
        onAction: d
    } = e;
    return null != t && (0, l.A)(t, s.jUm.SYNC) && (0, a.A)(t) ? (0, r.jsx)(i.A, {
        size: "sm",
        variant: "secondary",
        user: n,
        activity: t,
        guildId: null != o ? o : void 0,
        channelId: c,
        source: u,
        onAction: d
    }) : null
}