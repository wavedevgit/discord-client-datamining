/** chunk id: 167579 params = (module,exports,require) **/
i.d(t, {
    A: () => r
});
var n = i(311907),
    a = i(961350),
    l = i(430452),
    s = i(977997);

function r(e) {
    return (0, n.cf)([s.A, l.Ay, a.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Ay,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            r = null != e ? t.getVoiceState(e.getGuildId(), n.getId()) : null;
        return {
            selfDeaf: i.isSelfDeaf(),
            deaf: r?.deaf ?? !1
        }
    })(e, s.A, l.Ay, a.default), [e])
}