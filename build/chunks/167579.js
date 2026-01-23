/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => i
});
var a = _(311907),
    o = _(961350),
    r = _(430452),
    n = _(977997);

function i(e) {
    return (0, a.cf)([n.A, r.A, o.default], () => (function(e) {
        var t;
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.default,
            l = null != e ? _.getVoiceState(e.getGuildId(), i.getId()) : null;
        return {
            selfDeaf: a.isSelfDeaf(),
            deaf: null != (t = null == l ? void 0 : l.deaf) && t
        }
    })(e, n.A, r.A, o.default), [e])
}