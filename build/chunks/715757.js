/** Chunk was on 92750 **/
/** chunk id: 715757, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Qo: () => d,
    V: () => g,
    W1: () => f,
    ml: () => b,
    vb: () => h
});
var s = n(64700),
    r = n(311907),
    a = n(843472),
    i = n(803306),
    l = n(71393),
    c = n(320501),
    o = n(376708),
    u = n(272720),
    p = n(56595);

function d(e) {
    return (0, r.bG)([l.A], () => {
        if (null == e) return !1;
        let t = l.A.getGuild(e);
        return null != t && (0, p.A)(t) && null != (0, u.A)(t)
    })
}

function g(e) {
    return (0, o.uW)(e)
}

function f(e) {
    return (0, o.xJ)(e)
}

function b(e) {
    let {
        messageReference: t
    } = e, n = (0, r.bG)([c.A], () => null != t ? c.A.getMessage(t.channel_id, t.message_id) : null);
    (0, s.useEffect)(() => {
        null == n && null != t && a.A.fetchMessages({
            channelId: t.channel_id,
            jump: {
                messageId: t.message_id
            },
            limit: 10
        })
    }, [n, t])
}

function h(e) {
    var t, n;
    let s = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? void 0 : t.reported_user_id;
    null != s && (0, i.wz)(s)
}