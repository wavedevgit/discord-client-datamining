/** chunk id: 167579, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => _
});
var n = a(311907),
    r = a(961350),
    i = a(430452),
    o = a(977997);

function _(e) {
    return (0, n.cf)([o.A, i.Ay, r.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ay,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
            _ = null != e ? t.getVoiceState(e.getGuildId(), n.getId()) : null;
        return {
            selfDeaf: a.isSelfDeaf(),
            deaf: _?.deaf ?? !1
        }
    })(e, o.A, i.Ay, r.default), [e])
}