/** chunk id: 890698 params = (module,exports,require) **/
i.d(t, {
    A: () => L,
    M: () => D
}), i(938796);
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(821418),
    d = i(665260),
    o = i(311907),
    c = i(397927),
    u = i(854378),
    m = i(573435),
    x = i(769015),
    g = i(714991),
    h = i(24215),
    _ = i(897288),
    p = i(611010),
    A = i(95701),
    j = i(427157),
    E = i(287809),
    v = i(860689),
    I = i(427262),
    f = i(652215),
    T = i(330936),
    C = i(172799),
    N = i(985018),
    y = i(236290);
let D = () => (0, l.jsxs)(n.Fragment, {
        children: [(0, l.jsx)(u.eu, {
            src: null,
            size: c._3J.DEPRECATED_SIZE_100,
            className: y.my
        }), (0, l.jsx)(u.tK, {
            children: N.intl.string(N.t["3rE1P8"])
        }), (0, l.jsx)(u.hE, {
            className: y.RG,
            children: N.intl.string(N.t.ZTNur7)
        })]
    }),
    S = e => {
        let {
            guild: t,
            user: i,
            application: n,
            compact: a
        } = e;
        return null != n ? (0, l.jsx)(x.A, {
            className: y.Z2,
            game: n,
            size: y.q6
        }) : null != i ? (0, l.jsx)(u.eu, {
            src: null != i ? i.getAvatarURL(void 0, 80) : null,
            size: c._3J.SIZE_80,
            className: a ? void 0 : y.my
        }) : null != t ? (0, l.jsx)(m.Ay, {
            mask: m.Ay.Masks.SQUIRCLE,
            width: 64,
            height: 64,
            className: y.$f,
            children: (0, l.jsx)(u.$v, {
                guild: t,
                size: u.$v.Sizes.LARGER,
                animate: !0
            })
        }) : null
    },
    L = e => {
        let t, i, n, {
                invite: a,
                disableUser: m = !1,
                error: x,
                flatActivityCount: D = !1,
                isRegister: L = !1,
                inUnclaimedFlow: b = !1,
                showInvitedByHeader: R = !0,
                className: O
            } = e,
            {
                currentUser: U
            } = (0, o.cf)([E.default], () => ({
                currentUser: E.default.getCurrentUser()
            }));
        if (null == a) return null;
        let G = null != a.guild ? v.fh(a.guild) ? a.guild : v.DY(a.guild) : null,
            k = null != a.channel ? (0, A.OY)(a.channel) : null,
            M = null != a.target_application ? new p.Ay(a.target_application) : null,
            P = m || null == a.inviter ? null : new j.A(a.inviter),
            V = !(null != a.approximate_member_count && a.approximate_member_count > 100 || null != G && G.features.has(f.GuildFeatures.COMMUNITY)) && null != P,
            F = null,
            Y = (0, d.Lt)(a.flags ?? 0, r.Q.IS_GUEST_INVITE),
            z = !1;
        if (null != G) R && (F = null == P ? N.intl.string(N.t["3rE1P8"]) : N.intl.formatToPlainString(N.t["5u47va"], {
            username: I.Ay.getFormattedName(P)
        }), a.target_type === C.yV.STREAM && null != a.target_user && (F = N.intl.formatToPlainString(N.t.x2L32Q, {
            username: I.Ay.getFormattedName(a.target_user)
        })), a.target_type === C.yV.EMBEDDED_APPLICATION && null != a.target_application && (F = null != P ? N.intl.formatToPlainString(N.t.UW1Cav, {
            username: I.Ay.getFormattedName(P)
        }) : N.intl.string(N.t.ENSuN3))), V && null == M && (t = (0, l.jsx)(u.$v, {
            className: y.Kk,
            guild: G,
            size: u.$v.Sizes.SMALL
        })), i = G.name, null != M && (i = M.name, n = (0, l.jsxs)("div", {
            children: [(0, l.jsx)(u.tK, {
                className: y.R9,
                children: N.intl.string(N.t["3gg9fF"])
            }), (0, l.jsxs)("div", {
                className: y.bo,
                children: [(0, l.jsx)(u.$v, {
                    guild: G,
                    size: u.$v.Sizes.SMALL
                }), (0, l.jsx)(c.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: y.Al,
                    children: G.name
                })]
            })]
        }));
        else if (null != k) {
            if (null == P) throw Error("no inviter in group DM invite");
            let e = I.Ay.getFormattedName(P);
            null != k.name && "" !== k.name ? (F = N.intl.formatToPlainString(N.t["5u47va"], {
                username: e
            }), i = k.name, null != k.icon && (t = (0, l.jsx)(u.F4, {
                channel: k,
                size: c._3J.SIZE_32
            }))) : (F = N.intl.string(N.t.OsdY8B), i = e)
        } else if (null != P) {
            let e = I.Ay.getFormattedName(P, !0);
            i = N.intl.formatToPlainString(N.t["4aF92R"], {
                username: e
            }), z = !0, n = null != x ? null : (0, l.jsx)(u.tK, {
                className: y.b$,
                children: L ? N.intl.format(N.t["6r4JiR"], {
                    username: e
                }) : N.intl.format(N.t.Quj7HX, {
                    username: e
                })
            })
        }
        return (0, l.jsxs)(c.BJc, {
            direction: "vertical",
            gap: 8,
            className: s()(y.kL, O),
            justify: "center",
            align: "center",
            children: [(0, l.jsx)(S, {
                application: M,
                guild: G,
                user: V ? P : null,
                compact: z
            }), null != x ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(u.tK, {
                    children: N.intl.string(N.t.mDFGFj)
                }), (0, l.jsx)(u.hE, {
                    children: x
                })]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [null != F ? (0, l.jsx)(u.tK, {
                    children: F
                }) : null, (0, l.jsxs)(u.hE, {
                    className: y.DD,
                    children: [null != G ? (0, l.jsx)(g.A, {
                        guild: G,
                        className: y.n2,
                        tooltipPosition: "left"
                    }) : null, t, i]
                })]
            }), n, (0, l.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 24,
                children: [(0, l.jsx)(c.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: null != M || z || a?.guild?.id === T.TA ? null : (0, l.jsx)(u.R1, {
                        online: a.approximate_presence_count,
                        total: a.approximate_member_count,
                        flat: D
                    })
                }), (0, l.jsx)(_.A, {
                    guild: G,
                    roles: a.roles,
                    className: y.Ei
                }), b || Y || null == U ? (0, l.jsx)(u.xt, {
                    user: U
                }) : (0, l.jsx)(h.L, {})]
            })]
        })
    }