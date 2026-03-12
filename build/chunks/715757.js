/** chunk id: 715757 params = (module,exports,require) **/
t.d(n, {
    Qo: () => h,
    V: () => A,
    W1: () => f,
    ml: () => v,
    vb: () => b
});
var i = t(64700),
    r = t(311907),
    l = t(843472),
    a = t(803306),
    d = t(71393),
    s = t(320501),
    o = t(376708),
    u = t(272720),
    c = t(56595);

function h(e) {
    return (0, r.bG)([d.A], () => {
        if (null == e) return !1;
        let n = d.A.getGuild(e);
        return null != n && (0, c.A)(n) && null != (0, u.A)(n)
    })
}

function A(e) {
    return (0, o.uW)(e)
}

function f(e) {
    return (0, o.xJ)(e)
}

function v(e) {
    let {
        messageReference: n
    } = e, t = (0, r.bG)([s.A], () => null != n ? s.A.getMessage(n.channel_id, n.message_id) : null);
    (0, i.useEffect)(() => {
        null == t && null != n && l.A.fetchMessages({
            channelId: n.channel_id,
            jump: {
                messageId: n.message_id
            },
            limit: 10
        })
    }, [t, n])
}

function b(e) {
    let n = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != n && (0, a.wz)(n)
}