/** chunk id: 857253 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(311907),
    i = n(961350),
    r = n(977997),
    a = n(643501);

function u() {
    return (0, l.bG)([i.default, r.A, a.default], () => {
        let e = i.default.getId(),
            t = a.default.getRemoteSessionId();
        return r.A.getVoiceStateForSession(e, t) ?? void 0
    }, [])
}