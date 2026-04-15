/** chunk id: 666290 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var l = n(284009),
    a = n.n(l),
    r = n(765379),
    s = n(90644),
    o = n(61330),
    d = n(609425),
    c = n(73392),
    u = n(409626),
    A = n(692969),
    h = n(290987),
    _ = n(427262),
    m = n(516085),
    g = n(928636);
n(595);
var p = n(652215),
    E = n(985018);

function I(e) {
    let {
        party: t,
        onUserContextMenu: l
    } = e, {
        priorityMembers: I,
        partiedMembers: f,
        guildContext: C
    } = t, T = I[0], N = function(e) {
        let {
            priorityMembers: t,
            partiedMembers: n
        } = e, i = new Set(t.map(e => {
            let {
                user: t
            } = e;
            return t.id
        })), l = n.filter(e => !i.has(e.id)), a = _.Ay.getName(t[0].user), r = null != t[1] ? _.Ay.getName(t[1].user) : null != l[0] ? _.Ay.getName(l[0]) : null;
        switch (n.length) {
            case 1:
                return a;
            case 2:
                return E.intl.format(E.t.t1DyC1, {
                    user1: a,
                    user2: r
                });
            default:
                return E.intl.format(E.t["5CSEcJ"], {
                    user1: a,
                    user2: r,
                    extras: n.length - 2
                })
        }
    }(t), {
        subtitle: S,
        icon: x
    } = function(e) {
        let {
            priorityMembers: t,
            partiedMembers: l,
            voiceChannels: d,
            currentActivities: c
        } = e, u = t.length, A = l.length - u, _ = c[0], I = _?.activity, f = _?.startedPlayingTime, C = {
            name: I?.name ?? ""
        };
        if ((0, r.A)(I) && null != I) return {
            subtitle: (0, i.jsx)(h.Ay, {
                start: f,
                location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                messageProps: C
            }),
            icon: null
        };
        if (u + A === 1 && null != _) {
            let {
                game: e
            } = _;
            if (null == I) return {
                subtitle: null,
                icon: null
            };
            let t = m.Ij(I);
            if (null != t) return t;
            switch (I.type) {
                case p.$pd.PLAYING:
                    if ((0, o.A)(I)) return {
                        subtitle: E.intl.string(E.t.tO8wOx),
                        icon: (0, i.jsx)(g.A.Header.Icon, {
                            src: g.A.Header.Icon.Src.XBOX
                        })
                    };
                    return {
                        subtitle: (0, i.jsx)(h.Ay, {
                            start: f,
                            location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: C
                        }), icon: null != e ? (0, i.jsx)(g.A.Header.Icon, {
                            src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648)
                        }) : null
                    };
                case p.$pd.STREAMING:
                    return {
                        subtitle: E.intl.string(E.t.HyGHj7), icon: null != e && null != e.getIconURL(64) ? (0, i.jsx)(g.A.Header.Icon, {
                            src: e.getIconURL(64)
                        }) : null
                    };
                case p.$pd.LISTENING:
                    let l;
                    return l = (0, s.A)(I) ? (0, i.jsx)(g.A.Header.Icon, {
                        src: g.A.Header.Icon.Src.SPOTIFY
                    }) : null != e.getIconURL(64) ? (0, i.jsx)(g.A.Header.Icon, {
                        src: e.getIconURL(64)
                    }) : (0, i.jsx)(g.A.Header.Icon, {
                        src: n(960648)
                    }), {
                        subtitle: E.intl.formatToPlainString(E.t.NF5xop, {
                            name: I.name
                        }),
                        icon: l
                    };
                case p.$pd.WATCHING:
                    return {
                        subtitle: E.intl.formatToPlainString(E.t.pW3Ip3, {
                            name: I.name
                        }), icon: null != e && null != e.getIconURL(64) ? (0, i.jsx)(g.A.Header.Icon, {
                            src: e.getIconURL(64)
                        }) : null
                    };
                default:
                    return {
                        subtitle: E.intl.string(E.t.grGyaf), icon: null
                    }
            }
        }
        if (0 === c.length) {
            if (d.length > 0) return {
                subtitle: E.intl.string(E.t.grGyaf),
                icon: null
            };
            let e = c[0];
            if (null != e) {
                let {
                    activity: t
                } = e;
                if (null != t) {
                    let e = m.Ij(t);
                    if (null != e) return e
                }
                if (null != t && t.type === p.$pd.LISTENING) return {
                    subtitle: E.intl.string(E.t.rmnkz4),
                    icon: (0, i.jsx)(g.A.Header.Icon, {
                        src: g.A.Header.Icon.Src.SPOTIFY
                    })
                }
            }
        } else if (1 === c.length) {
            let e = c.find(e => null != e.activity);
            if (null == e) return {
                subtitle: null,
                icon: null
            };
            let {
                activity: t,
                game: n,
                startedPlayingTime: l
            } = e;
            return a()(null != t, "Activity was null somehow"), {
                subtitle: (0, i.jsx)(h.Ay, {
                    start: l,
                    location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                    messageProps: C
                }),
                icon: null != n && null != n.getIconURL(64) ? (0, i.jsx)(g.A.Header.Icon, {
                    src: n.getIconURL(64)
                }) : null
            }
        }
        return {
            subtitle: E.intl.string(E.t.sau5tt),
            icon: (0, i.jsx)(g.A.Header.Icon, {
                src: g.A.Header.Icon.Src.MULTIPLE
            })
        }
    }(t), v = (0, A.A)({
        applicationId: t.currentActivities[0]?.activity?.application_id,
        location: "FriendsActivityFeed",
        source: u.Ob.FriendsActivityFeed
    }), b = (0, d.A)({
        userId: T.user.id,
        guildId: C?.id
    }), y = (0, c.a)({
        displayNameStyles: b
    });
    return (0, i.jsx)(g.A.Header, {
        priorityUser: T,
        guildId: C?.id,
        title: N,
        subtitle: S,
        icon: x,
        onSubtitleClick: v,
        onIconClick: v,
        onContextMenu: e => l(e, T.user),
        displayNameFont: 1 === f.length ? y : void 0
    })
}