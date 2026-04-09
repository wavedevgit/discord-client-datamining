/** chunk id: 167579 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(311907),
    r = n(961350),
    l = n(430452),
    i = n(977997);

function s(e) {
    return (0, a.cf)([i.A, l.Ay, r.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Ay,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
            s = null != e ? t.getVoiceState(e.getGuildId(), a.getId()) : null;
        return {
            selfDeaf: n.isSelfDeaf(),
            deaf: s?.deaf ?? !1
        }
    })(e, i.A, l.Ay, r.default), [e])
}