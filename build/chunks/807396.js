/** chunk id: 807396 params = (module,exports,require) **/
n.d(t, {
    d: () => Y,
    u: () => V
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
    m = n(397927),
    _ = n(73153),
    g = n(77468),
    A = n(289498),
    x = n(736653),
    p = n(573648),
    h = n(681819),
    T = n(370480),
    E = n(882997),
    f = n(373498),
    S = n(169869),
    C = n(263063),
    b = n(496885),
    N = n(962173),
    I = n(71393),
    v = n(351906),
    j = n(954571),
    y = n(975571),
    O = n(773669),
    R = n(801264),
    L = n(523104),
    P = n(856220),
    D = n(652215),
    M = n(783419),
    G = n(985018),
    k = n(431070);
let U = e => {
    let t, {
            integration: n
        } = e,
        {
            isJoining: s,
            joinErrorMessage: l,
            showJoinErrorMessage: a
        } = (0, o.cf)([N.A], () => ({
            isJoining: N.A.isJoining(n.id),
            joinErrorMessage: "" === N.A.joinErrorMessage(n.id) ? G.intl.string(G.t.j2d6Km) : N.A.joinErrorMessage(n.id),
            showJoinErrorMessage: void 0 !== N.A.joinErrorMessage(n.id)
        }), [n.id]);
    return null != (0, o.bG)([I.A], () => I.A.getGuild(n.guild.id), [n.guild.id]) || (t = (0, i.jsx)(m.Button, {
        size: "sm",
        onClick: function() {
            g.A.joinServer(n.id, () => {})
        },
        disabled: s,
        variant: "primary",
        text: s ? G.intl.string(G.t.RXvQQu) : G.intl.string(G.t.XpeFYr)
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
                children: [(0, i.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: n.guild.name
                }), (0, i.jsx)(m.MzZ, {
                    href: p.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                    children: (0, i.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: n.account.name
                    })
                })]
            }), t]
        }), a && (0, i.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            className: k.R,
            children: l
        })]
    })
};

function w(e) {
    let t, n, l, a, o, _, A, {
            onDisconnect: x,
            account: C,
            theme: N,
            locale: I
        } = e,
        [v, j] = s.useState(C.friendSync),
        [O, w] = s.useState(C.visibility),
        [V, B] = s.useState(C.metadataVisibility),
        [H, F] = s.useState(C.showActivity),
        [Y, z] = s.useState(null),
        [X, W] = s.useState(null),
        [K, Z] = s.useState(!1),
        [q, J] = s.useState([]),
        Q = (0, h.ML)(C.type),
        $ = p.A.get(Q);
    s.useEffect(() => {
        j(C.friendSync), w(C.visibility), B(C.metadataVisibility), F(C.showActivity)
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
        null != e && (w(e), g.A.setVisibility(C.type, C.id, e), z(null)), null != t && (B(t), g.A.setMetadataVisibility(C.type, C.id, t), W(null))
    }, [C]), (0, i.jsxs)("div", {
        className: k.FI,
        children: [(t = p.A.get(C.type), n = p.A.get(Q), l = "1" === (C.metadata ?? {})[M.pK.TWITTER_VERIFIED], a = null, t.type === D.fg2.TWITTER && l && (a = (0, i.jsx)(c.m, {
            text: G.intl.string(G.t.Jebrww),
            children: (0, i.jsx)(b.A, {
                color: d.A.unsafe_rawColors.TWITTER.css,
                children: (0, i.jsx)(m.Uzd, {
                    size: "xs",
                    color: d.A.unsafe_rawColors.WHITE.css
                })
            })
        })), (0, i.jsxs)("div", {
            className: k.Il,
            children: [(0, i.jsx)("img", {
                alt: n.name,
                className: k.gj,
                src: (0, u.Mw)(N) ? n.icon.darkSVG : n.icon.lightSVG
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: k.$p,
                    children: [(0, i.jsx)(m.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        className: k.RW,
                        children: C.name
                    }), null != a && (0, i.jsx)("div", {
                        className: k.cG,
                        children: a
                    })]
                }), (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: k.Au,
                    children: n.name
                })]
            }), (0, i.jsx)(m.DUT, {
                className: k.uH,
                onClick: function() {
                    let e = p.A.get(C.type);
                    (0, m.qfG)(t => (0, i.jsx)(r.Modal, {
                        title: G.intl.formatToPlainString(G.t.U5x12f, {
                            name: e.name
                        }),
                        subtitle: G.intl.format(G.t.VgqIPj, {
                            provider: e.name
                        }),
                        actions: [{
                            text: G.intl.string(G.t["ETE/oC"]),
                            onClick: t.onClose,
                            variant: "secondary"
                        }, {
                            text: G.intl.string(G.t.bsbMVz),
                            onClick: () => {
                                x(), t.onClose()
                            },
                            variant: "primary"
                        }],
                        ...t,
                        children: (0, f.A)(C) && (0, i.jsx)(R.A, {
                            children: G.intl.format(G.t.COW3Xn, {
                                platformName: e.name
                            })
                        })
                    }))
                },
                "aria-label": G.intl.string(G.t.ppppRJ),
                focusProps: {
                    offset: {
                        top: -4,
                        left: -4,
                        right: -4
                    }
                },
                children: (0, i.jsx)(m.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })), C.twoWayLink ? null : C.type === D.fg2.XBOX ? (0, i.jsx)(P._, {}) : C.type === D.fg2.PLAYSTATION ? (0, i.jsx)(L.j, {}) : null, function(e) {
            let t = e.metadata ?? {},
                n = null,
                s = (0, T.An)(t[M.pK.CREATED_AT], I);
            switch (e.type) {
                case D.fg2.REDDIT:
                    n = (0, S.xE)(t, k.Nz);
                    break;
                case D.fg2.STEAM:
                    n = (0, S.dy)(t, k.Nz);
                    break;
                case D.fg2.BLUESKY:
                case D.fg2.TWITTER:
                case D.fg2.MASTODON:
                    n = (0, S.ED)(t, k.Nz);
                    break;
                case D.fg2.EBAY:
                    n = (0, S.ub)(t, k.Nz);
                    break;
                case D.fg2.PAYPAL:
                    n = (0, S.gZ)(t, k.Nz);
                    break;
                case D.fg2.TIKTOK:
                    n = (0, S.HU)(t, k.Nz)
            }
            null !== s && (null == n && (n = []), n?.push((0, i.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: k.M4,
                children: G.intl.format(G.t["9rfonh"], {
                    date: s
                })
            }, "member-since")));
            let l = q.includes(e.id),
                a = G.intl.string(G.t.wzzjk9);
            if (null == n || 0 === n.length)
                if (!0 !== p.A.get(e.type).hasMetadata) return null;
                else n = [(0, i.jsx)(m.LpS, {
                    className: k.Z3,
                    text: G.intl.string(G.t.y2b7CA)
                }, "badge"), (0, i.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    className: k.vt,
                    children: G.intl.format(G.t.Up2ni7, {
                        helpdeskUrl: y.A.getArticleURL(D.MVz.CONNECTION_DETAILS)
                    })
                }, "label")], a = G.intl.string(G.t["LVh3/5"]);
            return l && (a = G.intl.string(G.t.i4jeWR)), n.push((0, i.jsx)("div", {
                className: k.jy,
                children: (0, i.jsx)(m.Button, {
                    text: a,
                    variant: "secondary",
                    size: "sm",
                    loading: K,
                    disabled: l,
                    "aria-label": G.intl.string(G.t.sCkLYH),
                    onClick: l ? void 0 : () => {
                        Z(!0), g.A.refresh(e.type, e.id).finally(() => {
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
        }(C), (D.txh.has(C.type) && (o = (0, i.jsx)(m.dOG, {
            label: G.intl.string(G.t["+KCMSi"]),
            checked: v,
            onChange: function(e) {
                j(e), g.A.setFriendSync(C.type, C.id, e)
            }
        })), D.ewM.has(C.type) && (_ = (0, i.jsx)(m.dOG, {
            label: G.intl.format(G.t["6u6J0q"], {
                platform: $.name
            }),
            checked: H,
            onChange: function(e) {
                F(e), g.A.setShowActivity(C.type, C.id, e)
            }
        })), p.A.get(C.type)?.hasMetadata === !0 && (A = (0, i.jsx)(m.dOG, {
            label: G.intl.string(G.t.FYKGsL),
            checked: 1 === V,
            onChange: function(e) {
                let {
                    verified: t
                } = C, n = +!!e;
                if (e && !t) {
                    W(n), (0, E.A)({
                        platformType: C.type,
                        location: "User Settings"
                    });
                    return
                }
                B(n), g.A.setMetadataVisibility(C.type, C.id, n)
            },
            disabled: 1 !== O || null == C.metadata
        })), (0, i.jsxs)("div", {
            className: k.HZ,
            children: [(0, i.jsx)(m.dOG, {
                label: G.intl.string(G.t.f7yOAX),
                checked: 1 === O,
                onChange: function(e) {
                    let {
                        verified: t
                    } = C, n = +!!e;
                    if (e && !t) {
                        z(n), (0, E.A)({
                            platformType: C.type,
                            location: "User Settings"
                        });
                        return
                    }
                    w(n), g.A.setVisibility(C.type, C.id, n)
                }
            }), A, _, o]
        })), function() {
            if (C.revoked || C.integrations.length > 0) return (0, i.jsx)(m.cGx, {})
        }(), C.revoked ? (0, i.jsx)(r.po8, {
            messageType: r.YCn.INFO,
            children: G.intl.format(G.t["6C4lgA"], {
                onReconnect: function() {
                    (0, E.A)({
                        platformType: C.type,
                        location: "User Settings"
                    })
                }
            })
        }) : C.integrations.length > 0 ? (0, i.jsx)(m.D0$, {
            label: G.intl.string(G.t.fOe3fZ),
            children: C.integrations.map(e => (0, i.jsx)(U, {
                integration: e
            }, e.id))
        }) : void 0]
    })
}

function V() {
    return (0, i.jsx)(m.D0$, {
        label: G.intl.string(G.t.ZeDrUf),
        description: G.intl.format(G.t["oYc+Gz"], {
            privacyPolicyUrl: D.X7G.PRIVACY
        }),
        children: (0, i.jsx)(H, {})
    })
}

function B(e) {
    let t = p.A.get(e);
    (0, E.A)({
        platformType: t.type
    }), j.default.track(D.HAw.ACCOUNT_LINK_STEP, {
        previous_step: "desktop connections",
        current_step: "desktop oauth",
        platform_type: t.type
    })
}

function H() {
    let e = (0, h.gn)();
    return (0, i.jsxs)("div", {
        className: k.lA,
        children: [e.slice(0, 10).map(e => (0, i.jsx)(A.A, {
            type: e.type,
            className: k.__invalid_accountButton,
            innerClassName: k.U$
        }, e.type)), (0, i.jsx)(c.m, {
            text: G.intl.string(G.t.QqTz8b),
            children: (0, i.jsx)("div", {
                className: a()(k.ej, k.__invalid_accountButton),
                children: (0, i.jsx)(m.vN3, {
                    children: (0, i.jsx)("button", {
                        className: a()(k.R8, k.U$),
                        type: "button",
                        onClick: function() {
                            _.h.dispatch({
                                type: "CONNECTIONS_GRID_MODAL_SHOW",
                                onComplete: B
                            })
                        },
                        "aria-label": G.intl.string(G.t.Zhcj9X),
                        children: (0, i.jsx)(m._BQ, {
                            color: "currentColor",
                            size: "md",
                            "aria-label": G.intl.string(G.t.QqTz8b)
                        })
                    })
                })
            })
        })]
    })
}

function F(e) {
    let t, {
        fetching: n,
        accounts: s,
        theme: l,
        locale: a
    } = e;
    return t = n ? (0, i.jsx)(m.y$y, {
        type: m.y$y.Type.SPINNING_CIRCLE
    }) : 0 === s.length ? (0, i.jsx)(m.ppr, {
        theme: l,
        children: (0, i.jsx)(m.SGT, {
            note: G.intl.string(G.t.WenGZ2),
            children: G.intl.string(G.t.aoLS84)
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
            g.A.disconnect(t, n)
        })(e)
    }, t)), (0, i.jsx)("div", {
        className: k.V,
        children: t
    })
}

function Y() {
    let e = (0, o.bG)([v.A], () => v.A.hidePersonalInformation),
        t = (0, o.bG)([N.A], () => N.A.isFetching()),
        n = (0, o.bG)([N.A], () => N.A.getAccounts()),
        s = (0, x.Ay)(),
        l = (0, o.bG)([O.default], () => O.default.locale);
    return e ? null : (0, i.jsx)(F, {
        fetching: t,
        accounts: n,
        theme: s,
        locale: l
    })
}