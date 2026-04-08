/** chunk id: 309818 params = (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(21599),
    m = n(529200),
    h = n(95701),
    p = n(734057),
    g = n(287809),
    A = n(403362),
    x = n(168428),
    f = n(652215),
    C = n(985018),
    E = n(147673);

function I(e) {
    let t, {
            invite: n,
            message: s,
            currentUserId: I,
            onTransitionToInviteChannel: v,
            onAcceptInstantInvite: b
        } = e,
        T = I === s.author.id,
        y = n.state === f.elq.ACCEPTING,
        N = (0, o.bG)([p.A], () => null != n.channel ? p.A.getChannel(n.channel.id) : null, [n]);
    r()(null == N || N.isPrivate(), "must be a private channel");
    let {
        analyticsLocations: S
    } = (0, u.Ay)(c.A.INVITE_EMBED), j = null != N, L = l.useCallback(() => {
        let e = "noop";
        j ? (v(), e = "transition") : (b(), e = "accept"), (0, d.he)({
            invite: n,
            action: e,
            inviter_id: s.author.id,
            invite_message_id: s.id,
            invite_instance_id: (0, _._U)(n.code, s.id)
        }, S)
    }, [n, s, S, j, v, b]);
    if (null == N) {
        if (null == n.channel) return (0, i.jsx)(x.A, {});
        N = (0, h.OY)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
    } else {
        t = N.recipients.reduce((e, t) => {
            let n = g.default.getUser(t);
            return null != n && e.push(n), e
        }, []);
        let e = g.default.getCurrentUser();
        j && null != e && t.push(e)
    }
    let R = N.name;
    (null == R || "" === R) && (R = t.length > 0 ? t.filter(A.Vq).map(e => e.username).join(", ") : C.intl.string(C.t.LJpTRF));
    let P = C.intl.string(C.t.XpeFYr),
        D = "active";
    j && (P = C.intl.string(C.t.cEnaWx), D = "secondary");
    let M = C.intl.string(C.t["3p3/BK"]);
    return T && (M = C.intl.string(C.t.qmtuXE)), (0, i.jsxs)(m.A, {
        children: [(0, i.jsx)(m.A.Header, {
            text: M
        }), (0, i.jsxs)(m.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: E.iH,
                children: [(0, i.jsx)(m.A.Icon, {
                    channel: N,
                    onClick: j ? L : void 0
                }), (0, i.jsx)(m.A.Info, {
                    title: R,
                    onClick: j ? L : void 0,
                    children: (0, i.jsx)(m.A.Data, {
                        members: t.length
                    })
                })]
            }), (0, i.jsx)(a.$nd, {
                onClick: L,
                loading: y,
                disabled: j,
                variant: D,
                text: P,
                fullWidth: !0
            })]
        })]
    })
}