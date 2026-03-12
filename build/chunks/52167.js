/** chunk id: 52167 params = (module,exports,require) **/
n.d(t, {
    d: () => k
});
var i = n(417597),
    s = n(582754),
    l = n(736653),
    r = n(780964),
    a = n(287809),
    o = n(255438),
    d = n(927578),
    c = n(788868),
    u = n(652215),
    _ = n(355097),
    m = n(985018),
    g = n(420643),
    A = n(755165),
    h = n(542838),
    x = n(9523),
    p = n(416999),
    T = n(338832),
    E = n(252373),
    C = n(522799),
    S = n(795710),
    f = n(484813),
    N = n(1748),
    b = n(772473),
    I = n(64514),
    v = n(121818),
    j = n(536851),
    O = n(992186),
    y = n(629139),
    R = n(753563),
    P = n(584378),
    D = n(747918),
    L = n(330290),
    M = n(252261),
    G = n(106731);
let U = (e, t, n) => (0, s.Mw)(e) ? t : n,
    k = e => {
        let {
            styles: t
        } = e, s = (0, l.Ay)(), k = (0, i.bG)([a.default], () => {
            let e = a.default.getCurrentUser();
            return d.Ay.canUsePremiumProfileCustomization(e)
        }), V = (0, o.Xq)(c.f3 / 1024, {
            useKibibytes: !0
        });
        return {
            badge: {
                title: m.intl.string(m.t.SS87rQ),
                description: m.intl.string(m.t.oD6CRr),
                imageSource: h,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: m.intl.string(m.t["5cYMu0"]),
                description: m.intl.string(m.t.vxk9va),
                imageSource: U(s, g, A),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: m.intl.string(m.t["/xvEMy"]),
                description: m.intl.string(m.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: j,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: m.intl.string(m.t.OuItFi),
                description: m.intl.string(m.t.mPyrE6),
                imageSource: O,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: m.intl.string(m.t["R2IV/Q"]),
                description: m.intl.string(m.t.R5Xag2),
                imageSource: y,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: m.intl.string(m.t.lKDhhJ),
                description: e => {
                    let t = () => {
                        {
                            let {
                                openUserSettings: t
                            } = n(840065);
                            t(r.X.PROFILE_PANEL, {
                                section: u.nc_.PROFILE_CUSTOMIZATION,
                                scrollPosition: _._F.TRY_IT_OUT,
                                analyticsLocations: e
                            })
                        }
                    };
                    return k ? m.intl.format(m.t.aj1pfZ, {
                        onCheckItOutClick: t
                    }) : m.intl.format(m.t.d2oYS8, {
                        onTryItOutClick: t
                    })
                },
                imageSource: p,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: m.intl.string(m.t.BUScid),
                description: m.intl.string(m.t.vN6XpQ),
                imageSource: U(s, R, P),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: m.intl.string(m.t.Bv8Pfk),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(s, x, D),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: m.intl.string(m.t.Bv8Pfk),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(s, T, E),
                imageClassName: t.moreGuildsAltImage
            },
            soundboard: {
                title: m.intl.string(m.t["lGcW+c"]),
                description: m.intl.string(m.t["/fDyO+"]),
                imageSource: U(s, C, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: m.intl.string(m.t["1c+xwT"]),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, f, L),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: m.intl.string(m.t.tzdIwI),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, f, L),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: m.intl.string(m.t.tzdIwI),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, f, L),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: m.intl.string(m.t.RSXQYO),
                description: m.intl.string(m.t.ymCPxp),
                imageSource: M,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: m.intl.string(m.t["uZt5q/"]),
                description: m.intl.string(m.t.ZK3ZoX),
                imageSource: U(s, N, b),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: m.intl.formatToPlainString(m.t.jqhAdL, {
                    premiumMaxSize: V
                }),
                description: m.intl.formatToPlainString(m.t["HI+cfm"], {
                    premiumMaxSize: V
                }),
                imageSource: G,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: m.intl.string(m.t.NaGpTf),
                description: m.intl.string(m.t["A8O/Qw"]),
                imageSource: U(s, I, v),
                imageClassName: t.videoBackgroundImage
            }
        }
    }