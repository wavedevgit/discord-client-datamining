/** chunk id: 271484 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    g: () => v
});
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    o = n(397927),
    a = n(997509),
    u = n(645619),
    d = n(128069),
    c = n(363487),
    p = n(915667),
    m = n(568065),
    _ = n(652215),
    A = n(136708),
    f = n(985018),
    g = n(870166),
    x = n(849630);

function v(e, t) {
    let v = (0, c.A)(t) ?? !1,
        h = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        E = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups),
        b = (0, d.RA)(t, "usePowerupGroupConfig");
    return i.useMemo(() => {
        let i = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: i,
                    allPowerups: s,
                    unlockedPowerups: u,
                    isWaveTwoEnabled: d
                } = e, c = f.intl.string(A.default.KC9HRW), v = f.intl.string(A.default.GJiSmP), h = s?.[l.SL], E = u?.[l.SL] != null, b = f.intl.string(A.default["/egwJA"]), I = E ? void 0 : f.intl.string(A.default.W6Vwn3), j = E ? void 0 : f.intl.string(A.default.lvk1Gc), S = E ? f.intl.string(A.default["9CfkLO"]) : f.intl.string(f.t["+7XY31"]), C = E ? "secondary" : "expressive", w = i ? () => {
                    E ? a.A.open(t, _.BEX.TAG, _.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != h && (0, p.A)(t, h), (0, o.s7G)()
                } : void 0, N = d ? m.m_ : void 0;
                return {
                    title: c,
                    description: v,
                    openModal: function(e) {
                        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, o.mMO)(async () => {
                            let {
                                default: l
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(l, {
                                guildId: t,
                                title: c,
                                description: f.intl.string(A.default.BBRFRd),
                                powerups: e,
                                newPowerupSkuIdSet: N,
                                forceStaticImages: d,
                                footerInfoText: j,
                                footerAction: i && null != w && null != S ? {
                                    variant: C,
                                    text: S,
                                    icon: "expressive" === C ? o._Jp : void 0,
                                    onClick: w
                                } : void 0,
                                ...n
                            })
                        }, {
                            onCloseCallback: l?.onModalClose
                        })
                    },
                    viewCta: b,
                    viewCtaTooltip: I,
                    badge: d ? "new" : void 0,
                    newPowerupSkuIdSet: N,
                    image: {
                        staticUrl: x.A,
                        animatedUrl: g.A
                    },
                    forceStaticImages: d
                }
            }({
                guildId: t,
                canUseBoosts: v,
                allPowerups: h,
                unlockedPowerups: E,
                isWaveTwoEnabled: b
            }) : void 0,
            s = {};
        for (let t of e) {
            let e = i(t);
            null != e && (s[t] = e)
        }
        return s
    }, [e, t, v, h, E, b])
}

function h(e, t) {
    return v([e], t)[e]
}