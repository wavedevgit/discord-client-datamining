/** chunk id: 715757, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Qo: () => A,
    V: () => f,
    W1: () => h,
    ml: () => v,
    vb: () => g
});
var r = t(64700),
    i = t(311907),
    l = t(843472),
    a = t(803306),
    d = t(71393),
    s = t(320501),
    u = t(376708),
    o = t(272720),
    c = t(56595);

function A(e) {
    return (0, i.bG)([d.A], () => {
        if (null == e) return !1;
        let n = d.A.getGuild(e);
        return null != n && (0, c.A)(n) && null != (0, o.A)(n)
    })
}

function f(e) {
    return (0, u.uW)(e)
}

function h(e) {
    return (0, u.xJ)(e)
}

function v(e) {
    let {
        messageReference: n
    } = e, t = (0, i.bG)([s.A], () => null != n ? s.A.getMessage(n.channel_id, n.message_id) : null);
    (0, r.useEffect)(() => {
        null == t && null != n && l.A.fetchMessages({
            channelId: n.channel_id,
            jump: {
                messageId: n.message_id
            },
            limit: 10
        })
    }, [t, n])
}

function g(e) {
    let n = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != n && (0, a.wz)(n)
}