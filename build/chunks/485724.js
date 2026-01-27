/** Chunk was on 92917 **/
/** chunk id: 485724, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J: () => R.J,
    W: () => M
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
    h = n(583846),
    _ = n(205184),
    b = n(773669),
    A = n(961350),
    y = n(734057),
    v = n(994500),
    x = n(967198),
    O = n(287809),
    E = n(486020),
    j = n(204776),
    C = n(725606),
    I = n(572211),
    S = n(178910),
    T = n(354287),
    N = n(138175),
    P = n(112150),
    w = n(574660),
    R = n(768349),
    D = n(985018),
    L = n(22658);

function M(e) {
    var t;
    let {
        app: n,
        linkType: l,
        activityCustomId: a,
        activityReferrerId: o,
        message: h,
        onView: _
    } = e, {
        name: b,
        bot: v
    } = n = (0, N.b)(n), x = null == v ? void 0 : v.id, O = (0, f.Ag)(n), j = E.Ay.getApplicationIconURL({
        id: n.id,
        icon: n.icon,
        bot: v
    }), {
        staticBannerSrc: S,
        videoBannerSrc: R,
        bannerAspectRatio: L
    } = (0, P.f)(n), M = (0, s.bG)([A.default], () => null != o ? o : A.default.getId(), [o]), {
        analyticsLocations: G
    } = (0, p.Ay)(d.A.APP_MESSAGE_EMBED), {
        currentChannelId: B,
        instanceId: F,
        isCurrentlyInInstance: H,
        canLaunchInChannel: V
    } = (0, C.w)(n.id), z = (0, u.A)(), W = (0, g.Vr)({
        context: {
            type: "contextless"
        },
        applicationId: n.id,
        botUserId: null == v ? void 0 : v.id
    }), K = null != x && O && W, Y = V && O, q = (0, w.F)(n), J = (0, w.t)(n), Q = i.useMemo(() => {
        let e = [];
        return O ? (Y && e.push({
            label: null == F ? D.intl.string(D.t.RscU7I) : H ? D.intl.string(D.t.DPfdsq) : D.intl.string(D.t.sqe0hj),
            trackingArea: T.kY.PLAY,
            onClick() {
                (0, c.su)({
                    channelId: null != B ? B : void 0,
                    applicationId: n.id,
                    isStart: null == F,
                    embeddedActivitiesManager: z,
                    customId: a,
                    referrerId: M,
                    analyticsLocations: G
                })
            },
            disabled: H
        }), !Y && K && e.push({
            label: D.intl.string(D.t.JeK1Wg),
            trackingArea: T.kY.PLAY,
            onClick() {
                (0, m.Q)({
                    appId: n.id,
                    botId: x,
                    analyticsLocations: G,
                    customId: a,
                    referrerId: M
                })
            }
        })) : null != J && e.push(J), e
    }, [Y, K, F, H, B, n.id, z, a, M, G, O, J, x]), Z = O ? (0, r.jsx)(U, {
        app: n
    }) : (0, r.jsx)(k, {
        app: n
    });
    return (0, r.jsx)(I.h, {
        title: b,
        staticBannerSrc: S,
        videoBannerSrc: R,
        onClickBanner: q,
        bannerAspectRatio: L,
        iconSrc: j,
        info: Z,
        actions: Q,
        onClickContent: q,
        trackingConfig: {
            id: n.id,
            linkType: l,
            referrerId: M,
            activityCustomId: a,
            onView: _,
            guildId: null == (t = y.A.getChannel(h.channel_id)) ? void 0 : t.guild_id,
            channelId: h.channel_id,
            messageId: h.id
        }
    })
}

function k(e) {
    var t, n, a;
    let {
        app: c
    } = e, u = (0, j.Ie)({
        customInstallUrl: c.customInstallUrl,
        installParams: c.installParams,
        integrationTypesConfig: c.integrationTypesConfig
    }) && null != c.integrationTypesConfig && l.b.GUILD_INSTALL in c.integrationTypesConfig, d = (0, s.bG)([b.default], () => b.default.locale, []), p = i.useMemo(() => {
        var e, t;
        if (!u) return null;
        let n = new Intl.NumberFormat(d, {
                notation: "compact",
                compactDisplay: "short"
            }),
            r = null != (e = null == (t = c.directoryEntry) ? void 0 : t.guild_count) ? e : 0;
        return 0 === r ? null : D.intl.format(D.t["6IW6Wi"], {
            guildCount: n.format(r)
        })
    }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]), m = null == (a = c.categories) || null == (n = a.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [null != m && (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: L.h_,
            color: "none",
            children: m
        }), null != p && (0, r.jsxs)(o.Text, {
            variant: "text-xs/normal",
            className: L.dS,
            color: "none",
            lineClamp: 1,
            children: [(0, r.jsx)(o.QGJ, {
                size: "xxs",
                color: "currentColor"
            }), p]
        })]
    })
}

function U(e) {
    let {
        app: t
    } = e, {
        tags: n,
        maxParticipants: l = 0
    } = t, c = (0, s.bG)([x.A], () => {
        var e;
        return null != (e = x.A.getGuildId()) ? e : void 0
    }, []), u = (0, _.s)(t.id), d = (0, s.yK)([O.default, v.A], () => {
        let e = [];
        for (let [t, n] of u.entries()) {
            if (t >= 5) break;
            let r = O.default.getUser(n.author_id),
                i = v.A.isFriend(n.author_id);
            null != r && i && e.push(r)
        }
        return e
    }, [u]), p = i.useMemo(() => {
        if (d.length > 0) return (0, r.jsx)(S.$, {
            activityUsers: d,
            guildId: c,
            activityText: D.intl.formatToPlainString(D.t["IJa+46"], {
                count: d.length
            })
        });
        if (u.some(e => (0, h.CZ)(e) === a.m.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Y3C, {
                size: "xxs",
                color: "currentColor"
            }), D.intl.string(D.t.TsWCdW)]
        });
        let e = l > 0 ? D.intl.format(D.t.z8EAJW, {
            count: l
        }) : D.intl.string(D.t.RjceQU);
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
            className: L.h_,
            color: "none",
            lineClamp: 1,
            children: n.map((e, t) => (0, r.jsx)("span", {
                className: L.Tc,
                children: e
            }, t))
        }), (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: L.dS,
            color: "none",
            lineClamp: 1,
            children: p
        })]
    })
}