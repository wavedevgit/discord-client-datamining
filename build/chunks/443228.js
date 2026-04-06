/** chunk id: 443228 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(734057),
    s = n(71393),
    a = n(576705),
    r = n(483660),
    o = n(652215);

function d(e) {
    let {
        code: t,
        message: n
    } = e, [d, c] = t.split("/"), u = l.A.getChannel(c), _ = s.A.getGuild(d);
    return null != u && u.isGuildVocal() && null != _ && a.A.can(o.xBc.VIEW_CHANNEL, u) && a.A.can(o.xBc.CONNECT, u) ? (0, i.jsx)(r.A, {
        guild: _,
        channel: u,
        message: n
    }) : null
}