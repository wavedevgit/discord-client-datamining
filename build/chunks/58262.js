/** chunk id: 58262 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(311907),
    s = n(308528),
    o = n(846293),
    d = n(793574),
    c = n(688810),
    u = n(21599),
    _ = n(529200),
    m = n(427157),
    h = n(961350),
    p = n(734057),
    g = n(994500),
    A = n(427262),
    x = n(652215),
    f = n(985018),
    C = n(366228);

function E(e) {
    let {
        invite: t,
        message: n,
        getAcceptInviteContext: E
    } = e, I = (0, r.bG)([h.default], () => h.default.getId()), v = t.inviter?.id === I, b = t.state === x.elq.ACCEPTING, {
        analyticsLocations: T
    } = (0, c.Ay)(d.A.INVITE_EMBED), y = (0, r.bG)([g.A], () => null != t.inviter && g.A.isFriend(t.inviter?.id)), S = a.useCallback(() => {
        let e = "noop";
        null != t.inviter && null != p.A.getDMFromUserId(t.inviter.id) && (e = "transition", s.A.openPrivateChannel({
            recipientIds: [t.inviter.id]
        })), (0, o.he)({
            invite: t,
            action: e,
            inviter_id: n.author.id,
            invite_message_id: n.id,
            invite_instance_id: (0, u._U)(t.code, n.id)
        }, T)
    }, [t, n, T]), N = a.useCallback(() => {
        (0, o.he)({
            invite: t,
            action: "accept",
            inviter_id: n.author.id,
            invite_message_id: n.id,
            invite_instance_id: (0, u._U)(t.code, n.id)
        }, T);
        let e = E("Invite Button Embed", t.code);
        o.Ay.acceptInviteAndTransitionToInviteChannel({
            inviteKey: t.code,
            context: e
        })
    }, [t, n, T, E]);
    if (null == t.inviter) return null;
    let j = y ? S : N,
        L = f.intl.string(f.t.ib7Ng1),
        R = "active";
    y ? (L = f.intl.string(f.t.xhxnPn), R = "secondary") : v && (L = f.intl.string(f.t.ib7Ng1), R = "secondary");
    let P = v ? f.intl.string(f.t.eQyu1F) : f.intl.string(f.t.PYJHW6),
        M = null != t.inviter ? `${t.inviter.username}` : "",
        w = null != t.inviter ? A.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(_.A, {
        children: [(0, i.jsx)(_.A.Header, {
            text: P
        }), (0, i.jsxs)(_.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: C.iH,
                children: [(0, i.jsx)(_.A.Icon, {
                    user: new m.A(t.inviter),
                    onClick: y ? j : void 0
                }), (0, i.jsx)(_.A.Info, {
                    title: M,
                    onClick: y ? j : void 0,
                    children: w
                })]
            }), (0, i.jsx)(l.$nd, {
                onClick: j,
                text: L,
                loading: b,
                disabled: v,
                variant: R
            })]
        })]
    })
}