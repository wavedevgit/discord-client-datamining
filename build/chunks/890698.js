/** chunk id: 890698 params = (module,exports,require) **/
l.d(t, {
    A: () => O,
    M: () => y
}), l(938796);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(821418),
    c = l(665260),
    u = l(311907),
    d = l(397927),
    o = l(854378),
    m = l(47167),
    g = l(573435),
    x = l(769015),
    h = l(714991),
    j = l(24215),
    A = l(897288),
    _ = l(611010),
    p = l(95701),
    E = l(427157),
    N = l(287809),
    v = l(860689),
    f = l(427262),
    S = l(652215),
    C = l(330936),
    T = l(172799),
    I = l(985018),
    L = l(493263);
let y = () => (0, n.jsxs)(i.Fragment, {
        children: [(0, n.jsx)(o.eu, {
            src: null,
            size: d._3J.DEPRECATED_SIZE_100,
            className: L.my
        }), (0, n.jsx)(o.tK, {
            children: I.intl.string(I.t["3rE1P8"])
        }), (0, n.jsx)(o.hE, {
            className: L.RG,
            children: I.intl.string(I.t.ZTNur7)
        })]
    }),
    R = e => {
        let {
            guild: t,
            user: l,
            application: i,
            compact: a
        } = e;
        return null != i ? (0, n.jsx)(x.A, {
            className: L.Z2,
            game: i,
            size: L.q6
        }) : null != l ? (0, n.jsx)(o.eu, {
            src: null != l ? l.getAvatarURL(void 0, 80) : null,
            size: d._3J.SIZE_80,
            className: a ? void 0 : L.my
        }) : null != t ? (0, n.jsx)(g.Ay, {
            mask: g.Ay.Masks.SQUIRCLE,
            width: 64,
            height: 64,
            className: L.$f,
            children: (0, n.jsx)(o.$v, {
                guild: t,
                size: o.$v.Sizes.LARGER,
                animate: !0
            })
        }) : null
    },
    O = e => {
        let t, l, i, {
                invite: a,
                disableUser: g = !1,
                error: x,
                flatActivityCount: y = !1,
                isRegister: O = !1,
                inUnclaimedFlow: b = !1,
                showInvitedByHeader: F = !0,
                className: M
            } = e,
            {
                currentUser: P
            } = (0, u.cf)([N.default], () => ({
                currentUser: N.default.getCurrentUser()
            })),
            D = null != a && null != a.channel ? (0, p.OY)(a.channel) : null,
            k = (0, m.Ay)(D);
        if (null == a) return null;
        let U = null != a.guild ? v.fh(a.guild) ? a.guild : v.DY(a.guild) : null,
            z = null != a.target_application ? new _.Ay(a.target_application) : null,
            G = g || null == a.inviter ? null : new E.A(a.inviter),
            H = !(null != a.approximate_member_count && a.approximate_member_count > 100 || null != U && U.features.has(S.GuildFeatures.COMMUNITY)) && null != G,
            w = null,
            V = (0, c.Lt)(a.flags ?? 0, r.Q.IS_GUEST_INVITE),
            Y = !1;
        if (null != U) F && (w = null == G ? I.intl.string(I.t["3rE1P8"]) : I.intl.formatToPlainString(I.t["5u47va"], {
            username: f.Ay.getFormattedName(G)
        }), a.target_type === T.yV.STREAM && null != a.target_user && (w = I.intl.formatToPlainString(I.t.x2L32Q, {
            username: f.Ay.getFormattedName(a.target_user)
        })), a.target_type === T.yV.EMBEDDED_APPLICATION && null != a.target_application && (w = null != G ? I.intl.formatToPlainString(I.t.UW1Cav, {
            username: f.Ay.getFormattedName(G)
        }) : I.intl.string(I.t.ENSuN3))), H && null == z && (t = (0, n.jsx)(o.$v, {
            className: L.Kk,
            guild: U,
            size: o.$v.Sizes.SMALL
        })), l = U.name, null != z && (l = z.name, i = (0, n.jsxs)("div", {
            children: [(0, n.jsx)(o.tK, {
                className: L.R9,
                children: I.intl.string(I.t["3gg9fF"])
            }), (0, n.jsxs)("div", {
                className: L.bo,
                children: [(0, n.jsx)(o.$v, {
                    guild: U,
                    size: o.$v.Sizes.SMALL
                }), (0, n.jsx)(d.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "text-strong",
                    className: L.Al,
                    children: U.name
                })]
            })]
        }));
        else if (null != D) {
            if (null == G) throw Error("no inviter in group DM invite");
            let e = f.Ay.getFormattedName(G);
            null != k && "" !== k ? (w = I.intl.formatToPlainString(I.t["5u47va"], {
                username: e
            }), l = k, null != D.icon && (t = (0, n.jsx)(o.F4, {
                channel: D,
                size: d._3J.SIZE_32
            }))) : (w = I.intl.string(I.t.OsdY8B), l = e)
        } else if (null != G) {
            let e = f.Ay.getFormattedName(G, !0);
            l = I.intl.formatToPlainString(I.t["4aF92R"], {
                username: e
            }), Y = !0, i = null != x ? null : (0, n.jsx)(o.tK, {
                className: L.b$,
                children: O ? I.intl.format(I.t["6r4JiR"], {
                    username: e
                }) : I.intl.format(I.t.Quj7HX, {
                    username: e
                })
            })
        }
        return (0, n.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 8,
            className: s()(L.kL, M),
            justify: "center",
            align: "center",
            children: [(0, n.jsx)(R, {
                application: z,
                guild: U,
                user: H ? G : null,
                compact: Y
            }), null != x ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(o.tK, {
                    children: I.intl.string(I.t.mDFGFj)
                }), (0, n.jsx)(o.hE, {
                    children: x
                })]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [null != w ? (0, n.jsx)(o.tK, {
                    children: w
                }) : null, (0, n.jsxs)(o.hE, {
                    className: L.DD,
                    children: [null != U ? (0, n.jsx)(h.A, {
                        guild: U,
                        className: L.n2,
                        tooltipPosition: "left"
                    }) : null, t, l]
                })]
            }), i, (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 24,
                children: [(0, n.jsx)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: null != z || Y || a?.guild?.id === C.TA ? null : (0, n.jsx)(o.R1, {
                        online: a.approximate_presence_count,
                        total: a.approximate_member_count,
                        flat: y
                    })
                }), (0, n.jsx)(A.A, {
                    guild: U,
                    roles: a.roles,
                    className: L.Ei
                }), b || V || null == P ? (0, n.jsx)(o.xt, {
                    user: P
                }) : (0, n.jsx)(j.L, {})]
            })]
        })
    }