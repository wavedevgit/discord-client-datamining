/** chunk id: 153331 params = (module,exports,require) **/
i.d(t, {
    A: () => K,
    O: () => W
}), i(938796);
var n, l = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    o = i(284009),
    d = i.n(o),
    u = i(665260),
    c = i(3026),
    A = i(582754),
    m = i(397927),
    p = i(492684),
    h = i(736653),
    g = i(573648),
    f = i(235986),
    T = i(573435),
    S = i(769015),
    E = i(409626),
    C = i(692969),
    v = i(263063),
    _ = i(886019),
    x = i(559405),
    y = i(290987),
    I = i(345942),
    N = i(763758),
    j = i(82149),
    D = i(139675),
    P = i(486020),
    O = i(821589),
    U = i(474447),
    L = i(682261),
    b = i(672979),
    M = i(90644),
    R = i(61330),
    G = i(960076),
    V = i(432166),
    H = i(360469),
    w = i(652215),
    F = i(985018),
    B = i(609535),
    W = ((n = {}).ACTIVITY_FEED = "ActivityFeed", n.STREAM_PREVIEW = "StreamPreview", n.VOICE_CHANNEL = "VoiceChannel", n);
let k = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    Y = (0, p.A)(class extends r.PureComponent {
        render() {
            return (0, l.jsx)("div", {
                className: B.timestamp,
                children: this.props.message
            })
        }
    });

function $(e) {
    let {
        activity: t
    } = e, i = (0, h.Ay)(), n = function(e) {
        let {
            activity: t
        } = e, i = null;
        return (0, M.A)(t) && (i = w.fg2.SPOTIFY), null != t.platform && [w.yTV.PS4, w.yTV.PS5].includes(t.platform) && (i = w.fg2.PLAYSTATION), i
    }({
        activity: t
    });
    if (null == n) return null;
    let r = g.A.get(n);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, A.qB)(i) ? r.icon.lightSVG : r.icon.darkSVG,
        className: B.platformIcon
    })
}
class z extends r.PureComponent {
    static Types = W;
    get activity() {
        let {
            activity: e,
            activityGuild: t
        } = this.props;
        return null != t && e?.type !== w.$pd.PLAYING && e?.type !== w.$pd.WATCHING && e?.type !== w.$pd.LISTENING && e?.type !== w.$pd.HANG_STATUS ? {
            type: w.$pd.PLAYING,
            name: F.intl.string(F.t.eXan7B)
        } : e
    }
    getTypeClass(e, t) {
        return (0, O.t)(B, e, this.props.type, t)
    }
    isStreamerOnTypeActivityFeed() {
        return (0, G.A)(this.activity) && "ActivityFeed" === this.props.type
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type
    }
    renderHeader(e) {
        let t, {
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
            case w.$pd.STREAMING:
                t = F.intl.formatToPlainString(F.t.Dzgz4u, {
                    platform: [w.fg2.TWITCH, w.fg2.YOUTUBE].includes(d.toLowerCase()) ? d : g.A.get(w.fg2.TWITCH).name
                });
                break;
            case w.$pd.LISTENING:
                t = F.intl.formatToPlainString(F.t["5sYPnr"], {
                    name: d
                });
                break;
            case w.$pd.WATCHING:
                t = F.intl.formatToPlainString(F.t.Ge29Zy, {
                    name: d
                });
                break;
            case w.$pd.PLAYING:
                t = (0, U.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case w.$pd.COMPETING:
                t = F.intl.formatToPlainString(F.t.SQCo6D, {
                    name: d
                })
        }
        null == n || this.props.enableUserHoverActivities || (t = (0, u.Lt)(o?.flags ?? 0, w.jUm.EMBEDDED) ? o.type === w.$pd.WATCHING ? F.intl.formatToPlainString(F.t["M/L8ot"], {
            guildName: n.name
        }) : F.intl.formatToPlainString(F.t["4chKQu"], {
            guildName: n.name
        }) : F.intl.formatToPlainString(F.t.sddlGK, {
            server: n.name
        })), o?.type === w.$pd.HANG_STATUS && (t = F.intl.string(F.t["74vS/x"]));
        let A = this.isUserActivityHoverExperiment(),
            p = r ? "text-xs/semibold" : "eyebrow";
        return A && (p = "text-xs/medium"), (0, l.jsxs)("div", {
            className: B.headerContainer,
            children: [(0, l.jsx)(m.Heading, {
                className: a()(!A && (e ? B.headerTextEmptyBody : B.headerTextNormal)),
                color: A ? "text-muted" : void 0,
                variant: p,
                children: (0, l.jsx)(c.A, {
                    children: t
                })
            }), s?.()]
        })
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: B.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(w.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox"))
            })
        })
    }
    renderImage(e) {
        let t, i, {
            user: n
        } = this.props;
        if (e.type === w.$pd.HANG_STATUS) return (0, l.jsx)("div", {
            className: B.assets,
            children: (0, l.jsx)(x.A, {
                userId: n.id,
                hangStatusActivity: e,
                size: 40,
                className: a()(B.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
            })
        });
        let {
            type: s
        } = this.props, {
            assets: o,
            application_id: d
        } = e;
        if (null == o || null == o.large_image && null == o.small_image) return null;
        (0, G.A)(e) && (t = k[s]);
        let u = (0, M.A)(e),
            c = null != o.large_image ? (0, l.jsx)("img", {
                alt: o.large_text ?? "",
                src: (0, D.uD)(d, o.large_image, t ?? [H.iu.LARGE, H.iu.LARGE]),
                className: a()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? w.fg2.TWITCH : ""), {
                    [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                    [B.assetsLargeImageSpotify]: u
                })
            }) : null;
        if (u) c = (0, l.jsx)(m.MzZ, {
            onClick: this.handleOpenSpotifyAlbum,
            children: c
        });
        else if ((0, j.Cy)(e)) {
            let t = (0, j.UW)(e);
            if (null == t) return null;
            c = (0, l.jsx)(T.Ay, {
                mask: T.Ay.Masks.SQUIRCLE,
                width: H.iu.SMALL,
                height: H.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: P.Ay.getGuildIconURL({
                        id: t.guildId,
                        icon: o.small_image,
                        size: H.iu.SMALL
                    }) ?? void 0,
                    className: B.assetsLargeImageVoiceChannel,
                    alt: ""
                })
            })
        }
        return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (c = (0, l.jsxs)("div", {
            className: B.twitchImageContainer,
            children: [(0, l.jsxs)("div", {
                className: B.twitchImageOverlay,
                children: [(0, l.jsx)(m.H, {
                    className: B.streamName,
                    children: e.name
                }), (0, l.jsx)("div", {
                    className: B.streamGame,
                    children: F.intl.format(F.t.gmCZRY, {
                        game: e.details
                    })
                })]
            }), (0, l.jsx)(m.MzZ, {
                className: B.twitchBackgroundImage,
                href: e.url,
                children: c
            })]
        })), (0, j.Cy)(e) || null == o.small_image || (i = (0, l.jsx)(m.STz, {
            text: "" !== o.small_text ? o.small_text : null,
            position: "top",
            children: e => (0, l.jsx)("img", {
                alt: o.small_text ?? "",
                src: (0, D.uD)(d, o.small_image, [H.iu.SMALL, H.iu.SMALL]),
                className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                ...e
            })
        })), null == c) ? (0, l.jsx)("div", {
            className: B.assets,
            children: i
        }) : (0, l.jsxs)("div", {
            className: a()(this.props.enableUserHoverActivities && B.assetsUserActivityHover, B.assets),
            children: [(0, l.jsx)(m.STz, {
                text: null != o.large_text ? o.large_text : null,
                position: "top",
                children: e => {
                    let {
                        onMouseEnter: t,
                        onMouseLeave: i
                    } = e;
                    return null != c ? r.cloneElement(c, {
                        onMouseEnter: t,
                        onMouseLeave: i
                    }) : null
                }
            }), i]
        })
    }
    renderGameImage(e) {
        let {
            user: t,
            type: i,
            application: n,
            activityGuild: r
        } = this.props;
        return null != e.assets || (0, L.A)(e) || e.type !== w.$pd.PLAYING || "ActivityFeed" === i || t.bot ? null : null == n && null != r ? (0, l.jsx)("div", {
            className: a()(B.gameIcon, B.screenshareIcon)
        }) : (0, l.jsx)(S.A, {
            className: B.gameIcon,
            game: n
        })
    }
    renderName(e) {
        let {
            user: t,
            application: i,
            hideName: n
        } = this.props;
        if (n) return null;
        let {
            details: r,
            type: s
        } = e;
        if (s === w.$pd.CUSTOM_STATUS) return null;
        let o = (0, b.A)(e),
            d = e.name,
            u = d;
        return (s === w.$pd.HANG_STATUS ? u = (0, _.Au)(t.id, e) : o && null != i ? u = (0, l.jsx)("span", {
            className: this.props.enableUserHoverActivities ? B.activityNameUserActivityHover : B.activityName,
            children: u
        }) : !o && (d = r, u = r, (0, M.A)(e) && null != e.sync_id && null != r ? u = (0, l.jsx)(m.MzZ, {
            className: B.bodyLink,
            onClick: this.handleOpenSpotifyTrack,
            children: r
        }) : (0, j.Cy)(e) && (u = e.name)), null == u) ? null : (0, l.jsx)(m.Text, {
            title: d,
            variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
            className: a()((0, O.t)(B, "name", t.bot ? "wrap" : "normal")),
            children: u
        })
    }
    renderDetails(e) {
        let t, {
                details: i,
                state: n
            } = e,
            {
                activityGuild: r
            } = this.props,
            s = i,
            a = i;
        if (e.type === w.$pd.CUSTOM_STATUS) s = n;
        else if (e.type === w.$pd.HANG_STATUS && null != r) s = F.intl.formatToPlainString(F.t.IAZiW2, {
            guildName: r.name
        }), t = () => {
            (0, I.u)(r.id)
        };
        else if (!(0, b.A)(e))
            if (s = n, a = n, (0, M.A)(e) && null != n) {
                let t = (t, i) => (0, l.jsx)(N.A, {
                    artists: n,
                    linkClassName: B.bodyLink,
                    canOpen: null != e.sync_id,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                }, i);
                s = F.intl.format(F.t.uU9le8, {
                    artists: a,
                    artistsHook: t
                })
            } else(0, j.Cy)(e) && (s = e.assets?.small_text);
        return null == s || "" === s ? null : ((0, G.A)(e) && (s = F.intl.formatToPlainString(F.t.gmCZRY, {
            game: s
        })), null != t) ? (0, l.jsx)(m.DUT, {
            onClick: t,
            title: a ?? void 0,
            className: B.clickableDetails,
            children: s
        }) : (0, l.jsx)("div", {
            title: a ?? void 0,
            className: (0, G.A)(e) || (0, M.A)(e) ? B.detailsWrap : B.details,
            children: s
        })
    }
    renderChannelDetails(e) {
        let {
            activityGuild: t,
            showChannelDetails: i,
            channel: n
        } = this.props;
        return i && null != t ? null == n ? (0, l.jsx)("div", {
            className: (0, G.A)(e) || (0, M.A)(e) ? B.detailsWrap : B.details,
            children: F.intl.format(F.t["hq/Qze"], {
                guildName: t.name
            })
        }) : (0, l.jsxs)("div", {
            className: a()((0, G.A)(e) || (0, M.A)(e) ? B.detailsWrap : B.details, B.guildDetails),
            children: [(0, l.jsx)(v.Ay, {
                guild: t,
                size: v.Ay.Sizes.SMOL,
                className: B.guildIcon
            }), (0, l.jsx)(m._BQ, {
                size: "xxs",
                color: "currentColor"
            }), (0, l.jsxs)("div", {
                className: B.voiceChannelInfo,
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
    renderTimePlayed(e) {
        let {
            activityGuild: t
        } = this.props;
        if (!(0, b.A)(e) || (0, M.A)(e)) return null;
        let {
            timestamps: i
        } = e;
        return null == i ? null : (0, L.A)(e) ? (0, l.jsx)(Y, {
            timestamps: i
        }) : (0, l.jsx)(y.Ay, {
            start: i.start,
            location: y.Ay.Locations.USER_ACTIVITY,
            className: B.playTime,
            isApplicationStreaming: null != t,
            enableUserHoverActivities: this.props.enableUserHoverActivities
        })
    }
    renderTimeBar(e) {
        if (!(0, M.A)(e)) return null;
        let {
            timestamps: t
        } = e;
        if (null == t) return null;
        let {
            start: i,
            end: n
        } = t;
        return null == i || null == n ? null : (0, l.jsx)(V.A, {
            start: i,
            end: n,
            className: this.getTypeClass("timeBar"),
            themed: "VoiceChannel" === this.props.type
        })
    }
    renderState(e, t) {
        let i, {
                state: n,
                party: r,
                assets: s
            } = e,
            a = n,
            o = n;
        if (!(0, b.A)(e) && (a = s?.large_text, o = s?.large_text, (0, M.A)(e) && null != a)) {
            let t = (t, i) => null != e.sync_id && null != o ? (0, l.jsx)(m.MzZ, {
                className: B.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: o
            }, i) : o;
            a = F.intl.format(F.t.vOLBEy, {
                album: o,
                albumHook: t
            })
        }
        return null != a && "" !== a && e.type !== w.$pd.CUSTOM_STATUS || (0, j.Cy)(e) ? (r?.size == null && [H.I4].includes(e.application_id ?? "") ? i = F.intl.formatToPlainString(F.t["u//9By"], {
            count: "0",
            max: t?.getMaxParticipants() ?? 0
        }) : (0, j.Cy)(e) && r?.size != null ? i = F.intl.formatToPlainString(F.t["JC/3xw"], {
            numSpeakers: r.size[0],
            numListeners: r.size[1] - r.size[0]
        }) : r?.size != null && r.size.length >= 2 && (i = 0 === r.size[1] ? F.intl.formatToPlainString(F.t.IM4J4e, {
            count: r.size[0]
        }) : F.intl.formatToPlainString(F.t["u//9By"], {
            count: r.size[0],
            max: r.size[1]
        })), (0, l.jsxs)("div", {
            className: B.state,
            children: [(0, l.jsx)("span", {
                title: o,
                children: a
            }), null != i ? (0, l.jsxs)("span", {
                children: [" ", i]
            }) : null]
        })) : null
    }
    render() {
        let e, {
                type: t,
                renderActions: i,
                className: n,
                application: r,
                onClose: s,
                onOpenGameProfileModal: o
            } = this.props,
            d = this.activity;
        if (null == d || d.type === w.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            c = "StreamPreview" === t,
            A = !1;
        (0, R.A)(d) ? (e = this.renderXboxImage(), A = !0) : null == (e = this.renderImage(d)) && (A = null != (e = this.renderGameImage(d)));
        let p = this.renderName(d),
            h = this.renderDetails(d),
            g = this.renderState(d, r),
            T = this.renderTimePlayed(d),
            S = this.renderChannelDetails(d),
            E = null != i ? i() : null,
            C = this.renderTimeBar(d),
            v = ![e, p, h, g, T, C, E].some(e => null != e);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), n),
            children: [this.renderHeader(v), (0, l.jsx)("div", {
                className: a()(A ? B.bodyAlignCenter : B.bodyNormal, this.props.enableUserHoverActivities && B.activityVoiceChannelUserHover),
                children: (0, l.jsxs)("div", {
                    className: B.activityDetails,
                    children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(f.A.Child, {
                        className: a()((0, O.t)(B, "content", A ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                        children: [(0, l.jsxs)(m.DUT, {
                            className: a()(null != o && B.openGameProfile),
                            onClick: null != o ? e => {
                                o(e), s?.()
                            } : void 0,
                            children: [p, h, g, T]
                        }), S, c ? null : C, u ? E : null]
                    })]
                })
            }), c ? E : null, (0, l.jsx)($, {
                activity: d
            })]
        })
    }
    handleOpenSpotifyTrack = () => {
        let {
            activity: e,
            onOpenSpotifyTrack: t
        } = this.props;
        d()(null != e, "Spotify activity was null"), t?.(e)
    };
    handleOpenSpotifyArtist = e => {
        let {
            activity: t,
            onOpenSpotifyArtist: i,
            user: n
        } = this.props;
        d()(null != t, "Spotify activity was null"), i?.(t, n.id, e)
    };
    handleOpenSpotifyAlbum = () => {
        let {
            activity: e,
            onOpenSpotifyAlbum: t,
            user: i
        } = this.props;
        d()(null != e, "Spotify activity was null"), t?.(e, i.id)
    }
}
let J = e => {
    let t = (0, C.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(z, {
        ...e,
        onOpenGameProfileModal: t
    })
};
J.Types = W;
let K = J