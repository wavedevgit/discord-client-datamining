/** Chunk was on 98865 **/
/** chunk id: 715757, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Qo: () => f,
    V: () => A,
    W1: () => b,
    ml: () => p,
    vb: () => v
});
var r = n(64700),
    i = n(311907),
    l = n(843472),
    a = n(803306),
    o = n(71393),
    s = n(320501),
    c = n(376708),
    u = n(272720),
    d = n(56595);

function f(e) {
    return (0, i.bG)([o.A], () => {
        if (null == e) return !1;
        let t = o.A.getGuild(e);
        return null != t && (0, d.A)(t) && null != (0, u.A)(t)
    })
}

function A(e) {
    return (0, c.uW)(e)
}

function b(e) {
    return (0, c.xJ)(e)
}

function p(e) {
    let {
        messageReference: t
    } = e, n = (0, i.bG)([s.A], () => null != t ? s.A.getMessage(t.channel_id, t.message_id) : null);
    (0, r.useEffect)(() => {
        null == n && null != t && l.A.fetchMessages({
            channelId: t.channel_id,
            jump: {
                messageId: t.message_id
            },
            limit: 10
        })
    }, [n, t])
}

function v(e) {
    var t, n;
    let r = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? void 0 : t.reported_user_id;
    null != r && (0, a.wz)(r)
}