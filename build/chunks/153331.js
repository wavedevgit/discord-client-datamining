/** chunk id: 153331 params = (module,exports,require) **/
n.d(e, {
    A: () => Q,
    O: () => J
}), n(938796);
var i, l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    u = n.n(o),
    d = n(665260),
    c = n(3026),
    h = n(582754),
    A = n(397927),
    m = n(492684),
    p = n(736653),
    g = n(573648),
    f = n(47167),
    E = n(235986),
    T = n(573435),
    C = n(769015),
    S = n(409626),
    _ = n(692969),
    y = n(263063),
    N = n(804630),
    v = n(886019),
    I = n(559405),
    x = n(290987),
    j = n(345942),
    L = n(763758),
    P = n(82149),
    O = n(994500),
    R = n(287809),
    D = n(139675),
    M = n(486020),
    b = n(821589),
    U = n(682261),
    G = n(672979),
    V = n(90644),
    F = n(61330),
    w = n(960076),
    B = n(139902),
    H = n(432166),
    W = n(360469),
    k = n(652215),
    Y = n(985018),
    z = n(962877),
    J = ((i = {}).ACTIVITY_FEED = "ActivityFeed", i.STREAM_PREVIEW = "StreamPreview", i.VOICE_CHANNEL = "VoiceChannel", i);
let $ = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    K = (0, m.A)(class extends r.PureComponent {
        render() {
            return (0, l.jsx)("div", {
                className: z.timestamp,
                children: this.props.message
            })
        }
    });

function Z(t) {
    let {
        activity: e
    } = t, n = (0, p.Ay)(), i = function(t) {
        let {
            activity: e
        } = t, n = null;
        return (0, V.A)(e) && (n = k.fg2.SPOTIFY), null != e.platform && [k.yTV.PS4, k.yTV.PS5].includes(e.platform) && (n = k.fg2.PLAYSTATION), n
    }({
        activity: e
    });
    if (null == i) return null;
    let r = g.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.qB)(n) ? r.icon.lightSVG : r.icon.darkSVG,
        className: z.platformIcon
    })
}
class q extends r.PureComponent {
    static Types = J;
    get activity() {
        let {
            activity: t,
            activityGuild: e
        } = this.props;
        return null != e && t?.type !== k.$pd.PLAYING && t?.type !== k.$pd.WATCHING && t?.type !== k.$pd.LISTENING && t?.type !== k.$pd.HANG_STATUS ? {
            type: k.$pd.PLAYING,
            name: Y.intl.string(Y.t.eXan7B)
        } : t
    }
    getTypeClass(t, e) {
        return (0, b.t)(z, t, this.props.type, e)
    }
    isStreamerOnTypeActivityFeed() {
        return (0, w.A)(this.activity) && "ActivityFeed" === this.props.type
    }
    renderHeader(t) {
        let e, {
                hideHeader: n,
                activityGuild: i,
                showChannelDetails: r,
                renderHeaderAccessory: s
            } = this.props,
            a = this.activity;
        if (n || null == a) return null;
        let {
            name: o
        } = a;
        switch (a.type) {
            case k.$pd.STREAMING:
                e = Y.intl.formatToPlainString(Y.t.Dzgz4u, {
                    platform: [k.fg2.TWITCH, k.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : g.A.get(k.fg2.TWITCH).name
                });
                break;
            case k.$pd.LISTENING:
                e = Y.intl.formatToPlainString(Y.t["5sYPnr"], {
                    name: o
                });
                break;
            case k.$pd.WATCHING:
                e = Y.intl.formatToPlainString(Y.t.Ge29Zy, {
                    name: o
                });
                break;
            case k.$pd.PLAYING:
                e = (0, B.A)(a);
                break;
            case k.$pd.COMPETING:
                e = Y.intl.formatToPlainString(Y.t.SQCo6D, {
                    name: o
                })
        }
        return null != i && (e = (0, d.Lt)(a?.flags ?? 0, k.jUm.EMBEDDED) ? a.type === k.$pd.WATCHING ? Y.intl.formatToPlainString(Y.t["M/L8ot"], {
            guildName: i.name
        }) : Y.intl.formatToPlainString(Y.t["4chKQu"], {
            guildName: i.name
        }) : Y.intl.formatToPlainString(Y.t.sddlGK, {
            server: i.name
        })), a?.type === k.$pd.HANG_STATUS && (e = Y.intl.string(Y.t["74vS/x"])), (0, l.jsxs)("div", {
            className: z.headerContainer,
            children: [(0, l.jsx)(A.Heading, {
                className: t ? z.headerTextEmptyBody : z.headerTextNormal,
                variant: r ? "text-xs/semibold" : "eyebrow",
                children: (0, l.jsx)(c.A, {
                    children: e
                })
            }), s?.()]
        })
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: z.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(k.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox"))
            })
        })
    }
    renderImage(t) {
        let e, n, {
            user: i
        } = this.props;
        if (t.type === k.$pd.HANG_STATUS) return (0, l.jsx)("div", {
            className: z.assets,
            children: (0, l.jsx)(I.A, {
                userId: i.id,
                hangStatusActivity: t,
                size: 40,
                className: a()(z.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
            })
        });
        let {
            type: s
        } = this.props, {
            assets: o,
            application_id: u
        } = t;
        if (null == o || null == o.large_image && null == o.small_image) return null;
        (0, w.A)(t) && (e = $[s]);
        let d = (0, V.A)(t),
            c = null != o.large_image ? (0, l.jsx)("img", {
                alt: o.large_text ?? "",
                src: (0, D.uD)(u, o.large_image, e ?? [W.iu.LARGE, W.iu.LARGE]),
                className: a()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? k.fg2.TWITCH : ""), {
                    [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                    [z.assetsLargeImageSpotify]: d
                })
            }) : null;
        if (d) c = (0, l.jsx)(A.MzZ, {
            onClick: this.handleOpenSpotifyAlbum,
            children: c
        });
        else if ((0, P.Cy)(t)) {
            let e = (0, P.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(T.Ay, {
                mask: T.Ay.Masks.SQUIRCLE,
                width: W.iu.SMALL,
                height: W.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: M.Ay.getGuildIconURL({
                        id: e.guildId,
                        icon: o.small_image,
                        size: W.iu.SMALL
                    }) ?? void 0,
                    className: z.assetsLargeImageVoiceChannel,
                    alt: ""
                })
            })
        }
        return (this.isStreamerOnTypeActivityFeed() && null != t.url && "" !== t.url && (c = (0, l.jsxs)("div", {
            className: z.twitchImageContainer,
            children: [(0, l.jsxs)("div", {
                className: z.twitchImageOverlay,
                children: [(0, l.jsx)(A.H, {
                    className: z.streamName,
                    children: t.name
                }), (0, l.jsx)("div", {
                    className: z.streamGame,
                    children: Y.intl.format(Y.t.gmCZRY, {
                        game: t.details
                    })
                })]
            }), (0, l.jsx)(A.MzZ, {
                className: z.twitchBackgroundImage,
                href: t.url,
                children: c
            })]
        })), (0, P.Cy)(t) || null == o.small_image || (n = (0, l.jsx)(A.STz, {
            text: "" !== o.small_text ? o.small_text : null,
            position: "top",
            children: t => (0, l.jsx)("img", {
                alt: o.small_text ?? "",
                src: (0, D.uD)(u, o.small_image, [W.iu.SMALL, W.iu.SMALL]),
                className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                ...t
            })
        })), null == c) ? (0, l.jsx)("div", {
            className: z.assets,
            children: n
        }) : (0, l.jsxs)("div", {
            className: z.assets,
            children: [(0, l.jsx)(A.STz, {
                text: null != o.large_text ? o.large_text : null,
                position: "top",
                children: t => {
                    let {
                        onMouseEnter: e,
                        onMouseLeave: n
                    } = t;
                    return null != c ? r.cloneElement(c, {
                        onMouseEnter: e,
                        onMouseLeave: n
                    }) : null
                }
            }), n]
        })
    }
    renderGameImage(t) {
        let {
            user: e,
            type: n,
            application: i,
            activityGuild: r
        } = this.props;
        return null != t.assets || (0, U.A)(t) || t.type !== k.$pd.PLAYING || "ActivityFeed" === n || e.bot ? null : null == i && null != r ? (0, l.jsx)("div", {
            className: a()(z.gameIcon, z.screenshareIcon)
        }) : (0, l.jsx)(C.A, {
            className: z.gameIcon,
            game: i
        })
    }
    renderName(t) {
        let {
            user: e,
            application: n,
            hideName: i
        } = this.props;
        if (i) return null;
        let {
            details: r,
            type: s
        } = t;
        if (s === k.$pd.CUSTOM_STATUS) return null;
        let o = (0, G.A)(t),
            u = t.name,
            d = u;
        return (s === k.$pd.HANG_STATUS ? d = (0, v.Au)(e.id, t) : o && null != n ? d = (0, l.jsx)("span", {
            className: z.activityName,
            children: d
        }) : !o && (u = r, d = r, (0, V.A)(t) && null != t.sync_id && null != r ? d = (0, l.jsx)(A.MzZ, {
            className: z.bodyLink,
            onClick: this.handleOpenSpotifyTrack,
            children: r
        }) : (0, P.Cy)(t) && (d = t.name)), null == d) ? null : (0, l.jsx)(A.Text, {
            title: u,
            variant: "text-sm/semibold",
            className: a()((0, b.t)(z, "name", e.bot ? "wrap" : "normal")),
            children: d
        })
    }
    renderDetails(t) {
        let e, {
                details: n,
                state: i
            } = t,
            {
                activityGuild: r
            } = this.props,
            s = n,
            a = n;
        if (t.type === k.$pd.CUSTOM_STATUS) s = i;
        else if (t.type === k.$pd.HANG_STATUS && null != r) s = Y.intl.formatToPlainString(Y.t.IAZiW2, {
            guildName: r.name
        }), e = () => {
            (0, j.u)(r.id)
        };
        else if (!(0, G.A)(t))
            if (s = i, a = i, (0, V.A)(t) && null != i) {
                let e = (e, n) => (0, l.jsx)(L.A, {
                    artists: i,
                    linkClassName: z.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                }, n);
                s = Y.intl.format(Y.t.uU9le8, {
                    artists: a,
                    artistsHook: e
                })
            } else(0, P.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s ? null : ((0, w.A)(t) && (s = Y.intl.formatToPlainString(Y.t.gmCZRY, {
            game: s
        })), null != e) ? (0, l.jsx)(A.DUT, {
            onClick: e,
            title: a ?? void 0,
            className: z.clickableDetails,
            children: s
        }) : (0, l.jsx)("div", {
            title: a ?? void 0,
            className: (0, w.A)(t) || (0, V.A)(t) ? z.detailsWrap : z.details,
            children: s
        })
    }
    renderChannelDetails(t) {
        let {
            activityGuild: e,
            showChannelDetails: n,
            channel: i
        } = this.props;
        return n && null != e ? null == i ? (0, l.jsx)("div", {
            className: (0, w.A)(t) || (0, V.A)(t) ? z.detailsWrap : z.details,
            children: Y.intl.format(Y.t["hq/Qze"], {
                guildName: e.name
            })
        }) : (0, l.jsxs)("div", {
            className: a()((0, w.A)(t) || (0, V.A)(t) ? z.detailsWrap : z.details, z.guildDetails),
            children: [(0, l.jsx)(y.Ay, {
                guild: e,
                size: y.Ay.Sizes.SMOL,
                className: z.guildIcon
            }), (0, l.jsx)(A._BQ, {
                size: "xxs",
                color: "currentColor"
            }), (0, l.jsxs)("div", {
                className: z.voiceChannelInfo,
                children: [(0, l.jsx)(A.HKD, {
                    size: "xxs",
                    color: "currentColor"
                }), (0, l.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    children: (0, f.m1)(i, R.default, O.A)
                })]
            })]
        }) : null
    }
    renderTimePlayed(t) {
        let {
            activityGuild: e
        } = this.props;
        if (!(0, G.A)(t) || (0, V.A)(t)) return null;
        let {
            timestamps: n
        } = t;
        return null == n ? null : (0, U.A)(t) ? (0, l.jsx)(K, {
            timestamps: n
        }) : (0, l.jsx)(x.Ay, {
            start: n.start,
            location: x.Ay.Locations.USER_ACTIVITY,
            className: z.playTime,
            isApplicationStreaming: null != e
        })
    }
    renderTimeBar(t) {
        if (!(0, V.A)(t)) return null;
        let {
            timestamps: e
        } = t;
        if (null == e) return null;
        let {
            start: n,
            end: i
        } = e;
        return null == n || null == i ? null : (0, l.jsx)(H.A, {
            start: n,
            end: i,
            className: this.getTypeClass("timeBar"),
            themed: "VoiceChannel" === this.props.type
        })
    }
    renderState(t, e) {
        let n, {
                state: i,
                party: r,
                assets: s
            } = t,
            a = i,
            o = i;
        if (!(0, G.A)(t) && (a = s?.large_text, o = s?.large_text, (0, V.A)(t) && null != a)) {
            let e = (e, n) => null != t.sync_id && null != o ? (0, l.jsx)(A.MzZ, {
                className: z.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: o
            }, n) : o;
            a = Y.intl.format(Y.t.vOLBEy, {
                album: o,
                albumHook: e
            })
        }
        return null != a && "" !== a && t.type !== k.$pd.CUSTOM_STATUS || (0, P.Cy)(t) ? (r?.size == null && [W.I4].includes(t.application_id ?? "") ? n = Y.intl.formatToPlainString(Y.t["u//9By"], {
            count: "0",
            max: e?.getMaxParticipants() ?? 0
        }) : (0, P.Cy)(t) && r?.size != null ? n = Y.intl.formatToPlainString(Y.t["JC/3xw"], {
            numSpeakers: r.size[0],
            numListeners: r.size[1] - r.size[0]
        }) : r?.size != null && r.size.length >= 2 && (n = 0 === r.size[1] ? Y.intl.formatToPlainString(Y.t.IM4J4e, {
            count: r.size[0]
        }) : Y.intl.formatToPlainString(Y.t["u//9By"], {
            count: r.size[0],
            max: r.size[1]
        })), (0, l.jsxs)("div", {
            className: z.state,
            children: [(0, l.jsx)("span", {
                title: o,
                children: a
            }), null != n ? (0, l.jsxs)("span", {
                children: [" ", n]
            }) : null]
        })) : null
    }
    render() {
        let t, {
                type: e,
                renderActions: n,
                className: i,
                application: r,
                onClose: s,
                onOpenGameProfileModal: o
            } = this.props,
            u = this.activity;
        if (null == u || u.type === k.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            h = !1;
        if ((0, F.A)(u)) t = this.renderXboxImage(), h = !0;
        else {
            let e = (0, N.Gf)(this.props.user.id, u ?? void 0);
            e.isSpotify || (t = (0, l.jsx)(N.Tf, {
                resolvedActivity: e
            })), null == t && (h = null != (t = this.renderGameImage(u)))
        }
        let m = this.renderName(u),
            p = this.renderDetails(u),
            g = this.renderState(u, r),
            f = this.renderTimePlayed(u),
            T = this.renderChannelDetails(u),
            C = null != n ? n() : null,
            S = this.renderTimeBar(u),
            _ = ![t, m, p, g, f, S, C].some(t => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), i),
            children: [this.renderHeader(_), (0, l.jsx)("div", {
                className: h ? z.bodyAlignCenter : z.bodyNormal,
                children: (0, l.jsxs)("div", {
                    className: z.activityDetails,
                    children: [t, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(E.A.Child, {
                        className: a()((0, b.t)(z, "content", h ? "GameImage" : null != t ? "Images" : "NoImages", e)),
                        children: [(0, l.jsxs)(A.DUT, {
                            className: a()(null != o && z.openGameProfile),
                            onClick: null != o ? t => {
                                o(t), s?.()
                            } : void 0,
                            children: [m, p, g, f]
                        }), T, c ? null : S, d ? C : null]
                    })]
                })
            }), c ? C : null, (0, l.jsx)(Z, {
                activity: u
            })]
        })
    }
    handleOpenSpotifyTrack = () => {
        let {
            activity: t,
            onOpenSpotifyTrack: e
        } = this.props;
        u()(null != t, "Spotify activity was null"), e?.(t)
    };
    handleOpenSpotifyArtist = t => {
        let {
            activity: e,
            onOpenSpotifyArtist: n,
            user: i
        } = this.props;
        u()(null != e, "Spotify activity was null"), n?.(e, i.id, t)
    };
    handleOpenSpotifyAlbum = () => {
        let {
            activity: t,
            onOpenSpotifyAlbum: e,
            user: n
        } = this.props;
        u()(null != t, "Spotify activity was null"), e?.(t, n.id)
    }
}
let X = t => {
    let e = (0, _.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: S.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(q, {
        ...t,
        onOpenGameProfileModal: e
    })
};
X.Types = J;
let Q = X