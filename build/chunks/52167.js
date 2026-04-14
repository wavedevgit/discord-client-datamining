/** chunk id: 52167 params = (module,exports,require) **/
n.d(t, {
    d: () => w
});
var i = n(417597),
    s = n(582754),
    l = n(736653),
    r = n(507553),
    a = n(591179),
    o = n(780964),
    d = n(287809),
    c = n(255438),
    u = n(927578),
    m = n(788868);
n(652215);
var g = n(355097),
    _ = n(985018),
    x = n(420643),
    h = n(755165),
    A = n(542838),
    p = n(9523),
    T = n(416999),
    f = n(338832),
    S = n(252373),
    E = n(522799),
    b = n(795710),
    C = n(484813),
    v = n(1748),
    N = n(772473),
    I = n(64514),
    j = n(121818),
    y = n(536851),
    O = n(992186),
    R = n(629139),
    L = n(753563),
    P = n(584378),
    D = n(747918),
    G = n(330290),
    M = n(252261),
    U = n(106731);
let k = (e, t, n) => (0, s.Mw)(e) ? t : n,
    w = e => {
        let {
            styles: t
        } = e, s = (0, l.Ay)(), w = (0, a.X)("usePerkCards"), V = (0, i.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return u.Ay.canUsePremiumProfileCustomization(e)
        }), B = (0, c.Xq)(m.f3 / 1024, {
            useKibibytes: !0
        });
        return {
            badge: {
                title: _.intl.string(_.t.SS87rQ),
                description: _.intl.string(_.t.oD6CRr),
                imageSource: A,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: _.intl.string(_.t["5cYMu0"]),
                description: _.intl.string(_.t.vxk9va),
                imageSource: k(s, x, h),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMy"]),
                description: _.intl.string(_.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: y,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFi),
                description: _.intl.string(_.t.mPyrE6),
                imageSource: O,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/Q"]),
                description: _.intl.string(_.t.R5Xag2),
                imageSource: R,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: _.intl.string(_.t.lKDhhJ),
                description: e => {
                    if (w) return V ? _.intl.formatToPlainString(_.t.aj1pfZ, {
                        onCheckItOutClick: () => {}
                    }) : _.intl.formatToPlainString(_.t.d2oYS8, {
                        onTryItOutClick: () => {}
                    });
                    let t = () => {
                        {
                            let {
                                openUserSettings: t
                            } = n(858897);
                            r.A.setState({
                                scrollPosition: g._F.TRY_IT_OUT
                            }), t(o.X.PROFILE_PANEL, {
                                analyticsLocations: e
                            })
                        }
                    };
                    return V ? _.intl.format(_.t.aj1pfZ, {
                        onCheckItOutClick: t
                    }) : _.intl.format(_.t.d2oYS8, {
                        onTryItOutClick: t
                    })
                },
                imageSource: T,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: _.intl.string(_.t.BUScid),
                description: _.intl.string(_.t.vN6XpQ),
                imageSource: k(s, L, P),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: k(s, p, D),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: k(s, f, S),
                imageClassName: t.moreGuildsAltImage
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+c"]),
                description: _.intl.string(_.t["/fDyO+"]),
                imageSource: k(s, E, b),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwT"]),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(s, C, G),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(s, C, G),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(s, C, G),
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
                imageSource: k(s, v, N),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdL, {
                    premiumMaxSize: B
                }),
                description: _.intl.formatToPlainString(_.t["HI+cfm"], {
                    premiumMaxSize: B
                }),
                imageSource: U,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTf),
                description: _.intl.string(_.t["A8O/Qw"]),
                imageSource: k(s, I, j),
                imageClassName: t.videoBackgroundImage
            }
        }
    }