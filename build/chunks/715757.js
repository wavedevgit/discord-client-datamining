/** chunk id: 715757 params = (module,exports,require) **/
e.d(n, {
    Qo: () => f,
    V: () => h,
    W1: () => A,
    ml: () => _,
    vb: () => b
});
var i = e(64700),
    l = e(311907),
    a = e(843472),
    r = e(803306),
    o = e(71393),
    u = e(320501),
    d = e(376708),
    s = e(272720),
    c = e(56595);

function f(t) {
    return (0, l.bG)([o.A], () => {
        if (null == t) return !1;
        let n = o.A.getGuild(t);
        return null != n && (0, c.A)(n) && null != (0, s.A)(n)
    })
}

function h(t) {
    return (0, d.uW)(t)
}

function A(t) {
    return (0, d.xJ)(t)
}

function _(t) {
    let {
        messageReference: n
    } = t, e = (0, l.bG)([u.A], () => null != n ? u.A.getMessage(n.channel_id, n.message_id) : null);
    (0, i.useEffect)(() => {
        null == e && null != n && a.A.fetchMessages({
            channelId: n.channel_id,
            jump: {
                messageId: n.message_id
            },
            limit: 10
        })
    }, [e, n])
}

function b(t) {
    let n = t?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != n && (0, r.wz)(n)
}