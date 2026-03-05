/** chunk id: 715757, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Qo: () => A,
    V: () => f,
    W1: () => h,
    ml: () => v,
    vb: () => C
});
var i = t(64700),
    l = t(311907),
    r = t(843472),
    a = t(803306),
    s = t(71393),
    d = t(320501),
    o = t(376708),
    u = t(272720),
    c = t(56595);

function A(e) {
    return (0, l.bG)([s.A], () => {
        if (null == e) return !1;
        let n = s.A.getGuild(e);
        return null != n && (0, c.A)(n) && null != (0, u.A)(n)
    })
}

function f(e) {
    return (0, o.uW)(e)
}

function h(e) {
    return (0, o.xJ)(e)
}

function v(e) {
    let {
        messageReference: n
    } = e, t = (0, l.bG)([d.A], () => null != n ? d.A.getMessage(n.channel_id, n.message_id) : null);
    (0, i.useEffect)(() => {
        null == t && null != n && r.A.fetchMessages({
            channelId: n.channel_id,
            jump: {
                messageId: n.message_id
            },
            limit: 10
        })
    }, [t, n])
}

function C(e) {
    let n = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != n && (0, a.wz)(n)
}