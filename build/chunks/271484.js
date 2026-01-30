/** chunk id: 271484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    g: () => A
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(512750),
    o = n(311907),
    s = n(397927),
    a = n(997509),
    u = n(645619),
    d = n(363487),
    c = n(915667),
    p = n(652215),
    m = n(333354),
    f = n(985018),
    v = n(870166),
    g = n(849630);

function A(e, t) {
    var A;
    let _ = null != (A = (0, d.A)(t)) && A,
        x = (0, o.bG)([u.A], () => {
            var e;
            return null == (e = u.A.getStateForGuild(t)) ? void 0 : e.allPowerups
        }),
        h = (0, o.bG)([u.A], () => {
            var e;
            return null == (e = u.A.getStateForGuild(t)) ? void 0 : e.unlockedPowerups
        });
    return l.useMemo(() => {
        let l = e => "guildTagsBadgePacks" === e ? function(e) {
                let {
                    guildId: t,
                    canUseBoosts: l,
                    allPowerups: o,
                    unlockedPowerups: u
                } = e, d = f.intl.string(m.default.KC9HRW), A = f.intl.string(m.default.GJiSmP), _ = null == o ? void 0 : o[i.SL], x = (null == u ? void 0 : u[i.SL]) != null, h = f.intl.string(m.default["/egwJA"]), b = x ? void 0 : f.intl.string(m.default.W6Vwn3), j = x ? void 0 : f.intl.string(m.default.lvk1Gc), E = x ? f.intl.string(m.default["9CfkLO"]) : f.intl.string(f.t["+7XY31"]), w = x ? "secondary" : "expressive", y = l ? () => {
                    x ? a.A.open(t, p.BEX.TAG, p.JJy.GUILD_POWERUPS_OVERVIEW_CARD) : null != _ && (0, c.A)(t, _), (0, s.s7G)()
                } : void 0;
                return {
                    title: d,
                    description: A,
                    openModal: function(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, s.mMO)(async () => {
                            let {
                                default: i
                            } = await n.e("56065").then(n.bind(n, 534904));
                            return n => (0, r.jsx)(i, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        var r;
                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r
                                    })
                                }
                                return e
                            }({
                                guildId: t,
                                title: d,
                                description: f.intl.string(m.default.BBRFRd),
                                powerups: e,
                                footerInfoText: j,
                                footerAction: l && null != y && null != E ? {
                                    variant: w,
                                    text: E,
                                    icon: "expressive" === w ? s._Jp : void 0,
                                    onClick: y
                                } : void 0
                            }, n))
                        }, {
                            onCloseCallback: null == i ? void 0 : i.onModalClose
                        })
                    },
                    viewCta: h,
                    viewCtaTooltip: b,
                    image: {
                        staticUrl: g.A,
                        animatedUrl: v.A
                    }
                }
            }({
                guildId: t,
                canUseBoosts: _,
                allPowerups: x,
                unlockedPowerups: h
            }) : void 0,
            o = {};
        for (let t of e) {
            let e = l(t);
            null != e && (o[t] = e)
        }
        return o
    }, [e, t, _, x, h])
}

function _(e, t) {
    return A([e], t)[e]
}