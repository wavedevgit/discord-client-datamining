/** chunk id: 890698, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L,
    M: () => b
}), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    d = n(311907),
    c = n(397927),
    u = n(444316),
    h = n(854378),
    _ = n(573435),
    p = n(769015),
    g = n(714991),
    m = n(24215),
    f = n(897288),
    A = n(611010),
    x = n(95701),
    E = n(427157),
    I = n(287809),
    v = n(860689),
    N = n(427262),
    j = n(652215),
    S = n(330936),
    C = n(172799),
    T = n(985018),
    y = n(132852);
let b = () => (0, i.jsxs)(s.Fragment, {
        children: [(0, i.jsx)(h.eu, {
            src: null,
            size: c._3J.DEPRECATED_SIZE_100,
            className: y.my
        }), (0, i.jsx)(h.tK, {
            children: T.intl.string(T.t["3rE1P8"])
        }), (0, i.jsx)(h.hE, {
            className: y.RG,
            children: T.intl.string(T.t.ZTNur7)
        })]
    }),
    R = e => {
        let {
            guild: t,
            user: n,
            application: s,
            compact: r
        } = e;
        return null != s ? (0, i.jsx)(p.A, {
            className: y.Z2,
            game: s,
            size: y.q6
        }) : null != n ? (0, i.jsx)(h.eu, {
            src: null != n ? n.getAvatarURL(void 0, 80) : null,
            size: c._3J.SIZE_80,
            className: r ? void 0 : y.my
        }) : null != t ? (0, i.jsx)(_.Ay, {
            mask: _.Ay.Masks.SQUIRCLE,
            width: 64,
            height: 64,
            className: y.$f,
            children: (0, i.jsx)(h.$v, {
                guild: t,
                size: h.$v.Sizes.LARGER,
                animate: !0
            })
        }) : null
    },
    O = e => (0, i.jsx)(c.Text, {
        tag: "span",
        className: e.className,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: e.children
    }),
    L = e => {
        let t, n, s, {
                invite: r,
                disableUser: _ = !1,
                error: p,
                flatActivityCount: b = !1,
                isRegister: L = !1,
                inUnclaimedFlow: w = !1,
                friendMemberIds: k = [],
                showInvitedByHeader: D = !0,
                className: U
            } = e,
            {
                currentUser: B
            } = (0, d.cf)([I.default], () => ({
                currentUser: I.default.getCurrentUser()
            }));
        if (null == r) return null;
        let P = null != k && k.length > 0,
            G = null != r.guild ? v.fh(r.guild) ? r.guild : v.DY(r.guild) : null,
            F = null != r.channel ? (0, x.OY)(r.channel) : null,
            M = null != r.target_application ? new A.Ay(r.target_application) : null,
            V = _ || null == r.inviter ? null : new E.A(r.inviter),
            W = !(null != r.approximate_member_count && r.approximate_member_count > 100 || null != G && G.features.has(j.GuildFeatures.COMMUNITY)) && null != V,
            H = null,
            K = (0, o.Lt)(r.flags ?? 0, a.Q.IS_GUEST_INVITE),
            z = !1;
        if (null != G) D && (H = null == V ? T.intl.string(T.t["3rE1P8"]) : T.intl.formatToPlainString(T.t["5u47va"], {
            username: N.Ay.getFormattedName(V)
        }), r.target_type === C.yV.STREAM && null != r.target_user && (H = T.intl.formatToPlainString(T.t.x2L32Q, {
            username: N.Ay.getFormattedName(r.target_user)
        })), r.target_type === C.yV.EMBEDDED_APPLICATION && null != r.target_application && (H = null != V ? T.intl.formatToPlainString(T.t.UW1Cav, {
            username: N.Ay.getFormattedName(V)
        }) : T.intl.string(T.t.ENSuN3))), W && null == M && (t = (0, i.jsx)(h.$v, {
            className: y.Kk,
            guild: G,
            size: h.$v.Sizes.SMALL
        })), n = G.name, null != M && (n = M.name, s = (0, i.jsxs)("div", {
            children: [(0, i.jsx)(h.tK, {
                className: y.R9,
                children: T.intl.string(T.t["3gg9fF"])
            }), (0, i.jsxs)("div", {
                className: y.bo,
                children: [(0, i.jsx)(h.$v, {
                    guild: G,
                    size: h.$v.Sizes.SMALL
                }), (0, i.jsx)(c.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: y.Al,
                    children: G.name
                })]
            })]
        }));
        else if (null != F) {
            if (null == V) throw Error("no inviter in group DM invite");
            let e = N.Ay.getFormattedName(V);
            null != F.name && "" !== F.name ? (H = T.intl.formatToPlainString(T.t["5u47va"], {
                username: e
            }), n = F.name, null != F.icon && (t = (0, i.jsx)(h.F4, {
                channel: F,
                size: c._3J.SIZE_32
            }))) : (H = T.intl.string(T.t.OsdY8B), n = e)
        } else if (null != V) {
            let e = N.Ay.getFormattedName(V, !0);
            n = T.intl.formatToPlainString(T.t["4aF92R"], {
                username: e
            }), z = !0, s = null != p ? null : (0, i.jsx)(h.tK, {
                className: y.b$,
                children: L ? T.intl.format(T.t["6r4JiR"], {
                    username: e
                }) : T.intl.format(T.t.Quj7HX, {
                    username: e
                })
            })
        }
        return (0, i.jsxs)(c.BJc, {
            direction: "vertical",
            gap: 8,
            className: l()(y.kL, U),
            justify: "center",
            align: "center",
            children: [(0, i.jsx)(R, {
                application: M,
                guild: G,
                user: W ? V : null,
                compact: z
            }), null != p ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(h.tK, {
                    children: T.intl.string(T.t.mDFGFj)
                }), (0, i.jsx)(h.hE, {
                    children: p
                })]
            }) : (0, i.jsxs)(i.Fragment, {
                children: [null != H ? (0, i.jsx)(h.tK, {
                    children: H
                }) : null, (0, i.jsxs)(h.hE, {
                    className: y.DD,
                    children: [null != G ? (0, i.jsx)(g.A, {
                        guild: G,
                        className: y.n2,
                        tooltipPosition: "left"
                    }) : null, t, n]
                })]
            }), s, (0, i.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 24,
                children: [(0, i.jsxs)(c.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [null != M || z || r?.guild?.id === S.TA ? null : (0, i.jsx)(h.R1, {
                        online: r.approximate_presence_count,
                        total: r.approximate_member_count,
                        flat: b,
                        renderText: P ? O : void 0
                    }), P && (0, i.jsx)(u.A, {
                        friendMemberIds: k
                    })]
                }), (0, i.jsx)(f.A, {
                    guild: G,
                    roles: r.roles,
                    className: y.Ei
                }), w || K || null == B ? (0, i.jsx)(h.xt, {
                    user: B
                }) : (0, i.jsx)(m.L, {})]
            })]
        })
    }