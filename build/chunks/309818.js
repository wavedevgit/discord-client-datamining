/** Chunk was on 64935 **/
/** chunk id: 309818, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    p = n(529200),
    m = n(95701),
    f = n(734057),
    g = n(287809),
    _ = n(403362),
    h = n(168428),
    b = n(652215),
    A = n(985018),
    y = n(563111);

function v(e) {
    let t, {
            invite: n,
            message: l,
            currentUserId: v,
            onTransitionToInviteChannel: x,
            onAcceptInstantInvite: O
        } = e,
        E = v === l.author.id,
        j = n.state === b.elq.ACCEPTING,
        C = (0, o.bG)([f.A], () => null != n.channel ? f.A.getChannel(n.channel.id) : null, [n]);
    a()(null == C || C.isPrivate(), "must be a private channel");
    let {
        analyticsLocations: I
    } = (0, d.Ay)(u.A.INVITE_EMBED), S = null != C, T = i.useCallback(() => {
        let e = "noop";
        S ? (x(), e = "transition") : (O(), e = "accept"), (0, c.he)({
            invite: n,
            action: e,
            inviter_id: l.author.id,
            invite_message_id: l.id
        }, I)
    }, [n, l, I, S, x, O]);
    if (null == C) {
        if (null == n.channel) return (0, r.jsx)(h.A, {});
        C = (0, m.OY)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
    } else {
        t = C.recipients.reduce((e, t) => {
            let n = g.default.getUser(t);
            return null != n && e.push(n), e
        }, []);
        let e = g.default.getCurrentUser();
        S && null != e && t.push(e)
    }
    let N = C.name;
    (null == N || "" === N) && (N = t.length > 0 ? t.filter(_.Vq).map(e => e.username).join(", ") : A.intl.string(A.t.LJpTRF));
    let P = A.intl.string(A.t.XpeFYr),
        w = "active";
    S && (P = A.intl.string(A.t.cEnaWx), w = "secondary");
    let R = A.intl.string(A.t["3p3/BK"]);
    return E && (R = A.intl.string(A.t.qmtuXE)), (0, r.jsxs)(p.A, {
        children: [(0, r.jsx)(p.A.Header, {
            text: R
        }), (0, r.jsxs)(p.A.Body, {
            children: [(0, r.jsxs)("div", {
                className: y.iH,
                children: [(0, r.jsx)(p.A.Icon, {
                    channel: C,
                    onClick: S ? T : void 0
                }), (0, r.jsx)(p.A.Info, {
                    title: N,
                    onClick: S ? T : void 0,
                    children: (0, r.jsx)(p.A.Data, {
                        members: t.length
                    })
                })]
            }), (0, r.jsx)(s.$nd, {
                onClick: T,
                loading: j,
                disabled: S,
                variant: w,
                text: P,
                fullWidth: !0
            })]
        })]
    })
}