/** chunk id: 715757 params = (module,exports,require) **/
n.d(e, {
    Qo: () => f,
    V: () => h,
    W1: () => A,
    ml: () => b,
    vb: () => p
});
var i = n(64700),
    l = n(311907),
    a = n(843472),
    r = n(803306),
    d = n(71393),
    s = n(320501),
    u = n(376708),
    o = n(272720),
    c = n(56595);

function f(t) {
    return (0, l.bG)([d.A], () => {
        if (null == t) return !1;
        let e = d.A.getGuild(t);
        return null != e && (0, c.A)(e) && null != (0, o.A)(e)
    })
}

function h(t) {
    return (0, u.uW)(t)
}

function A(t) {
    return (0, u.xJ)(t)
}

function b(t) {
    let {
        messageReference: e
    } = t, n = (0, l.bG)([s.A], () => null != e ? s.A.getMessage(e.channel_id, e.message_id) : null);
    (0, i.useEffect)(() => {
        null == n && null != e && a.A.fetchMessages({
            channelId: e.channel_id,
            jump: {
                messageId: e.message_id
            },
            limit: 10
        })
    }, [n, e])
}

function p(t) {
    let e = t?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != e && (0, r.wz)(e)
}