/** Chunk was on 5606 **/
/** chunk id: 52167, original params: e,t,n (module,exports,require) **/
n.d(t, {
    d: () => U
});
var r = n(417597),
    i = n(582754),
    l = n(736653),
    s = n(780964),
    a = n(287809),
    o = n(255438),
    c = n(927578),
    d = n(788868),
    u = n(652215),
    p = n(355097),
    _ = n(985018),
    m = n(420643),
    g = n(755165),
    f = n(542838),
    b = n(9523),
    h = n(416999),
    A = n(338832),
    E = n(252373),
    x = n(522799),
    O = n(795710),
    C = n(484813),
    y = n(1748),
    j = n(772473),
    T = n(64514),
    v = n(121818),
    S = n(536851),
    I = n(992186),
    N = n(629139),
    P = n(753563),
    R = n(584378),
    D = n(747918),
    w = n(330290),
    L = n(252261),
    M = n(106731);
let G = (e, t, n) => (0, i.Mw)(e) ? t : n,
    U = e => {
        let {
            styles: t
        } = e, i = (0, l.Ay)(), U = (0, r.bG)([a.default], () => {
            let e = a.default.getCurrentUser();
            return c.Ay.canUsePremiumProfileCustomization(e)
        }), k = (0, o.Xq)(d.f3 / 1024, {
            useKibibytes: !0
        });
        return {
            badge: {
                title: _.intl.string(_.t.SS87rQ),
                description: _.intl.string(_.t.oD6CRr),
                imageSource: f,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: _.intl.string(_.t["5cYMu0"]),
                description: _.intl.string(_.t.vxk9va),
                imageSource: G(i, m, g),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMy"]),
                description: _.intl.string(_.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: S,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFi),
                description: _.intl.string(_.t.mPyrE6),
                imageSource: I,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/Q"]),
                description: _.intl.string(_.t.R5Xag2),
                imageSource: N,
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
                            t(s.X.PROFILE_PANEL, {
                                section: u.nc_.PROFILE_CUSTOMIZATION,
                                scrollPosition: p._F.TRY_IT_OUT,
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
                imageSource: G(i, P, R),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: G(i, b, D),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: G(i, A, E),
                imageClassName: t.moreGuildsAltImage
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+c"]),
                description: _.intl.string(_.t["/fDyO+"]),
                imageSource: G(i, x, O),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwT"]),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: G(i, C, w),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: G(i, C, w),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: G(i, C, w),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: _.intl.string(_.t.RSXQYO),
                description: _.intl.string(_.t.ymCPxp),
                imageSource: L,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: _.intl.string(_.t["uZt5q/"]),
                description: _.intl.string(_.t.ZK3ZoX),
                imageSource: G(i, y, j),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdL, {
                    premiumMaxSize: k
                }),
                description: _.intl.formatToPlainString(_.t["HI+cfm"], {
                    premiumMaxSize: k
                }),
                imageSource: M,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTf),
                description: _.intl.string(_.t["A8O/Qw"]),
                imageSource: G(i, T, v),
                imageClassName: t.videoBackgroundImage
            }
        }
    }