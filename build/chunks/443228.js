/** chunk id: 443228 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(734057),
    s = n(71393),
    r = n(576705),
    a = n(483660),
    o = n(652215);

function d(e) {
    let {
        code: t,
        message: n
    } = e, [d, c] = t.split("/"), u = l.A.getChannel(c), m = s.A.getGuild(d);
    return null != u && u.isGuildVocal() && null != m && r.A.can(o.xBc.VIEW_CHANNEL, u) && r.A.can(o.xBc.CONNECT, u) ? (0, i.jsx)(a.A, {
        guild: m,
        channel: u,
        message: n
    }) : null
}