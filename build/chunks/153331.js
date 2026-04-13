/** chunk id: 153331 params = (module,exports,require) **/
n.d(t, {
    A: () => Q,
    O: () => Y
}), n(938796);
var i, l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(665260),
    u = n(3026),
    h = n(582754),
    m = n(397927),
    A = n(492684),
    g = n(736653),
    p = n(573648),
    _ = n(47167),
    f = n(235986),
    E = n(573435),
    C = n(769015),
    x = n(409626),
    S = n(692969),
    I = n(263063),
    T = n(804630),
    v = n(886019),
    N = n(559405),
    y = n(290987),
    b = n(345942),
    j = n(763758),
    R = n(82149),
    M = n(994500),
    L = n(287809),
    O = n(139675),
    D = n(486020),
    P = n(821589),
    k = n(682261),
    U = n(672979),
    w = n(90644),
    G = n(61330),
    F = n(960076),
    H = n(139902),
    B = n(432166),
    V = n(360469),
    W = n(652215),
    K = n(985018),
    z = n(161042),
    Y = ((i = {}).ACTIVITY_FEED = "ActivityFeed", i.STREAM_PREVIEW = "StreamPreview", i.VOICE_CHANNEL = "VoiceChannel", i);
let J = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    q = (0, A.A)(class extends a.PureComponent {
        render() {
            return (0, l.jsx)("div", {
                className: z.timestamp,
                children: this.props.message
            })
        }
    });

function $(e) {
    let {
        activity: t
    } = e, n = (0, g.Ay)(), i = function(e) {
        let {
            activity: t
        } = e, n = null;
        return (0, w.A)(t) && (n = W.fg2.SPOTIFY), null != t.platform && [W.yTV.PS4, W.yTV.PS5].includes(t.platform) && (n = W.fg2.PLAYSTATION), n
    }({
        activity: t
    });
    if (null == i) return null;
    let a = p.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.qB)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: z.platformIcon
    })
}
class Z extends a.PureComponent {
    static Types = Y;
    get activity() {
        let {
            activity: e,
            activityGuild: t
        } = this.props;
        return null != t && e?.type !== W.$pd.PLAYING && e?.type !== W.$pd.WATCHING && e?.type !== W.$pd.LISTENING && e?.type !== W.$pd.HANG_STATUS ? {
            type: W.$pd.PLAYING,
            name: K.intl.string(K.t.eXan7B)
        } : e
    }
    getTypeClass(e, t) {
        return (0, P.t)(z, e, this.props.type, t)
    }
    isStreamerOnTypeActivityFeed() {
        return (0, F.A)(this.activity) && "ActivityFeed" === this.props.type
    }
    renderHeader(e) {
        let t, {
                hideHeader: n,
                activityGuild: i,
                showChannelDetails: a,
                renderHeaderAccessory: s
            } = this.props,
            r = this.activity;
        if (n || null == r) return null;
        let {
            name: o
        } = r;
        switch (r.type) {
            case W.$pd.STREAMING:
                t = K.intl.formatToPlainString(K.t.Dzgz4u, {
                    platform: [W.fg2.TWITCH, W.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : p.A.get(W.fg2.TWITCH).name
                });
                break;
            case W.$pd.LISTENING:
                t = K.intl.formatToPlainString(K.t["5sYPnr"], {
                    name: o
                });
                break;
            case W.$pd.WATCHING:
                t = K.intl.formatToPlainString(K.t.Ge29Zy, {
                    name: o
                });
                break;
            case W.$pd.PLAYING:
                t = (0, H.A)(r);
                break;
            case W.$pd.COMPETING:
                t = K.intl.formatToPlainString(K.t.SQCo6D, {
                    name: o
                })
        }
        return null != i && (t = (0, d.Lt)(r?.flags ?? 0, W.jUm.EMBEDDED) ? r.type === W.$pd.WATCHING ? K.intl.formatToPlainString(K.t["M/L8ot"], {
            guildName: i.name
        }) : K.intl.formatToPlainString(K.t["4chKQu"], {
            guildName: i.name
        }) : K.intl.formatToPlainString(K.t.sddlGK, {
            server: i.name
        })), r?.type === W.$pd.HANG_STATUS && (t = K.intl.string(K.t["74vS/x"])), (0, l.jsxs)("div", {
            className: z.headerContainer,
            children: [(0, l.jsx)(m.Heading, {
                className: e ? z.headerTextEmptyBody : z.headerTextNormal,
                variant: a ? "text-xs/semibold" : "eyebrow",
                children: (0, l.jsx)(u.A, {
                    children: t
                })
            }), s?.()]
        })
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: z.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: p.A.get(W.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox"))
            })
        })
    }
    renderImage(e) {
        let t, n, {
            user: i
        } = this.props;
        if (e.type === W.$pd.HANG_STATUS) return (0, l.jsx)("div", {
            className: z.assets,
            children: (0, l.jsx)(N.A, {
                userId: i.id,
                hangStatusActivity: e,
                size: 40,
                className: r()(z.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
            })
        });
        let {
            type: s
        } = this.props, {
            assets: o,
            application_id: c
        } = e;
        if (null == o || null == o.large_image && null == o.small_image) return null;
        (0, F.A)(e) && (t = J[s]);
        let d = (0, w.A)(e),
            u = null != o.large_image ? (0, l.jsx)("img", {
                alt: o.large_text ?? "",
                src: (0, O.uD)(c, o.large_image, t ?? [V.iu.LARGE, V.iu.LARGE]),
                className: r()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? W.fg2.TWITCH : ""), {
                    [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                    [z.assetsLargeImageSpotify]: d
                })
            }) : null;
        if (d) u = (0, l.jsx)(m.MzZ, {
            onClick: this.handleOpenSpotifyAlbum,
            children: u
        });
        else if ((0, R.Cy)(e)) {
            let t = (0, R.UW)(e);
            if (null == t) return null;
            u = (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: V.iu.SMALL,
                height: V.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: D.Ay.getGuildIconURL({
                        id: t.guildId,
                        icon: o.small_image,
                        size: V.iu.SMALL
                    }) ?? void 0,
                    className: z.assetsLargeImageVoiceChannel,
                    alt: ""
                })
            })
        }
        return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (u = (0, l.jsxs)("div", {
            className: z.twitchImageContainer,
            children: [(0, l.jsxs)("div", {
                className: z.twitchImageOverlay,
                children: [(0, l.jsx)(m.H, {
                    className: z.streamName,
                    children: e.name
                }), (0, l.jsx)("div", {
                    className: z.streamGame,
                    children: K.intl.format(K.t.gmCZRY, {
                        game: e.details
                    })
                })]
            }), (0, l.jsx)(m.MzZ, {
                className: z.twitchBackgroundImage,
                href: e.url,
                children: u
            })]
        })), (0, R.Cy)(e) || null == o.small_image || (n = (0, l.jsx)(m.STz, {
            text: "" !== o.small_text ? o.small_text : null,
            position: "top",
            children: e => (0, l.jsx)("img", {
                alt: o.small_text ?? "",
                src: (0, O.uD)(c, o.small_image, [V.iu.SMALL, V.iu.SMALL]),
                className: this.getTypeClass("assetsSmallImage", null == u ? "WithoutLargeImage" : void 0),
                ...e
            })
        })), null == u) ? (0, l.jsx)("div", {
            className: z.assets,
            children: n
        }) : (0, l.jsxs)("div", {
            className: z.assets,
            children: [(0, l.jsx)(m.STz, {
                text: null != o.large_text ? o.large_text : null,
                position: "top",
                children: e => {
                    let {
                        onMouseEnter: t,
                        onMouseLeave: n
                    } = e;
                    return null != u ? a.cloneElement(u, {
                        onMouseEnter: t,
                        onMouseLeave: n
                    }) : null
                }
            }), n]
        })
    }
    renderGameImage(e) {
        let {
            user: t,
            type: n,
            application: i,
            activityGuild: a
        } = this.props;
        return null != e.assets || (0, k.A)(e) || e.type !== W.$pd.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != a ? (0, l.jsx)("div", {
            className: r()(z.gameIcon, z.screenshareIcon)
        }) : (0, l.jsx)(C.A, {
            className: z.gameIcon,
            game: i
        })
    }
    renderName(e) {
        let {
            user: t,
            application: n,
            hideName: i
        } = this.props;
        if (i) return null;
        let {
            details: a,
            type: s
        } = e;
        if (s === W.$pd.CUSTOM_STATUS) return null;
        let o = (0, U.A)(e),
            c = e.name,
            d = c;
        return (s === W.$pd.HANG_STATUS ? d = (0, v.Au)(t.id, e) : o && null != n ? d = (0, l.jsx)("span", {
            className: z.activityName,
            children: d
        }) : !o && (c = a, d = a, (0, w.A)(e) && null != e.sync_id && null != a ? d = (0, l.jsx)(m.MzZ, {
            className: z.bodyLink,
            onClick: this.handleOpenSpotifyTrack,
            children: a
        }) : (0, R.Cy)(e) && (d = e.name)), null == d) ? null : (0, l.jsx)(m.Text, {
            title: c,
            variant: "text-sm/semibold",
            className: r()((0, P.t)(z, "name", t.bot ? "wrap" : "normal")),
            children: d
        })
    }
    renderDetails(e) {
        let t, {
                details: n,
                state: i
            } = e,
            {
                activityGuild: a
            } = this.props,
            s = n,
            r = n;
        if (e.type === W.$pd.CUSTOM_STATUS) s = i;
        else if (e.type === W.$pd.HANG_STATUS && null != a) s = K.intl.formatToPlainString(K.t.IAZiW2, {
            guildName: a.name
        }), t = () => {
            (0, b.u)(a.id)
        };
        else if (!(0, U.A)(e))
            if (s = i, r = i, (0, w.A)(e) && null != i) {
                let t = (t, n) => (0, l.jsx)(j.A, {
                    artists: i,
                    linkClassName: z.bodyLink,
                    canOpen: null != e.sync_id,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                }, n);
                s = K.intl.format(K.t.uU9le8, {
                    artists: r,
                    artistsHook: t
                })
            } else(0, R.Cy)(e) && (s = e.assets?.small_text);
        return null == s || "" === s ? null : ((0, F.A)(e) && (s = K.intl.formatToPlainString(K.t.gmCZRY, {
            game: s
        })), null != t) ? (0, l.jsx)(m.DUT, {
            onClick: t,
            title: r ?? void 0,
            className: z.clickableDetails,
            children: s
        }) : (0, l.jsx)("div", {
            title: r ?? void 0,
            className: (0, F.A)(e) || (0, w.A)(e) ? z.detailsWrap : z.details,
            children: s
        })
    }
    renderChannelDetails(e) {
        let {
            activityGuild: t,
            showChannelDetails: n,
            channel: i
        } = this.props;
        return n && null != t ? null == i ? (0, l.jsx)("div", {
            className: (0, F.A)(e) || (0, w.A)(e) ? z.detailsWrap : z.details,
            children: K.intl.format(K.t["hq/Qze"], {
                guildName: t.name
            })
        }) : (0, l.jsxs)("div", {
            className: r()((0, F.A)(e) || (0, w.A)(e) ? z.detailsWrap : z.details, z.guildDetails),
            children: [(0, l.jsx)(I.Ay, {
                guild: t,
                size: I.Ay.Sizes.SMOL,
                className: z.guildIcon
            }), (0, l.jsx)(m._BQ, {
                size: "xxs",
                color: "currentColor"
            }), (0, l.jsxs)("div", {
                className: z.voiceChannelInfo,
                children: [(0, l.jsx)(m.HKD, {
                    size: "xxs",
                    color: "currentColor"
                }), (0, l.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    children: (0, _.m1)(i, L.default, M.A)
                })]
            })]
        }) : null
    }
    renderTimePlayed(e) {
        let {
            activityGuild: t
        } = this.props;
        if (!(0, U.A)(e) || (0, w.A)(e)) return null;
        let {
            timestamps: n
        } = e;
        return null == n ? null : (0, k.A)(e) ? (0, l.jsx)(q, {
            timestamps: n
        }) : (0, l.jsx)(y.Ay, {
            start: n.start,
            location: y.Ay.Locations.USER_ACTIVITY,
            className: z.playTime,
            isApplicationStreaming: null != t
        })
    }
    renderTimeBar(e) {
        if (!(0, w.A)(e)) return null;
        let {
            timestamps: t
        } = e;
        if (null == t) return null;
        let {
            start: n,
            end: i
        } = t;
        return null == n || null == i ? null : (0, l.jsx)(B.A, {
            start: n,
            end: i,
            className: this.getTypeClass("timeBar"),
            themed: "VoiceChannel" === this.props.type
        })
    }
    renderState(e, t) {
        let n, {
                state: i,
                party: a,
                assets: s
            } = e,
            r = i,
            o = i;
        if (!(0, U.A)(e) && (r = s?.large_text, o = s?.large_text, (0, w.A)(e) && null != r)) {
            let t = (t, n) => null != e.sync_id && null != o ? (0, l.jsx)(m.MzZ, {
                className: z.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: o
            }, n) : o;
            r = K.intl.format(K.t.vOLBEy, {
                album: o,
                albumHook: t
            })
        }
        return null != r && "" !== r && e.type !== W.$pd.CUSTOM_STATUS || (0, R.Cy)(e) ? (a?.size == null && [V.I4].includes(e.application_id ?? "") ? n = K.intl.formatToPlainString(K.t["u//9By"], {
            count: "0",
            max: t?.getMaxParticipants() ?? 0
        }) : (0, R.Cy)(e) && a?.size != null ? n = K.intl.formatToPlainString(K.t["JC/3xw"], {
            numSpeakers: a.size[0],
            numListeners: a.size[1] - a.size[0]
        }) : a?.size != null && a.size.length >= 2 && (n = 0 === a.size[1] ? K.intl.formatToPlainString(K.t.IM4J4e, {
            count: a.size[0]
        }) : K.intl.formatToPlainString(K.t["u//9By"], {
            count: a.size[0],
            max: a.size[1]
        })), (0, l.jsxs)("div", {
            className: z.state,
            children: [(0, l.jsx)("span", {
                title: o,
                children: r
            }), null != n ? (0, l.jsxs)("span", {
                children: [" ", n]
            }) : null]
        })) : null
    }
    render() {
        let e, {
                type: t,
                renderActions: n,
                className: i,
                application: a,
                onClose: s,
                onOpenGameProfileModal: o
            } = this.props,
            c = this.activity;
        if (null == c || c.type === W.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            h = !1;
        if ((0, G.A)(c)) e = this.renderXboxImage(), h = !0;
        else {
            let t = (0, T.Gf)(this.props.user.id, c ?? void 0);
            t.isSpotify || (e = (0, l.jsx)(T.Tf, {
                resolvedActivity: t
            })), null == e && (h = null != (e = this.renderGameImage(c)))
        }
        let A = this.renderName(c),
            g = this.renderDetails(c),
            p = this.renderState(c, a),
            _ = this.renderTimePlayed(c),
            E = this.renderChannelDetails(c),
            C = null != n ? n() : null,
            x = this.renderTimeBar(c),
            S = ![e, A, g, p, _, x, C].some(e => null != e);
        return (0, l.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), i),
            children: [this.renderHeader(S), (0, l.jsx)("div", {
                className: h ? z.bodyAlignCenter : z.bodyNormal,
                children: (0, l.jsxs)("div", {
                    className: z.activityDetails,
                    children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(f.A.Child, {
                        className: r()((0, P.t)(z, "content", h ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                        children: [(0, l.jsxs)(m.DUT, {
                            className: r()(null != o && z.openGameProfile),
                            onClick: null != o ? e => {
                                o(e), s?.()
                            } : void 0,
                            children: [A, g, p, _]
                        }), E, u ? null : x, d ? C : null]
                    })]
                })
            }), u ? C : null, (0, l.jsx)($, {
                activity: c
            })]
        })
    }
    handleOpenSpotifyTrack = () => {
        let {
            activity: e,
            onOpenSpotifyTrack: t
        } = this.props;
        c()(null != e, "Spotify activity was null"), t?.(e)
    };
    handleOpenSpotifyArtist = e => {
        let {
            activity: t,
            onOpenSpotifyArtist: n,
            user: i
        } = this.props;
        c()(null != t, "Spotify activity was null"), n?.(t, i.id, e)
    };
    handleOpenSpotifyAlbum = () => {
        let {
            activity: e,
            onOpenSpotifyAlbum: t,
            user: n
        } = this.props;
        c()(null != e, "Spotify activity was null"), t?.(e, n.id)
    }
}
let X = e => {
    let t = (0, S.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: x.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(Z, {
        ...e,
        onOpenGameProfileModal: t
    })
};
X.Types = Y;
let Q = X