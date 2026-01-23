/** Chunk was on web.js **/
/** chunk id: 448613, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => d
}), n(65821);
var r = n(308528),
    i = n(843472),
    a = n(355622),
    s = n(428249),
    o = n(451909),
    l = n(734057),
    c = n(460350),
    u = n(381941);
let d = async e => {
    let {
        userId: t,
        content: n,
        location: d,
        openChannel: f = !0,
        whenReady: p = !1,
        entry: _,
        nonce: h
    } = e, {
        valid: m,
        failureReason: g
    } = await (0, c.i)({
        type: a.oU.NORMAL,
        content: n,
        channel: null
    });
    if (!m) throw Error(g);
    let E = f ? await r.A.openPrivateChannel({
            recipientIds: t,
            location: d
        }) : await r.A.getOrEnsurePrivateChannel(t),
        y = l.A.getChannel(E);
    if (null == y) throw Error("Failed to open private channel");
    if (null != _)(0, s.d)({
        channel: y,
        content: n,
        entry: _,
        whenReady: p,
        doNotNotifyOnError: !1,
        location: u.Hx.USER_PROFILE
    });
    else {
        let e = o.Ay.parse(y, n);
        return i.A.sendMessage(y.id, e, p, {
            location: u.Hx.USER_PROFILE,
            nonce: h
        })
    }
}