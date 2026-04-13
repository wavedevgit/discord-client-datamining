/** chunk id: 167579 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    a = n(961350),
    l = n(430452),
    s = n(977997);

function r(e) {
    return (0, i.cf)([s.A, l.Ay, a.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Ay,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            r = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
        return {
            selfDeaf: n.isSelfDeaf(),
            deaf: r?.deaf ?? !1
        }
    })(e, s.A, l.Ay, a.default), [e])
}