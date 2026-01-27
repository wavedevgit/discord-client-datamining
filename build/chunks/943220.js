/** Chunk was on 94857 **/
/** chunk id: 943220, original params: e,s,t (module,exports,require) **/
t.d(s, {
    A: () => r
});
var n = t(627968);
t(64700);
var l = t(763754),
    a = t(635071),
    i = t(812299);

function r(e) {
    var s, t, r, o;
    let c = (0, l.Ay)(e.message),
        u = (0, i.y)({
            message: e.message,
            channel: e.channel,
            user: null != (s = null == (t = e.message) ? void 0 : t.author) ? s : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        m = {};
    return null != u && (m[a.w.SYSTEM_TAG] = u), (0, n.jsx)(a.A, (r = function(e) {
        for (var s = 1; s < arguments.length; s++) {
            var t = null != arguments[s] ? arguments[s] : {},
                n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(s) {
                var n;
                n = t[s], s in e ? Object.defineProperty(e, s, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = n
            })
        }
        return e
    }({}, e), o = o = {
        author: c,
        decorations: m
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
        }
        return t
    })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
    }), r))
}