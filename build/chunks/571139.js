/** Chunk was on web.js **/
/** chunk id: 571139, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(960488),
    o = n(311907),
    l = n(314116),
    c = n(397927),
    u = n(71393),
    d = n(967198),
    f = n(624458),
    p = n(202384),
    _ = n(513461),
    h = n(709977),
    m = n(212455),
    g = n(652215),
    E = n(746080),
    y = n(985018),
    b = n(121615),
    O = n(1624);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}
let I = () => {
    var e, t;
    let i = (0, o.bG)([d.A], () => d.A.getGuildId(), []),
        v = (0, o.bG)([u.A], () => u.A.getGuild(i), [i]),
        I = (0, o.bG)([m.A], () => null != i ? m.A.getRequest(i) : null, [i]),
        S = (0, s.zy)(),
        T = (null == (t = (0, s.B6)(S.pathname, g.BVt.CHANNEL(null == v ? void 0 : v.id, E.VV.GUILD_ONBOARDING))) ? void 0 : t.isExact) === !0;
    if (null == v || !(0, h.Qd)(v) || T) return null;
    let C = () => {
            (0, p.Ze)(v.id)
        },
        N = () => {
            (0, l.A)({
                title: y.intl.string(y.t.aIz1oV),
                subtitle: y.intl.string(y.t["13tjTU"]),
                variant: "primary",
                confirmText: y.intl.string(y.t["cY+Oob"]),
                onConfirm: () => f.A.removeGuildJoinRequest(v.id)
            })
        },
        w = () => {
            (0, c.mMO)(async () => {
                let {
                    default: e
                } = await n.e("37548").then(n.bind(n, 856103));
                return t => (0, r.jsx)(e, A({
                    guildId: v.id
                }, t))
            })
        },
        R = null != (e = null == I ? void 0 : I.applicationStatus) ? e : _.B5.STARTED,
        P = null,
        D = null,
        x = null,
        L = [b.lm, O.lm];
    switch (R) {
        case _.B5.SUBMITTED:
            P = y.intl.string(y.t["5iLvSx"]), D = y.intl.string(y.t.mqtdmQ), x = N;
            break;
        case _.B5.REJECTED:
            P = y.intl.string(y.t.lk30cY), D = y.intl.string(y.t["8RrsHr"]), x = w, L.push(b.z3);
            break;
        default:
            P = y.intl.string(y.t.G5YKXP), D = y.intl.string(y.t["r8/DT+"]), x = C
    }
    return (0, r.jsxs)("div", {
        className: a()(...L),
        children: [(0, r.jsx)(c.Text, {
            className: b.wx,
            variant: "text-sm/normal",
            children: P
        }), (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: x,
            text: D
        })]
    })
}