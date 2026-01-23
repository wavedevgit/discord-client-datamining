/** Chunk was on 21738 **/
/** chunk id: 666290, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    a = n(765379),
    s = n(90644),
    o = n(61330),
    c = n(609425),
    u = n(73392),
    d = n(409626),
    p = n(692969),
    h = n(290987),
    g = n(427262),
    f = n(516085),
    m = n(928636);
n(595);
var A = n(652215),
    _ = n(985018);

function b(e) {
    var t, i;
    let {
        party: b,
        onUserContextMenu: E
    } = e, {
        priorityMembers: O,
        partiedMembers: y,
        guildContext: I
    } = b, v = O[0], S = function(e) {
        let {
            priorityMembers: t,
            partiedMembers: n
        } = e, r = new Set(t.map(e => {
            let {
                user: t
            } = e;
            return t.id
        })), i = n.filter(e => !r.has(e.id)), l = g.Ay.getName(t[0].user), a = null != t[1] ? g.Ay.getName(t[1].user) : null != i[0] ? g.Ay.getName(i[0]) : null;
        switch (n.length) {
            case 1:
                return l;
            case 2:
                return _.intl.format(_.t.t1DyC1, {
                    user1: l,
                    user2: a
                });
            default:
                return _.intl.format(_.t["5CSEcJ"], {
                    user1: l,
                    user2: a,
                    extras: n.length - 2
                })
        }
    }(b), {
        subtitle: C,
        icon: N
    } = function(e) {
        var t;
        let {
            priorityMembers: i,
            partiedMembers: c,
            voiceChannels: u,
            currentActivities: d
        } = e, p = i.length, g = c.length - p, b = d[0], E = null == b ? void 0 : b.activity, O = null == b ? void 0 : b.startedPlayingTime, y = {
            name: null != (t = null == E ? void 0 : E.name) ? t : ""
        };
        if ((0, a.A)(E) && null != E) return {
            subtitle: (0, r.jsx)(h.Ay, {
                start: O,
                location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                messageProps: y
            }),
            icon: null
        };
        if (p + g === 1 && null != b) {
            let {
                game: e
            } = b;
            if (null == E) return {
                subtitle: null,
                icon: null
            };
            let t = f.Ij(E);
            if (null != t) return t;
            switch (E.type) {
                case A.$pd.PLAYING:
                    if ((0, o.A)(E)) return {
                        subtitle: _.intl.string(_.t.tO8wOx),
                        icon: (0, r.jsx)(m.A.Header.Icon, {
                            src: m.A.Header.Icon.Src.XBOX
                        })
                    };
                    return {
                        subtitle: (0, r.jsx)(h.Ay, {
                            start: O,
                            location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: y
                        }), icon: null != e ? (0, r.jsx)(m.A.Header.Icon, {
                            src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648)
                        }) : null
                    };
                case A.$pd.STREAMING:
                    return {
                        subtitle: _.intl.string(_.t.HyGHj7), icon: null != e && null != e.getIconURL(64) ? (0, r.jsx)(m.A.Header.Icon, {
                            src: e.getIconURL(64)
                        }) : null
                    };
                case A.$pd.LISTENING:
                    let i;
                    return i = (0, s.A)(E) ? (0, r.jsx)(m.A.Header.Icon, {
                        src: m.A.Header.Icon.Src.SPOTIFY
                    }) : null != e.getIconURL(64) ? (0, r.jsx)(m.A.Header.Icon, {
                        src: e.getIconURL(64)
                    }) : (0, r.jsx)(m.A.Header.Icon, {
                        src: n(960648)
                    }), {
                        subtitle: _.intl.formatToPlainString(_.t.NF5xop, {
                            name: E.name
                        }),
                        icon: i
                    };
                case A.$pd.WATCHING:
                    return {
                        subtitle: _.intl.formatToPlainString(_.t.pW3Ip3, {
                            name: E.name
                        }), icon: null != e && null != e.getIconURL(64) ? (0, r.jsx)(m.A.Header.Icon, {
                            src: e.getIconURL(64)
                        }) : null
                    };
                default:
                    return {
                        subtitle: _.intl.string(_.t.grGyaf), icon: null
                    }
            }
        }
        if (0 === d.length) {
            if (u.length > 0) return {
                subtitle: _.intl.string(_.t.grGyaf),
                icon: null
            };
            let e = d[0];
            if (null != e) {
                let {
                    activity: t
                } = e;
                if (null != t) {
                    let e = f.Ij(t);
                    if (null != e) return e
                }
                if (null != t && t.type === A.$pd.LISTENING) return {
                    subtitle: _.intl.string(_.t.rmnkz4),
                    icon: (0, r.jsx)(m.A.Header.Icon, {
                        src: m.A.Header.Icon.Src.SPOTIFY
                    })
                }
            }
        } else if (1 === d.length) {
            let e = d.find(e => null != e.activity);
            if (null == e) return {
                subtitle: null,
                icon: null
            };
            let {
                activity: t,
                game: n,
                startedPlayingTime: i
            } = e;
            return l()(null != t, "Activity was null somehow"), {
                subtitle: (0, r.jsx)(h.Ay, {
                    start: i,
                    location: h.Ay.Locations.ACTIVITY_FEED_NEW,
                    messageProps: y
                }),
                icon: null != n && null != n.getIconURL(64) ? (0, r.jsx)(m.A.Header.Icon, {
                    src: n.getIconURL(64)
                }) : null
            }
        }
        return {
            subtitle: _.intl.string(_.t.sau5tt),
            icon: (0, r.jsx)(m.A.Header.Icon, {
                src: m.A.Header.Icon.Src.MULTIPLE
            })
        }
    }(b), T = (0, p.A)({
        applicationId: null == (i = b.currentActivities[0]) || null == (t = i.activity) ? void 0 : t.application_id,
        location: "FriendsActivityFeed",
        source: d.Ob.FriendsActivityFeed
    }), j = (0, c.A)({
        userId: v.user.id,
        guildId: null == I ? void 0 : I.id
    }), x = (0, u.a)({
        displayNameStyles: j
    });
    return (0, r.jsx)(m.A.Header, {
        priorityUser: v,
        guildId: null == I ? void 0 : I.id,
        title: S,
        subtitle: C,
        icon: N,
        onSubtitleClick: T,
        onIconClick: T,
        onContextMenu: e => E(e, v.user),
        displayNameFont: 1 === y.length ? x : void 0
    })
}