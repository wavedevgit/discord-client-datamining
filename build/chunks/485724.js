/** chunk id: 485724, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J: () => L.J,
    W: () => U
}), n(321073), n(134528), n(947204), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(485845),
    a = n(379834),
    s = n(311907),
    o = n(397927),
    c = n(795816),
    u = n(574152),
    d = n(793574),
    p = n(688810),
    m = n(522305),
    f = n(735991),
    g = n(361926),
    _ = n(583846),
    h = n(625180),
    b = n(207371),
    y = n(205184),
    A = n(773669),
    v = n(961350),
    O = n(734057),
    x = n(994500),
    E = n(967198),
    j = n(287809),
    C = n(486020),
    I = n(204776),
    S = n(725606),
    T = n(572211),
    N = n(178910),
    P = n(354287),
    w = n(138175),
    R = n(112150),
    D = n(574660),
    L = n(768349),
    M = n(985018),
    k = n(22658);

function U(e) {
    var t;
    let {
        app: n,
        linkType: l,
        activityCustomId: a,
        activityReferrerId: o,
        message: _,
        onView: y
    } = e, {
        name: A,
        bot: x
    } = n = (0, w.b)(n), E = null == x ? void 0 : x.id, j = (0, f.Ag)(n), I = C.Ay.getApplicationIconURL({
        id: n.id,
        icon: n.icon,
        bot: x
    }), {
        staticBannerSrc: N,
        videoBannerSrc: L,
        bannerAspectRatio: k
    } = (0, R.f)(n), U = (0, s.bG)([v.default], () => null != o ? o : v.default.getId(), [o]), {
        analyticsLocations: F
    } = (0, p.Ay)(d.A.APP_MESSAGE_EMBED), {
        currentChannelId: H,
        instanceId: V,
        isCurrentlyInInstance: z,
        canLaunchInChannel: W
    } = (0, S.w)(n.id), K = (0, u.A)(), Y = (0, g.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: n.id,
        botUserId: null == x ? void 0 : x.id
    }), q = null != E && j && Y, J = W && j, Q = (0, b.e)(n), X = (0, D.F)(n), Z = (0, D.t)(n), $ = i.useMemo(() => {
        let e = [];
        return j ? Q ? e.push({
            label: M.intl.string(M.t.RscU7I),
            trackingArea: P.kY.PLAY,
            onClick() {
                h.A.launchFrame({
                    applicationId: n.id
                })
            }
        }) : (J && e.push({
            label: null == V ? M.intl.string(M.t.RscU7I) : z ? M.intl.string(M.t.DPfdsq) : M.intl.string(M.t.sqe0hj),
            trackingArea: P.kY.PLAY,
            onClick() {
                (0, c.su)({
                    channelId: null != H ? H : void 0,
                    applicationId: n.id,
                    isStart: null == V,
                    embeddedActivitiesManager: K,
                    customId: a,
                    referrerId: U,
                    analyticsLocations: F
                })
            },
            disabled: z
        }), !J && q && e.push({
            label: M.intl.string(M.t.JeK1Wg),
            trackingArea: P.kY.PLAY,
            onClick() {
                (0, m.Q)({
                    appId: n.id,
                    botId: E,
                    analyticsLocations: F,
                    customId: a,
                    referrerId: U
                })
            }
        })) : null != Z && e.push(Z), e
    }, [j, Z, Q, n.id, J, q, V, z, H, K, a, U, F, E]), ee = j ? (0, r.jsx)(B, {
        app: n
    }) : (0, r.jsx)(G, {
        app: n
    });
    return (0, r.jsx)(T.h, {
        title: A,
        staticBannerSrc: N,
        videoBannerSrc: L,
        onClickBanner: X,
        bannerAspectRatio: k,
        iconSrc: I,
        info: ee,
        actions: $,
        onClickContent: X,
        trackingConfig: {
            id: n.id,
            linkType: l,
            referrerId: U,
            activityCustomId: a,
            onView: y,
            guildId: null == (t = O.A.getChannel(_.channel_id)) ? void 0 : t.guild_id,
            channelId: _.channel_id,
            messageId: _.id
        }
    })
}

function G(e) {
    var t, n, a;
    let {
        app: c
    } = e, u = (0, I.Ie)({
        customInstallUrl: c.customInstallUrl,
        installParams: c.installParams,
        integrationTypesConfig: c.integrationTypesConfig
    }) && null != c.integrationTypesConfig && l.b.GUILD_INSTALL in c.integrationTypesConfig, d = (0, s.bG)([A.default], () => A.default.locale, []), p = i.useMemo(() => {
        var e, t;
        if (!u) return null;
        let n = new Intl.NumberFormat(d, {
                notation: "compact",
                compactDisplay: "short"
            }),
            r = null != (e = null == (t = c.directoryEntry) ? void 0 : t.guild_count) ? e : 0;
        return 0 === r ? null : M.intl.format(M.t["6IW6Wi"], {
            guildCount: n.format(r)
        })
    }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]), m = null == (a = c.categories) || null == (n = a.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [null != m && (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: k.h_,
            color: "none",
            children: m
        }), null != p && (0, r.jsxs)(o.Text, {
            variant: "text-xs/normal",
            className: k.dS,
            color: "none",
            lineClamp: 1,
            children: [(0, r.jsx)(o.QGJ, {
                size: "xxs",
                color: "currentColor"
            }), p]
        })]
    })
}

function B(e) {
    let {
        app: t
    } = e, {
        tags: n,
        maxParticipants: l = 0
    } = t, c = (0, s.bG)([E.A], () => {
        var e;
        return null != (e = E.A.getGuildId()) ? e : void 0
    }, []), u = (0, y.s)(t.id), d = (0, s.yK)([j.default, x.A], () => {
        let e = [];
        for (let [t, n] of u.entries()) {
            if (t >= 5) break;
            let r = j.default.getUser(n.author_id),
                i = x.A.isFriend(n.author_id);
            null != r && i && e.push(r)
        }
        return e
    }, [u]), p = i.useMemo(() => {
        if (d.length > 0) return (0, r.jsx)(N.$, {
            activityUsers: d,
            guildId: c,
            activityText: M.intl.formatToPlainString(M.t["IJa+46"], {
                count: d.length
            })
        });
        if (u.some(e => (0, _.CZ)(e) === a.m.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Y3C, {
                size: "xxs",
                color: "currentColor"
            }), M.intl.string(M.t.TsWCdW)]
        });
        let e = l > 0 ? M.intl.format(M.t.z8EAJW, {
            count: l
        }) : M.intl.string(M.t.RjceQU);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.nys, {
                size: "xxs",
                color: "currentColor"
            }), e]
        })
    }, [u, d, c, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [n.length > 0 && (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: k.h_,
            color: "none",
            lineClamp: 1,
            children: n.map((e, t) => (0, r.jsx)("span", {
                className: k.Tc,
                children: e
            }, t))
        }), (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: k.dS,
            color: "none",
            lineClamp: 1,
            children: p
        })]
    })
}