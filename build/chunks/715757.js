/** chunk id: 715757 params = (module,exports,require) **/
n.d(t, {
    Qo: () => A,
    V: () => f,
    W1: () => E,
    ml: () => h,
    vb: () => _
});
var i = n(64700),
    l = n(311907),
    r = n(843472),
    a = n(803306),
    u = n(71393),
    d = n(320501),
    s = n(376708),
    o = n(272720),
    c = n(56595);

function A(e) {
    return (0, l.bG)([u.A], () => {
        if (null == e) return !1;
        let t = u.A.getGuild(e);
        return null != t && (0, c.A)(t) && null != (0, o.A)(t)
    })
}

function f(e) {
    return (0, s.uW)(e)
}

function E(e) {
    return (0, s.xJ)(e)
}

function h(e) {
    let {
        messageReference: t
    } = e, n = (0, l.bG)([d.A], () => null != t ? d.A.getMessage(t.channel_id, t.message_id) : null);
    (0, i.useEffect)(() => {
        null == n && null != t && r.A.fetchMessages({
            channelId: t.channel_id,
            jump: {
                messageId: t.message_id
            },
            limit: 10
        })
    }, [n, t])
}

function _(e) {
    let t = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != t && (0, a.wz)(t)
}