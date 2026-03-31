/** chunk id: 167579 params = (module,exports,require) **/
a.d(t, {
    A: () => _
});
var n = a(311907),
    r = a(961350),
    o = a(430452),
    i = a(977997);

function _(e) {
    return (0, n.cf)([i.A, o.Ay, r.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Ay,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
            _ = null != e ? t.getVoiceState(e.getGuildId(), n.getId()) : null;
        return {
            selfDeaf: a.isSelfDeaf(),
            deaf: _?.deaf ?? !1
        }
    })(e, i.A, o.Ay, r.default), [e])
}