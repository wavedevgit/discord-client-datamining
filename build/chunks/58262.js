/** Chunk was on web.js **/
/** chunk id: 58262, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(308528),
    l = n(846293),
    c = n(793574),
    u = n(688810),
    d = n(529200),
    f = n(427157),
    p = n(961350),
    _ = n(734057),
    h = n(994500),
    m = n(427262),
    g = n(652215),
    E = n(985018),
    y = n(563111);

function b(e) {
    var t;
    let {
        invite: n,
        message: b,
        getAcceptInviteContext: O
    } = e, v = (0, s.bG)([p.default], () => p.default.getId()), A = (null == (t = n.inviter) ? void 0 : t.id) === v, I = n.state === g.elq.ACCEPTING, {
        analyticsLocations: S
    } = (0, u.Ay)(c.A.INVITE_EMBED), T = (0, s.bG)([h.A], () => {
        var e;
        return null != n.inviter && h.A.isFriend(null == (e = n.inviter) ? void 0 : e.id)
    }), C = i.useCallback(() => {
        let e = "noop";
        null != n.inviter && null != _.A.getDMFromUserId(n.inviter.id) && (e = "transition", o.A.openPrivateChannel({
            recipientIds: [n.inviter.id]
        })), (0, l.he)({
            invite: n,
            action: e,
            inviter_id: b.author.id,
            invite_message_id: b.id
        }, S)
    }, [n, b, S]), N = i.useCallback(() => {
        (0, l.he)({
            invite: n,
            action: "accept",
            inviter_id: b.author.id,
            invite_message_id: b.id
        }, S);
        let e = O("Invite Button Embed");
        l.Ay.acceptInviteAndTransitionToInviteChannel({
            inviteKey: n.code,
            context: e
        })
    }, [n, b, S, O]);
    if (null == n.inviter) return null;
    let w = T ? C : N,
        R = E.intl.string(E.t.ib7Ng1),
        P = "active";
    T ? (R = E.intl.string(E.t.xhxnPn), P = "secondary") : A && (R = E.intl.string(E.t.ib7Ng1), P = "secondary");
    let D = A ? E.intl.string(E.t.eQyu1F) : E.intl.string(E.t.PYJHW6),
        x = null != n.inviter ? "".concat(n.inviter.username) : "",
        L = null != n.inviter ? m.Ay.getUserTag(n.inviter) : "";
    return (0, r.jsxs)(d.A, {
        children: [(0, r.jsx)(d.A.Header, {
            text: D
        }), (0, r.jsxs)(d.A.Body, {
            children: [(0, r.jsxs)("div", {
                className: y.iH,
                children: [(0, r.jsx)(d.A.Icon, {
                    user: new f.A(n.inviter),
                    onClick: T ? w : void 0
                }), (0, r.jsx)(d.A.Info, {
                    title: x,
                    onClick: T ? w : void 0,
                    children: L
                })]
            }), (0, r.jsx)(a.$nd, {
                onClick: w,
                text: R,
                loading: I,
                disabled: A,
                variant: P
            })]
        })]
    })
}