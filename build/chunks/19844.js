/** chunk id: 19844 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
}), n(321073);
var i = n(311907),
    s = n(996439),
    l = n(63995),
    a = n(69407);

function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, i.bG)([l.A], () => {
            let n = l.A.getMutableParticipants(e).filter(e => e.type === a.wY.VOICE),
                i = [];
            for (let e of n) {
                if (i.length >= t) break;
                null == i.find(t => t.id === e.user.id) && i.push(e.user)
            }
            return [{
                participants: n,
                usersInSummary: i
            }, l.A.getParticipantsVersion(e)]
        }, [e, t], s.D);
    return n
}