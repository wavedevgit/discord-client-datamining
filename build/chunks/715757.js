/** chunk id: 715757 params = (module,exports,require) **/
t.d(n, {
    Qo: () => f,
    V: () => h,
    W1: () => A,
    ml: () => v,
    vb: () => p
});
var i = t(64700),
    r = t(311907),
    l = t(843472),
    a = t(803306),
    d = t(71393),
    o = t(320501),
    u = t(376708),
    s = t(272720),
    c = t(56595);

function f(e) {
    return (0, r.bG)([d.A], () => {
        if (null == e) return !1;
        let n = d.A.getGuild(e);
        return null != n && (0, c.A)(n) && null != (0, s.A)(n)
    })
}

function h(e) {
    return (0, u.uW)(e)
}

function A(e) {
    return (0, u.xJ)(e)
}

function v(e) {
    let {
        messageReference: n
    } = e, t = (0, r.bG)([o.A], () => null != n ? o.A.getMessage(n.channel_id, n.message_id) : null);
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

function p(e) {
    let n = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != n && (0, a.wz)(n)
}