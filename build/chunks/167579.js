/** chunk id: 167579 params = (module,exports,require) **/
a.d(t, {
    A: () => i
});
var _ = a(311907),
    n = a(961350),
    r = a(430452),
    o = a(977997);

function i(e) {
    return (0, _.cf)([o.A, r.Ay, n.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Ay,
            _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n.default,
            i = null != e ? t.getVoiceState(e.getGuildId(), _.getId()) : null;
        return {
            selfDeaf: a.isSelfDeaf(),
            deaf: i?.deaf ?? !1
        }
    })(e, o.A, r.Ay, n.default), [e])
}