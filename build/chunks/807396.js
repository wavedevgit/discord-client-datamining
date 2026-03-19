/** chunk id: 807396 params = (module,exports,require) **/
n.d(t, {
    d: () => Y,
    u: () => w
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
    m = n(73153),
    g = n(77468),
    A = n(289498),
    x = n(736653),
    h = n(573648),
    p = n(681819),
    T = n(370480),
    E = n(882997),
    S = n(373498),
    C = n(169869),
    f = n(263063),
    b = n(496885),
    N = n(962173),
    I = n(71393),
    v = n(351906),
    j = n(954571),
    y = n(975571),
    R = n(773669),
    O = n(801264),
    P = n(523104),
    L = n(856220),
    D = n(652215),
    M = n(783419),
    G = n(985018),
    U = n(197168);
let k = e => {
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
    return null != (0, o.bG)([I.A], () => I.A.getGuild(n.guild.id), [n.guild.id]) || (t = (0, i.jsx)(_.Button, {
        size: "sm",
        onClick: function() {
            g.A.joinServer(n.id, () => {})
        },
        disabled: s,
        variant: "primary",
        text: s ? G.intl.string(G.t.RXvQQu) : G.intl.string(G.t.XpeFYr)
    })), (0, i.jsxs)("div", {
        className: U.iA,
        children: [(0, i.jsxs)("div", {
            className: U.XX,
            children: [(0, i.jsx)(f.Ay, {
                size: f.Ay.Sizes.SMALL,
                guild: n.guild,
                className: U.$f
            }), (0, i.jsxs)("div", {
                className: U.Vn,
                children: [(0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: n.guild.name
                }), (0, i.jsx)(_.MzZ, {
                    href: h.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
            className: U.R,
            children: l
        })]
    })
};

function V(e) {
    let t, n, l, a, o, m, A, {
            onDisconnect: x,
            account: f,
            theme: N,
            locale: I
        } = e,
        [v, j] = s.useState(f.friendSync),
        [R, V] = s.useState(f.visibility),
        [w, B] = s.useState(f.metadataVisibility),
        [H, F] = s.useState(f.showActivity),
        [Y, z] = s.useState(null),
        [X, W] = s.useState(null),
        [K, Z] = s.useState(!1),
        [q, J] = s.useState([]),
        Q = (0, p.ML)(f.type),
        $ = h.A.get(Q);
    s.useEffect(() => {
        j(f.friendSync), V(f.visibility), B(f.metadataVisibility), F(f.showActivity)
    }, [f]);
    let ee = {
            inProgressVisibility: Y,
            inProgressMetadataVisibility: X
        },
        et = s.useRef(ee);
    return s.useEffect(() => {
        et.current = ee
    }), s.useEffect(() => {
        if (!1 === f.verified) return;
        let {
            inProgressVisibility: e,
            inProgressMetadataVisibility: t
        } = et.current;
        null != e && (V(e), g.A.setVisibility(f.type, f.id, e), z(null)), null != t && (B(t), g.A.setMetadataVisibility(f.type, f.id, t), W(null))
    }, [f]), (0, i.jsxs)("div", {
        className: U.FI,
        children: [(t = h.A.get(f.type), n = h.A.get(Q), l = "1" === (f.metadata ?? {})[M.pK.TWITTER_VERIFIED], a = null, t.type === D.fg2.TWITTER && l && (a = (0, i.jsx)(c.m, {
            text: G.intl.string(G.t.Jebrww),
            children: (0, i.jsx)(b.A, {
                color: d.A.unsafe_rawColors.TWITTER.css,
                children: (0, i.jsx)(_.Uzd, {
                    size: "xs",
                    color: d.A.unsafe_rawColors.WHITE.css
                })
            })
        })), (0, i.jsxs)("div", {
            className: U.Il,
            children: [(0, i.jsx)("img", {
                alt: n.name,
                className: U.gj,
                src: (0, u.Mw)(N) ? n.icon.darkSVG : n.icon.lightSVG
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                    className: U.$p,
                    children: [(0, i.jsx)(_.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        className: U.RW,
                        children: f.name
                    }), null != a && (0, i.jsx)("div", {
                        className: U.cG,
                        children: a
                    })]
                }), (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: U.Au,
                    children: n.name
                })]
            }), (0, i.jsx)(_.DUT, {
                className: U.uH,
                onClick: function() {
                    let e = h.A.get(f.type);
                    (0, _.qfG)(t => (0, i.jsx)(r.Modal, {
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
                        children: (0, S.A)(f) && (0, i.jsx)(O.A, {
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
                children: (0, i.jsx)(_.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })), f.twoWayLink ? null : f.type === D.fg2.XBOX ? (0, i.jsx)(L._, {}) : f.type === D.fg2.PLAYSTATION ? (0, i.jsx)(P.j, {}) : null, function(e) {
            let t = e.metadata ?? {},
                n = null,
                s = (0, T.An)(t[M.pK.CREATED_AT], I);
            switch (e.type) {
                case D.fg2.REDDIT:
                    n = (0, C.xE)(t, U.Nz);
                    break;
                case D.fg2.STEAM:
                    n = (0, C.dy)(t, U.Nz);
                    break;
                case D.fg2.BLUESKY:
                case D.fg2.TWITTER:
                case D.fg2.MASTODON:
                    n = (0, C.ED)(t, U.Nz);
                    break;
                case D.fg2.EBAY:
                    n = (0, C.ub)(t, U.Nz);
                    break;
                case D.fg2.PAYPAL:
                    n = (0, C.gZ)(t, U.Nz);
                    break;
                case D.fg2.TIKTOK:
                    n = (0, C.HU)(t, U.Nz)
            }
            null !== s && (null == n && (n = []), n?.push((0, i.jsx)(_.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: U.M4,
                children: G.intl.format(G.t["9rfonh"], {
                    date: s
                })
            }, "member-since")));
            let l = q.includes(e.id),
                a = G.intl.string(G.t.wzzjk9);
            if (null == n || 0 === n.length)
                if (!0 !== h.A.get(e.type).hasMetadata) return null;
                else n = [(0, i.jsx)(_.LpS, {
                    className: U.Z3,
                    text: G.intl.string(G.t.y2b7CA)
                }, "badge"), (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    className: U.vt,
                    children: G.intl.format(G.t.Up2ni7, {
                        helpdeskUrl: y.A.getArticleURL(D.MVz.CONNECTION_DETAILS)
                    })
                }, "label")], a = G.intl.string(G.t["LVh3/5"]);
            return l && (a = G.intl.string(G.t.i4jeWR)), n.push((0, i.jsx)("div", {
                className: U.jy,
                children: (0, i.jsx)(_.Button, {
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
                className: U.tJ,
                children: n
            })
        }(f), (D.txh.has(f.type) && (o = (0, i.jsx)(_.dOG, {
            label: G.intl.string(G.t["+KCMSi"]),
            checked: v,
            onChange: function(e) {
                j(e), g.A.setFriendSync(f.type, f.id, e)
            }
        })), D.ewM.has(f.type) && (m = (0, i.jsx)(_.dOG, {
            label: G.intl.format(G.t["6u6J0q"], {
                platform: $.name
            }),
            checked: H,
            onChange: function(e) {
                F(e), g.A.setShowActivity(f.type, f.id, e)
            }
        })), h.A.get(f.type)?.hasMetadata === !0 && (A = (0, i.jsx)(_.dOG, {
            label: G.intl.string(G.t.FYKGsL),
            checked: 1 === w,
            onChange: function(e) {
                let {
                    verified: t
                } = f, n = +!!e;
                if (e && !t) {
                    W(n), (0, E.A)({
                        platformType: f.type,
                        location: "User Settings"
                    });
                    return
                }
                B(n), g.A.setMetadataVisibility(f.type, f.id, n)
            },
            disabled: 1 !== R || null == f.metadata
        })), (0, i.jsxs)("div", {
            className: U.HZ,
            children: [(0, i.jsx)(_.dOG, {
                label: G.intl.string(G.t.f7yOAX),
                checked: 1 === R,
                onChange: function(e) {
                    let {
                        verified: t
                    } = f, n = +!!e;
                    if (e && !t) {
                        z(n), (0, E.A)({
                            platformType: f.type,
                            location: "User Settings"
                        });
                        return
                    }
                    V(n), g.A.setVisibility(f.type, f.id, n)
                }
            }), A, m, o]
        })), function() {
            if (f.revoked || f.integrations.length > 0) return (0, i.jsx)(_.cGx, {})
        }(), f.revoked ? (0, i.jsx)(r.po8, {
            messageType: r.YCn.INFO,
            children: G.intl.format(G.t["6C4lgA"], {
                onReconnect: function() {
                    (0, E.A)({
                        platformType: f.type,
                        location: "User Settings"
                    })
                }
            })
        }) : f.integrations.length > 0 ? (0, i.jsx)(_.D0$, {
            label: G.intl.string(G.t.fOe3fZ),
            children: f.integrations.map(e => (0, i.jsx)(k, {
                integration: e
            }, e.id))
        }) : void 0]
    })
}

function w() {
    return (0, i.jsx)(_.D0$, {
        label: G.intl.string(G.t.ZeDrUf),
        description: G.intl.format(G.t["oYc+Gz"], {
            privacyPolicyUrl: D.X7G.PRIVACY
        }),
        children: (0, i.jsx)(H, {})
    })
}

function B(e) {
    let t = h.A.get(e);
    (0, E.A)({
        platformType: t.type
    }), j.default.track(D.HAw.ACCOUNT_LINK_STEP, {
        previous_step: "desktop connections",
        current_step: "desktop oauth",
        platform_type: t.type
    })
}

function H() {
    let e = (0, p.gn)();
    return (0, i.jsxs)("div", {
        className: U.lA,
        children: [e.slice(0, 10).map(e => (0, i.jsx)(A.A, {
            type: e.type,
            className: U.__invalid_accountButton,
            innerClassName: U.U$
        }, e.type)), (0, i.jsx)(c.m, {
            text: G.intl.string(G.t.QqTz8b),
            children: (0, i.jsx)("div", {
                className: a()(U.ej, U.__invalid_accountButton),
                children: (0, i.jsx)(_.vN3, {
                    children: (0, i.jsx)("button", {
                        className: a()(U.R8, U.U$),
                        type: "button",
                        onClick: function() {
                            m.h.dispatch({
                                type: "CONNECTIONS_GRID_MODAL_SHOW",
                                onComplete: B
                            })
                        },
                        "aria-label": G.intl.string(G.t.Zhcj9X),
                        children: (0, i.jsx)(_._BQ, {
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
    return t = n ? (0, i.jsx)(_.y$y, {
        type: _.y$y.Type.SPINNING_CIRCLE
    }) : 0 === s.length ? (0, i.jsx)(_.ppr, {
        theme: l,
        children: (0, i.jsx)(_.SGT, {
            note: G.intl.string(G.t.WenGZ2),
            children: G.intl.string(G.t.aoLS84)
        })
    }) : s.filter(e => h.A.isSupported(e.type)).map((e, t) => (0, i.jsx)(V, {
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
        className: U.V,
        children: t
    })
}

function Y() {
    let e = (0, o.bG)([v.A], () => v.A.hidePersonalInformation),
        t = (0, o.bG)([N.A], () => N.A.isFetching()),
        n = (0, o.bG)([N.A], () => N.A.getAccounts()),
        s = (0, x.Ay)(),
        l = (0, o.bG)([R.default], () => R.default.locale);
    return e ? null : (0, i.jsx)(F, {
        fetching: t,
        accounts: n,
        theme: s,
        locale: l
    })
}