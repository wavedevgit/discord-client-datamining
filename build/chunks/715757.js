/** chunk id: 715757, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Qo: () => f,
    V: () => A,
    W1: () => p,
    ml: () => b,
    vb: () => v
});
var r = n(64700),
    i = n(311907),
    l = n(843472),
    a = n(803306),
    o = n(71393),
    c = n(320501),
    s = n(376708),
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
    return (0, s.uW)(e)
}

function p(e) {
    return (0, s.xJ)(e)
}

function b(e) {
    let {
        messageReference: t
    } = e, n = (0, i.bG)([c.A], () => null != t ? c.A.getMessage(t.channel_id, t.message_id) : null);
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