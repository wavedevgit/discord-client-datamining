/** Chunk was on web.js **/
/** chunk id: 485724, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => x.J,
    W: () => M
}), n(321073), n(134528), n(947204), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(485845),
    s = n(379834),
    o = n(311907),
    l = n(397927),
    c = n(795816),
    u = n(574152),
    d = n(793574),
    f = n(688810),
    p = n(522305),
    _ = n(735991),
    h = n(361926),
    m = n(583846),
    g = n(205184),
    E = n(773669),
    y = n(961350),
    b = n(734057),
    O = n(994500),
    v = n(967198),
    A = n(287809),
    I = n(486020),
    S = n(204776),
    T = n(725606),
    C = n(572211),
    N = n(178910),
    w = n(354287),
    R = n(138175),
    P = n(112150),
    D = n(574660),
    x = n(768349),
    L = n(985018),
    j = n(22658);

function M(e) {
    var t;
    let {
        app: n,
        linkType: a,
        activityCustomId: s,
        activityReferrerId: l,
        message: m,
        onView: g
    } = e, {
        name: E,
        bot: O
    } = n = (0, R.b)(n), v = null == O ? void 0 : O.id, A = (0, _.Ag)(n), S = I.Ay.getApplicationIconURL({
        id: n.id,
        icon: n.icon,
        bot: O
    }), {
        staticBannerSrc: N,
        videoBannerSrc: x,
        bannerAspectRatio: j
    } = (0, P.f)(n), M = (0, o.bG)([y.default], () => null != l ? l : y.default.getId(), [l]), {
        analyticsLocations: G
    } = (0, f.Ay)(d.A.APP_MESSAGE_EMBED), {
        currentChannelId: V,
        instanceId: F,
        isCurrentlyInInstance: B,
        canLaunchInChannel: H
    } = (0, T.w)(n.id), Y = (0, u.A)(), W = (0, h.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: n.id,
        botUserId: null == O ? void 0 : O.id
    }), K = null != v && A && W, z = H && A, q = (0, D.F)(n), Z = (0, D.t)(n), X = i.useMemo(() => {
        let e = [];
        return A ? (z && e.push({
            label: null == F ? L.intl.string(L.t.RscU7I) : B ? L.intl.string(L.t.DPfdsq) : L.intl.string(L.t.sqe0hj),
            trackingArea: w.kY.PLAY,
            onClick() {
                (0, c.su)({
                    channelId: null != V ? V : void 0,
                    applicationId: n.id,
                    isStart: null == F,
                    embeddedActivitiesManager: Y,
                    customId: s,
                    referrerId: M,
                    analyticsLocations: G
                })
            },
            disabled: B
        }), !z && K && e.push({
            label: L.intl.string(L.t.JeK1Wg),
            trackingArea: w.kY.PLAY,
            onClick() {
                (0, p.Q)({
                    appId: n.id,
                    botId: v,
                    analyticsLocations: G,
                    customId: s,
                    referrerId: M
                })
            }
        })) : null != Z && e.push(Z), e
    }, [z, K, F, B, V, n.id, Y, s, M, G, A, Z, v]), Q = A ? (0, r.jsx)(U, {
        app: n
    }) : (0, r.jsx)(k, {
        app: n
    });
    return (0, r.jsx)(C.h, {
        title: E,
        staticBannerSrc: N,
        videoBannerSrc: x,
        onClickBanner: q,
        bannerAspectRatio: j,
        iconSrc: S,
        info: Q,
        actions: X,
        onClickContent: q,
        trackingConfig: {
            id: n.id,
            linkType: a,
            referrerId: M,
            activityCustomId: s,
            onView: g,
            guildId: null == (t = b.A.getChannel(m.channel_id)) ? void 0 : t.guild_id,
            channelId: m.channel_id,
            messageId: m.id
        }
    })
}

function k(e) {
    var t, n, s;
    let {
        app: c
    } = e, u = (0, S.Ie)({
        customInstallUrl: c.customInstallUrl,
        installParams: c.installParams,
        integrationTypesConfig: c.integrationTypesConfig
    }) && null != c.integrationTypesConfig && a.b.GUILD_INSTALL in c.integrationTypesConfig, d = (0, o.bG)([E.default], () => E.default.locale, []), f = i.useMemo(() => {
        var e, t;
        if (!u) return null;
        let n = new Intl.NumberFormat(d, {
                notation: "compact",
                compactDisplay: "short"
            }),
            r = null != (e = null == (t = c.directoryEntry) ? void 0 : t.guild_count) ? e : 0;
        return 0 === r ? null : L.intl.format(L.t["6IW6Wi"], {
            guildCount: n.format(r)
        })
    }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]), p = null == (s = c.categories) || null == (n = s.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [null != p && (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: j.h_,
            color: "none",
            children: p
        }), null != f && (0, r.jsxs)(l.Text, {
            variant: "text-xs/normal",
            className: j.dS,
            color: "none",
            lineClamp: 1,
            children: [(0, r.jsx)(l.QGJ, {
                size: "xxs",
                color: "currentColor"
            }), f]
        })]
    })
}

function U(e) {
    let {
        app: t
    } = e, {
        tags: n,
        maxParticipants: a = 0
    } = t, c = (0, o.bG)([v.A], () => {
        var e;
        return null != (e = v.A.getGuildId()) ? e : void 0
    }, []), u = (0, g.s)(t.id), d = (0, o.yK)([A.default, O.A], () => {
        let e = [];
        for (let [t, n] of u.entries()) {
            if (t >= 5) break;
            let r = A.default.getUser(n.author_id),
                i = O.A.isFriend(n.author_id);
            null != r && i && e.push(r)
        }
        return e
    }, [u]), f = i.useMemo(() => {
        if (d.length > 0) return (0, r.jsx)(N.$, {
            activityUsers: d,
            guildId: c,
            activityText: L.intl.formatToPlainString(L.t["IJa+46"], {
                count: d.length
            })
        });
        if (u.some(e => (0, m.CZ)(e) === s.m.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Y3C, {
                size: "xxs",
                color: "currentColor"
            }), L.intl.string(L.t.TsWCdW)]
        });
        let e = a > 0 ? L.intl.format(L.t.z8EAJW, {
            count: a
        }) : L.intl.string(L.t.RjceQU);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.nys, {
                size: "xxs",
                color: "currentColor"
            }), e]
        })
    }, [u, d, c, a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [n.length > 0 && (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: j.h_,
            color: "none",
            lineClamp: 1,
            children: n.map((e, t) => (0, r.jsx)("span", {
                className: j.Tc,
                children: e
            }, t))
        }), (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: j.dS,
            color: "none",
            lineClamp: 1,
            children: f
        })]
    })
}