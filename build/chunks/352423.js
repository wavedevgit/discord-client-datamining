/** Chunk was on web.js **/
/** chunk id: 352423, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => Y
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238), n(134528), n(947204);
var r = n(607399),
    i = n(696292),
    a = n(73153),
    s = n(308528),
    o = n(846293),
    l = n(795816),
    c = n(956549),
    u = n(257269),
    d = n(574152),
    f = n(58149),
    p = n(121401),
    _ = n(587895),
    h = n(725606),
    m = n(167189),
    g = n(833291),
    E = n(707592),
    y = n(698441),
    b = n(268313),
    O = n(376943),
    v = n(22007),
    A = n(677402),
    I = n(807876),
    S = n(545986),
    T = n(976860),
    C = n(788995),
    N = n(556022);
n(345953);
var w = n(961350),
    R = n(696451),
    P = n(299091),
    D = n(309010),
    x = n(967198),
    L = n(711014),
    j = n(954571),
    M = n(67486),
    k = n(998218),
    U = n(975807),
    G = n(652215);
n(758836);
var V = n(654487);
async function F(e, t) {
    await a.h.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: e,
        code: t,
        context: G.BRT.APP
    })
}
async function B(e) {
    var t, n;
    let r = P.A.getInvite(e.code);
    if (null == r) {
        let {
            invite: t
        } = await o.Ay.resolveInvite(e.code, "Markdown Link");
        r = t
    }
    if (null == r) return;
    if (r.state === G.elq.EXPIRED || r.state === G.elq.BANNED || r.state === G.elq.ERROR) return void await F(r, e.code);
    let i = L.Ay.getFlattenedGuildIds(),
        a = null == r || null == (t = r.guild) ? void 0 : t.id,
        s = null != a && i.includes(a),
        l = !1;
    if (s && null != r.roles && r.roles.length > 0) {
        let e = w.default.getId(),
            t = R.Ay.getMember(a, e),
            i = new Set(null != (n = null == t ? void 0 : t.roles) ? n : []);
        l = r.roles.some(e => !i.has(e.id))
    }
    s && !l ? o.Ay.transitionToInviteSync(r) : await F(r, e.code)
}
let H = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};

function Y(e) {
    var t;
    let {
        skipExtensionCheck: a,
        analyticsLocations: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H, w = (0, g.br)(e);
    if (null != w && (w.type === m.I.INVITE || w.type === m.I.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), B(w), !0);
    if (null != w && (w.type === m.I.APP_DIRECTORY_PROFILE || w.type === m.I.APP_DIRECTORY_STOREFRONT || w.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
        var i, a;
        null == t || t.preventDefault();
        let {
            code: s
        } = w, {
            applicationId: o,
            skuId: l
        } = w.type === m.I.APP_DIRECTORY_PROFILE || w.type === m.I.APP_DIRECTORY_STOREFRONT ? {
            applicationId: s,
            skuId: void 0
        } : null != (i = (0, p.u)(s)) ? i : {
            applicationId: void 0,
            skuId: void 0
        }, c = null != (a = x.A.getGuildId()) ? a : void 0;
        return null == o ? (0, U.A)(e) : (j.default.track(G.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
            application_id: o,
            device_platform: r.Fr ? "mobile_web" : "desktop_web",
            guild_id: c,
            channel_id: D.A.getChannelId()
        }), Promise.resolve().then(n.bind(n, 837057)).then(e => {
            let {
                transitionToGlobalDiscovery: t
            } = e, {
                GlobalDiscoveryTab: r
            } = n(488995), {
                GlobalDiscoveryAppsSections: i
            } = n(435220);
            t({
                tab: r.APPS,
                applicationId: o,
                section: (0, b.A)(i, w.type === m.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                skuId: l
            })
        })), !0
    };
    if (null != w && w.type === m.I.ACTIVITY_BOOKMARK) return e => {
        var t, n;
        null == e || e.preventDefault();
        let {
            code: r,
            url: i
        } = w, a = _.A.getApplication(r), f = new URL(i), p = null != (t = f.searchParams.get("referrer_id")) ? t : void 0, m = (0, d.A)(), {
            currentChannelId: g,
            instanceId: E,
            isCurrentlyInInstance: y,
            canLaunchInChannel: b
        } = (0, h.t)(r);
        if (b) return !y && null != g && ((0, u.d9)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id")).then(async e => {
            let {
                customId: t
            } = e;
            await (0, l.su)({
                channelId: g,
                applicationId: r,
                isStart: null == E,
                embeddedActivitiesManager: m,
                customId: t,
                referrerId: p,
                analyticsLocations: o
            })
        }).catch(() => {}), !0);
        {
            let e = null == a || null == (n = a.bot) ? void 0 : n.id;
            return null != e && (s.A.openPrivateChannel({
                recipientIds: e
            }).then(async e => {
                let {
                    customId: t
                } = await (0, u.d9)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"));
                (0, c.A)({
                    targetApplicationId: r,
                    channelId: e,
                    analyticsLocations: o,
                    customId: t,
                    referrerId: p
                })
            }).catch(() => {}), !0)
        }
    };
    if (null != w && w.type === m.I.GUILD_PRODUCT) return e => {
        null == e || e.preventDefault();
        let [t, r] = w.code.split("-");
        return n.e("49607").then(n.bind(n, 811546)).then(e => {
            let {
                openGuildProductLink: n
            } = e;
            n(t, r)
        }), !0
    };
    if (null != w && w.type === m.I.SOCIAL_LAYER_STOREFRONT) return e => {
        null == e || e.preventDefault();
        let [t, r] = w.code.split("-");
        return Promise.resolve().then(n.bind(n, 44724)).then(e => {
            let {
                default: n
            } = e;
            n({
                guildId: r,
                skuId: t
            })
        }), !0
    };
    if (null != w && w.type === m.I.QUESTS_EMBED && (0, A.s)({
            location: V.rE.EMBED_MOBILE
        }) && !(0, M.I)()) return e => {
        var t, r, a;
        let s, o;
        null == e || e.preventDefault();
        let {
            search: l
        } = null != (t = k.A.toURLSafe(w.url)) ? t : {};
        if (null != l) {
            let e = new URLSearchParams(l);
            s = null != (r = e.get("sort")) ? r : void 0, o = null != (a = e.get("filter")) ? a : void 0
        }
        return Promise.resolve().then(n.bind(n, 545986)).then(e => {
            let {
                navigateToQuestHome: t
            } = e;
            t({
                fromContent: i.u.QUEST_SHARE_LINK,
                questId: w.code
            })
        }), !0
    };
    let {
        host: R,
        hostname: P,
        pathname: L,
        search: F,
        hash: Y
    } = null != (t = k.A.toURLSafe(e)) ? t : {}, W = k.A.isDiscordHostname(null != P ? P : null) || k.A.isDiscordLocalhost(null != R ? R : null, null != P ? P : null);
    if (W && ((null == L ? void 0 : L.startsWith("/application-directory")) || (null == L ? void 0 : L.startsWith("/discovery/applications")))) {
        let e = L.split("/"),
            t = null == L ? void 0 : L.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            a = t && "categories" === r && "featured" !== e[4];
        return t => {
            let r, s, o;
            if (null == t || t.preventDefault(), i) {
                var l, c, u;
                let e = new URLSearchParams(F);
                r = null != (l = e.get("q")) ? l : void 0, s = null != (c = e.get("category_id")) ? c : void 0, o = null != (u = e.get("page")) ? u : void 0
            } else a && (s = e[4]);
            return Promise.resolve().then(n.bind(n, 837057)).then(e => {
                let {
                    transitionToGlobalDiscovery: t
                } = e, {
                    GlobalDiscoveryTab: i
                } = n(488995);
                t({
                    tab: i.APPS,
                    categoryId: null == s || Number.isNaN(s) ? void 0 : Number(s),
                    page: null == o || Number.isNaN(o) ? void 0 : Number(o),
                    query: r
                })
            }), !0
        }
    }
    if (null != L && W && k.A.isAppRoute(L)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != F && (e.search = F), null != Y && (e.hash = Y), t => (null == t || t.preventDefault(), (0, v.A)(L, e), !0)
    }
    if (null != L && W) {
        let {
            getOAuth2AuthorizeProps: t,
            openOAuth2ModalWithCreateGuildModal: r
        } = n(200330), i = t(e);
        if (null != i) return e => (null == e || e.preventDefault(), null != w && w.type === m.I.APP_OAUTH2_LINK && f.Ay.trackWithMetadata(G.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
            application_id: i.clientId
        }), r(i), !0)
    }
    let K = (0, O.SK)(L);
    if (null != L && W && null != K) return e => {
        null == e || e.preventDefault();
        let t = x.A.getGuildId();
        null != K.guildId && "" !== K.guildId && K.guildId !== t && (0, v.A)(G.BVt.CHANNEL(K.guildId));
        let n = y.Ay.getGuildScheduledEvent(K.guildEventId);
        return null != n && (0, E.uR)({
            eventId: n.id
        }), !0
    };
    if (W && (null == L ? void 0 : L.startsWith("/settings/"))) {
        let {
            default: e
        } = n(849823), {
            openUserSettingsFromParsedUrl: t
        } = n(840065), r = e(L, F);
        if (null != r) return e => (null == e || e.preventDefault(), t({
            match: r,
            analyticsLocations: o,
            urlOrigin: "link_click"
        }), !0)
    }
    if (W && (null == L ? void 0 : L.startsWith("/playground"))) {
        let {
            parsePlaygroundUrl: e
        } = n(682492), {
            openPlayground: t
        } = n(965042), {
            collection: r,
            story: i
        } = e(L);
        return e => (null == e || e.preventDefault(), t(r, i), !0)
    }
    return W && (null == L ? void 0 : L.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)({
        fromContent: i.u.QUEST_BADGE
    }), !0) : W && (null == L ? void 0 : L.startsWith("/quest-home")) ? e => (null == e || e.preventDefault(), (0, T.pX)(G.BVt.QUEST_HOME_V2 + (null != F ? F : "")), !0) : W && (null == L ? void 0 : L.startsWith("/quest-preview")) ? e => {
        if (null == e || e.preventDefault(), (0, I.U)({
                location: V.rE.NAVIGATE_TO_QUEST_HOME_UTIL
            })) return (0, T.pX)(G.BVt.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(L.split("/").at(-1))), !0
    } : W && (null == L ? void 0 : L.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 837057)).then(e => {
        let {
            transitionToGlobalDiscovery: t
        } = e, {
            GlobalDiscoveryTab: r
        } = n(488995);
        t({
            tab: r.SERVERS
        })
    }), !0) : a || null == (0, N.m)(e) ? void 0 : t => (null == t || t.preventDefault(), C.A.show(e), !0)
}