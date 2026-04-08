/** chunk id: 153331 params = (module,exports,require) **/
n.d(e, {
    A: () => Z,
    O: () => Y
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
    f = n(235986),
    E = n(573435),
    T = n(769015),
    C = n(409626),
    S = n(692969),
    _ = n(263063),
    v = n(804630),
    y = n(886019),
    I = n(559405),
    N = n(290987),
    x = n(345942),
    j = n(763758),
    P = n(82149),
    L = n(139675),
    O = n(486020),
    R = n(821589),
    D = n(682261),
    U = n(672979),
    M = n(90644),
    b = n(61330),
    G = n(960076),
    V = n(139902),
    H = n(432166),
    F = n(360469),
    w = n(652215),
    B = n(985018),
    W = n(962877),
    Y = ((i = {}).ACTIVITY_FEED = "ActivityFeed", i.STREAM_PREVIEW = "StreamPreview", i.VOICE_CHANNEL = "VoiceChannel", i);
let k = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    z = (0, m.A)(class extends r.PureComponent {
        render() {
            return (0, l.jsx)("div", {
                className: W.timestamp,
                children: this.props.message
            })
        }
    });

function J(t) {
    let {
        activity: e
    } = t, n = (0, p.Ay)(), i = function(t) {
        let {
            activity: e
        } = t, n = null;
        return (0, M.A)(e) && (n = w.fg2.SPOTIFY), null != e.platform && [w.yTV.PS4, w.yTV.PS5].includes(e.platform) && (n = w.fg2.PLAYSTATION), n
    }({
        activity: e
    });
    if (null == i) return null;
    let r = g.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.qB)(n) ? r.icon.lightSVG : r.icon.darkSVG,
        className: W.platformIcon
    })
}
class K extends r.PureComponent {
    static Types = Y;
    get activity() {
        let {
            activity: t,
            activityGuild: e
        } = this.props;
        return null != e && t?.type !== w.$pd.PLAYING && t?.type !== w.$pd.WATCHING && t?.type !== w.$pd.LISTENING && t?.type !== w.$pd.HANG_STATUS ? {
            type: w.$pd.PLAYING,
            name: B.intl.string(B.t.eXan7B)
        } : t
    }
    getTypeClass(t, e) {
        return (0, R.t)(W, t, this.props.type, e)
    }
    isStreamerOnTypeActivityFeed() {
        return (0, G.A)(this.activity) && "ActivityFeed" === this.props.type
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type
    }
    renderHeader(t) {
        let e, {
                hideHeader: n,
                activityGuild: i,
                showChannelDetails: r,
                renderHeaderAccessory: s
            } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let {
            name: u
        } = o;
        switch (o.type) {
            case w.$pd.STREAMING:
                e = B.intl.formatToPlainString(B.t.Dzgz4u, {
                    platform: [w.fg2.TWITCH, w.fg2.YOUTUBE].includes(u.toLowerCase()) ? u : g.A.get(w.fg2.TWITCH).name
                });
                break;
            case w.$pd.LISTENING:
                e = B.intl.formatToPlainString(B.t["5sYPnr"], {
                    name: u
                });
                break;
            case w.$pd.WATCHING:
                e = B.intl.formatToPlainString(B.t.Ge29Zy, {
                    name: u
                });
                break;
            case w.$pd.PLAYING:
                e = (0, V.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case w.$pd.COMPETING:
                e = B.intl.formatToPlainString(B.t.SQCo6D, {
                    name: u
                })
        }
        null == i || this.props.enableUserHoverActivities || (e = (0, d.Lt)(o?.flags ?? 0, w.jUm.EMBEDDED) ? o.type === w.$pd.WATCHING ? B.intl.formatToPlainString(B.t["M/L8ot"], {
            guildName: i.name
        }) : B.intl.formatToPlainString(B.t["4chKQu"], {
            guildName: i.name
        }) : B.intl.formatToPlainString(B.t.sddlGK, {
            server: i.name
        })), o?.type === w.$pd.HANG_STATUS && (e = B.intl.string(B.t["74vS/x"]));
        let h = this.isUserActivityHoverExperiment(),
            m = r ? "text-xs/semibold" : "eyebrow";
        return h && (m = "text-xs/medium"), (0, l.jsxs)("div", {
            className: W.headerContainer,
            children: [(0, l.jsx)(A.Heading, {
                className: a()(!h && (t ? W.headerTextEmptyBody : W.headerTextNormal)),
                color: h ? "text-muted" : void 0,
                variant: m,
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
                src: g.A.get(w.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox"))
            })
        })
    }
    renderImage(t) {
        let e, n, {
            user: i
        } = this.props;
        if (t.type === w.$pd.HANG_STATUS) return (0, l.jsx)("div", {
            className: W.assets,
            children: (0, l.jsx)(I.A, {
                userId: i.id,
                hangStatusActivity: t,
                size: 40,
                className: a()(W.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
            })
        });
        let {
            type: s
        } = this.props, {
            assets: o,
            application_id: u
        } = t;
        if (null == o || null == o.large_image && null == o.small_image) return null;
        (0, G.A)(t) && (e = k[s]);
        let d = (0, M.A)(t),
            c = null != o.large_image ? (0, l.jsx)("img", {
                alt: o.large_text ?? "",
                src: (0, L.uD)(u, o.large_image, e ?? [F.iu.LARGE, F.iu.LARGE]),
                className: a()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? w.fg2.TWITCH : ""), {
                    [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                    [W.assetsLargeImageSpotify]: d
                })
            }) : null;
        if (d) c = (0, l.jsx)(A.MzZ, {
            onClick: this.handleOpenSpotifyAlbum,
            children: c
        });
        else if ((0, P.Cy)(t)) {
            let e = (0, P.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: F.iu.SMALL,
                height: F.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: O.Ay.getGuildIconURL({
                        id: e.guildId,
                        icon: o.small_image,
                        size: F.iu.SMALL
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
                children: [(0, l.jsx)(A.H, {
                    className: W.streamName,
                    children: t.name
                }), (0, l.jsx)("div", {
                    className: W.streamGame,
                    children: B.intl.format(B.t.gmCZRY, {
                        game: t.details
                    })
                })]
            }), (0, l.jsx)(A.MzZ, {
                className: W.twitchBackgroundImage,
                href: t.url,
                children: c
            })]
        })), (0, P.Cy)(t) || null == o.small_image || (n = (0, l.jsx)(A.STz, {
            text: "" !== o.small_text ? o.small_text : null,
            position: "top",
            children: t => (0, l.jsx)("img", {
                alt: o.small_text ?? "",
                src: (0, L.uD)(u, o.small_image, [F.iu.SMALL, F.iu.SMALL]),
                className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                ...t
            })
        })), null == c) ? (0, l.jsx)("div", {
            className: W.assets,
            children: n
        }) : (0, l.jsxs)("div", {
            className: a()(this.props.enableUserHoverActivities && W.assetsUserActivityHover, W.assets),
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
        return null != t.assets || (0, D.A)(t) || t.type !== w.$pd.PLAYING || "ActivityFeed" === n || e.bot ? null : null == i && null != r ? (0, l.jsx)("div", {
            className: a()(W.gameIcon, W.screenshareIcon)
        }) : (0, l.jsx)(T.A, {
            className: W.gameIcon,
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
        if (s === w.$pd.CUSTOM_STATUS) return null;
        let o = (0, U.A)(t),
            u = t.name,
            d = u;
        return (s === w.$pd.HANG_STATUS ? d = (0, y.Au)(e.id, t) : o && null != n ? d = (0, l.jsx)("span", {
            className: this.props.enableUserHoverActivities ? W.activityNameUserActivityHover : W.activityName,
            children: d
        }) : !o && (u = r, d = r, (0, M.A)(t) && null != t.sync_id && null != r ? d = (0, l.jsx)(A.MzZ, {
            className: W.bodyLink,
            onClick: this.handleOpenSpotifyTrack,
            children: r
        }) : (0, P.Cy)(t) && (d = t.name)), null == d) ? null : (0, l.jsx)(A.Text, {
            title: u,
            variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
            className: a()((0, R.t)(W, "name", e.bot ? "wrap" : "normal")),
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
        if (t.type === w.$pd.CUSTOM_STATUS) s = i;
        else if (t.type === w.$pd.HANG_STATUS && null != r) s = B.intl.formatToPlainString(B.t.IAZiW2, {
            guildName: r.name
        }), e = () => {
            (0, x.u)(r.id)
        };
        else if (!(0, U.A)(t))
            if (s = i, a = i, (0, M.A)(t) && null != i) {
                let e = (e, n) => (0, l.jsx)(j.A, {
                    artists: i,
                    linkClassName: W.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                }, n);
                s = B.intl.format(B.t.uU9le8, {
                    artists: a,
                    artistsHook: e
                })
            } else(0, P.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s ? null : ((0, G.A)(t) && (s = B.intl.formatToPlainString(B.t.gmCZRY, {
            game: s
        })), null != e) ? (0, l.jsx)(A.DUT, {
            onClick: e,
            title: a ?? void 0,
            className: W.clickableDetails,
            children: s
        }) : (0, l.jsx)("div", {
            title: a ?? void 0,
            className: (0, G.A)(t) || (0, M.A)(t) ? W.detailsWrap : W.details,
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
            className: (0, G.A)(t) || (0, M.A)(t) ? W.detailsWrap : W.details,
            children: B.intl.format(B.t["hq/Qze"], {
                guildName: e.name
            })
        }) : (0, l.jsxs)("div", {
            className: a()((0, G.A)(t) || (0, M.A)(t) ? W.detailsWrap : W.details, W.guildDetails),
            children: [(0, l.jsx)(_.Ay, {
                guild: e,
                size: _.Ay.Sizes.SMOL,
                className: W.guildIcon
            }), (0, l.jsx)(A._BQ, {
                size: "xxs",
                color: "currentColor"
            }), (0, l.jsxs)("div", {
                className: W.voiceChannelInfo,
                children: [(0, l.jsx)(A.HKD, {
                    size: "xxs",
                    color: "currentColor"
                }), (0, l.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    children: i?.name
                })]
            })]
        }) : null
    }
    renderTimePlayed(t) {
        let {
            activityGuild: e
        } = this.props;
        if (!(0, U.A)(t) || (0, M.A)(t)) return null;
        let {
            timestamps: n
        } = t;
        return null == n ? null : (0, D.A)(t) ? (0, l.jsx)(z, {
            timestamps: n
        }) : (0, l.jsx)(N.Ay, {
            start: n.start,
            location: this.props.enableUserHoverActivities ? N.Ay.Locations.USER_ACTIVITY_VOICE_USER : N.Ay.Locations.USER_ACTIVITY,
            className: W.playTime,
            isApplicationStreaming: null != e
        })
    }
    renderTimeBar(t) {
        if (!(0, M.A)(t)) return null;
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
        if (!(0, U.A)(t) && (a = s?.large_text, o = s?.large_text, (0, M.A)(t) && null != a)) {
            let e = (e, n) => null != t.sync_id && null != o ? (0, l.jsx)(A.MzZ, {
                className: W.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: o
            }, n) : o;
            a = B.intl.format(B.t.vOLBEy, {
                album: o,
                albumHook: e
            })
        }
        return null != a && "" !== a && t.type !== w.$pd.CUSTOM_STATUS || (0, P.Cy)(t) ? (r?.size == null && [F.I4].includes(t.application_id ?? "") ? n = B.intl.formatToPlainString(B.t["u//9By"], {
            count: "0",
            max: e?.getMaxParticipants() ?? 0
        }) : (0, P.Cy)(t) && r?.size != null ? n = B.intl.formatToPlainString(B.t["JC/3xw"], {
            numSpeakers: r.size[0],
            numListeners: r.size[1] - r.size[0]
        }) : r?.size != null && r.size.length >= 2 && (n = 0 === r.size[1] ? B.intl.formatToPlainString(B.t.IM4J4e, {
            count: r.size[0]
        }) : B.intl.formatToPlainString(B.t["u//9By"], {
            count: r.size[0],
            max: r.size[1]
        })), (0, l.jsxs)("div", {
            className: W.state,
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
        if (null == u || u.type === w.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            h = !1;
        if ((0, b.A)(u)) t = this.renderXboxImage(), h = !0;
        else {
            let e = (0, v.Gf)(this.props.user.id, u ?? void 0);
            e.isSpotify || (t = (0, l.jsx)(v.Tf, {
                resolvedActivity: e
            })), null == t && (h = null != (t = this.renderGameImage(u)))
        }
        let m = this.renderName(u),
            p = this.renderDetails(u),
            g = this.renderState(u, r),
            E = this.renderTimePlayed(u),
            T = this.renderChannelDetails(u),
            C = null != n ? n() : null,
            S = this.renderTimeBar(u),
            _ = ![t, m, p, g, E, S, C].some(t => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), i),
            children: [this.renderHeader(_), (0, l.jsx)("div", {
                className: a()(h ? W.bodyAlignCenter : W.bodyNormal, this.props.enableUserHoverActivities && W.activityVoiceChannelUserHover),
                children: (0, l.jsxs)("div", {
                    className: W.activityDetails,
                    children: [t, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(f.A.Child, {
                        className: a()((0, R.t)(W, "content", h ? "GameImage" : null != t ? "Images" : "NoImages", e)),
                        children: [(0, l.jsxs)(A.DUT, {
                            className: a()(null != o && W.openGameProfile),
                            onClick: null != o ? t => {
                                o(t), s?.()
                            } : void 0,
                            children: [m, p, g, E]
                        }), T, c ? null : S, d ? C : null]
                    })]
                })
            }), c ? C : null, (0, l.jsx)(J, {
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
let $ = t => {
    let e = (0, S.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: C.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(K, {
        ...t,
        onOpenGameProfileModal: e
    })
};
$.Types = Y;
let Z = $