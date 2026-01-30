/** Chunk was on 64935 **/
/** chunk id: 443228, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048), n(747238);
var r = n(627968);
n(64700);
var i = n(734057),
    l = n(71393),
    a = n(576705),
    s = n(483660),
    o = n(652215);

function c(e) {
    let {
        code: t,
        message: n
    } = e, [c, u] = t.split("/"), d = i.A.getChannel(u), p = l.A.getGuild(c);
    return null != d && d.isGuildVocal() && null != p && a.A.can(o.xBc.VIEW_CHANNEL, d) && a.A.can(o.xBc.CONNECT, d) ? (0, r.jsx)(s.A, {
        guild: p,
        channel: d,
        message: n
    }) : null
}