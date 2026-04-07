/** chunk id: 620982 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(311907),
    s = n(961350),
    i = n(470710);

function r(e) {
    return (0, l.cf)([i.A, s.default], () => {
        let t = i.A.getCall(e),
            n = s.default.getId(),
            l = null != t && null != n && t.ringing.includes(n);
        return {
            isIncomingCall: l,
            isOngoingCall: i.A.isCallActive(e) && !l
        }
    })
}