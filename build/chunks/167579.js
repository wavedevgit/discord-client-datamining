/** chunk id: 167579 params = (module,exports,require) **/
_.d(t, {
    A: () => i
});
var a = _(311907),
    o = _(961350),
    n = _(430452),
    r = _(977997);

function i(e) {
    return (0, a.cf)([r.A, n.Ay, o.default], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
            _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.Ay,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.default,
            i = null != e ? t.getVoiceState(e.getGuildId(), a.getId()) : null;
        return {
            selfDeaf: _.isSelfDeaf(),
            deaf: i?.deaf ?? !1
        }
    })(e, r.A, n.Ay, o.default), [e])
}