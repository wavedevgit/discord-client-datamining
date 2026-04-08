/** chunk id: 167579 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(311907),
    a = n(961350),
    i = n(430452),
    l = n(977997);

function o(e) {
    return (0, r.cf)([l.A, i.Ay, a.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ay,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            o = null != e ? t.getVoiceState(e.getGuildId(), r.getId()) : null;
        return {
            selfDeaf: n.isSelfDeaf(),
            deaf: o?.deaf ?? !1
        }
    })(e, l.A, i.Ay, a.default), [e])
}