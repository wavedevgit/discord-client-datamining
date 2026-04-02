/** chunk id: 153331 params = (module,exports,require) **/
i.d(e, {
    A: () => Z,
    O: () => k
}), i(938796);
var n, l = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    o = i(284009),
    d = i.n(o),
    u = i(665260),
    c = i(3026),
    p = i(582754),
    m = i(397927),
    A = i(492684),
    h = i(736653),
    g = i(573648),
    f = i(235986),
    S = i(573435),
    T = i(769015),
    E = i(409626),
    C = i(692969),
    v = i(263063),
    y = i(804630),
    _ = i(886019),
    I = i(559405),
    N = i(290987),
    x = i(345942),
    j = i(763758),
    P = i(82149),
    L = i(139675),
    O = i(486020),
    U = i(821589),
    R = i(682261),
    D = i(672979),
    b = i(90644),
    M = i(61330),
    G = i(960076),
    V = i(139902),
    H = i(432166),
    w = i(360469),
    F = i(652215),
    B = i(985018),
    W = i(962877),
    k = ((n = {}).ACTIVITY_FEED = "ActivityFeed", n.STREAM_PREVIEW = "StreamPreview", n.VOICE_CHANNEL = "VoiceChannel", n);
let Y = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    $ = (0, A.A)(class extends r.PureComponent {
        render() {
            return (0, l.jsx)("div", {
                className: W.timestamp,
                children: this.props.message
            })
        }
    });

function z(t) {
    let {
        activity: e
    } = t, i = (0, h.Ay)(), n = function(t) {
        let {
            activity: e
        } = t, i = null;
        return (0, b.A)(e) && (i = F.fg2.SPOTIFY), null != e.platform && [F.yTV.PS4, F.yTV.PS5].includes(e.platform) && (i = F.fg2.PLAYSTATION), i
    }({
        activity: e
    });
    if (null == n) return null;
    let r = g.A.get(n);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, p.qB)(i) ? r.icon.lightSVG : r.icon.darkSVG,
        className: W.platformIcon
    })
}
class J extends r.PureComponent {
    static Types = k;
    get activity() {
        let {
            activity: t,
            activityGuild: e
        } = this.props;
        return null != e && t?.type !== F.$pd.PLAYING && t?.type !== F.$pd.WATCHING && t?.type !== F.$pd.LISTENING && t?.type !== F.$pd.HANG_STATUS ? {
            type: F.$pd.PLAYING,
            name: B.intl.string(B.t.eXan7B)
        } : t
    }
    getTypeClass(t, e) {
        return (0, U.t)(W, t, this.props.type, e)
    }
    isStreamerOnTypeActivityFeed() {
        return (0, G.A)(this.activity) && "ActivityFeed" === this.props.type
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type
    }
    renderHeader(t) {
        let e, {
                hideHeader: i,
                activityGuild: n,
                showChannelDetails: r,
                renderHeaderAccessory: s
            } = this.props,
            o = this.activity;
        if (i || null == o) return null;
        let {
            name: d
        } = o;
        switch (o.type) {
            case F.$pd.STREAMING:
                e = B.intl.formatToPlainString(B.t.Dzgz4u, {
                    platform: [F.fg2.TWITCH, F.fg2.YOUTUBE].includes(d.toLowerCase()) ? d : g.A.get(F.fg2.TWITCH).name
                });
                break;
            case F.$pd.LISTENING:
                e = B.intl.formatToPlainString(B.t["5sYPnr"], {
                    name: d
                });
                break;
            case F.$pd.WATCHING:
                e = B.intl.formatToPlainString(B.t.Ge29Zy, {
                    name: d
                });
                break;
            case F.$pd.PLAYING:
                e = (0, V.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case F.$pd.COMPETING:
                e = B.intl.formatToPlainString(B.t.SQCo6D, {
                    name: d
                })
        }
        null == n || this.props.enableUserHoverActivities || (e = (0, u.Lt)(o?.flags ?? 0, F.jUm.EMBEDDED) ? o.type === F.$pd.WATCHING ? B.intl.formatToPlainString(B.t["M/L8ot"], {
            guildName: n.name
        }) : B.intl.formatToPlainString(B.t["4chKQu"], {
            guildName: n.name
        }) : B.intl.formatToPlainString(B.t.sddlGK, {
            server: n.name
        })), o?.type === F.$pd.HANG_STATUS && (e = B.intl.string(B.t["74vS/x"]));
        let p = this.isUserActivityHoverExperiment(),
            A = r ? "text-xs/semibold" : "eyebrow";
        return p && (A = "text-xs/medium"), (0, l.jsxs)("div", {
            className: W.headerContainer,
            children: [(0, l.jsx)(m.Heading, {
                className: a()(!p && (t ? W.headerTextEmptyBody : W.headerTextNormal)),
                color: p ? "text-muted" : void 0,
                variant: A,
                children: (0, l.jsx)(c.A, {
                    children: e
                })
            }), s?.()]
        })
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: W.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(F.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox"))
            })
        })
    }
    renderImage(t) {
        let e, i, {
            user: n
        } = this.props;
        if (t.type === F.$pd.HANG_STATUS) return (0, l.jsx)("div", {
            className: W.assets,
            children: (0, l.jsx)(I.A, {
                userId: n.id,
                hangStatusActivity: t,
                size: 40,
                className: a()(W.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
            })
        });
        let {
            type: s
        } = this.props, {
            assets: o,
            application_id: d
        } = t;
        if (null == o || null == o.large_image && null == o.small_image) return null;
        (0, G.A)(t) && (e = Y[s]);
        let u = (0, b.A)(t),
            c = null != o.large_image ? (0, l.jsx)("img", {
                alt: o.large_text ?? "",
                src: (0, L.uD)(d, o.large_image, e ?? [w.iu.LARGE, w.iu.LARGE]),
                className: a()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? F.fg2.TWITCH : ""), {
                    [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                    [W.assetsLargeImageSpotify]: u
                })
            }) : null;
        if (u) c = (0, l.jsx)(m.MzZ, {
            onClick: this.handleOpenSpotifyAlbum,
            children: c
        });
        else if ((0, P.Cy)(t)) {
            let e = (0, P.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(S.Ay, {
                mask: S.Ay.Masks.SQUIRCLE,
                width: w.iu.SMALL,
                height: w.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: O.Ay.getGuildIconURL({
                        id: e.guildId,
                        icon: o.small_image,
                        size: w.iu.SMALL
                    }) ?? void 0,
                    className: W.assetsLargeImageVoiceChannel,
                    alt: ""
                })
            })
        }
        return (this.isStreamerOnTypeActivityFeed() && null != t.url && "" !== t.url && (c = (0, l.jsxs)("div", {
            className: W.twitchImageContainer,
            children: [(0, l.jsxs)("div", {
                className: W.twitchImageOverlay,
                children: [(0, l.jsx)(m.H, {
                    className: W.streamName,
                    children: t.name
                }), (0, l.jsx)("div", {
                    className: W.streamGame,
                    children: B.intl.format(B.t.gmCZRY, {
                        game: t.details
                    })
                })]
            }), (0, l.jsx)(m.MzZ, {
                className: W.twitchBackgroundImage,
                href: t.url,
                children: c
            })]
        })), (0, P.Cy)(t) || null == o.small_image || (i = (0, l.jsx)(m.STz, {
            text: "" !== o.small_text ? o.small_text : null,
            position: "top",
            children: t => (0, l.jsx)("img", {
                alt: o.small_text ?? "",
                src: (0, L.uD)(d, o.small_image, [w.iu.SMALL, w.iu.SMALL]),
                className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                ...t
            })
        })), null == c) ? (0, l.jsx)("div", {
            className: W.assets,
            children: i
        }) : (0, l.jsxs)("div", {
            className: a()(this.props.enableUserHoverActivities && W.assetsUserActivityHover, W.assets),
            children: [(0, l.jsx)(m.STz, {
                text: null != o.large_text ? o.large_text : null,
                position: "top",
                children: t => {
                    let {
                        onMouseEnter: e,
                        onMouseLeave: i
                    } = t;
                    return null != c ? r.cloneElement(c, {
                        onMouseEnter: e,
                        onMouseLeave: i
                    }) : null
                }
            }), i]
        })
    }
    renderGameImage(t) {
        let {
            user: e,
            type: i,
            application: n,
            activityGuild: r
        } = this.props;
        return null != t.assets || (0, R.A)(t) || t.type !== F.$pd.PLAYING || "ActivityFeed" === i || e.bot ? null : null == n && null != r ? (0, l.jsx)("div", {
            className: a()(W.gameIcon, W.screenshareIcon)
        }) : (0, l.jsx)(T.A, {
            className: W.gameIcon,
            game: n
        })
    }
    renderName(t) {
        let {
            user: e,
            application: i,
            hideName: n
        } = this.props;
        if (n) return null;
        let {
            details: r,
            type: s
        } = t;
        if (s === F.$pd.CUSTOM_STATUS) return null;
        let o = (0, D.A)(t),
            d = t.name,
            u = d;
        return (s === F.$pd.HANG_STATUS ? u = (0, _.Au)(e.id, t) : o && null != i ? u = (0, l.jsx)("span", {
            className: this.props.enableUserHoverActivities ? W.activityNameUserActivityHover : W.activityName,
            children: u
        }) : !o && (d = r, u = r, (0, b.A)(t) && null != t.sync_id && null != r ? u = (0, l.jsx)(m.MzZ, {
            className: W.bodyLink,
            onClick: this.handleOpenSpotifyTrack,
            children: r
        }) : (0, P.Cy)(t) && (u = t.name)), null == u) ? null : (0, l.jsx)(m.Text, {
            title: d,
            variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
            className: a()((0, U.t)(W, "name", e.bot ? "wrap" : "normal")),
            children: u
        })
    }
    renderDetails(t) {
        let e, {
                details: i,
                state: n
            } = t,
            {
                activityGuild: r
            } = this.props,
            s = i,
            a = i;
        if (t.type === F.$pd.CUSTOM_STATUS) s = n;
        else if (t.type === F.$pd.HANG_STATUS && null != r) s = B.intl.formatToPlainString(B.t.IAZiW2, {
            guildName: r.name
        }), e = () => {
            (0, x.u)(r.id)
        };
        else if (!(0, D.A)(t))
            if (s = n, a = n, (0, b.A)(t) && null != n) {
                let e = (e, i) => (0, l.jsx)(j.A, {
                    artists: n,
                    linkClassName: W.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                }, i);
                s = B.intl.format(B.t.uU9le8, {
                    artists: a,
                    artistsHook: e
                })
            } else(0, P.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s ? null : ((0, G.A)(t) && (s = B.intl.formatToPlainString(B.t.gmCZRY, {
            game: s
        })), null != e) ? (0, l.jsx)(m.DUT, {
            onClick: e,
            title: a ?? void 0,
            className: W.clickableDetails,
            children: s
        }) : (0, l.jsx)("div", {
            title: a ?? void 0,
            className: (0, G.A)(t) || (0, b.A)(t) ? W.detailsWrap : W.details,
            children: s
        })
    }
    renderChannelDetails(t) {
        let {
            activityGuild: e,
            showChannelDetails: i,
            channel: n
        } = this.props;
        return i && null != e ? null == n ? (0, l.jsx)("div", {
            className: (0, G.A)(t) || (0, b.A)(t) ? W.detailsWrap : W.details,
            children: B.intl.format(B.t["hq/Qze"], {
                guildName: e.name
            })
        }) : (0, l.jsxs)("div", {
            className: a()((0, G.A)(t) || (0, b.A)(t) ? W.detailsWrap : W.details, W.guildDetails),
            children: [(0, l.jsx)(v.Ay, {
                guild: e,
                size: v.Ay.Sizes.SMOL,
                className: W.guildIcon
            }), (0, l.jsx)(m._BQ, {
                size: "xxs",
                color: "currentColor"
            }), (0, l.jsxs)("div", {
                className: W.voiceChannelInfo,
                children: [(0, l.jsx)(m.HKD, {
                    size: "xxs",
                    color: "currentColor"
                }), (0, l.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    children: n?.name
                })]
            })]
        }) : null
    }
    renderTimePlayed(t) {
        let {
            activityGuild: e
        } = this.props;
        if (!(0, D.A)(t) || (0, b.A)(t)) return null;
        let {
            timestamps: i
        } = t;
        return null == i ? null : (0, R.A)(t) ? (0, l.jsx)($, {
            timestamps: i
        }) : (0, l.jsx)(N.Ay, {
            start: i.start,
            location: this.props.enableUserHoverActivities ? N.Ay.Locations.USER_ACTIVITY_VOICE_USER : N.Ay.Locations.USER_ACTIVITY,
            className: W.playTime,
            isApplicationStreaming: null != e
        })
    }
    renderTimeBar(t) {
        if (!(0, b.A)(t)) return null;
        let {
            timestamps: e
        } = t;
        if (null == e) return null;
        let {
            start: i,
            end: n
        } = e;
        return null == i || null == n ? null : (0, l.jsx)(H.A, {
            start: i,
            end: n,
            className: this.getTypeClass("timeBar"),
            themed: "VoiceChannel" === this.props.type
        })
    }
    renderState(t, e) {
        let i, {
                state: n,
                party: r,
                assets: s
            } = t,
            a = n,
            o = n;
        if (!(0, D.A)(t) && (a = s?.large_text, o = s?.large_text, (0, b.A)(t) && null != a)) {
            let e = (e, i) => null != t.sync_id && null != o ? (0, l.jsx)(m.MzZ, {
                className: W.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: o
            }, i) : o;
            a = B.intl.format(B.t.vOLBEy, {
                album: o,
                albumHook: e
            })
        }
        return null != a && "" !== a && t.type !== F.$pd.CUSTOM_STATUS || (0, P.Cy)(t) ? (r?.size == null && [w.I4].includes(t.application_id ?? "") ? i = B.intl.formatToPlainString(B.t["u//9By"], {
            count: "0",
            max: e?.getMaxParticipants() ?? 0
        }) : (0, P.Cy)(t) && r?.size != null ? i = B.intl.formatToPlainString(B.t["JC/3xw"], {
            numSpeakers: r.size[0],
            numListeners: r.size[1] - r.size[0]
        }) : r?.size != null && r.size.length >= 2 && (i = 0 === r.size[1] ? B.intl.formatToPlainString(B.t.IM4J4e, {
            count: r.size[0]
        }) : B.intl.formatToPlainString(B.t["u//9By"], {
            count: r.size[0],
            max: r.size[1]
        })), (0, l.jsxs)("div", {
            className: W.state,
            children: [(0, l.jsx)("span", {
                title: o,
                children: a
            }), null != i ? (0, l.jsxs)("span", {
                children: [" ", i]
            }) : null]
        })) : null
    }
    render() {
        let t, {
                type: e,
                renderActions: i,
                className: n,
                application: r,
                onClose: s,
                onOpenGameProfileModal: o
            } = this.props,
            d = this.activity;
        if (null == d || d.type === F.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            p = !1;
        if ((0, M.A)(d)) t = this.renderXboxImage(), p = !0;
        else {
            let e = (0, y.Gf)(this.props.user.id, d ?? void 0);
            e.isSpotify || (t = (0, l.jsx)(y.Tf, {
                resolvedActivity: e
            })), null == t && (p = null != (t = this.renderGameImage(d)))
        }
        let A = this.renderName(d),
            h = this.renderDetails(d),
            g = this.renderState(d, r),
            S = this.renderTimePlayed(d),
            T = this.renderChannelDetails(d),
            E = null != i ? i() : null,
            C = this.renderTimeBar(d),
            v = ![t, A, h, g, S, C, E].some(t => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), n),
            children: [this.renderHeader(v), (0, l.jsx)("div", {
                className: a()(p ? W.bodyAlignCenter : W.bodyNormal, this.props.enableUserHoverActivities && W.activityVoiceChannelUserHover),
                children: (0, l.jsxs)("div", {
                    className: W.activityDetails,
                    children: [t, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(f.A.Child, {
                        className: a()((0, U.t)(W, "content", p ? "GameImage" : null != t ? "Images" : "NoImages", e)),
                        children: [(0, l.jsxs)(m.DUT, {
                            className: a()(null != o && W.openGameProfile),
                            onClick: null != o ? t => {
                                o(t), s?.()
                            } : void 0,
                            children: [A, h, g, S]
                        }), T, c ? null : C, u ? E : null]
                    })]
                })
            }), c ? E : null, (0, l.jsx)(z, {
                activity: d
            })]
        })
    }
    handleOpenSpotifyTrack = () => {
        let {
            activity: t,
            onOpenSpotifyTrack: e
        } = this.props;
        d()(null != t, "Spotify activity was null"), e?.(t)
    };
    handleOpenSpotifyArtist = t => {
        let {
            activity: e,
            onOpenSpotifyArtist: i,
            user: n
        } = this.props;
        d()(null != e, "Spotify activity was null"), i?.(e, n.id, t)
    };
    handleOpenSpotifyAlbum = () => {
        let {
            activity: t,
            onOpenSpotifyAlbum: e,
            user: i
        } = this.props;
        d()(null != t, "Spotify activity was null"), e?.(t, i.id)
    }
}
let K = t => {
    let e = (0, C.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(J, {
        ...t,
        onOpenGameProfileModal: e
    })
};
K.Types = k;
let Z = K