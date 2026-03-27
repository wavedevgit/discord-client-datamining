/** chunk id: 271484 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    g: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    o = n(397927),
    a = n(997509),
    d = n(645619),
    u = n(363487),
    c = n(915667),
    p = n(568065),
    _ = n(652215),
    m = n(333354),
    f = n(985018),
    A = n(870166),
    g = n(849630);

function x(e, t) {
    let x = (0, u.A)(t) ?? !1,
        v = (0, s.bG)([d.A], () => d.A.getStateForGuild(t)?.allPowerups),
        h = (0, s.bG)([d.A], () => d.A.getStateForGuild(t)?.unlockedPowerups);
    return i.useMemo(() => {
        let i = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: i,
                    allPowerups: s,
                    unlockedPowerups: d
                } = e, u = f.intl.string(m.default.KC9HRW), x = f.intl.string(m.default.GJiSmP), v = s?.[l.SL], h = d?.[l.SL] != null, E = f.intl.string(m.default["/egwJA"]), b = h ? void 0 : f.intl.string(m.default.W6Vwn3), I = h ? void 0 : f.intl.string(m.default.lvk1Gc), j = h ? f.intl.string(m.default["9CfkLO"]) : f.intl.string(f.t["+7XY31"]), S = h ? "secondary" : "expressive", C = i ? () => {
                    h ? a.A.open(t, _.BEX.TAG, _.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != v && (0, c.A)(t, v), (0, o.s7G)()
                } : void 0, w = p.m_;
                return {
                    title: u,
                    description: x,
                    openModal: function(e) {
                        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, o.mMO)(async () => {
                            let {
                                default: l
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(l, {
                                guildId: t,
                                title: u,
                                description: f.intl.string(m.default.BBRFRd),
                                powerups: e,
                                newPowerupSkuIdSet: w,
                                forceStaticImages: !0,
                                footerInfoText: I,
                                footerAction: i && null != C && null != j ? {
                                    variant: S,
                                    text: j,
                                    icon: "expressive" === S ? o._Jp : void 0,
                                    onClick: C
                                } : void 0,
                                ...n
                            })
                        }, {
                            onCloseCallback: l?.onModalClose
                        })
                    },
                    viewCta: E,
                    viewCtaTooltip: b,
                    badge: "new",
                    newPowerupSkuIdSet: w,
                    image: {
                        staticUrl: g.A,
                        animatedUrl: A.A
                    },
                    forceStaticImages: !0
                }
            }({
                guildId: t,
                canUseBoosts: x,
                allPowerups: v,
                unlockedPowerups: h
            }) : void 0,
            s = {};
        for (let t of e) {
            let e = i(t);
            null != e && (s[t] = e)
        }
        return s
    }, [e, t, x, v, h])
}

function v(e, t) {
    return x([e], t)[e]
}