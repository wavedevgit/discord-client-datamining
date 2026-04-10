/** chunk id: 571139 params = (module,exports,require) **/
n.d(e, {
    A: () => C
}), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l);
if (21552 == n.j) var s = n(873263);
var a = n(311907),
    o = n(314116),
    c = n(397927),
    d = n(334465),
    u = n(71393),
    E = n(967198),
    _ = n(624458),
    T = n(202384),
    A = n(513461),
    I = n(709977),
    N = n(212455),
    R = n(652215),
    p = n(746080),
    h = n(985018),
    O = n(79790),
    m = n(215433);
let C = 21552 == n.j ? () => {
    let t = (0, a.bG)([E.A], () => E.A.getGuildId(), []),
        e = (0, a.bG)([u.A], () => u.A.getGuild(t), [t]),
        l = (0, a.bG)([N.A], () => null != t ? N.A.getRequest(t) : null, [t]),
        C = (0, s.zy)(),
        g = (0, d.B)(C.pathname, R.BVt.CHANNEL(e?.id, p.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == e || !(0, I.Qd)(e) || g) return null;
    let S = l?.applicationStatus ?? A.B5.STARTED,
        y = null,
        P = null,
        M = null,
        U = [O.lm, m.lm];
    switch (S) {
        case A.B5.SUBMITTED:
            y = h.intl.string(h.t["5iLvSx"]), P = h.intl.string(h.t.mqtdmQ), M = () => {
                (0, o.A)({
                    title: h.intl.string(h.t.aIz1oV),
                    subtitle: h.intl.string(h.t["13tjTU"]),
                    variant: "primary",
                    confirmText: h.intl.string(h.t["cY+Oob"]),
                    onConfirm: () => _.A.removeGuildJoinRequest(e.id)
                })
            };
            break;
        case A.B5.REJECTED:
            y = h.intl.string(h.t.lk30cY), P = h.intl.string(h.t["8RrsHr"]), M = () => {
                (0, c.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("37548").then(n.bind(n, 856103));
                    return n => (0, i.jsx)(t, {
                        guildId: e.id,
                        ...n
                    })
                })
            }, U.push(O.z3);
            break;
        default:
            y = h.intl.string(h.t.G5YKXP), P = h.intl.string(h.t["r8/DT+"]), M = () => {
                (0, T.Ze)(e.id)
            }
    }
    return (0, i.jsxs)("div", {
        className: r()(...U),
        children: [(0, i.jsx)(c.Text, {
            className: O.wx,
            variant: "text-sm/normal",
            children: y
        }), (0, i.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: M,
            text: P
        })]
    })
} : null