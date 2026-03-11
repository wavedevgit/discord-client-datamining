/** chunk id: 75698 params = (module,exports,require) **/
n.d(t, {
    Ay: () => X,
    d7: () => z,
    u: () => H
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(990078),
    u = n(582754),
    _ = n(397927),
    g = n(73153),
    A = n(77468),
    m = n(289498),
    h = n(736653),
    p = n(573648),
    x = n(681819),
    E = n(370480),
    T = n(882997),
    S = n(169869),
    C = n(263063),
    I = n(496885),
    f = n(962173),
    b = n(71393),
    N = n(351906),
    v = n(954571),
    O = n(975571),
    j = n(773669),
    R = n(747454),
    y = n(801264),
    P = n(790174),
    L = n(131678),
    D = n(138410),
    G = n(652215),
    M = n(783419),
    U = n(985018),
    k = n(612028);
let V = e => {
    let t, {
            integration: n
        } = e,
        {
            isJoining: s,
            joinErrorMessage: l,
            showJoinErrorMessage: a
        } = (0, o.cf)([f.A], () => ({
            isJoining: f.A.isJoining(n.id),
            joinErrorMessage: "" === f.A.joinErrorMessage(n.id) ? U.intl.string(U.t.j2d6Km) : f.A.joinErrorMessage(n.id),
            showJoinErrorMessage: void 0 !== f.A.joinErrorMessage(n.id)
        }), [n.id]);
    return null != (0, o.bG)([b.A], () => b.A.getGuild(n.guild.id), [n.guild.id]) || (t = (0, i.jsx)(_.Button, {
        size: "sm",
        onClick: function() {
            A.A.joinServer(n.id, () => {})
        },
        disabled: s,
        variant: "primary",
        text: s ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr)
    })), (0, i.jsxs)("div", {
        className: k.iA,
        children: [(0, i.jsxs)("div", {
            className: k.XX,
            children: [(0, i.jsx)(C.Ay, {
                size: C.Ay.Sizes.SMALL,
                guild: n.guild,
                className: k.$f
            }), (0, i.jsxs)("div", {
                className: k.Vn,
                children: [(0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: n.guild.name
                }), (0, i.jsx)(_.MzZ, {
                    href: p.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                    children: (0, i.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: n.account.name
                    })
                })]
            }), t]
        }), a && (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: k.R,
            children: l
        })]
    })
};

function w(e) {
    let t, n, l, a, o, g, m, {
            onDisconnect: h,
            account: C,
            theme: f,
            locale: b
        } = e,
        [N, v] = s.useState(C.friendSync),
        [j, P] = s.useState(C.visibility),
        [w, H] = s.useState(C.metadataVisibility),
        [B, F] = s.useState(C.showActivity),
        [Y, z] = s.useState(null),
        [X, W] = s.useState(null),
        [K, Z] = s.useState(!1),
        [q, J] = s.useState([]),
        Q = (0, x.ML)(C.type),
        $ = p.A.get(Q);
    s.useEffect(() => {
        v(C.friendSync), P(C.visibility), H(C.metadataVisibility), F(C.showActivity)
    }, [C]);
    let ee = {
            inProgressVisibility: Y,
            inProgressMetadataVisibility: X
        },
        et = s.useRef(ee);
    return s.useEffect(() => {
        et.current = ee
    }), s.useEffect(() => {
        if (!1 === C.verified) return;
        let {
            inProgressVisibility: e,
            inProgressMetadataVisibility: t
        } = et.current;
        null != e && (P(e), A.A.setVisibility(C.type, C.id, e), z(null)), null != t && (H(t), A.A.setMetadataVisibility(C.type, C.id, t), W(null))
    }, [C]), (0, i.jsxs)("div", {
        className: k.FI,
        children: [(t = p.A.get(C.type), n = p.A.get(Q), l = "1" === (C.metadata ?? {})[M.pK.TWITTER_VERIFIED], a = null, t.type === G.fg2.TWITTER && l && (a = (0, i.jsx)(c.m, {
            text: U.intl.string(U.t.Jebrww),
            children: (0, i.jsx)(I.A, {
                color: d.A.unsafe_rawColors.TWITTER.css,
                children: (0, i.jsx)(_.Uzd, {
                    size: "xs",
                    color: d.A.unsafe_rawColors.WHITE.css
                })
            })
        })), (0, i.jsxs)("div", {
            className: k.Il,
            children: [(0, i.jsx)("img", {
                alt: n.name,
                className: k.gj,
                src: (0, u.Mw)(f) ? n.icon.darkSVG : n.icon.lightSVG
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: k.$p,
                    children: [(0, i.jsx)(_.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        className: k.RW,
                        children: C.name
                    }), null != a && (0, i.jsx)("div", {
                        className: k.cG,
                        children: a
                    })]
                }), (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: k.Au,
                    children: n.name
                })]
            }), (0, i.jsx)(_.DUT, {
                className: k.uH,
                onClick: function() {
                    let e = p.A.get(C.type);
                    (0, _.qfG)(t => (0, i.jsx)(r.Modal, {
                        title: U.intl.formatToPlainString(U.t.U5x12f, {
                            name: e.name
                        }),
                        subtitle: U.intl.format(U.t.VgqIPj, {
                            provider: e.name
                        }),
                        actions: [{
                            text: U.intl.string(U.t["ETE/oC"]),
                            onClick: t.onClose,
                            variant: "secondary"
                        }, {
                            text: U.intl.string(U.t.bsbMVz),
                            onClick: () => {
                                h(), t.onClose()
                            },
                            variant: "primary"
                        }],
                        ...t,
                        children: (0, R.A)(C) && (0, i.jsx)(y.A, {
                            children: U.intl.format(U.t.COW3Xn, {
                                platformName: e.name
                            })
                        })
                    }))
                },
                "aria-label": U.intl.string(U.t.ppppRJ),
                focusProps: {
                    offset: {
                        top: -4,
                        left: -4,
                        right: -4
                    }
                },
                children: (0, i.jsx)(_.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })), C.twoWayLink ? null : C.type === G.fg2.XBOX ? (0, i.jsx)(D._, {}) : C.type === G.fg2.PLAYSTATION ? (0, i.jsx)(L.j, {}) : null, function(e) {
            let t = e.metadata ?? {},
                n = null,
                s = (0, E.An)(t[M.pK.CREATED_AT], b);
            switch (e.type) {
                case G.fg2.REDDIT:
                    n = (0, S.xE)(t, k.Nz);
                    break;
                case G.fg2.STEAM:
                    n = (0, S.dy)(t, k.Nz);
                    break;
                case G.fg2.BLUESKY:
                case G.fg2.TWITTER:
                case G.fg2.MASTODON:
                    n = (0, S.ED)(t, k.Nz);
                    break;
                case G.fg2.EBAY:
                    n = (0, S.ub)(t, k.Nz);
                    break;
                case G.fg2.PAYPAL:
                    n = (0, S.gZ)(t, k.Nz);
                    break;
                case G.fg2.TIKTOK:
                    n = (0, S.HU)(t, k.Nz)
            }
            null !== s && (null == n && (n = []), n?.push((0, i.jsx)(_.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: k.M4,
                children: U.intl.format(U.t["9rfonh"], {
                    date: s
                })
            }, "member-since")));
            let l = q.includes(e.id),
                a = U.intl.string(U.t.wzzjk9);
            if (null == n || 0 === n.length)
                if (!0 !== p.A.get(e.type).hasMetadata) return null;
                else n = [(0, i.jsx)(_.LpS, {
                    className: k.Z3,
                    text: U.intl.string(U.t.y2b7CA)
                }, "badge"), (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    className: k.vt,
                    children: U.intl.format(U.t.Up2ni7, {
                        helpdeskUrl: O.A.getArticleURL(G.MVz.CONNECTION_DETAILS)
                    })
                }, "label")], a = U.intl.string(U.t["LVh3/5"]);
            return l && (a = U.intl.string(U.t.i4jeWR)), n.push((0, i.jsx)("div", {
                className: k.jy,
                children: (0, i.jsx)(_.Button, {
                    text: a,
                    variant: "secondary",
                    size: "sm",
                    loading: K,
                    disabled: l,
                    "aria-label": U.intl.string(U.t.sCkLYH),
                    onClick: l ? void 0 : () => {
                        Z(!0), A.A.refresh(e.type, e.id).finally(() => {
                            setTimeout(() => {
                                q.push(e.id), J(q), Z(!1)
                            }, 2e3)
                        })
                    }
                })
            }, "refresh-button")), (0, i.jsx)("div", {
                className: k.tJ,
                children: n
            })
        }(C), (G.txh.has(C.type) && (o = (0, i.jsx)(_.dOG, {
            label: U.intl.string(U.t["+KCMSi"]),
            checked: N,
            onChange: function(e) {
                v(e), A.A.setFriendSync(C.type, C.id, e)
            }
        })), G.ewM.has(C.type) && (g = (0, i.jsx)(_.dOG, {
            label: U.intl.format(U.t["6u6J0q"], {
                platform: $.name
            }),
            checked: B,
            onChange: function(e) {
                F(e), A.A.setShowActivity(C.type, C.id, e)
            }
        })), p.A.get(C.type)?.hasMetadata === !0 && (m = (0, i.jsx)(_.dOG, {
            label: U.intl.string(U.t.FYKGsL),
            checked: 1 === w,
            onChange: function(e) {
                let {
                    verified: t
                } = C, n = +!!e;
                if (e && !t) {
                    W(n), (0, T.A)({
                        platformType: C.type,
                        location: "User Settings"
                    });
                    return
                }
                H(n), A.A.setMetadataVisibility(C.type, C.id, n)
            },
            disabled: 1 !== j || null == C.metadata
        })), (0, i.jsxs)("div", {
            className: k.HZ,
            children: [(0, i.jsx)(_.dOG, {
                label: U.intl.string(U.t.f7yOAX),
                checked: 1 === j,
                onChange: function(e) {
                    let {
                        verified: t
                    } = C, n = +!!e;
                    if (e && !t) {
                        z(n), (0, T.A)({
                            platformType: C.type,
                            location: "User Settings"
                        });
                        return
                    }
                    P(n), A.A.setVisibility(C.type, C.id, n)
                }
            }), m, g, o]
        })), function() {
            if (C.revoked || C.integrations.length > 0) return (0, i.jsx)(_.cGx, {})
        }(), C.revoked ? (0, i.jsx)(r.po8, {
            messageType: r.YCn.INFO,
            children: U.intl.format(U.t["6C4lgA"], {
                onReconnect: function() {
                    (0, T.A)({
                        platformType: C.type,
                        location: "User Settings"
                    })
                }
            })
        }) : C.integrations.length > 0 ? (0, i.jsx)(_.D0$, {
            label: U.intl.string(U.t.fOe3fZ),
            children: C.integrations.map(e => (0, i.jsx)(V, {
                integration: e
            }, e.id))
        }) : void 0]
    })
}

function H() {
    return (0, i.jsx)(_.D0$, {
        label: U.intl.string(U.t.ZeDrUf),
        description: U.intl.format(U.t["oYc+Gz"], {
            privacyPolicyUrl: G.X7G.PRIVACY
        }),
        children: (0, i.jsx)(F, {})
    })
}

function B(e) {
    let t = p.A.get(e);
    (0, T.A)({
        platformType: t.type
    }), v.default.track(G.HAw.ACCOUNT_LINK_STEP, {
        previous_step: "desktop connections",
        current_step: "desktop oauth",
        platform_type: t.type
    })
}

function F() {
    let e = (0, x.gn)();
    return (0, i.jsxs)("div", {
        className: k.lA,
        children: [e.slice(0, 10).map(e => (0, i.jsx)(m.A, {
            type: e.type,
            className: k.__invalid_accountButton,
            innerClassName: k.U$
        }, e.type)), (0, i.jsx)(c.m, {
            text: U.intl.string(U.t.QqTz8b),
            children: (0, i.jsx)("div", {
                className: a()(k.ej, k.__invalid_accountButton),
                children: (0, i.jsx)(_.vN3, {
                    children: (0, i.jsx)("button", {
                        className: a()(k.R8, k.U$),
                        type: "button",
                        onClick: function() {
                            g.h.dispatch({
                                type: "CONNECTIONS_GRID_MODAL_SHOW",
                                onComplete: B
                            })
                        },
                        "aria-label": U.intl.string(U.t.Zhcj9X),
                        children: (0, i.jsx)(_._BQ, {
                            color: "currentColor",
                            size: "md",
                            "aria-label": U.intl.string(U.t.QqTz8b)
                        })
                    })
                })
            })
        })]
    })
}

function Y(e) {
    let t, {
        fetching: n,
        accounts: s,
        theme: l,
        locale: a
    } = e;
    return t = n ? (0, i.jsx)(_.y$y, {
        type: _.y$y.Type.SPINNING_CIRCLE
    }) : 0 === s.length ? (0, i.jsx)(_.ppr, {
        theme: l,
        children: (0, i.jsx)(_.SGT, {
            note: U.intl.string(U.t.WenGZ2),
            children: U.intl.string(U.t.aoLS84)
        })
    }) : s.filter(e => p.A.isSupported(e.type)).map((e, t) => (0, i.jsx)(w, {
        theme: l,
        account: e,
        locale: a,
        onDisconnect: () => (function(e) {
            let {
                type: t,
                id: n
            } = e;
            A.A.disconnect(t, n)
        })(e)
    }, t)), (0, i.jsx)("div", {
        className: k.V,
        children: t
    })
}

function z() {
    let e = (0, o.bG)([N.A], () => N.A.hidePersonalInformation),
        t = (0, o.bG)([f.A], () => f.A.isFetching()),
        n = (0, o.bG)([f.A], () => f.A.getAccounts()),
        s = (0, h.Ay)(),
        l = (0, o.bG)([j.default], () => j.default.locale);
    return e ? null : (0, i.jsx)(Y, {
        fetching: t,
        accounts: n,
        theme: s,
        locale: l
    })
}
let X = () => {
    let e = (0, o.bG)([f.A], () => f.A.isFetching()),
        t = (0, o.bG)([f.A], () => f.A.getAccounts()),
        n = (0, h.Ay)(),
        l = (0, o.bG)([j.default], () => j.default.locale);
    return s.useEffect(() => {
        A.A.fetch()
    }, []), (0, i.jsxs)(P.A, {
        title: U.intl.string(U.t["3fe7U5"]),
        children: [(0, i.jsx)(H, {}), (0, i.jsx)(_.cGx, {
            gap: 24
        }), (0, i.jsx)(Y, {
            fetching: e,
            accounts: t,
            theme: n,
            locale: l
        })]
    })
}