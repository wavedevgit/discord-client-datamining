/** chunk id: 485724 params = (module,exports,require) **/
n.d(t, {
    J: () => w.J,
    W: () => U
}), n(321073), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    r = n(485845),
    a = n(379834),
    s = n(311907),
    o = n(397927),
    d = n(795816),
    c = n(574152),
    u = n(793574),
    _ = n(688810),
    m = n(522305),
    h = n(735991),
    p = n(361926),
    g = n(583846),
    A = n(625180),
    x = n(207371),
    f = n(205184),
    C = n(773669),
    I = n(961350),
    E = n(734057),
    v = n(994500),
    b = n(967198),
    T = n(287809),
    S = n(486020),
    y = n(204776),
    N = n(725606),
    j = n(572211),
    L = n(178910),
    R = n(354287),
    P = n(138175),
    D = n(112150),
    M = n(574660),
    w = n(768349),
    O = n(985018),
    k = n(22658);

function U(e) {
    let {
        app: t,
        linkType: n,
        activityCustomId: r,
        activityReferrerId: a,
        message: o,
        onView: g
    } = e, {
        name: f,
        bot: C
    } = t = (0, P.b)(t), v = C?.id, b = (0, h.Ag)(t), T = S.Ay.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: C
    }), {
        staticBannerSrc: y,
        videoBannerSrc: L,
        bannerAspectRatio: w
    } = (0, D.f)(t), k = (0, s.bG)([I.default], () => a ?? I.default.getId(), [a]), {
        analyticsLocations: U
    } = (0, _.Ay)(u.A.APP_MESSAGE_EMBED), {
        currentChannelId: F,
        instanceId: H,
        isCurrentlyInInstance: V,
        canLaunchInChannel: W
    } = (0, N.w)(t.id), q = (0, c.A)(), Y = (0, p.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: t.id,
        botUserId: C?.id
    }), z = null != v && b && Y, Q = W && b, K = (0, x.e)(t), J = (0, M.F)(t), X = (0, M.t)(t), Z = l.useMemo(() => {
        let e = [];
        return b ? K ? e.push({
            label: O.intl.string(O.t.RscU7I),
            trackingArea: R.kY.PLAY,
            onClick() {
                A.A.launchFrame({
                    applicationId: t.id
                })
            }
        }) : (Q && e.push({
            label: null == H ? O.intl.string(O.t.RscU7I) : V ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
            trackingArea: R.kY.PLAY,
            onClick() {
                (0, d.su)({
                    channelId: F ?? void 0,
                    applicationId: t.id,
                    isStart: null == H,
                    embeddedActivitiesManager: q,
                    customId: r,
                    referrerId: k,
                    analyticsLocations: U
                })
            },
            disabled: V
        }), !Q && z && e.push({
            label: O.intl.string(O.t.JeK1Wg),
            trackingArea: R.kY.PLAY,
            onClick() {
                (0, m.Q)({
                    appId: t.id,
                    botId: v,
                    analyticsLocations: U,
                    customId: r,
                    referrerId: k
                })
            }
        })) : null != X && e.push(X), e
    }, [b, X, K, t.id, Q, z, H, V, F, q, r, k, U, v]), $ = b ? (0, i.jsx)(B, {
        app: t
    }) : (0, i.jsx)(G, {
        app: t
    });
    return (0, i.jsx)(j.h, {
        title: f,
        staticBannerSrc: y,
        videoBannerSrc: L,
        onClickBanner: J,
        bannerAspectRatio: w,
        iconSrc: T,
        info: $,
        actions: Z,
        onClickContent: J,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: k,
            activityCustomId: r,
            onView: g,
            guildId: E.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id
        }
    })
}

function G(e) {
    let {
        app: t
    } = e, n = (0, y.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig
    }) && null != t.integrationTypesConfig && r.b.GUILD_INSTALL in t.integrationTypesConfig, a = (0, s.bG)([C.default], () => C.default.locale, []), d = l.useMemo(() => {
        if (!n) return null;
        let e = new Intl.NumberFormat(a, {
                notation: "compact",
                compactDisplay: "short"
            }),
            i = t.directoryEntry?.guild_count ?? 0;
        return 0 === i ? null : O.intl.format(O.t["6IW6Wi"], {
            guildCount: e.format(i)
        })
    }, [t.directoryEntry?.guild_count, n, a]), c = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [null != c && (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: k.h_,
            color: "none",
            children: c
        }), null != d && (0, i.jsxs)(o.Text, {
            variant: "text-xs/normal",
            className: k.dS,
            color: "none",
            lineClamp: 1,
            children: [(0, i.jsx)(o.QGJ, {
                size: "xxs",
                color: "currentColor"
            }), d]
        })]
    })
}

function B(e) {
    let {
        app: t
    } = e, {
        tags: n,
        maxParticipants: r = 0
    } = t, d = (0, s.bG)([b.A], () => b.A.getGuildId() ?? void 0, []), c = (0, f.s)(t.id), u = (0, s.yK)([T.default, v.A], () => {
        let e = [];
        for (let [t, n] of c.entries()) {
            if (t >= 5) break;
            let i = T.default.getUser(n.author_id),
                l = v.A.isFriend(n.author_id);
            null != i && l && e.push(i)
        }
        return e
    }, [c]), _ = l.useMemo(() => {
        if (u.length > 0) return (0, i.jsx)(L.$, {
            activityUsers: u,
            guildId: d,
            activityText: O.intl.formatToPlainString(O.t["IJa+46"], {
                count: u.length
            })
        });
        if (c.some(e => (0, g.CZ)(e) === a.m.GLOBAL)) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Y3C, {
                size: "xxs",
                color: "currentColor"
            }), O.intl.string(O.t.TsWCdW)]
        });
        let e = r > 0 ? O.intl.format(O.t.z8EAJW, {
            count: r
        }) : O.intl.string(O.t.RjceQU);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.nys, {
                size: "xxs",
                color: "currentColor"
            }), e]
        })
    }, [c, u, d, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [n.length > 0 && (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: k.h_,
            color: "none",
            lineClamp: 1,
            children: n.map((e, t) => (0, i.jsx)("span", {
                className: k.Tc,
                children: e
            }, t))
        }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: k.dS,
            color: "none",
            lineClamp: 1,
            children: _
        })]
    })
}