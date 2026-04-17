/** chunk id: 715757 params = (module,exports,require) **/
t.d(e, {
    Qo: () => u,
    V: () => h,
    W1: () => g,
    ml: () => x,
    vb: () => f
});
var l = t(64700),
    r = t(311907),
    i = t(843472),
    s = t(803306),
    a = t(71393),
    d = t(320501),
    c = t(376708),
    o = t(272720),
    A = t(56595);

function u(n) {
    return (0, r.bG)([a.A], () => {
        if (null == n) return !1;
        let e = a.A.getGuild(n);
        return null != e && (0, A.A)(e) && null != (0, o.A)(e)
    })
}

function h(n) {
    return (0, c.uW)(n)
}

function g(n) {
    return (0, c.xJ)(n)
}

function x(n) {
    let {
        messageReference: e
    } = n, t = (0, r.bG)([d.A], () => null != e ? d.A.getMessage(e.channel_id, e.message_id) : null);
    (0, l.useEffect)(() => {
        null == t && null != e && i.A.fetchMessages({
            channelId: e.channel_id,
            jump: {
                messageId: e.message_id
            },
            limit: 10
        })
    }, [t, e])
}

function f(n) {
    let e = n?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != e && (0, s.wz)(e)
}