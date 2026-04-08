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
    u = n(645619),
    d = n(363487),
    c = n(915667),
    p = n(568065),
    _ = n(652215),
    m = n(333354),
    A = n(985018),
    f = n(870166),
    g = n(849630);

function x(e, t) {
    let x = (0, d.A)(t) ?? !1,
        v = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.allPowerups),
        h = (0, s.bG)([u.A], () => u.A.getStateForGuild(t)?.unlockedPowerups);
    return i.useMemo(() => {
        let i = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: i,
                    allPowerups: s,
                    unlockedPowerups: u
                } = e, d = A.intl.string(m.default.KC9HRW), x = A.intl.string(m.default.GJiSmP), v = s?.[l.SL], h = u?.[l.SL] != null, E = A.intl.string(m.default["/egwJA"]), I = h ? void 0 : A.intl.string(m.default.W6Vwn3), j = h ? void 0 : A.intl.string(m.default.lvk1Gc), b = h ? A.intl.string(m.default["9CfkLO"]) : A.intl.string(A.t["+7XY31"]), S = h ? "secondary" : "expressive", C = i ? () => {
                    h ? a.A.open(t, _.BEX.TAG, _.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != v && (0, c.A)(t, v), (0, o.s7G)()
                } : void 0, w = p.m_;
                return {
                    title: d,
                    description: x,
                    openModal: function(e) {
                        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, o.mMO)(async () => {
                            let {
                                default: l
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(l, {
                                guildId: t,
                                title: d,
                                description: A.intl.string(m.default.BBRFRd),
                                powerups: e,
                                newPowerupSkuIdSet: w,
                                forceStaticImages: !0,
                                footerInfoText: j,
                                footerAction: i && null != C && null != b ? {
                                    variant: S,
                                    text: b,
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
                    viewCtaTooltip: I,
                    badge: "new",
                    newPowerupSkuIdSet: w,
                    image: {
                        staticUrl: g.A,
                        animatedUrl: f.A
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