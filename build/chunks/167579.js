/** chunk id: 167579 params = (module,exports,require) **/
a.d(t, {
    A: () => i
});
var r = a(311907),
    n = a(961350),
    _ = a(430452),
    o = a(977997);

function i(e) {
    return (0, r.cf)([o.A, _.Ay, n.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Ay,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n.default,
            i = null != e ? t.getVoiceState(e.getGuildId(), r.getId()) : null;
        return {
            selfDeaf: a.isSelfDeaf(),
            deaf: i?.deaf ?? !1
        }
    })(e, o.A, _.Ay, n.default), [e])
}