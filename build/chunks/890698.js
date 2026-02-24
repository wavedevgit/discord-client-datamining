/** chunk id: 890698, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => P,
    M: () => M
}), t(938796);
var n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(821418),
    c = t(665260),
    u = t(311907),
    d = t(397927),
    o = t(444316),
    m = t(854378),
    x = t(573435),
    g = t(769015),
    h = t(714991),
    _ = t(24215),
    E = t(897288),
    j = t(611010),
    A = t(95701),
    I = t(427157),
    N = t(287809),
    f = t(860689),
    v = t(427262),
    p = t(652215),
    T = t(330936),
    L = t(172799),
    S = t(985018),
    C = t(236290);
let M = () => (0, n.jsxs)(i.Fragment, {
        children: [(0, n.jsx)(m.eu, {
            src: null,
            size: d._3J.DEPRECATED_SIZE_100,
            className: C.my
        }), (0, n.jsx)(m.tK, {
            children: S.intl.string(S.t["3rE1P8"])
        }), (0, n.jsx)(m.hE, {
            className: C.RG,
            children: S.intl.string(S.t.ZTNur7)
        })]
    }),
    y = e => {
        let {
            guild: l,
            user: t,
            application: i,
            compact: s
        } = e;
        return null != i ? (0, n.jsx)(g.A, {
            className: C.Z2,
            game: i,
            size: C.q6
        }) : null != t ? (0, n.jsx)(m.eu, {
            src: null != t ? t.getAvatarURL(void 0, 80) : null,
            size: d._3J.SIZE_80,
            className: s ? void 0 : C.my
        }) : null != l ? (0, n.jsx)(x.Ay, {
            mask: x.Ay.Masks.SQUIRCLE,
            width: 64,
            height: 64,
            className: C.$f,
            children: (0, n.jsx)(m.$v, {
                guild: l,
                size: m.$v.Sizes.LARGER,
                animate: !0
            })
        }) : null
    },
    R = e => (0, n.jsx)(d.Text, {
        tag: "span",
        className: e.className,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: e.children
    }),
    P = e => {
        let l, t, i, {
                invite: s,
                disableUser: x = !1,
                error: g,
                flatActivityCount: M = !1,
                isRegister: P = !1,
                inUnclaimedFlow: b = !1,
                friendMemberIds: O = [],
                showInvitedByHeader: k = !0,
                className: D
            } = e,
            {
                currentUser: U
            } = (0, u.cf)([N.default], () => ({
                currentUser: N.default.getCurrentUser()
            }));
        if (null == s) return null;
        let z = null != O && O.length > 0,
            F = null != s.guild ? f.fh(s.guild) ? s.guild : f.DY(s.guild) : null,
            V = null != s.channel ? (0, A.OY)(s.channel) : null,
            w = null != s.target_application ? new j.Ay(s.target_application) : null,
            H = x || null == s.inviter ? null : new I.A(s.inviter),
            G = !(null != s.approximate_member_count && s.approximate_member_count > 100 || null != F && F.features.has(p.GuildFeatures.COMMUNITY)) && null != H,
            J = null,
            K = (0, c.Lt)(s.flags ?? 0, r.Q.IS_GUEST_INVITE),
            W = !1;
        if (null != F) k && (J = null == H ? S.intl.string(S.t["3rE1P8"]) : S.intl.formatToPlainString(S.t["5u47va"], {
            username: v.Ay.getFormattedName(H)
        }), s.target_type === L.yV.STREAM && null != s.target_user && (J = S.intl.formatToPlainString(S.t.x2L32Q, {
            username: v.Ay.getFormattedName(s.target_user)
        })), s.target_type === L.yV.EMBEDDED_APPLICATION && null != s.target_application && (J = null != H ? S.intl.formatToPlainString(S.t.UW1Cav, {
            username: v.Ay.getFormattedName(H)
        }) : S.intl.string(S.t.ENSuN3))), G && null == w && (l = (0, n.jsx)(m.$v, {
            className: C.Kk,
            guild: F,
            size: m.$v.Sizes.SMALL
        })), t = F.name, null != w && (t = w.name, i = (0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.tK, {
                className: C.R9,
                children: S.intl.string(S.t["3gg9fF"])
            }), (0, n.jsxs)("div", {
                className: C.bo,
                children: [(0, n.jsx)(m.$v, {
                    guild: F,
                    size: m.$v.Sizes.SMALL
                }), (0, n.jsx)(d.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: C.Al,
                    children: F.name
                })]
            })]
        }));
        else if (null != V) {
            if (null == H) throw Error("no inviter in group DM invite");
            let e = v.Ay.getFormattedName(H);
            null != V.name && "" !== V.name ? (J = S.intl.formatToPlainString(S.t["5u47va"], {
                username: e
            }), t = V.name, null != V.icon && (l = (0, n.jsx)(m.F4, {
                channel: V,
                size: d._3J.SIZE_32
            }))) : (J = S.intl.string(S.t.OsdY8B), t = e)
        } else if (null != H) {
            let e = v.Ay.getFormattedName(H, !0);
            t = S.intl.formatToPlainString(S.t["4aF92R"], {
                username: e
            }), W = !0, i = null != g ? null : (0, n.jsx)(m.tK, {
                className: C.b$,
                children: P ? S.intl.format(S.t["6r4JiR"], {
                    username: e
                }) : S.intl.format(S.t.Quj7HX, {
                    username: e
                })
            })
        }
        return (0, n.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 8,
            className: a()(C.kL, D),
            justify: "center",
            align: "center",
            children: [(0, n.jsx)(y, {
                application: w,
                guild: F,
                user: G ? H : null,
                compact: W
            }), null != g ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(m.tK, {
                    children: S.intl.string(S.t.mDFGFj)
                }), (0, n.jsx)(m.hE, {
                    children: g
                })]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [null != J ? (0, n.jsx)(m.tK, {
                    children: J
                }) : null, (0, n.jsxs)(m.hE, {
                    className: C.DD,
                    children: [null != F ? (0, n.jsx)(h.A, {
                        guild: F,
                        className: C.n2,
                        tooltipPosition: "left"
                    }) : null, l, t]
                })]
            }), i, (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 24,
                children: [(0, n.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [null != w || W || s?.guild?.id === T.TA ? null : (0, n.jsx)(m.R1, {
                        online: s.approximate_presence_count,
                        total: s.approximate_member_count,
                        flat: M,
                        renderText: z ? R : void 0
                    }), z && (0, n.jsx)(o.A, {
                        friendMemberIds: O
                    })]
                }), (0, n.jsx)(E.A, {
                    guild: F,
                    roles: s.roles,
                    className: C.Ei
                }), b || K || null == U ? (0, n.jsx)(m.xt, {
                    user: U
                }) : (0, n.jsx)(_.L, {})]
            })]
        })
    }