/** chunk id: 271484 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    g: () => v
});
var r = n(627968),
    i = n(64700),
    s = n(512750),
    l = n(311907),
    o = n(397927),
    a = n(997509),
    u = n(645619),
    d = n(128069),
    c = n(363487),
    p = n(915667),
    m = n(568065),
    _ = n(652215),
    f = n(333354),
    g = n(985018),
    x = n(870166),
    A = n(849630);

function v(e, t) {
    let v = (0, c.A)(t) ?? !1,
        h = (0, l.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        E = (0, l.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups),
        j = (0, d.RA)(t, "usePowerupGroupConfig");
    return i.useMemo(() => {
        let i = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: i,
                    allPowerups: l,
                    unlockedPowerups: u,
                    isWaveTwoEnabled: d
                } = e, c = g.intl.string(f.default.KC9HRW), v = g.intl.string(f.default.GJiSmP), h = l?.[s.SL], E = u?.[s.SL] != null, j = g.intl.string(f.default["/egwJA"]), b = E ? void 0 : g.intl.string(f.default.W6Vwn3), I = E ? void 0 : g.intl.string(f.default.lvk1Gc), S = E ? g.intl.string(f.default["9CfkLO"]) : g.intl.string(g.t["+7XY31"]), C = E ? "secondary" : "expressive", w = i ? () => {
                    E ? a.A.open(t, _.BEX.TAG, _.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != h && (0, p.A)(t, h), (0, o.s7G)()
                } : void 0, N = d ? m.m_ : void 0;
                return {
                    title: c,
                    description: v,
                    openModal: function(e) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, o.mMO)(async () => {
                            let {
                                default: s
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(s, {
                                guildId: t,
                                title: c,
                                description: g.intl.string(f.default.BBRFRd),
                                powerups: e,
                                newPowerupSkuIdSet: N,
                                forceStaticImages: d,
                                footerInfoText: I,
                                footerAction: i && null != w && null != S ? {
                                    variant: C,
                                    text: S,
                                    icon: "expressive" === C ? o._Jp : void 0,
                                    onClick: w
                                } : void 0,
                                ...n
                            })
                        }, {
                            onCloseCallback: s?.onModalClose
                        })
                    },
                    viewCta: j,
                    viewCtaTooltip: b,
                    badge: d ? "new" : void 0,
                    newPowerupSkuIdSet: N,
                    image: {
                        staticUrl: A.A,
                        animatedUrl: x.A
                    },
                    forceStaticImages: d
                }
            }({
                guildId: t,
                canUseBoosts: v,
                allPowerups: h,
                unlockedPowerups: E,
                isWaveTwoEnabled: j
            }) : void 0,
            l = {};
        for (let t of e) {
            let e = i(t);
            null != e && (l[t] = e)
        }
        return l
    }, [e, t, v, h, E, j])
}

function h(e, t) {
    return v([e], t)[e]
}