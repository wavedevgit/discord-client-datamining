/** chunk id: 890698 params = (module,exports,require) **/
i.d(t, {
    A: () => R,
    M: () => S
}), i(938796);
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(821418),
    d = i(665260),
    o = i(311907),
    c = i(397927),
    u = i(444316),
    m = i(854378),
    x = i(573435),
    g = i(769015),
    h = i(714991),
    _ = i(24215),
    p = i(897288),
    A = i(611010),
    j = i(95701),
    E = i(427157),
    v = i(287809),
    I = i(860689),
    f = i(427262),
    T = i(652215),
    C = i(330936),
    N = i(172799),
    y = i(985018),
    D = i(236290);
let S = () => (0, l.jsxs)(n.Fragment, {
        children: [(0, l.jsx)(m.eu, {
            src: null,
            size: c._3J.DEPRECATED_SIZE_100,
            className: D.my
        }), (0, l.jsx)(m.tK, {
            children: y.intl.string(y.t["3rE1P8"])
        }), (0, l.jsx)(m.hE, {
            className: D.RG,
            children: y.intl.string(y.t.ZTNur7)
        })]
    }),
    b = e => {
        let {
            guild: t,
            user: i,
            application: n,
            compact: a
        } = e;
        return null != n ? (0, l.jsx)(g.A, {
            className: D.Z2,
            game: n,
            size: D.q6
        }) : null != i ? (0, l.jsx)(m.eu, {
            src: null != i ? i.getAvatarURL(void 0, 80) : null,
            size: c._3J.SIZE_80,
            className: a ? void 0 : D.my
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
    L = e => (0, l.jsx)(c.Text, {
        tag: "span",
        className: e.className,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: e.children
    }),
    R = e => {
        let t, i, n, {
                invite: a,
                disableUser: x = !1,
                error: g,
                flatActivityCount: S = !1,
                isRegister: R = !1,
                inUnclaimedFlow: O = !1,
                friendMemberIds: U = [],
                showInvitedByHeader: G = !0,
                className: k
            } = e,
            {
                currentUser: M
            } = (0, o.cf)([v.default], () => ({
                currentUser: v.default.getCurrentUser()
            }));
        if (null == a) return null;
        let P = null != U && U.length > 0,
            V = null != a.guild ? I.fh(a.guild) ? a.guild : I.DY(a.guild) : null,
            F = null != a.channel ? (0, j.OY)(a.channel) : null,
            Y = null != a.target_application ? new A.Ay(a.target_application) : null,
            z = x || null == a.inviter ? null : new E.A(a.inviter),
            w = !(null != a.approximate_member_count && a.approximate_member_count > 100 || null != V && V.features.has(T.GuildFeatures.COMMUNITY)) && null != z,
            H = null,
            B = (0, d.Lt)(a.flags ?? 0, r.Q.IS_GUEST_INVITE),
            W = !1;
        if (null != V) G && (H = null == z ? y.intl.string(y.t["3rE1P8"]) : y.intl.formatToPlainString(y.t["5u47va"], {
            username: f.Ay.getFormattedName(z)
        }), a.target_type === N.yV.STREAM && null != a.target_user && (H = y.intl.formatToPlainString(y.t.x2L32Q, {
            username: f.Ay.getFormattedName(a.target_user)
        })), a.target_type === N.yV.EMBEDDED_APPLICATION && null != a.target_application && (H = null != z ? y.intl.formatToPlainString(y.t.UW1Cav, {
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
                }), (0, l.jsx)(c.Text, {
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
                size: c._3J.SIZE_32
            }))) : (H = y.intl.string(y.t.OsdY8B), i = e)
        } else if (null != z) {
            let e = f.Ay.getFormattedName(z, !0);
            i = y.intl.formatToPlainString(y.t["4aF92R"], {
                username: e
            }), W = !0, n = null != g ? null : (0, l.jsx)(m.tK, {
                className: D.b$,
                children: R ? y.intl.format(y.t["6r4JiR"], {
                    username: e
                }) : y.intl.format(y.t.Quj7HX, {
                    username: e
                })
            })
        }
        return (0, l.jsxs)(c.BJc, {
            direction: "vertical",
            gap: 8,
            className: s()(D.kL, k),
            justify: "center",
            align: "center",
            children: [(0, l.jsx)(b, {
                application: Y,
                guild: V,
                user: w ? z : null,
                compact: W
            }), null != g ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(m.tK, {
                    children: y.intl.string(y.t.mDFGFj)
                }), (0, l.jsx)(m.hE, {
                    children: g
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
            }), n, (0, l.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 24,
                children: [(0, l.jsxs)(c.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [null != Y || W || a?.guild?.id === C.TA ? null : (0, l.jsx)(m.R1, {
                        online: a.approximate_presence_count,
                        total: a.approximate_member_count,
                        flat: S,
                        renderText: P ? L : void 0
                    }), P && (0, l.jsx)(u.A, {
                        friendMemberIds: U
                    })]
                }), (0, l.jsx)(p.A, {
                    guild: V,
                    roles: a.roles,
                    className: D.Ei
                }), O || B || null == M ? (0, l.jsx)(m.xt, {
                    user: M
                }) : (0, l.jsx)(_.L, {})]
            })]
        })
    }