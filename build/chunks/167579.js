/** chunk id: 167579 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(311907),
    i = n(961350),
    l = n(430452),
    s = n(977997);

function r(e) {
    return (0, a.cf)([s.A, l.Ay, i.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Ay,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
            r = null != e ? t.getVoiceState(e.getGuildId(), a.getId()) : null;
        return {
            selfDeaf: n.isSelfDeaf(),
            deaf: r?.deaf ?? !1
        }
    })(e, s.A, l.Ay, i.default), [e])
}