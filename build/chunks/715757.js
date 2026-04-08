/** chunk id: 715757 params = (module,exports,require) **/
e.d(t, {
    Qo: () => h,
    V: () => A,
    W1: () => f,
    ml: () => _,
    vb: () => b
});
var i = e(64700),
    l = e(311907),
    a = e(843472),
    r = e(803306),
    s = e(71393),
    o = e(320501),
    d = e(376708),
    u = e(272720),
    c = e(56595);

function h(n) {
    return (0, l.bG)([s.A], () => {
        if (null == n) return !1;
        let t = s.A.getGuild(n);
        return null != t && (0, c.A)(t) && null != (0, u.A)(t)
    })
}

function A(n) {
    return (0, d.uW)(n)
}

function f(n) {
    return (0, d.xJ)(n)
}

function _(n) {
    let {
        messageReference: t
    } = n, e = (0, l.bG)([o.A], () => null != t ? o.A.getMessage(t.channel_id, t.message_id) : null);
    (0, i.useEffect)(() => {
        null == e && null != t && a.A.fetchMessages({
            channelId: t.channel_id,
            jump: {
                messageId: t.message_id
            },
            limit: 10
        })
    }, [e, t])
}

function b(n) {
    let t = n?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != t && (0, r.wz)(t)
}