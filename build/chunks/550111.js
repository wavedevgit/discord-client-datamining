/** chunk id: 550111, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P,
    a: () => R
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(262295),
    f = n(291661),
    p = n(628856),
    _ = n(609425),
    h = n(922301),
    m = n(750112),
    g = n(685073),
    E = n(534400),
    y = n(919395),
    b = n(385612),
    O = n(696451),
    v = n(290863),
    A = n(226540),
    I = n(227),
    S = n(985018),
    T = n(662567),
    C = n(16533),
    N = n(312653);
let w = {
        xlarge: c._3J.SIZE_48,
        large: c._3J.SIZE_40,
        small: c._3J.SIZE_24,
        xsmall: c._3J.SIZE_20,
        default: c._3J.SIZE_32
    },
    R = i.memo(function(e) {
        let {
            user: t,
            guildId: n,
            nameplate: a,
            nameplateData: R,
            className: P,
            innerClassName: D,
            isHighlighted: L,
            showStatus: x,
            showPlaceholderUser: M,
            pendingGlobalName: j,
            pendingNickname: k,
            pendingAvatarDecoration: U,
            pendingDisplayNameStyles: G,
            pendingPrimaryGuildId: V,
            nameplatePreviewSize: F = "default",
            skipEffectDisplayName: B = !1,
            width: H
        } = e, Y = (0, u.Ay)(), W = (0, l.Mw)(Y), K = null != a ? (0, p.D)(a) : R, z = (0, s.bG)([v.A], () => null != t ? v.A.getStatus(t.id) : c.clD.ONLINE), q = W ? "#706F74" : "#aaaab2", Z = i.useRef(null), Q = (0, s.bG)([O.Ay], () => null != n && null != t ? O.Ay.getMember(n, t.id) : null), X = null != t ? (0, b.eh)({
            pendingNickname: k,
            pendingGlobalName: j,
            user: t,
            guildMember: Q
        }) : void 0, J = (0, y.lw)({
            pendingValue: U,
            userValue: null == t ? void 0 : t.avatarDecoration,
            guildValue: null == Q ? void 0 : Q.avatarDecoration,
            guildId: n
        }), $ = i.useMemo(() => w[F], [F]), ee = (0, _.A)({
            userId: null == t ? void 0 : t.id,
            guildId: n,
            pendingDisplayNameStyles: G
        }), et = (0, g.gS)(V), en = i.useMemo(() => null != a ? S.intl.formatToPlainString(S.t.YJig7C, {
            a11y_text: a.label
        }) : S.intl.string(S.t.SZeUdR), [a]);
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: {
                color: W ? "white" : "black",
                width: null != H ? "".concat(H, "px") : "100%"
            },
            children: (0, r.jsxs)(c.M1G, {
                className: o()(P, T.M4, {
                    [T.s]: "xsmall" === F,
                    [T.EX]: "small" === F,
                    [T.as]: "large" === F,
                    [T.AQ]: "xlarge" === F,
                    [T.gf]: null != H
                }),
                children: [null != K && (0, r.jsx)(I.A, {
                    nameplate: K,
                    hovered: L,
                    placement: A.u.PREVIEW,
                    content: M ? void 0 : Z
                }, null == a ? void 0 : a.skuId), (0, r.jsxs)("div", {
                    className: T.MU,
                    children: [null != t ? (0, r.jsx)("div", {
                        className: o()(T.H, !M && T.Mk),
                        children: (0, r.jsx)(d.A, {
                            ref: Z,
                            avatar: (0, r.jsx)(f.A, {
                                user: t,
                                guildId: n,
                                avatarSize: $,
                                status: x ? z : void 0,
                                avatarDecorationOverride: J,
                                "aria-hidden": !0
                            }),
                            decorators: (0, r.jsx)(E.Ay, {
                                primaryGuild: et,
                                userId: t.id,
                                contextGuildId: n,
                                className: T.id
                            }),
                            name: (0, r.jsx)(m.A, {
                                userName: X,
                                displayNameStyles: ee,
                                effectDisplayType: B ? h.G.PLAIN : h.G.ANIMATED,
                                loop: !0
                            }),
                            innerClassName: D,
                            withDisplayNameStyles: null != ee
                        })
                    }) : null, (0, r.jsxs)("div", {
                        className: o()(T.H, M && T.Mk),
                        children: [(0, r.jsx)(c.euF, {
                            src: W ? C : N,
                            size: $,
                            "aria-hidden": !0,
                            status: c.clD.ONLINE,
                            statusColor: q,
                            className: T.my
                        }), (0, r.jsx)("div", {
                            className: T.gM
                        })]
                    })]
                })]
            })
        })
    }),
    P = R