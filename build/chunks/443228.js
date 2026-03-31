/** chunk id: 443228 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(734057),
    r = n(71393),
    l = n(576705),
    s = n(483660),
    o = n(652215);

function d(e) {
    let {
        code: t,
        message: n
    } = e, [d, c] = t.split("/"), u = a.A.getChannel(c), _ = r.A.getGuild(d);
    return null != u && u.isGuildVocal() && null != _ && l.A.can(o.xBc.VIEW_CHANNEL, u) && l.A.can(o.xBc.CONNECT, u) ? (0, i.jsx)(s.A, {
        guild: _,
        channel: u,
        message: n
    }) : null
}