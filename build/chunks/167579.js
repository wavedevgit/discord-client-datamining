/** chunk id: 167579, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => r
});
var o = _(311907),
    a = _(961350),
    n = _(430452),
    c = _(977997);

function r(e) {
    return (0, o.cf)([c.A, n.A, a.default], () => (function(e) {
        var t;
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.A,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.A,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            i = null != e ? _.getVoiceState(e.getGuildId(), r.getId()) : null;
        return {
            selfDeaf: o.isSelfDeaf(),
            deaf: null != (t = null == i ? void 0 : i.deaf) && t
        }
    })(e, c.A, n.A, a.default), [e])
}