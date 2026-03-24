/** chunk id: 52167 params = (module,exports,require) **/
n.d(t, {
    d: () => k
});
var i = n(417597),
    s = n(582754),
    l = n(736653),
    a = n(507553),
    r = n(780964),
    o = n(287809),
    d = n(255438),
    c = n(927578),
    u = n(788868);
n(652215);
var m = n(355097),
    g = n(985018),
    _ = n(420643),
    x = n(755165),
    A = n(542838),
    h = n(9523),
    p = n(416999),
    f = n(338832),
    T = n(252373),
    E = n(522799),
    S = n(795710),
    b = n(484813),
    C = n(1748),
    N = n(772473),
    v = n(64514),
    I = n(121818),
    j = n(536851),
    y = n(992186),
    O = n(629139),
    R = n(753563),
    L = n(584378),
    P = n(747918),
    D = n(330290),
    G = n(252261),
    M = n(106731);
let U = (e, t, n) => (0, s.Mw)(e) ? t : n,
    k = e => {
        let {
            styles: t
        } = e, s = (0, l.Ay)(), k = (0, i.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return c.Ay.canUsePremiumProfileCustomization(e)
        }), w = (0, d.Xq)(u.f3 / 1024, {
            useKibibytes: !0
        });
        return {
            badge: {
                title: g.intl.string(g.t.SS87rQ),
                description: g.intl.string(g.t.oD6CRr),
                imageSource: A,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.intl.string(g.t["5cYMu0"]),
                description: g.intl.string(g.t.vxk9va),
                imageSource: U(s, _, x),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.intl.string(g.t["/xvEMy"]),
                description: g.intl.string(g.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: j,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: g.intl.string(g.t.OuItFi),
                description: g.intl.string(g.t.mPyrE6),
                imageSource: y,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: g.intl.string(g.t["R2IV/Q"]),
                description: g.intl.string(g.t.R5Xag2),
                imageSource: O,
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
                            a.A.setState({
                                scrollPosition: m._F.TRY_IT_OUT
                            }), t(r.X.PROFILE_PANEL, {
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
                imageSource: p,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.intl.string(g.t.BUScid),
                description: g.intl.string(g.t.vN6XpQ),
                imageSource: U(s, R, L),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfk),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: U(s, h, P),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfk),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: U(s, f, T),
                imageClassName: t.moreGuildsAltImage
            },
            soundboard: {
                title: g.intl.string(g.t["lGcW+c"]),
                description: g.intl.string(g.t["/fDyO+"]),
                imageSource: U(s, E, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t["1c+xwT"]),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: U(s, b, D),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwI),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: U(s, b, D),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: g.intl.string(g.t.tzdIwI),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: U(s, b, D),
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
                imageSource: U(s, C, N),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdL, {
                    premiumMaxSize: w
                }),
                description: g.intl.formatToPlainString(g.t["HI+cfm"], {
                    premiumMaxSize: w
                }),
                imageSource: M,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTf),
                description: g.intl.string(g.t["A8O/Qw"]),
                imageSource: U(s, v, I),
                imageClassName: t.videoBackgroundImage
            }
        }
    }