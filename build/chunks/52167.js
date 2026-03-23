/** chunk id: 52167 params = (module,exports,require) **/
n.d(t, {
    d: () => U
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
    _ = n(985018),
    g = n(420643),
    A = n(755165),
    x = n(542838),
    p = n(9523),
    h = n(416999),
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
    M = n(252261),
    G = n(106731);
let k = (e, t, n) => (0, s.Mw)(e) ? t : n,
    U = e => {
        let {
            styles: t
        } = e, s = (0, l.Ay)(), U = (0, i.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return c.Ay.canUsePremiumProfileCustomization(e)
        }), w = (0, d.Xq)(u.f3 / 1024, {
            useKibibytes: !0
        });
        return {
            badge: {
                title: _.intl.string(_.t.SS87rQ),
                description: _.intl.string(_.t.oD6CRr),
                imageSource: x,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: _.intl.string(_.t["5cYMu0"]),
                description: _.intl.string(_.t.vxk9va),
                imageSource: k(s, g, A),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMy"]),
                description: _.intl.string(_.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: j,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFi),
                description: _.intl.string(_.t.mPyrE6),
                imageSource: y,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/Q"]),
                description: _.intl.string(_.t.R5Xag2),
                imageSource: O,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: _.intl.string(_.t.lKDhhJ),
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
                    return U ? _.intl.format(_.t.aj1pfZ, {
                        onCheckItOutClick: t
                    }) : _.intl.format(_.t.d2oYS8, {
                        onTryItOutClick: t
                    })
                },
                imageSource: h,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: _.intl.string(_.t.BUScid),
                description: _.intl.string(_.t.vN6XpQ),
                imageSource: k(s, R, L),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: k(s, p, P),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: k(s, f, T),
                imageClassName: t.moreGuildsAltImage
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+c"]),
                description: _.intl.string(_.t["/fDyO+"]),
                imageSource: k(s, E, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwT"]),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(s, b, D),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(s, b, D),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(s, b, D),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: _.intl.string(_.t.RSXQYO),
                description: _.intl.string(_.t.ymCPxp),
                imageSource: M,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: _.intl.string(_.t["uZt5q/"]),
                description: _.intl.string(_.t.ZK3ZoX),
                imageSource: k(s, C, N),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdL, {
                    premiumMaxSize: w
                }),
                description: _.intl.formatToPlainString(_.t["HI+cfm"], {
                    premiumMaxSize: w
                }),
                imageSource: G,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTf),
                description: _.intl.string(_.t["A8O/Qw"]),
                imageSource: k(s, v, I),
                imageClassName: t.videoBackgroundImage
            }
        }
    }