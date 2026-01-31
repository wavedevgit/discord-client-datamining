/** chunk id: 167579, original params: e,_,t (module,exports,require) **/
t.d(_, {
    A: () => c
});
var a = t(311907),
    o = t(961350),
    n = t(430452),
    r = t(977997);

function c(e) {
    return (0, a.cf)([r.A, n.A, o.default], () => (function(e) {
        var _;
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.A,
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.default,
            i = null != e ? t.getVoiceState(e.getGuildId(), c.getId()) : null;
        return {
            selfDeaf: a.isSelfDeaf(),
            deaf: null != (_ = null == i ? void 0 : i.deaf) && _
        }
    })(e, r.A, n.A, o.default), [e])
}