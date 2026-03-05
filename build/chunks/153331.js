/** chunk id: 153331, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => K,
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
    m = i(582754),
    p = i(397927),
    h = i(492684),
    A = i(736653),
    g = i(573648),
    f = i(235986),
    T = i(573435),
    v = i(769015),
    C = i(409626),
    S = i(692969),
    E = i(263063),
    x = i(886019),
    _ = i(559405),
    y = i(290987),
    N = i(345942),
    I = i(763758),
    j = i(82149),
    D = i(139675),
    P = i(486020),
    U = i(821589),
    O = i(474447),
    b = i(682261),
    L = i(672979),
    M = i(90644),
    R = i(61330),
    V = i(960076),
    w = i(432166),
    H = i(360469),
    G = i(652215),
    W = i(985018),
    F = i(332621),
    k = ((n = {}).ACTIVITY_FEED = "ActivityFeed", n.STREAM_PREVIEW = "StreamPreview", n.VOICE_CHANNEL = "VoiceChannel", n);
let B = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    Y = (0, h.A)(class extends r.PureComponent {
        render() {
            return (0, l.jsx)("div", {
                className: F.timestamp,
                children: this.props.message
            })
        }
    });

function z(t) {
    let {
        activity: e
    } = t, i = (0, A.Ay)(), n = function(t) {
        let {
            activity: e
        } = t, i = null;
        return (0, M.A)(e) && (i = G.fg2.SPOTIFY), null != e.platform && [G.yTV.PS4, G.yTV.PS5].includes(e.platform) && (i = G.fg2.PLAYSTATION), i
    }({
        activity: e
    });
    if (null == n) return null;
    let r = g.A.get(n);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, m.qB)(i) ? r.icon.lightSVG : r.icon.darkSVG,
        className: F.platformIcon
    })
}
class $ extends r.PureComponent {
    static Types = k;
    get activity() {
        let {
            activity: t,
            activityGuild: e
        } = this.props;
        return null != e && t?.type !== G.$pd.PLAYING && t?.type !== G.$pd.WATCHING && t?.type !== G.$pd.LISTENING && t?.type !== G.$pd.HANG_STATUS ? {
            type: G.$pd.PLAYING,
            name: W.intl.string(W.t.eXan7B)
        } : t
    }
    getTypeClass(t, e) {
        return (0, U.t)(F, t, this.props.type, e)
    }
    isStreamerOnTypeActivityFeed() {
        return (0, V.A)(this.activity) && "ActivityFeed" === this.props.type
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
            case G.$pd.STREAMING:
                e = W.intl.formatToPlainString(W.t.Dzgz4u, {
                    platform: [G.fg2.TWITCH, G.fg2.YOUTUBE].includes(d.toLowerCase()) ? d : g.A.get(G.fg2.TWITCH).name
                });
                break;
            case G.$pd.LISTENING:
                e = W.intl.formatToPlainString(W.t["5sYPnr"], {
                    name: d
                });
                break;
            case G.$pd.WATCHING:
                e = W.intl.formatToPlainString(W.t.Ge29Zy, {
                    name: d
                });
                break;
            case G.$pd.PLAYING:
                e = (0, O.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case G.$pd.COMPETING:
                e = W.intl.formatToPlainString(W.t.SQCo6D, {
                    name: d
                })
        }
        null == n || this.props.enableUserHoverActivities || (e = (0, u.Lt)(o?.flags ?? 0, G.jUm.EMBEDDED) ? o.type === G.$pd.WATCHING ? W.intl.formatToPlainString(W.t["M/L8ot"], {
            guildName: n.name
        }) : W.intl.formatToPlainString(W.t["4chKQu"], {
            guildName: n.name
        }) : W.intl.formatToPlainString(W.t.sddlGK, {
            server: n.name
        })), o?.type === G.$pd.HANG_STATUS && (e = W.intl.string(W.t["74vS/x"]));
        let m = this.isUserActivityHoverExperiment(),
            h = r ? "text-xs/semibold" : "eyebrow";
        return m && (h = "text-xs/medium"), (0, l.jsxs)("div", {
            className: F.headerContainer,
            children: [(0, l.jsx)(p.Heading, {
                className: a()(!m && (t ? F.headerTextEmptyBody : F.headerTextNormal)),
                color: m ? "text-muted" : void 0,
                variant: h,
                children: (0, l.jsx)(c.A, {
                    children: e
                })
            }), s?.()]
        })
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: F.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(G.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox"))
            })
        })
    }
    renderImage(t) {
        let e, i, {
            user: n
        } = this.props;
        if (t.type === G.$pd.HANG_STATUS) return (0, l.jsx)("div", {
            className: F.assets,
            children: (0, l.jsx)(_.A, {
                userId: n.id,
                hangStatusActivity: t,
                size: 40,
                className: a()(F.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
            })
        });
        let {
            type: s
        } = this.props, {
            assets: o,
            application_id: d
        } = t;
        if (null == o || null == o.large_image && null == o.small_image) return null;
        (0, V.A)(t) && (e = B[s]);
        let u = (0, M.A)(t),
            c = null != o.large_image ? (0, l.jsx)("img", {
                alt: o.large_text ?? "",
                src: (0, D.uD)(d, o.large_image, e ?? [H.iu.LARGE, H.iu.LARGE]),
                className: a()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? G.fg2.TWITCH : ""), {
                    [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                    [F.assetsLargeImageSpotify]: u
                })
            }) : null;
        if (u) c = (0, l.jsx)(p.MzZ, {
            onClick: this.handleOpenSpotifyAlbum,
            children: c
        });
        else if ((0, j.Cy)(t)) {
            let e = (0, j.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(T.Ay, {
                mask: T.Ay.Masks.SQUIRCLE,
                width: H.iu.SMALL,
                height: H.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: P.Ay.getGuildIconURL({
                        id: e.guildId,
                        icon: o.small_image,
                        size: H.iu.SMALL
                    }) ?? void 0,
                    className: F.assetsLargeImageVoiceChannel,
                    alt: ""
                })
            })
        }
        return (this.isStreamerOnTypeActivityFeed() && null != t.url && "" !== t.url && (c = (0, l.jsxs)("div", {
            className: F.twitchImageContainer,
            children: [(0, l.jsxs)("div", {
                className: F.twitchImageOverlay,
                children: [(0, l.jsx)(p.H, {
                    className: F.streamName,
                    children: t.name
                }), (0, l.jsx)("div", {
                    className: F.streamGame,
                    children: W.intl.format(W.t.gmCZRY, {
                        game: t.details
                    })
                })]
            }), (0, l.jsx)(p.MzZ, {
                className: F.twitchBackgroundImage,
                href: t.url,
                children: c
            })]
        })), (0, j.Cy)(t) || null == o.small_image || (i = (0, l.jsx)(p.STz, {
            text: "" !== o.small_text ? o.small_text : null,
            position: "top",
            children: t => (0, l.jsx)("img", {
                alt: o.small_text ?? "",
                src: (0, D.uD)(d, o.small_image, [H.iu.SMALL, H.iu.SMALL]),
                className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                ...t
            })
        })), null == c) ? (0, l.jsx)("div", {
            className: F.assets,
            children: i
        }) : (0, l.jsxs)("div", {
            className: a()(this.props.enableUserHoverActivities && F.assetsUserActivityHover, F.assets),
            children: [(0, l.jsx)(p.STz, {
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
        return null != t.assets || (0, b.A)(t) || t.type !== G.$pd.PLAYING || "ActivityFeed" === i || e.bot ? null : null == n && null != r ? (0, l.jsx)("div", {
            className: a()(F.gameIcon, F.screenshareIcon)
        }) : (0, l.jsx)(v.A, {
            className: F.gameIcon,
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
        if (s === G.$pd.CUSTOM_STATUS) return null;
        let o = (0, L.A)(t),
            d = t.name,
            u = d;
        return (s === G.$pd.HANG_STATUS ? u = (0, x.Au)(e.id, t) : o && null != i ? u = (0, l.jsx)("span", {
            className: this.props.enableUserHoverActivities ? F.activityNameUserActivityHover : F.activityName,
            children: u
        }) : !o && (d = r, u = r, (0, M.A)(t) && null != t.sync_id && null != r ? u = (0, l.jsx)(p.MzZ, {
            className: F.bodyLink,
            onClick: this.handleOpenSpotifyTrack,
            children: r
        }) : (0, j.Cy)(t) && (u = t.name)), null == u) ? null : (0, l.jsx)(p.Text, {
            title: d,
            variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
            className: a()((0, U.t)(F, "name", e.bot ? "wrap" : "normal")),
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
        if (t.type === G.$pd.CUSTOM_STATUS) s = n;
        else if (t.type === G.$pd.HANG_STATUS && null != r) s = W.intl.formatToPlainString(W.t.IAZiW2, {
            guildName: r.name
        }), e = () => {
            (0, N.u)(r.id)
        };
        else if (!(0, L.A)(t))
            if (s = n, a = n, (0, M.A)(t) && null != n) {
                let e = (e, i) => (0, l.jsx)(I.A, {
                    artists: n,
                    linkClassName: F.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                }, i);
                s = W.intl.format(W.t.uU9le8, {
                    artists: a,
                    artistsHook: e
                })
            } else(0, j.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s ? null : ((0, V.A)(t) && (s = W.intl.formatToPlainString(W.t.gmCZRY, {
            game: s
        })), null != e) ? (0, l.jsx)(p.DUT, {
            onClick: e,
            title: a ?? void 0,
            className: F.clickableDetails,
            children: s
        }) : (0, l.jsx)("div", {
            title: a ?? void 0,
            className: (0, V.A)(t) || (0, M.A)(t) ? F.detailsWrap : F.details,
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
            className: (0, V.A)(t) || (0, M.A)(t) ? F.detailsWrap : F.details,
            children: W.intl.format(W.t["hq/Qze"], {
                guildName: e.name
            })
        }) : (0, l.jsxs)("div", {
            className: a()((0, V.A)(t) || (0, M.A)(t) ? F.detailsWrap : F.details, F.guildDetails),
            children: [(0, l.jsx)(E.Ay, {
                guild: e,
                size: E.Ay.Sizes.SMOL,
                className: F.guildIcon
            }), (0, l.jsx)(p._BQ, {
                size: "xxs",
                color: "currentColor"
            }), (0, l.jsxs)("div", {
                className: F.voiceChannelInfo,
                children: [(0, l.jsx)(p.HKD, {
                    size: "xxs",
                    color: "currentColor"
                }), (0, l.jsx)(p.Text, {
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
        if (!(0, L.A)(t) || (0, M.A)(t)) return null;
        let {
            timestamps: i
        } = t;
        return null == i ? null : (0, b.A)(t) ? (0, l.jsx)(Y, {
            timestamps: i
        }) : (0, l.jsx)(y.Ay, {
            start: i.start,
            location: y.Ay.Locations.USER_ACTIVITY,
            className: F.playTime,
            isApplicationStreaming: null != e,
            enableUserHoverActivities: this.props.enableUserHoverActivities
        })
    }
    renderTimeBar(t) {
        if (!(0, M.A)(t)) return null;
        let {
            timestamps: e
        } = t;
        if (null == e) return null;
        let {
            start: i,
            end: n
        } = e;
        return null == i || null == n ? null : (0, l.jsx)(w.A, {
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
        if (!(0, L.A)(t) && (a = s?.large_text, o = s?.large_text, (0, M.A)(t) && null != a)) {
            let e = (e, i) => null != t.sync_id && null != o ? (0, l.jsx)(p.MzZ, {
                className: F.bodyLink,
                onClick: this.handleOpenSpotifyAlbum,
                children: o
            }, i) : o;
            a = W.intl.format(W.t.vOLBEy, {
                album: o,
                albumHook: e
            })
        }
        return null != a && "" !== a && t.type !== G.$pd.CUSTOM_STATUS || (0, j.Cy)(t) ? (r?.size == null && [H.I4].includes(t.application_id ?? "") ? i = W.intl.formatToPlainString(W.t["u//9By"], {
            count: "0",
            max: e?.getMaxParticipants() ?? 0
        }) : (0, j.Cy)(t) && r?.size != null ? i = W.intl.formatToPlainString(W.t["JC/3xw"], {
            numSpeakers: r.size[0],
            numListeners: r.size[1] - r.size[0]
        }) : r?.size != null && r.size.length >= 2 && (i = 0 === r.size[1] ? W.intl.formatToPlainString(W.t.IM4J4e, {
            count: r.size[0]
        }) : W.intl.formatToPlainString(W.t["u//9By"], {
            count: r.size[0],
            max: r.size[1]
        })), (0, l.jsxs)("div", {
            className: F.state,
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
        if (null == d || d.type === G.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            m = !1;
        (0, R.A)(d) ? (t = this.renderXboxImage(), m = !0) : null == (t = this.renderImage(d)) && (m = null != (t = this.renderGameImage(d)));
        let h = this.renderName(d),
            A = this.renderDetails(d),
            g = this.renderState(d, r),
            T = this.renderTimePlayed(d),
            v = this.renderChannelDetails(d),
            C = null != i ? i() : null,
            S = this.renderTimeBar(d),
            E = ![t, h, A, g, T, S, C].some(t => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), n),
            children: [this.renderHeader(E), (0, l.jsx)("div", {
                className: a()(m ? F.bodyAlignCenter : F.bodyNormal, this.props.enableUserHoverActivities && F.activityVoiceChannelUserHover),
                children: (0, l.jsxs)("div", {
                    className: F.activityDetails,
                    children: [t, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(f.A.Child, {
                        className: a()((0, U.t)(F, "content", m ? "GameImage" : null != t ? "Images" : "NoImages", e)),
                        children: [(0, l.jsxs)(p.DUT, {
                            className: a()(null != o && F.openGameProfile),
                            onClick: null != o ? t => {
                                o(t), s?.()
                            } : void 0,
                            children: [h, A, g, T]
                        }), v, c ? null : S, u ? C : null]
                    })]
                })
            }), c ? C : null, (0, l.jsx)(z, {
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
let J = t => {
    let e = (0, S.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: C.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)($, {
        ...t,
        onOpenGameProfileModal: e
    })
};
J.Types = k;
let K = J