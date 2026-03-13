/** chunk id: 890698 params = (module,exports,require) **/
i.d(t, {
    A: () => R,
    M: () => S
}), i(938796);
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(821418),
    d = i(665260),
    c = i(311907),
    o = i(397927),
    u = i(444316),
    m = i(854378),
    x = i(573435),
    _ = i(769015),
    h = i(714991),
    g = i(24215),
    A = i(897288),
    E = i(611010),
    p = i(95701),
    j = i(427157),
    I = i(287809),
    v = i(860689),
    f = i(427262),
    T = i(652215),
    N = i(330936),
    C = i(172799),
    y = i(985018),
    D = i(236290);
let S = () => (0, l.jsxs)(n.Fragment, {
        children: [(0, l.jsx)(m.eu, {
            src: null,
            size: o._3J.DEPRECATED_SIZE_100,
            className: D.my
        }), (0, l.jsx)(m.tK, {
            children: y.intl.string(y.t["3rE1P8"])
        }), (0, l.jsx)(m.hE, {
            className: D.RG,
            children: y.intl.string(y.t.ZTNur7)
        })]
    }),
    L = e => {
        let {
            guild: t,
            user: i,
            application: n,
            compact: s
        } = e;
        return null != n ? (0, l.jsx)(_.A, {
            className: D.Z2,
            game: n,
            size: D.q6
        }) : null != i ? (0, l.jsx)(m.eu, {
            src: null != i ? i.getAvatarURL(void 0, 80) : null,
            size: o._3J.SIZE_80,
            className: s ? void 0 : D.my
        }) : null != t ? (0, l.jsx)(x.Ay, {
            mask: x.Ay.Masks.SQUIRCLE,
            width: 64,
            height: 64,
            className: D.$f,
            children: (0, l.jsx)(m.$v, {
                guild: t,
                size: m.$v.Sizes.LARGER,
                animate: !0
            })
        }) : null
    },
    b = e => (0, l.jsx)(o.Text, {
        tag: "span",
        className: e.className,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: e.children
    }),
    R = e => {
        let t, i, n, {
                invite: s,
                disableUser: x = !1,
                error: _,
                flatActivityCount: S = !1,
                isRegister: R = !1,
                inUnclaimedFlow: O = !1,
                friendMemberIds: U = [],
                showInvitedByHeader: G = !0,
                className: k
            } = e,
            {
                currentUser: M
            } = (0, c.cf)([I.default], () => ({
                currentUser: I.default.getCurrentUser()
            }));
        if (null == s) return null;
        let P = null != U && U.length > 0,
            V = null != s.guild ? v.fh(s.guild) ? s.guild : v.DY(s.guild) : null,
            F = null != s.channel ? (0, p.OY)(s.channel) : null,
            Y = null != s.target_application ? new E.Ay(s.target_application) : null,
            z = x || null == s.inviter ? null : new j.A(s.inviter),
            w = !(null != s.approximate_member_count && s.approximate_member_count > 100 || null != V && V.features.has(T.GuildFeatures.COMMUNITY)) && null != z,
            H = null,
            B = (0, d.Lt)(s.flags ?? 0, r.Q.IS_GUEST_INVITE),
            W = !1;
        if (null != V) G && (H = null == z ? y.intl.string(y.t["3rE1P8"]) : y.intl.formatToPlainString(y.t["5u47va"], {
            username: f.Ay.getFormattedName(z)
        }), s.target_type === C.yV.STREAM && null != s.target_user && (H = y.intl.formatToPlainString(y.t.x2L32Q, {
            username: f.Ay.getFormattedName(s.target_user)
        })), s.target_type === C.yV.EMBEDDED_APPLICATION && null != s.target_application && (H = null != z ? y.intl.formatToPlainString(y.t.UW1Cav, {
            username: f.Ay.getFormattedName(z)
        }) : y.intl.string(y.t.ENSuN3))), w && null == Y && (t = (0, l.jsx)(m.$v, {
            className: D.Kk,
            guild: V,
            size: m.$v.Sizes.SMALL
        })), i = V.name, null != Y && (i = Y.name, n = (0, l.jsxs)("div", {
            children: [(0, l.jsx)(m.tK, {
                className: D.R9,
                children: y.intl.string(y.t["3gg9fF"])
            }), (0, l.jsxs)("div", {
                className: D.bo,
                children: [(0, l.jsx)(m.$v, {
                    guild: V,
                    size: m.$v.Sizes.SMALL
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: D.Al,
                    children: V.name
                })]
            })]
        }));
        else if (null != F) {
            if (null == z) throw Error("no inviter in group DM invite");
            let e = f.Ay.getFormattedName(z);
            null != F.name && "" !== F.name ? (H = y.intl.formatToPlainString(y.t["5u47va"], {
                username: e
            }), i = F.name, null != F.icon && (t = (0, l.jsx)(m.F4, {
                channel: F,
                size: o._3J.SIZE_32
            }))) : (H = y.intl.string(y.t.OsdY8B), i = e)
        } else if (null != z) {
            let e = f.Ay.getFormattedName(z, !0);
            i = y.intl.formatToPlainString(y.t["4aF92R"], {
                username: e
            }), W = !0, n = null != _ ? null : (0, l.jsx)(m.tK, {
                className: D.b$,
                children: R ? y.intl.format(y.t["6r4JiR"], {
                    username: e
                }) : y.intl.format(y.t.Quj7HX, {
                    username: e
                })
            })
        }
        return (0, l.jsxs)(o.BJc, {
            direction: "vertical",
            gap: 8,
            className: a()(D.kL, k),
            justify: "center",
            align: "center",
            children: [(0, l.jsx)(L, {
                application: Y,
                guild: V,
                user: w ? z : null,
                compact: W
            }), null != _ ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(m.tK, {
                    children: y.intl.string(y.t.mDFGFj)
                }), (0, l.jsx)(m.hE, {
                    children: _
                })]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [null != H ? (0, l.jsx)(m.tK, {
                    children: H
                }) : null, (0, l.jsxs)(m.hE, {
                    className: D.DD,
                    children: [null != V ? (0, l.jsx)(h.A, {
                        guild: V,
                        className: D.n2,
                        tooltipPosition: "left"
                    }) : null, t, i]
                })]
            }), n, (0, l.jsxs)(o.BJc, {
                direction: "vertical",
                gap: 24,
                children: [(0, l.jsxs)(o.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [null != Y || W || s?.guild?.id === N.TA ? null : (0, l.jsx)(m.R1, {
                        online: s.approximate_presence_count,
                        total: s.approximate_member_count,
                        flat: S,
                        renderText: P ? b : void 0
                    }), P && (0, l.jsx)(u.A, {
                        friendMemberIds: U
                    })]
                }), (0, l.jsx)(A.A, {
                    guild: V,
                    roles: s.roles,
                    className: D.Ei
                }), O || B || null == M ? (0, l.jsx)(m.xt, {
                    user: M
                }) : (0, l.jsx)(g.L, {})]
            })]
        })
    }