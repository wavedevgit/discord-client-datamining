/** chunk id: 52167 params = (module,exports,require) **/
n.d(t, {
    d: () => k
});
var i = n(417597),
    s = n(582754),
    l = n(736653),
    a = n(780964),
    r = n(287809),
    o = n(255438),
    d = n(927578),
    c = n(788868),
    u = n(652215),
    _ = n(355097),
    g = n(985018),
    A = n(420643),
    m = n(755165),
    h = n(542838),
    p = n(9523),
    x = n(416999),
    E = n(338832),
    T = n(252373),
    S = n(522799),
    C = n(795710),
    I = n(484813),
    f = n(1748),
    N = n(772473),
    b = n(64514),
    v = n(121818),
    O = n(536851),
    j = n(992186),
    R = n(629139),
    y = n(753563),
    P = n(584378),
    D = n(747918),
    L = n(330290),
    G = n(252261),
    M = n(106731);
let U = (e, t, n) => (0, s.Mw)(e) ? t : n,
    k = e => {
        let {
            styles: t
        } = e, s = (0, l.Ay)(), k = (0, i.bG)([r.default], () => {
            let e = r.default.getCurrentUser();
            return d.Ay.canUsePremiumProfileCustomization(e)
        }), V = (0, o.Xq)(c.f3 / 1024, {
            useKibibytes: !0
        });
        return {
            badge: {
                title: g.intl.string(g.t.SS87rQ),
                description: g.intl.string(g.t.oD6CRr),
                imageSource: h,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.intl.string(g.t["5cYMu0"]),
                description: g.intl.string(g.t.vxk9va),
                imageSource: U(s, A, m),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.intl.string(g.t["/xvEMy"]),
                description: g.intl.string(g.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: O,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: g.intl.string(g.t.OuItFi),
                description: g.intl.string(g.t.mPyrE6),
                imageSource: j,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: g.intl.string(g.t["R2IV/Q"]),
                description: g.intl.string(g.t.R5Xag2),
                imageSource: R,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: g.intl.string(g.t.lKDhhJ),
                description: e => {
                    let t = () => {
                        {
                            let {
                                openUserSettings: t
                            } = n(840065);
                            t(a.X.PROFILE_PANEL, {
                                section: u.nc_.PROFILE_CUSTOMIZATION,
                                scrollPosition: _._F.TRY_IT_OUT,
                                analyticsLocations: e
                            })
                        }
                    };
                    return k ? g.intl.format(g.t.aj1pfZ, {
                        onCheckItOutClick: t
                    }) : g.intl.format(g.t.d2oYS8, {
                        onTryItOutClick: t
                    })
                },
                imageSource: x,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.intl.string(g.t.BUScid),
                description: g.intl.string(g.t.vN6XpQ),
                imageSource: U(s, y, P),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfk),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: U(s, p, D),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfk),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: U(s, E, T),
                imageClassName: t.moreGuildsAltImage
            },
            soundboard: {
                title: g.intl.string(g.t["lGcW+c"]),
                description: g.intl.string(g.t["/fDyO+"]),
                imageSource: U(s, S, C),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t["1c+xwT"]),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: U(s, I, L),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwI),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: U(s, I, L),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: g.intl.string(g.t.tzdIwI),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: U(s, I, L),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYO),
                description: g.intl.string(g.t.ymCPxp),
                imageSource: G,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.intl.string(g.t["uZt5q/"]),
                description: g.intl.string(g.t.ZK3ZoX),
                imageSource: U(s, f, N),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdL, {
                    premiumMaxSize: V
                }),
                description: g.intl.formatToPlainString(g.t["HI+cfm"], {
                    premiumMaxSize: V
                }),
                imageSource: M,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTf),
                description: g.intl.string(g.t["A8O/Qw"]),
                imageSource: U(s, b, v),
                imageClassName: t.videoBackgroundImage
            }
        }
    }