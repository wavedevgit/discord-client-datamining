/** chunk id: 313880, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => c
});
var i = s(627968);
s(64700);
var n = s(503698),
    r = s.n(n),
    l = s(397927),
    a = s(447215),
    o = s(435470),
    d = s(985018),
    h = s(834502);
let c = e => {
    var t, s;
    let {
        message: n,
        channel: c,
        renderColon: u,
        hasUnreads: g
    } = e, {
        user: m,
        author: v
    } = (0, o.kn)(c), p = null != (t = null != (s = null == v ? void 0 : v.nick) ? s : null == m ? void 0 : m.username) ? t : "", f = (0, a.P)({
        user: null == n ? void 0 : n.author,
        channelId: c.id,
        guildId: c.guild_id,
        messageId: null == n ? void 0 : n.id,
        stopPropagation: !0,
        ariaLabel: d.intl.formatToPlainString(d.t.CSIeU1, {
            name: p
        })
    })(null != v ? v : void 0)(p, c.id);
    return (0, i.jsxs)(l.Text, {
        tag: "span",
        className: r()(h.c, {
            [h.p]: g
        }),
        variant: "text-sm/semibold",
        children: [f, !0 === u ? ": " : null]
    })
}