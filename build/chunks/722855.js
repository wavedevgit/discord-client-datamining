/** chunk id: 722855, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048);
var r = n(687123),
    i = n(508602),
    a = n(843472),
    o = n(155718),
    s = n(439372),
    l = n(128265),
    c = n(626584),
    u = n(473503),
    d = n(207560),
    f = n(662502),
    p = n(64313),
    _ = n(734057),
    h = n(320501),
    m = n(309010),
    g = n(287809),
    E = n(847599),
    y = n(36149),
    b = n(652215),
    O = n(835002);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let A = new c.A("AgeVerificationManager");

function I(e) {
    var t, n, r;
    let {
        channelId: a,
        message: o
    } = e, s = h.A.getMessage(a, o.id);
    if ((null == s || null == (n = s.embeds) || null == (t = n[0]) ? void 0 : t.type) === i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = null == (r = s.embeds[0].fields) ? void 0 : r.find(e => e.rawName === y.uN.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === y.Wv.ERROR ? (f.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), (0, E.Vh)(E.oQ.ERROR)) : (null == e ? void 0 : e.rawValue) === y.Wv.VERIFIED_ADULT ? (f.A.showSuccessToast(O.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_ADULT)) : (null == e ? void 0 : e.rawValue) === y.Wv.VERIFIED_TEEN && (f.A.showSuccessToast(O.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_TEEN))
    }
}

function S(e) {
    a.A.fetchMessages({
        channelId: e,
        limit: b.EMb
    })
}

function T(e) {
    let t = _.A.getChannel(e);
    ((null == t ? void 0 : t.type) === b.rbe.GUILD_FORUM || (null == t ? void 0 : t.type) === b.rbe.GUILD_MEDIA) && (0, u.kB)(t)
}
class C extends s.A {
    constructor(...e) {
        super(...e), v(this, "_previousAgeVerificationStatus", null), v(this, "handlePostConnectionOpen", () => {
            var e, t;
            this._previousAgeVerificationStatus = null != (e = null == (t = g.default.getCurrentUser()) ? void 0 : t.ageVerificationStatus) ? e : null
        }), v(this, "handleCurrentUserUpdate", e => {
            var t;
            let {
                user: n
            } = e, i = null != (t = (0, g.transformUser)(n).ageVerificationStatus) ? t : null, a = this._previousAgeVerificationStatus !== i && i === o.Tk.VERIFIED_ADULT, s = (0, p.o)("age-verification-manager"), c = a && ((0, d.d6)(r.t.AGE_GATED_SPACES) || s);
            try {
                if (c) {
                    let e = m.A.getChannelId(),
                        t = !1;
                    l.A.forEach(n => {
                        let {
                            channelId: r
                        } = n, i = _.A.getChannel(r);
                        (null == i ? void 0 : i.nsfw) && (l.A.clear(r), r === e && (t = !0))
                    }), t && null != e && (S(e), T(e))
                }
            } catch (e) {
                A.warn("Error clearing cache and refetching messages", e)
            } finally {
                this._previousAgeVerificationStatus = i
            }
        }), v(this, "actions", {
            POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
            MESSAGE_CREATE: I
        })
    }
}
let N = new C