/** chunk id: 249700, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(938796);
var r = n(843472),
    i = n(545152),
    l = n(381941);

function a(e, t, n) {
    var a, o;
    let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (r.A.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
        null != t.interactionData && null != c.applicationId && (0, i.x)(t, e, c);
        return
    }
    let {
        content: s,
        tts: d,
        messageReference: u,
        flags: g,
        nonce: p
    } = t;
    r.A.sendMessage(e.id, {
        content: s,
        tts: d,
        invalidEmojis: [],
        validNonShortcutEmojis: []
    }, void 0, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({
        nonce: p,
        flags: g,
        messageReference: null != u ? u : void 0
    }, c), o = o = {
        location: l.Hx.RETRY
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
    }), a))
}