/** chunk id: 750128 params = (module,exports,require) **/
let r, i, a, o, l;
n.d(t, {
    A: () => T,
    Z: () => E
});
var _, s = n(284009),
    c = n.n(s),
    d = n(311907),
    u = n(73153),
    m = n(843472),
    p = n(155718),
    f = n(706727),
    h = n(927813),
    E = ((_ = {})[_.IN_FLIGHT = 0] = "IN_FLIGHT", _[_.ERRORED = 1] = "ERRORED", _[_.SUCCEEDED = 2] = "SUCCEEDED", _);
class I extends d.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(e) {
        return e !== r ? null : i
    }
}
let T = new I(u.h, {
    LOGOUT: function() {
        return r = null, i = null, a = null, o = null, l = null, !0
    },
    INTERACTION_MODAL_CREATE: function(e) {
        let {
            nonce: t
        } = e;
        return t === l && (m.A.deleteMessage(o, a, !0), a = null, o = null, l = null), !1
    },
    INTERACTION_IFRAME_MODAL_CREATE: function(e) {
        let {
            nonce: t
        } = e;
        return t === l && (m.A.deleteMessage(o, a, !0), a = null, o = null, l = null), !1
    },
    INTERACTION_QUEUE: function(e) {
        let {
            messageId: t,
            nonce: n,
            data: _,
            preflight: s
        } = e;
        switch (_.interactionType) {
            case p.G4.APPLICATION_COMMAND:
                return a = t, o = _.channelId, l = n, !1;
            case p.G4.MODAL_SUBMIT:
                c()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), r = n, i = 0;
                let d = e => {
                    setTimeout(() => {
                        r === n && 0 === i && (0, f.C1)(n)
                    }, e)
                };
                return null != s ? (d(2 * h.A.Millis.MINUTE), s.then(() => d(10 * h.A.Millis.SECOND)).catch(() => (0, f.C1)(n))) : d(10 * h.A.Millis.SECOND), !0;
            default:
                return !1
        }
    },
    INTERACTION_SUCCESS: function(e) {
        let {
            nonce: t
        } = e;
        return null != t && t === r && (i = 2, !0)
    },
    INTERACTION_FAILURE: function(e) {
        let {
            nonce: t
        } = e;
        return null != t && t === r && (i = 1, !0)
    }
})