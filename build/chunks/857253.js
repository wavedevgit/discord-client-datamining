/** chunk id: 857253 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    l = n(961350),
    r = n(977997),
    a = n(643501);

function d() {
    return (0, i.bG)([l.default, r.A, a.default], () => {
        let e = l.default.getId(),
            t = a.default.getRemoteSessionId();
        return r.A.getVoiceStateForSession(e, t) ?? void 0
    }, [])
}