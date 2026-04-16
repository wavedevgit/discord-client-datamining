/** chunk id: 309818 params = (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(284009),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(47167),
    m = n(21599),
    h = n(529200),
    p = n(95701),
    g = n(734057),
    A = n(994500),
    x = n(287809),
    f = n(403362),
    C = n(168428),
    E = n(652215),
    I = n(985018),
    v = n(344900);

function b(e) {
    let t, {
            invite: n,
            message: l,
            currentUserId: b,
            onTransitionToInviteChannel: T,
            onAcceptInstantInvite: y
        } = e,
        S = b === l.author.id,
        N = n.state === E.elq.ACCEPTING,
        j = (0, o.bG)([g.A], () => null != n.channel ? g.A.getChannel(n.channel.id) : null, [n]);
    s()(null == j || j.isPrivate(), "must be a private channel");
    let {
        analyticsLocations: L
    } = (0, u.Ay)(c.A.INVITE_EMBED), R = null != j, P = a.useCallback(() => {
        let e = "noop";
        R ? (T(), e = "transition") : (y(), e = "accept"), (0, d.he)({
            invite: n,
            action: e,
            inviter_id: l.author.id,
            invite_message_id: l.id,
            invite_instance_id: (0, m._U)(n.code, l.id)
        }, L)
    }, [n, l, L, R, T, y]);
    if (null == j) {
        if (null == n.channel) return (0, i.jsx)(C.A, {});
        j = (0, p.OY)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
    } else {
        t = j.recipients.reduce((e, t) => {
            let n = x.default.getUser(t);
            return null != n && e.push(n), e
        }, []);
        let e = x.default.getCurrentUser();
        R && null != e && t.push(e)
    }
    let w = (0, _.m1)(j, x.default, A.A);
    (null == w || "" === w) && (w = t.length > 0 ? t.filter(f.Vq).map(e => e.username).join(", ") : I.intl.string(I.t.LJpTRF));
    let M = I.intl.string(I.t.XpeFYr),
        D = "active";
    R && (M = I.intl.string(I.t.cEnaWx), D = "secondary");
    let k = I.intl.string(I.t["3p3/BK"]);
    return S && (k = I.intl.string(I.t.qmtuXE)), (0, i.jsxs)(h.A, {
        children: [(0, i.jsx)(h.A.Header, {
            text: k
        }), (0, i.jsxs)(h.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: v.iH,
                children: [(0, i.jsx)(h.A.Icon, {
                    channel: j,
                    onClick: R ? P : void 0
                }), (0, i.jsx)(h.A.Info, {
                    title: w,
                    onClick: R ? P : void 0,
                    children: (0, i.jsx)(h.A.Data, {
                        members: t.length
                    })
                })]
            }), (0, i.jsx)(r.$nd, {
                onClick: P,
                loading: N,
                disabled: R,
                variant: D,
                text: M,
                fullWidth: !0
            })]
        })]
    })
}