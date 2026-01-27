/** Chunk was on 31294 **/
/** chunk id: 167579, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => r
});
var o = a(311907),
    _ = a(961350),
    n = a(430452),
    c = a(977997);

function r(e) {
    return (0, o.cf)([c.A, n.A, _.default], () => (function(e) {
        var t;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.A,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.A,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.default,
            i = null != e ? a.getVoiceState(e.getGuildId(), r.getId()) : null;
        return {
            selfDeaf: o.isSelfDeaf(),
            deaf: null != (t = null == i ? void 0 : i.deaf) && t
        }
    })(e, c.A, n.A, _.default), [e])
}