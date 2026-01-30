/** chunk id: 750128, original params: e,t,n (module,exports,require) **/
let r, i, o, a, l;
n.d(t, {
    A: () => E,
    Z: () => O
});
var _, c, s, d = n(284009),
    u = n.n(d),
    p = n(311907),
    f = n(73153),
    m = n(843472),
    g = n(155718),
    h = n(706727),
    I = n(927813),
    O = ((_ = {})[_.IN_FLIGHT = 0] = "IN_FLIGHT", _[_.ERRORED = 1] = "ERRORED", _[_.SUCCEEDED = 2] = "SUCCEEDED", _);
class b extends(s = p.Ay.Store) {
    getModalState(e) {
        return e !== r ? null : i
    }
}(c = "displayName") in b ? Object.defineProperty(b, c, {
    value: "InteractionModalStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : b[c] = "InteractionModalStore";
let E = new b(f.h, {
    LOGOUT: function() {
        return r = null, i = null, o = null, a = null, l = null, !0
    },
    INTERACTION_MODAL_CREATE: function(e) {
        let {
            nonce: t
        } = e;
        return t === l && (m.A.deleteMessage(a, o, !0), o = null, a = null, l = null), !1
    },
    INTERACTION_IFRAME_MODAL_CREATE: function(e) {
        let {
            nonce: t
        } = e;
        return t === l && (m.A.deleteMessage(a, o, !0), o = null, a = null, l = null), !1
    },
    INTERACTION_QUEUE: function(e) {
        let {
            messageId: t,
            nonce: n,
            data: _,
            preflight: c
        } = e;
        switch (_.interactionType) {
            case g.G4.APPLICATION_COMMAND:
                return o = t, a = _.channelId, l = n, !1;
            case g.G4.MODAL_SUBMIT:
                u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), r = n, i = 0;
                let s = e => {
                    setTimeout(() => {
                        r === n && 0 === i && (0, h.C1)(n)
                    }, e)
                };
                return null != c ? (s(2 * I.A.Millis.MINUTE), c.then(() => s(10 * I.A.Millis.SECOND)).catch(() => (0, h.C1)(n))) : s(10 * I.A.Millis.SECOND), !0;
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