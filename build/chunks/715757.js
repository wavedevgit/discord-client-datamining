/** chunk id: 715757 params = (module,exports,require) **/
n.d(e, {
    Qo: () => f,
    V: () => A,
    W1: () => p,
    ml: () => h,
    vb: () => v
});
var i = n(64700),
    l = n(311907),
    a = n(843472),
    r = n(803306),
    s = n(71393),
    u = n(320501),
    o = n(376708),
    d = n(272720),
    c = n(56595);

function f(t) {
    return (0, l.bG)([s.A], () => {
        if (null == t) return !1;
        let e = s.A.getGuild(t);
        return null != e && (0, c.A)(e) && null != (0, d.A)(e)
    })
}

function A(t) {
    return (0, o.uW)(t)
}

function p(t) {
    return (0, o.xJ)(t)
}

function h(t) {
    let {
        messageReference: e
    } = t, n = (0, l.bG)([u.A], () => null != e ? u.A.getMessage(e.channel_id, e.message_id) : null);
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

function v(t) {
    let e = t?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != e && (0, r.wz)(e)
}