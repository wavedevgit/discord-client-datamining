/** chunk id: 290331 params = (module,exports,require) **/
n.d(t, {
    A: () => l
}), n(938796);
var i = n(821418),
    a = n(665260),
    r = n(340837);
let l = {
    canAcceptInvite: function(e, t) {
        let [n] = e, {
            guild: l
        } = t;
        return !(null != l && (0, a.Lt)(n.getSelfMember(l.id)?.flags ?? 0, r.D.IS_GUEST)) || (0, a.Lt)(t.flags ?? 0, i.Q.IS_GUEST_INVITE)
    }
}