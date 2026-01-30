/** Chunk was on 64935 **/
/** chunk id: 58262, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(308528),
    o = n(846293),
    c = n(793574),
    u = n(688810),
    d = n(529200),
    p = n(427157),
    m = n(961350),
    f = n(734057),
    g = n(994500),
    _ = n(427262),
    h = n(652215),
    b = n(985018),
    A = n(563111);

function y(e) {
    var t;
    let {
        invite: n,
        message: y,
        getAcceptInviteContext: v
    } = e, x = (0, a.bG)([m.default], () => m.default.getId()), O = (null == (t = n.inviter) ? void 0 : t.id) === x, E = n.state === h.elq.ACCEPTING, {
        analyticsLocations: j
    } = (0, u.Ay)(c.A.INVITE_EMBED), C = (0, a.bG)([g.A], () => {
        var e;
        return null != n.inviter && g.A.isFriend(null == (e = n.inviter) ? void 0 : e.id)
    }), I = i.useCallback(() => {
        let e = "noop";
        null != n.inviter && null != f.A.getDMFromUserId(n.inviter.id) && (e = "transition", s.A.openPrivateChannel({
            recipientIds: [n.inviter.id]
        })), (0, o.he)({
            invite: n,
            action: e,
            inviter_id: y.author.id,
            invite_message_id: y.id
        }, j)
    }, [n, y, j]), S = i.useCallback(() => {
        (0, o.he)({
            invite: n,
            action: "accept",
            inviter_id: y.author.id,
            invite_message_id: y.id
        }, j);
        let e = v("Invite Button Embed");
        o.Ay.acceptInviteAndTransitionToInviteChannel({
            inviteKey: n.code,
            context: e
        })
    }, [n, y, j, v]);
    if (null == n.inviter) return null;
    let T = C ? I : S,
        N = b.intl.string(b.t.ib7Ng1),
        P = "active";
    C ? (N = b.intl.string(b.t.xhxnPn), P = "secondary") : O && (N = b.intl.string(b.t.ib7Ng1), P = "secondary");
    let w = O ? b.intl.string(b.t.eQyu1F) : b.intl.string(b.t.PYJHW6),
        R = null != n.inviter ? "".concat(n.inviter.username) : "",
        D = null != n.inviter ? _.Ay.getUserTag(n.inviter) : "";
    return (0, r.jsxs)(d.A, {
        children: [(0, r.jsx)(d.A.Header, {
            text: w
        }), (0, r.jsxs)(d.A.Body, {
            children: [(0, r.jsxs)("div", {
                className: A.iH,
                children: [(0, r.jsx)(d.A.Icon, {
                    user: new p.A(n.inviter),
                    onClick: C ? T : void 0
                }), (0, r.jsx)(d.A.Info, {
                    title: R,
                    onClick: C ? T : void 0,
                    children: D
                })]
            }), (0, r.jsx)(l.$nd, {
                onClick: T,
                text: N,
                loading: E,
                disabled: O,
                variant: P
            })]
        })]
    })
}