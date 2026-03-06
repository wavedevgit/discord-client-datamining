/** chunk id: 571139 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P
}), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r);
if (21552 == n.j) var s = n(873263);
var a = n(311907),
    o = n(314116),
    E = n(397927),
    c = n(334465),
    _ = n(71393),
    d = n(967198),
    A = n(624458),
    u = n(202384),
    T = n(513461),
    I = n(709977),
    N = n(212455),
    R = n(652215),
    S = n(746080),
    O = n(985018),
    p = n(463149),
    C = n(504226);
let P = 21552 == n.j ? () => {
    let e = (0, a.bG)([d.A], () => d.A.getGuildId(), []),
        t = (0, a.bG)([_.A], () => _.A.getGuild(e), [e]),
        r = (0, a.bG)([N.A], () => null != e ? N.A.getRequest(e) : null, [e]),
        P = (0, s.zy)(),
        D = (0, c.B)(P.pathname, R.BVt.CHANNEL(t?.id, S.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || D) return null;
    let M = r?.applicationStatus ?? T.B5.STARTED,
        U = null,
        g = null,
        m = null,
        h = [p.lm, C.lm];
    switch (M) {
        case T.B5.SUBMITTED:
            U = O.intl.string(O.t["5iLvSx"]), g = O.intl.string(O.t.mqtdmQ), m = () => {
                (0, o.A)({
                    title: O.intl.string(O.t.aIz1oV),
                    subtitle: O.intl.string(O.t["13tjTU"]),
                    variant: "primary",
                    confirmText: O.intl.string(O.t["cY+Oob"]),
                    onConfirm: () => A.A.removeGuildJoinRequest(t.id)
                })
            };
            break;
        case T.B5.REJECTED:
            U = O.intl.string(O.t.lk30cY), g = O.intl.string(O.t["8RrsHr"]), m = () => {
                (0, E.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("37548").then(n.bind(n, 856103));
                    return n => (0, i.jsx)(e, {
                        guildId: t.id,
                        ...n
                    })
                })
            }, h.push(p.z3);
            break;
        default:
            U = O.intl.string(O.t.G5YKXP), g = O.intl.string(O.t["r8/DT+"]), m = () => {
                (0, u.Ze)(t.id)
            }
    }
    return (0, i.jsxs)("div", {
        className: l()(...h),
        children: [(0, i.jsx)(E.Text, {
            className: p.wx,
            variant: "text-sm/normal",
            children: U
        }), (0, i.jsx)(E.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: m,
            text: g
        })]
    })
} : null