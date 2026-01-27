/** Chunk was on web.js **/
/** chunk id: 376708, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C$: () => b,
    Fo: () => g,
    G9: () => A,
    KB: () => _,
    Mn: () => O,
    Yj: () => v,
    iU: () => m,
    uW: () => y,
    xJ: () => E
}), n(638769), n(136722);
var r = n(811602),
    i = n(282108),
    a = n(927492),
    o = n(969043);
n(134413);
var s = n(203389),
    l = n(734057),
    c = n(71393),
    u = n(320501);
n(287809), n(488926);
var d = n(628691),
    f = n(272720),
    p = n(56595);

function _(e) {
    if (!(0, d.UN)(e.author)) return !1;
    let t = l.A.getChannel(e.channel_id);
    if (null == t) return !1;
    let n = c.A.getGuild(t.guild_id);
    if (null == n) return !1;
    let r = (0, p.A)(n),
        i = (0, f.A)(n);
    return r && null != i
}

function h(e) {
    return y(l.A.getChannel(e))
}

function m(e) {
    return g(l.A.getChannel(e))
}

function g(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumChannel()
}

function E(e) {
    return null != e && e.isModeratorReportChannel() && e.isForumPost()
}

function y(e) {
    return null != e && (g(e) || E(e))
}

function b(e) {
    if (null == e || !(0, s.L)() || !h(e)) return !0;
    let {
        loaded: t,
        firstMessage: n
    } = o.A.getMessage(e);
    return !t || null == n || !(0, i.y5)(n, r.LO.EXPLICIT)
}

function O(e, t) {
    return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && E(t)
}

function v(e) {
    return e.sort((e, t) => e.id == a.b.MULTIPLE_REPORTS ? -1 : +(t.id == a.b.MULTIPLE_REPORTS))
}

function A(e, t) {
    var n, r, i;
    let a = l.A.getChannel(e);
    if (null == a || !a.isModeratorReportChannel()) return !1;
    let o = u.A.getMessages(e).first();
    return (null == o || null == (i = o.messageSnapshots) || null == (r = i[0]) || null == (n = r.moderatorReport) ? void 0 : n.reported_user_id) === t
}
n(953660)