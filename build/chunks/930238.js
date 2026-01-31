/** chunk id: 930238, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => W
}), n(321073), n(733351), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(91871),
    o = n.n(s),
    c = n(311907),
    d = n(582754),
    u = n(397927),
    p = n(398590),
    m = n(736653),
    g = n(573648),
    b = n(429913),
    f = n(882997),
    h = n(235986),
    x = n(837057),
    j = n(310419),
    O = n(526132),
    y = n(887501),
    A = n(962173),
    v = n(576705),
    _ = n(954571),
    N = n(486020),
    E = n(975571),
    T = n(661191),
    C = n(427262),
    w = n(523352),
    S = n(517765),
    I = n(381616),
    P = n(652215),
    k = n(488995),
    R = n(985018),
    L = n(443536),
    D = n(882370),
    M = n(854766),
    G = n(237070);

function U(e, t) {
    return t.includes(e)
}

function B(e) {
    let {
        query: t,
        setQuery: n
    } = e, l = r.useCallback(e => {
        n(e)
    }, [n]);
    return (0, i.jsx)("div", {
        className: L.MT,
        children: (0, i.jsx)(u.IWV, {
            query: t,
            onChange: l,
            onClear: () => n(""),
            placeholder: R.intl.string(R.t["5prvKe"]),
            "aria-label": R.intl.string(R.t["5prvKe"])
        })
    })
}

function W(e) {
    var t, n, l, s, W;
    let H, V, z, K, F, Y, q, J, Q, Z, {
            guild: X,
            channel: $,
            applicationIntegrations: ee,
            builtInIntegrations: et,
            customWebhooks: en,
            followedChannelWebhooks: ei,
            isLoadingWebhooks: er,
            canCreateWebhook: el,
            onManageBuiltIn: ea,
            onManageCustomWebhooks: es,
            onManageFollowedChannels: eo,
            onManageApplication: ec,
            onManageLobbiesLinked: ed
        } = e,
        eu = (0, m.Ay)(),
        [ep, em] = r.useState(""),
        {
            isFetchingConnections: eg,
            accounts: eb
        } = (0, c.cf)([A.A], () => ({
            isFetchingConnections: A.A.isFetching(),
            accounts: A.A.getAccounts()
        }), []),
        {
            canManageWebhooks: ef,
            canManageGuild: eh
        } = (0, c.cf)([v.A], () => ({
            canManageWebhooks: null != X && v.A.can(P.xBc.MANAGE_WEBHOOKS, X) || null != $ && v.A.can(P.xBc.MANAGE_WEBHOOKS, $),
            canManageGuild: null != X && null == $ && v.A.can(P.xBc.MANAGE_GUILD, X)
        }), [X, $]),
        ex = (0, O.e)($),
        ej = (0, b.h)(null == $ || null == (t = $.linkedLobby) ? void 0 : t.application_id),
        eO = (0, y.A)(null == X ? void 0 : X.id),
        {
            availableTwitchIntegrations: ey,
            availableYoutubeIntegrations: eA,
            guildTwitchIntegrations: ev,
            guildYoutubeIntegrations: e_
        } = r.useMemo(() => {
            var e, t, n, i, r, l, a, s;
            return {
                availableTwitchIntegrations: null != (e = null == (r = et.twitch) ? void 0 : r.length) ? e : 0,
                availableYoutubeIntegrations: null != (t = null == (l = et.youtube) ? void 0 : l.length) ? t : 0,
                guildTwitchIntegrations: null != (n = null == (a = et.twitch) ? void 0 : a.filter(e => e.enabled).length) ? n : 0,
                guildYoutubeIntegrations: null != (i = null == (s = et.youtube) ? void 0 : s.filter(e => e.enabled).length) ? i : 0
            }
        }, [et.twitch, et.youtube]),
        {
            showTwitchCard: eN,
            showYoutubeCard: eE
        } = r.useMemo(() => {
            if (eg || !eh) return {
                showTwitchCard: !1,
                showYoutubeCard: !1
            };
            let e = null == X ? void 0 : X.features.has(P.GuildFeatures.COMMUNITY),
                t = eb.filter(e => e.type === P.fg2.TWITCH).length > 0,
                n = eb.filter(e => e.type === P.fg2.YOUTUBE).length > 0;
            return {
                showTwitchCard: ey > 0 || !t && e,
                showYoutubeCard: eA > 0 || !n && e
            }
        }, [eg, eh, X, eb, ey, eA]),
        eT = Object.values(ee).length,
        eC = r.useMemo(() => {
            let e = eT > 100 ? U : o();
            return Object.values(ee).filter(t => {
                var n;
                let {
                    application: i
                } = t;
                return !!("" === (n = (n = ep).trim().toLowerCase()) || i.id === n || e(n, i.name.toLowerCase()) || null != i.bot && e(n, i.bot.username.toLowerCase()))
            })
        }, [ee, eT, ep]),
        ew = (0, c.bG)([I.A], () => {
            if (null != X) return eC.find(e => I.A.canShowOverviewTooltip(X.id, e.integration.id))
        }, [eC, X]),
        eS = r.useMemo(() => void 0 !== ew ? [ew, ...eC.filter(e => e.integration.id !== ew.integration.id)] : eC, [eC, ew]),
        eI = (0, u.red)(u.DXt),
        [eP, ek] = r.useState(!1),
        eR = r.useRef(0),
        eL = () => {
            ek(!0), clearTimeout(eR.current), eR.current = setTimeout(() => {
                ek(!1)
            }, 200)
        };
    r.useEffect(() => (window.addEventListener("scroll", eL, !0), () => window.removeEventListener("scroll", eL)));
    let eD = eS.map(e => {
            let t = !eI && e.integration.id === (null == ew ? void 0 : ew.integration.id);
            return function(e, t, n, r, l) {
                let {
                    application: a,
                    integration: s
                } = t, o = [];
                return null != s.user ? o.push({
                    icon: u.O4,
                    text: R.intl.formatToPlainString(R.t.Nu9sat, {
                        timestamp: T.default.extractTimestamp(s.id),
                        user: C.Ay.getUserTag(s.user)
                    })
                }) : o.push({
                    icon: u.O4,
                    text: R.intl.formatToPlainString(R.t.gcdJ8J, {
                        timestamp: T.default.extractTimestamp(s.id)
                    })
                }), (0, i.jsx)(S.A, {
                    name: a.name,
                    imageSrc: N.Ay.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                        size: 48
                    }),
                    integration: t,
                    buttonText: R.intl.string(R.t["Z/qRnM"]),
                    hasNextSection: !0,
                    onButtonClick: () => {
                        n(a.id), _.default.track(P.HAw.APP_MANAGE_CTA_CLICKED, {
                            application_id: a.id,
                            guild_id: null == e ? void 0 : e.id,
                            is_admin: null != e ? v.A.can(P.xBc.ADMINISTRATOR, e) : void 0
                        })
                    },
                    details: o,
                    guildId: null == e ? void 0 : e.id,
                    isScrolling: r,
                    canShowMigrationTooltip: l
                }, "integration-".concat(s.id))
            }(X, e, ec, eP, t)
        }),
        eM = (0, i.jsx)("div", {
            className: L.Hw
        });
    if (0 === eD.length && eh) {
        let e, t, r;
        n = null == X ? void 0 : X.id, e = (0, d.Mw)(eu) ? M : G, t = (0, i.jsxs)(h.A, {
            direction: h.A.Direction.VERTICAL,
            align: h.A.Align.CENTER,
            className: L.Kl,
            children: [(0, i.jsx)("img", {
                alt: "",
                src: e,
                className: L.s1
            }), (0, i.jsx)(u.ZpM, {
                editable: !0,
                className: L.$N,
                children: (0, i.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t.EVWFNr)
                })
            })]
        }), r = (0, i.jsx)(u.ZpM, {
            editable: !0,
            className: L.$N,
            children: (0, i.jsxs)("div", {
                className: L.q6,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    src: D,
                    className: L.QT
                }), (0, i.jsx)(u.Heading, {
                    color: "text-default",
                    variant: "heading-xl/bold",
                    children: R.intl.string(R.t.nQQeFM)
                }), (0, i.jsx)(u.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: R.intl.format(R.t.snvKU3, {
                        handleGoToAppDirectory: () => {
                            (0, x.transitionToGlobalDiscovery)({
                                tab: k.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    entrypoint: {
                                        name: j.sW.GUILD_INTEGRATION_SETTINGS
                                    },
                                    guildId: n
                                }
                            }), (0, p.jH)()
                        }
                    })
                })]
            })
        }), eD = eT > 0 ? t : r, eM = null
    }
    let eG = E.A.getArticleURL(P.MVz.INTEGRATIONS),
        eU = null != $ ? R.t.YV0vh6 : R.t.FnZEJs,
        eB = [];
    if (ef) {
        let e, t, n, r, a;
        eB.push((l = en.length, l > 0 ? t = (0, i.jsx)(u.uhT, {
            size: "xs"
        }) : e = R.intl.string(R.t.lOQqJK), (0, i.jsx)(S.A, {
            name: R.intl.string(R.t.xOg4SP),
            icon: u.XC7,
            buttonText: e,
            buttonDisabled: !el,
            trailing: t,
            onButtonClick: es,
            hasNextSection: l > 0,
            details: [{
                text: R.intl.formatToPlainString(R.t["6HqDfT"], {
                    count: l
                })
            }]
        }, "webhooks"))), (null == $ ? void 0 : $.type) === P.rbe.GUILD_VOICE || (null == $ ? void 0 : $.type) != null && P.kvI.GUILD_THREADS_ONLY.has($.type) || eB.push((s = ei.length, s > 0 ? (a = (0, i.jsx)(u.uhT, {
            size: "xs"
        }), r = eo) : (n = R.intl.string(R.t["ZwSt+T"]), r = () => open(E.A.getArticleURL(P.MVz.CHANNEL_FOLLOWING))), (0, i.jsx)(S.A, {
            name: R.intl.string(R.t.OrV60r),
            icon: u._qW,
            buttonText: n,
            onButtonClick: r,
            trailing: a,
            hasNextSection: s > 0,
            details: [{
                text: R.intl.formatToPlainString(R.t.JUNGIZ, {
                    count: s
                })
            }]
        }, "channels-followed")))
    }
    null == $ && eO.length > 0 && eB.push((W = eO.length, (0, i.jsx)(S.A, {
        name: R.intl.string(R.t.tqtDXC),
        icon: u.fNY,
        trailing: (0, i.jsx)(u.uhT, {
            size: "xs"
        }),
        onButtonClick: ed,
        hasNextSection: !0,
        details: [{
            text: R.intl.formatToPlainString(R.t["puxS4+"], {
                count: W
            })
        }]
    }, "channels-syncing"))), eN && eB.push((F = g.A.get(P.fg2.TWITCH), ey > 0 ? (K = (0, i.jsx)(u.uhT, {
        size: "xs"
    }), V = R.intl.formatToPlainString(R.t.FFpnT8, {
        count: ev
    }), z = () => ea(P.fg2.TWITCH)) : (H = R.intl.string(R.t.bkvGkn), V = R.intl.string(R.t.Qq3X2M), z = () => (0, f.A)({
        platformType: P.fg2.TWITCH,
        location: "Integration Settings"
    })), (0, i.jsx)(S.A, {
        name: R.intl.string(R.t.q4pBG3),
        icon: F.icon.whiteSVG,
        iconBackgroundColor: F.color,
        iconClassName: L.tV,
        buttonText: H,
        onButtonClick: z,
        trailing: K,
        hasNextSection: ey > 0,
        details: [{
            text: V
        }]
    }, "integrations-twitch"))), eE && eB.push((Z = g.A.get(P.fg2.YOUTUBE), eA > 0 ? (Q = (0, i.jsx)(u.uhT, {
        size: "xs"
    }), q = R.intl.formatToPlainString(R.t.b2g5vC, {
        count: e_
    }), J = () => ea(P.fg2.YOUTUBE)) : (Y = R.intl.string(R.t.xEyQ3X), q = R.intl.string(R.t.T0ivgQ), J = () => (0, f.A)({
        platformType: P.fg2.YOUTUBE,
        location: "Integration Settings"
    })), (0, i.jsx)(S.A, {
        name: R.intl.string(R.t.aS6cK4),
        icon: Z.icon.whiteSVG,
        iconBackgroundColor: Z.color,
        iconClassName: L.tV,
        buttonText: Y,
        onButtonClick: J,
        trailing: Q,
        hasNextSection: eA > 0,
        details: [{
            text: q
        }]
    }, "integrations-youtube")));
    let eW = null != $ && ex && null != ej;
    return (0, i.jsxs)("div", {
        className: a()(null != eM ? L.bg : null),
        children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: R.intl.format(eU, {
                helpdeskArticle: eG
            })
        }), (0, i.jsx)(u.cGx, {
            className: L.yF
        }), er || eg || null == X ? (0, i.jsx)(u.y$y, {
            className: L.__invalid_spinner,
            type: u.y$y.Type.SPINNING_CIRCLE
        }) : (0, i.jsxs)(i.Fragment, {
            children: [eB, eW && (0, i.jsxs)(i.Fragment, {
                children: [eB.length > 0 ? (0, i.jsx)(u.cGx, {
                    className: L.yF
                }) : null, (0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: L.bV,
                    children: R.intl.string(R.t.oAvIAg)
                }), (0, i.jsx)(w.q, {
                    channel: $,
                    application: ej,
                    showApplicationImage: !0,
                    name: ej.name,
                    hasNextSection: !0,
                    iconClassName: L.d0,
                    trailing: (0, i.jsx)(u.R2l, {
                        size: "xs"
                    })
                })]
            }), eh ? (0, i.jsxs)(i.Fragment, {
                children: [eB.length > 0 || eW ? (0, i.jsx)(u.cGx, {
                    className: L.yF
                }) : null, (0, i.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: L.bV,
                    children: R.intl.string(R.t.pUBKht)
                }), eT > 4 ? (0, i.jsx)(B, {
                    query: ep,
                    setQuery: em
                }) : null, eD]
            }) : null, eM]
        })]
    })
}