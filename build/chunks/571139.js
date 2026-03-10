/** chunk id: 571139 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(873263),
    a = n(311907),
    o = n(314116),
    c = n(397927),
    d = n(334465),
    u = n(71393),
    _ = n(967198),
    E = n(624458),
    T = n(202384),
    A = n(513461),
    I = n(709977),
    N = n(212455),
    p = n(652215),
    R = n(746080),
    S = n(985018),
    m = n(121615),
    h = n(1624);
let g = () => {
    let e = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
        t = (0, a.bG)([u.A], () => u.A.getGuild(e), [e]),
        l = (0, a.bG)([N.A], () => null != e ? N.A.getRequest(e) : null, [e]),
        g = (0, s.zy)(),
        C = (0, d.B)(g.pathname, p.BVt.CHANNEL(t?.id, R.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || C) return null;
    let O = l?.applicationStatus ?? A.B5.STARTED,
        y = null,
        x = null,
        P = null,
        D = [m.lm, h.lm];
    switch (O) {
        case A.B5.SUBMITTED:
            y = S.intl.string(S.t["5iLvSx"]), x = S.intl.string(S.t.mqtdmQ), P = () => {
                (0, o.A)({
                    title: S.intl.string(S.t.aIz1oV),
                    subtitle: S.intl.string(S.t["13tjTU"]),
                    variant: "primary",
                    confirmText: S.intl.string(S.t["cY+Oob"]),
                    onConfirm: () => E.A.removeGuildJoinRequest(t.id)
                })
            };
            break;
        case A.B5.REJECTED:
            y = S.intl.string(S.t.lk30cY), x = S.intl.string(S.t["8RrsHr"]), P = () => {
                (0, c.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("37548").then(n.bind(n, 856103));
                    return n => (0, i.jsx)(e, {
                        guildId: t.id,
                        ...n
                    })
                })
            }, D.push(m.z3);
            break;
        default:
            y = S.intl.string(S.t.G5YKXP), x = S.intl.string(S.t["r8/DT+"]), P = () => {
                (0, T.Ze)(t.id)
            }
    }
    return (0, i.jsxs)("div", {
        className: r()(...D),
        children: [(0, i.jsx)(c.Text, {
            className: m.wx,
            variant: "text-sm/normal",
            children: y
        }), (0, i.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: P,
            text: x
        })]
    })
}