/** chunk id: 875264 params = (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(282956),
    c = n(83257),
    u = n(882997),
    m = n(235986),
    x = n(143582),
    g = n(607940),
    h = n(808728),
    p = n(576705),
    A = n(203982),
    b = n(975571),
    f = n(971157),
    _ = n(790613),
    j = n(460641),
    N = n(969756),
    v = n(930238),
    T = n(761437),
    C = n(652215),
    E = n(985018),
    I = n(458203);

function S(e, t) {
    switch (e) {
        case C.wLn.APPLICATION:
            return t?.application.name ?? "";
        case C.wLn.OVERVIEW:
            return E.intl.string(E.t.s69NLF);
        case C.wLn.CHANNEL_FOLLOWING:
            return E.intl.string(E.t.OrV60r);
        case C.wLn.TWITCH:
            return E.intl.string(E.t.q4pBG3);
        case C.wLn.WEBHOOKS:
            return E.intl.string(E.t.xOg4SP);
        case C.wLn.YOUTUBE:
            return E.intl.string(E.t.aS6cK4);
        case C.wLn.LOBBIES_LINKED:
            return E.intl.string(E.t.tqtDXC);
        default:
            return ""
    }
}
let y = l.memo(function(e) {
    let {
        section: t,
        sectionId: n,
        guild: s,
        channel: y,
        integrations: O,
        editedIntegration: w,
        webhooks: k,
        editedWebhook: R,
        isFetchingWebhooks: L,
        refToScroller: M,
        errors: G,
        hasChanges: D
    } = e, P = (0, r.bG)([h.Ay], () => null != s ? h.Ay.getDefaultChannel(s.id) : null), U = (0, r.cf)([h.Ay], () => h.Ay.getChannels(s?.id)), B = (0, r.cf)([p.A], () => a().keyBy(U.SELECTABLE.map(e => e.channel).filter(e => p.A.can(C.xBc.MANAGE_WEBHOOKS, e)), "id")), W = (0, r.cf)([p.A], () => a().keyBy(U.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && p.A.can(C.xBc.MANAGE_WEBHOOKS, e)), "id")), H = y ?? P, V = t === C.wLn.APPLICATION ? n : null, [z, F] = l.useState(c.n3), K = l.useCallback(() => D() ? (A._.dispatch(C.jej.SHAKE_APP, {
        duration: 300,
        intensity: z
    }), F(Math.min(z + c.pe, c.OZ)), A._.dispatch(C.jej.EMPHASIZE_NOTICE), !1) : (F(c.n3), !0), [D, z]), Y = l.useCallback(e => !!K() && (d.A.setSection(e), !0), [K]), {
        applicationIntegrations: q,
        applicationBotIds: J,
        builtInIntegrations: Q,
        customWebhooks: Z,
        followedChannelWebhooks: X
    } = l.useMemo(() => {
        let e = {},
            t = {},
            n = {},
            i = [],
            l = [];
        if (null != O)
            for (let i of O) "discord" === i.type ? null != i.application && (e[i.application.id] = {
                application: i.application,
                integration: i,
                webhooks: []
            }, i.application.bot?.id !== void 0 && (t[i.application.bot.id] = i.application.id)) : (i.type in n || (n[i.type] = []), n[i.type].push(i));
        for (let t of k)(t.channel_id in B || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === C.NH1.CHANNEL_FOLLOWER ? l.push(t) : i.push(t));
        return {
            applicationIntegrations: e,
            applicationBotIds: t,
            builtInIntegrations: n,
            customWebhooks: i,
            followedChannelWebhooks: l
        }
    }, [O, B, W, k]);
    l.useEffect(() => {
        if (!L) switch (t) {
            case C.wLn.TWITCH:
                null == Q[C.fg2.TWITCH] && d.A.setSection(C.wLn.OVERVIEW);
                break;
            case C.wLn.YOUTUBE:
                null == Q[C.fg2.YOUTUBE] && d.A.setSection(C.wLn.OVERVIEW);
                break;
            case C.wLn.APPLICATION:
                null != V && (V in J || V in q) || d.A.setSection(C.wLn.OVERVIEW)
        }
    }, [q, J, Q, V, t, L]), l.useEffect(() => {
        s?.id == null || g.A.getEntitlementsForGuildFetchState(s.id) === g.e.NOT_FETCHED && x.f5(s.id)
    }, [s?.id]), l.useEffect(() => () => {
        d.A.setSection(C.wLn.OVERVIEW, null)
    }, []);
    let $ = null;
    switch (t) {
        case C.wLn.TWITCH:
            null != Q[C.fg2.TWITCH] && ($ = (0, i.jsx)(_.A, {
                guild: s,
                integrations: Q[C.fg2.TWITCH],
                editedIntegration: w,
                labelText: E.intl.string(E.t.q4pBG3),
                platformType: C.fg2.TWITCH,
                descriptionText: E.intl.string(E.t.V9kNqt),
                helpText: E.intl.format(E.t.ro1jEN, {
                    connectAction: () => (0, u.A)({
                        platformType: C.fg2.TWITCH,
                        location: "Integration Settings"
                    }),
                    helpdeskArticle: b.A.getArticleURL(C.MVz.TWITCH_INTEGRATION)
                }),
                errors: G,
                canNavigate: K
            }));
            break;
        case C.wLn.YOUTUBE:
            null != Q[C.fg2.YOUTUBE] && ($ = (0, i.jsx)(_.A, {
                guild: s,
                integrations: Q[C.fg2.YOUTUBE],
                editedIntegration: w,
                labelText: E.intl.string(E.t.aS6cK4),
                platformType: C.fg2.YOUTUBE,
                descriptionText: E.intl.string(E.t["7Tv7JK"]),
                helpText: E.intl.format(E.t["4OSAQ9"], {
                    connectAction: () => (0, u.A)({
                        platformType: C.fg2.YOUTUBE
                    }),
                    helpdeskArticle: b.A.getArticleURL(C.MVz.YOUTUBE_INTEGRATION)
                }),
                errors: G,
                canNavigate: K
            }));
            break;
        case C.wLn.APPLICATION:
            let ee = null != V ? q[J[V]] ?? q[V] : null;
            null != ee && ($ = (0, i.jsx)(f.A, {
                guild: s,
                applicationIntegration: ee,
                editedWebhook: R,
                selectableWebhookChannels: B,
                errors: G,
                canNavigate: K
            }));
            break;
        case C.wLn.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(j.A, {
                followedChannelWebhooks: X,
                editedWebhook: R,
                selectableWebhookChannels: B,
                canNavigate: K,
                errors: G
            });
            break;
        case C.wLn.WEBHOOKS:
            $ = (0, i.jsx)(T.A, {
                guild: s,
                channel: y,
                customWebhooks: Z,
                editedWebhook: R,
                selectableWebhookChannels: {
                    ...B,
                    ...W
                },
                canNavigate: K,
                refToScroller: M,
                errors: G
            });
            break;
        case C.wLn.LOBBIES_LINKED:
            $ = (0, i.jsx)(N.A, {
                guild: s
            });
            break;
        default:
            $ = (0, i.jsx)(v.A, {
                guild: s,
                channel: y,
                applicationIntegrations: q,
                builtInIntegrations: Q,
                customWebhooks: Z,
                followedChannelWebhooks: X,
                isLoadingWebhooks: L || null == s,
                canCreateWebhook: null != H,
                onManageCustomWebhooks: () => {
                    d.A.setSection(C.wLn.WEBHOOKS)
                },
                onManageFollowedChannels: () => {
                    d.A.setSection(C.wLn.CHANNEL_FOLLOWING)
                },
                onManageApplication: e => {
                    d.A.setSection(C.wLn.APPLICATION, e)
                },
                onManageBuiltIn: e => {
                    switch (e) {
                        case C.fg2.TWITCH:
                            d.A.setSection(C.wLn.TWITCH);
                            break;
                        case C.fg2.YOUTUBE:
                            d.A.setSection(C.wLn.YOUTUBE)
                    }
                },
                onManageLobbiesLinked: () => {
                    d.A.setSection(C.wLn.LOBBIES_LINKED)
                }
            })
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.A, {
            align: m.A.Align.CENTER,
            className: I.jD,
            children: t === C.wLn.OVERVIEW ? (0, i.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: S(C.wLn.OVERVIEW)
            }) : (0, i.jsx)(o.BIu, {
                activeId: t.toString(),
                breadcrumbs: [C.wLn.OVERVIEW, t].map(e => ({
                    id: e.toString(),
                    label: S(e, q[V])
                })),
                onBreadcrumbClick: e => {
                    t !== parseInt(e.id) && Y(parseInt(e.id))
                },
                renderCustomBreadcrumb: (e, t) => (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    className: t ? I.q3 : I.fd,
                    children: e.label
                })
            })
        }), $]
    })
})