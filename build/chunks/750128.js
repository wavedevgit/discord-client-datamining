/** chunk id: 750128, original params: e,t,n (module,exports,require) **/
let r, i, o, a, l;
n.d(t, {
    A: () => O,
    Z: () => I
});
var c, _, s, d = n(284009),
    u = n.n(d),
    p = n(311907),
    f = n(73153),
    m = n(843472),
    g = n(155718),
    h = n(706727),
    E = n(927813),
    I = ((c = {})[c.IN_FLIGHT = 0] = "IN_FLIGHT", c[c.ERRORED = 1] = "ERRORED", c[c.SUCCEEDED = 2] = "SUCCEEDED", c);
class b extends(s = p.Ay.Store) {
    getModalState(e) {
        return e !== r ? null : i
    }
}(_ = "displayName") in b ? Object.defineProperty(b, _, {
    value: "InteractionModalStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : b[_] = "InteractionModalStore";
let O = new b(f.h, {
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
            data: c,
            preflight: _
        } = e;
        switch (c.interactionType) {
            case g.G4.APPLICATION_COMMAND:
                return o = t, a = c.channelId, l = n, !1;
            case g.G4.MODAL_SUBMIT:
                u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), r = n, i = 0;
                let s = e => {
                    setTimeout(() => {
                        r === n && 0 === i && (0, h.C1)(n)
                    }, e)
                };
                return null != _ ? (s(2 * E.A.Millis.MINUTE), _.then(() => s(10 * E.A.Millis.SECOND)).catch(() => (0, h.C1)(n))) : s(10 * E.A.Millis.SECOND), !0;
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