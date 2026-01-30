/** chunk id: 271872, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => f
});
var n = r(562465),
    s = r(47167),
    o = r(71393),
    i = r(430452),
    l = r(994500),
    a = r(287809),
    c = r(544105),
    d = r(652215),
    u = r(985018);

function f(e, t) {
    var r;
    let {
        nonce: f,
        forQRCode: p
    } = t, m = e.getGuildId(), x = o.A.getGuild(m), y = (0, c.hw)({
        guildId: null != m ? m : d.D0I,
        channelId: e.id,
        channelName: (0, s.m1)(e, a.default, l.A),
        guildName: null != (r = null == x ? void 0 : x.name) ? r : u.intl.string(u.t.LJpTRF),
        muted: i.A.isSelfMute(),
        deafened: i.A.isSelfDeaf(),
        nonce: f
    });
    return p ? "".concat((0, n.TP)()).concat(d.Rsh.XBOX_HANDOFF, "?").concat(y.toString()) : "".concat(c.Gp, "?").concat(y.toString())
}