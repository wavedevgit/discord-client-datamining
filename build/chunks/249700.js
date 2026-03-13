/** chunk id: 249700 params = (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(938796);
var i = n(843472),
    l = n(545152),
    r = n(381941);

function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (i.A.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
        null != t.interactionData && null != a.applicationId && (0, l.x)(t, e, a);
        return
    }
    let {
        content: s,
        tts: o,
        messageReference: d,
        flags: c,
        nonce: u
    } = t;
    i.A.sendMessage(e.id, {
        content: s,
        tts: o,
        invalidEmojis: [],
        validNonShortcutEmojis: []
    }, void 0, {
        nonce: u,
        flags: c,
        messageReference: d ?? void 0,
        ...a,
        location: r.Hx.RETRY
    })
}