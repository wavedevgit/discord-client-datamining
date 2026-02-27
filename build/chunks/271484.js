/** chunk id: 271484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    g: () => v
});
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    a = n(397927),
    o = n(997509),
    d = n(645619),
    u = n(128069),
    c = n(363487),
    m = n(915667),
    p = n(568065),
    _ = n(652215),
    x = n(333354),
    A = n(985018),
    f = n(870166),
    g = n(849630);

function v(e, t) {
    let v = (0, c.A)(t) ?? !1,
        h = (0, s.bG)([d.A], () => d.A.getStateForGuild(t)?.allPowerups),
        b = (0, s.bG)([d.A], () => d.A.getStateForGuild(t)?.unlockedPowerups),
        j = (0, u.RA)(t, "usePowerupGroupConfig");
    return i.useMemo(() => {
        let i = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: i,
                    allPowerups: s,
                    unlockedPowerups: d,
                    isWaveTwoEnabled: u
                } = e, c = A.intl.string(x.default.KC9HRW), v = A.intl.string(x.default.GJiSmP), h = s?.[l.SL], b = d?.[l.SL] != null, j = A.intl.string(x.default["/egwJA"]), E = b ? void 0 : A.intl.string(x.default.W6Vwn3), I = b ? void 0 : A.intl.string(x.default.lvk1Gc), C = b ? A.intl.string(x.default["9CfkLO"]) : A.intl.string(A.t["+7XY31"]), S = b ? "secondary" : "expressive", w = i ? () => {
                    b ? o.A.open(t, _.BEX.TAG, _.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != h && (0, m.A)(t, h), (0, a.s7G)()
                } : void 0, N = u ? p.m_ : void 0;
                return {
                    title: c,
                    description: v,
                    openModal: function(e) {
                        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, a.mMO)(async () => {
                            let {
                                default: l
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(l, {
                                guildId: t,
                                title: c,
                                description: A.intl.string(x.default.BBRFRd),
                                powerups: e,
                                newPowerupSkuIdSet: N,
                                forceStaticImages: u,
                                footerInfoText: I,
                                footerAction: i && null != w && null != C ? {
                                    variant: S,
                                    text: C,
                                    icon: "expressive" === S ? a._Jp : void 0,
                                    onClick: w
                                } : void 0,
                                ...n
                            })
                        }, {
                            onCloseCallback: l?.onModalClose
                        })
                    },
                    viewCta: j,
                    viewCtaTooltip: E,
                    badge: u ? "new" : void 0,
                    newPowerupSkuIdSet: N,
                    image: {
                        staticUrl: g.A,
                        animatedUrl: f.A
                    },
                    forceStaticImages: u
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
            let e = i(t);
            null != e && (s[t] = e)
        }
        return s
    }, [e, t, v, h, b, j])
}

function h(e, t) {
    return v([e], t)[e]
}