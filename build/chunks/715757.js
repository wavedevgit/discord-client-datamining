/** chunk id: 715757 params = (module,exports,require) **/
t.d(n, {
    Qo: () => A,
    V: () => h,
    W1: () => f,
    ml: () => _,
    vb: () => g
});
var r = t(64700),
    i = t(311907),
    l = t(843472),
    a = t(803306),
    d = t(71393),
    u = t(320501),
    o = t(376708),
    s = t(272720),
    c = t(56595);

function A(e) {
    return (0, i.bG)([d.A], () => {
        if (null == e) return !1;
        let n = d.A.getGuild(e);
        return null != n && (0, c.A)(n) && null != (0, s.A)(n)
    })
}

function h(e) {
    return (0, o.uW)(e)
}

function f(e) {
    return (0, o.xJ)(e)
}

function _(e) {
    let {
        messageReference: n
    } = e, t = (0, i.bG)([u.A], () => null != n ? u.A.getMessage(n.channel_id, n.message_id) : null);
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