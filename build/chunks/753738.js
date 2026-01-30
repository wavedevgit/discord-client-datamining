/** chunk id: 753738, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Nr: () => l,
    PD: () => f,
    cw: () => u,
    lH: () => s,
    yf: () => c
}), n(65821), n(896048);
var r = n(884384),
    i = n(734057),
    a = n(652215),
    o = n(985018);
class s extends Error {}
class l extends Error {}
let c = new Set([a.t02.AUTOMOD_MESSAGE_BLOCKED, a.t02.AUTOMOD_TITLE_BLOCKED, a.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

function u(e, t) {
    if (null == e) return null;
    let {
        code: n,
        message: r
    } = e;
    if (!c.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let s = i.A.getChannel(t);
    return (null == s ? void 0 : s.isThread()) ? o.intl.string(o.t.DVdG9E) : ((null == s ? void 0 : s.isForumPost()) || (null == s ? void 0 : s.isForumLikeChannel())) && (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED) ? o.intl.string(o.t.ipgKDg) : null
}

function d(e) {
    let t = i.A.getChannel(e.message.channelId);
    return (0, r.Qn)(e) ? o.intl.string(o.t.bU6o0z) : (null == t ? void 0 : t.isThread()) ? o.intl.string(o.t.DVdG9E) : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? o.intl.string(o.t.ipgKDg) : o.intl.string(o.t.zQ69pv)
}

function f(e, t) {
    let n = u(t);
    return null != n ? n : null == e ? o.intl.string(o.t.zQ69pv) : d(e)
}