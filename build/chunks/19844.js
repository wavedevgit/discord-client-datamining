/** Chunk was on 41727 **/
/** chunk id: 19844, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(896048), n(321073);
var r = n(311907),
    l = n(996439),
    i = n(63995),
    s = n(69407);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, r.bG)([i.A], () => {
            let n = i.A.getMutableParticipants(e).filter(e => e.type === s.wY.VOICE),
                r = [];
            for (let e of n) {
                if (r.length >= t) break;
                null == r.find(t => t.id === e.user.id) && r.push(e.user)
            }
            return [{
                participants: n,
                usersInSummary: r
            }, i.A.getParticipantsVersion(e)]
        }, [e, t], l.D);
    return n
}