/** chunk id: 715757, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Qo: () => A,
    V: () => f,
    W1: () => g,
    ml: () => h,
    vb: () => p
});
var i = n(64700),
    r = n(311907),
    l = n(843472),
    a = n(803306),
    o = n(71393),
    s = n(320501),
    d = n(376708),
    u = n(272720),
    c = n(56595);

function A(t) {
    return (0, r.bG)([o.A], () => {
        if (null == t) return !1;
        let e = o.A.getGuild(t);
        return null != e && (0, c.A)(e) && null != (0, u.A)(e)
    })
}

function f(t) {
    return (0, d.uW)(t)
}

function g(t) {
    return (0, d.xJ)(t)
}

function h(t) {
    let {
        messageReference: e
    } = t, n = (0, r.bG)([s.A], () => null != e ? s.A.getMessage(e.channel_id, e.message_id) : null);
    (0, i.useEffect)(() => {
        null == n && null != e && l.A.fetchMessages({
            channelId: e.channel_id,
            jump: {
                messageId: e.message_id
            },
            limit: 10
        })
    }, [n, e])
}

function p(t) {
    var e, n;
    let i = null == t || null == (n = t.messageSnapshots[0]) || null == (e = n.moderatorReport) ? void 0 : e.reported_user_id;
    null != i && (0, a.wz)(i)
}