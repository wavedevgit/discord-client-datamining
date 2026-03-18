/** chunk id: 571139 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => O
}), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r);
if (21552 == n.j) var l = n(873263);
var a = n(311907),
    o = n(314116),
    c = n(397927),
    u = n(334465),
    d = n(71393),
    E = n(967198),
    _ = n(624458),
    T = n(202384),
    A = n(513461),
    I = n(709977),
    N = n(212455),
    p = n(652215),
    R = n(746080),
    g = n(985018),
    h = n(121615),
    m = n(1624);
let O = 21552 == n.j ? () => {
    let t = (0, a.bG)([E.A], () => E.A.getGuildId(), []),
        e = (0, a.bG)([d.A], () => d.A.getGuild(t), [t]),
        r = (0, a.bG)([N.A], () => null != t ? N.A.getRequest(t) : null, [t]),
        O = (0, l.zy)(),
        C = (0, u.B)(O.pathname, p.BVt.CHANNEL(e?.id, R.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == e || !(0, I.Qd)(e) || C) return null;
    let S = r?.applicationStatus ?? A.B5.STARTED,
        y = null,
        x = null,
        P = null,
        U = [h.lm, m.lm];
    switch (S) {
        case A.B5.SUBMITTED:
            y = g.intl.string(g.t["5iLvSx"]), x = g.intl.string(g.t.mqtdmQ), P = () => {
                (0, o.A)({
                    title: g.intl.string(g.t.aIz1oV),
                    subtitle: g.intl.string(g.t["13tjTU"]),
                    variant: "primary",
                    confirmText: g.intl.string(g.t["cY+Oob"]),
                    onConfirm: () => _.A.removeGuildJoinRequest(e.id)
                })
            };
            break;
        case A.B5.REJECTED:
            y = g.intl.string(g.t.lk30cY), x = g.intl.string(g.t["8RrsHr"]), P = () => {
                (0, c.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("37548").then(n.bind(n, 856103));
                    return n => (0, i.jsx)(t, {
                        guildId: e.id,
                        ...n
                    })
                })
            }, U.push(h.z3);
            break;
        default:
            y = g.intl.string(g.t.G5YKXP), x = g.intl.string(g.t["r8/DT+"]), P = () => {
                (0, T.Ze)(e.id)
            }
    }
    return (0, i.jsxs)("div", {
        className: s()(...U),
        children: [(0, i.jsx)(c.Text, {
            className: h.wx,
            variant: "text-sm/normal",
            children: y
        }), (0, i.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: P,
            text: x
        })]
    })
} : null