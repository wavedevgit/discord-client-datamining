/** chunk id: 750128 params = (module,exports,require) **/
let i, r, l, a, s;
n.d(t, {
    A: () => f,
    Z: () => A
});
var o, d = n(284009),
    c = n.n(d),
    u = n(311907),
    _ = n(73153),
    m = n(843472),
    h = n(155718),
    p = n(706727),
    g = n(927813),
    A = ((o = {})[o.IN_FLIGHT = 0] = "IN_FLIGHT", o[o.ERRORED = 1] = "ERRORED", o[o.SUCCEEDED = 2] = "SUCCEEDED", o);
class x extends u.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(e) {
        return e !== i ? null : r
    }
}
let f = new x(_.h, {
    LOGOUT: function() {
        return i = null, r = null, l = null, a = null, s = null, !0
    },
    INTERACTION_MODAL_CREATE: function(e) {
        let {
            nonce: t
        } = e;
        return t === s && (m.A.deleteMessage(a, l, !0), l = null, a = null, s = null), !1
    },
    INTERACTION_IFRAME_MODAL_CREATE: function(e) {
        let {
            nonce: t
        } = e;
        return t === s && (m.A.deleteMessage(a, l, !0), l = null, a = null, s = null), !1
    },
    INTERACTION_QUEUE: function(e) {
        let {
            messageId: t,
            nonce: n,
            data: o,
            preflight: d
        } = e;
        switch (o.interactionType) {
            case h.G4.APPLICATION_COMMAND:
                return l = t, a = o.channelId, s = n, !1;
            case h.G4.MODAL_SUBMIT:
                c()(null == i || 1 === r || 2 === r, "cannot submit multiple modals at once"), i = n, r = 0;
                let u = e => {
                    setTimeout(() => {
                        i === n && 0 === r && (0, p.C1)(n)
                    }, e)
                };
                return null != d ? (u(2 * g.A.Millis.MINUTE), d.then(() => u(10 * g.A.Millis.SECOND)).catch(() => (0, p.C1)(n))) : u(10 * g.A.Millis.SECOND), !0;
            default:
                return !1
        }
    },
    INTERACTION_SUCCESS: function(e) {
        let {
            nonce: t
        } = e;
        return null != t && t === i && (r = 2, !0)
    },
    INTERACTION_FAILURE: function(e) {
        let {
            nonce: t
        } = e;
        return null != t && t === i && (r = 1, !0)
    }
})