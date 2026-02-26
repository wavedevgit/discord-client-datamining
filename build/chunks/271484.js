/** chunk id: 271484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    g: () => v
});
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(311907),
    o = n(397927),
    a = n(997509),
    u = n(645619),
    d = n(128069),
    c = n(363487),
    p = n(915667),
    m = n(568065),
    A = n(652215),
    _ = n(136708),
    f = n(985018),
    g = n(870166),
    x = n(849630);

function v(e, t) {
    let v = (0, c.A)(t) ?? !1,
        h = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        b = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups),
        j = (0, d.RA)(t, "usePowerupGroupConfig");
    return l.useMemo(() => {
        let l = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: l,
                    allPowerups: s,
                    unlockedPowerups: u,
                    isWaveTwoEnabled: d
                } = e, c = f.intl.string(_.default.KC9HRW), v = f.intl.string(_.default.GJiSmP), h = s?.[i.SL], b = u?.[i.SL] != null, j = f.intl.string(_.default["/egwJA"]), E = b ? void 0 : f.intl.string(_.default.W6Vwn3), I = b ? void 0 : f.intl.string(_.default.lvk1Gc), w = b ? f.intl.string(_.default["9CfkLO"]) : f.intl.string(f.t["+7XY31"]), S = b ? "secondary" : "expressive", C = l ? () => {
                    b ? a.A.open(t, A.BEX.TAG, A.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != h && (0, p.A)(t, h), (0, o.s7G)()
                } : void 0, N = d ? m.m_ : void 0;
                return {
                    title: c,
                    description: v,
                    openModal: function(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, o.mMO)(async () => {
                            let {
                                default: i
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(i, {
                                guildId: t,
                                title: c,
                                description: f.intl.string(_.default.BBRFRd),
                                powerups: e,
                                newPowerupSkuIdSet: N,
                                forceStaticImages: d,
                                footerInfoText: I,
                                footerAction: l && null != C && null != w ? {
                                    variant: S,
                                    text: w,
                                    icon: "expressive" === S ? o._Jp : void 0,
                                    onClick: C
                                } : void 0,
                                ...n
                            })
                        }, {
                            onCloseCallback: i?.onModalClose
                        })
                    },
                    viewCta: j,
                    viewCtaTooltip: E,
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
                unlockedPowerups: b,
                isWaveTwoEnabled: j
            }) : void 0,
            s = {};
        for (let t of e) {
            let e = l(t);
            null != e && (s[t] = e)
        }
        return s
    }, [e, t, v, h, b, j])
}

function h(e, t) {
    return v([e], t)[e]
}