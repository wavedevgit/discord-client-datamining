/** chunk id: 810181, original params: e,t,s (module,exports,require) **/
s.d(t, {
    m: () => a
}), s(321073);
var i = s(311907),
    n = s(994500),
    r = s(741961),
    l = s(287809);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.yK)([l.default, r.A, n.A], () => {
        var s;
        let i = null == (s = l.default.getCurrentUser()) ? void 0 : s.id,
            a = r.A.getTypingUsers(e),
            o = [];
        for (let e in a) {
            if (o.length >= t) break;
            let s = l.default.getUser(e);
            null != s && s.id !== i && (n.A.isBlockedOrIgnored(s.id) || o.push(s.id))
        }
        return o
    }, [e, t])
}