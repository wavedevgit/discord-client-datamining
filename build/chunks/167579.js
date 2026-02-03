/** chunk id: 167579, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => c
});
var n = _(311907),
    a = _(961350),
    o = _(430452),
    r = _(977997);

function c(e) {
    return (0, n.cf)([r.A, o.A, a.default], () => (function(e) {
        var t;
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A,
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            i = null != e ? _.getVoiceState(e.getGuildId(), c.getId()) : null;
        return {
            selfDeaf: n.isSelfDeaf(),
            deaf: null != (t = null == i ? void 0 : i.deaf) && t
        }
    })(e, r.A, o.A, a.default), [e])
}