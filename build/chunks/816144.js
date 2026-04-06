/** chunk id: 816144 params = (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(73153),
    o = n(824552),
    c = n(782934),
    d = n(496231),
    u = n(47167),
    h = n(495273),
    m = n(265869),
    A = n(772659),
    g = n(437774),
    p = n(622543),
    f = n(576622),
    _ = n(95701),
    E = n(546183),
    x = n(808728),
    C = n(576705),
    S = n(287809),
    T = n(427262),
    N = n(803622),
    I = n(314307),
    v = n(393194),
    b = n(455067),
    y = n(432817),
    j = n(324799),
    R = n(635157),
    M = n(379768),
    D = n(391257),
    O = n(914835),
    L = n(825244),
    P = n(652215),
    k = n(746080),
    w = n(985018),
    U = n(563003),
    G = n(885106);

function F(e) {
    let {
        canManageRoles: t,
        channel: n
    } = e, l = t && (0, h.Ae)(n), a = (0, s.bG)([x.Ay], () => null != n.guild_id && n === x.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, m.A)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(v.A, {
        channel: n
    });
    if (_.Le.has(n.type)) return (0, i.jsx)(O.A, {
        channel: n
    });
    if (a) return (0, i.jsx)(L.A, {
        channel: n
    });
    if (l) return (0, i.jsx)(M.A, {
        channel: n
    });
    return (0, i.jsx)(D.A, {
        channel: n
    })
}

function B(e) {
    let {
        channel: t,
        showingBanner: n
    } = e, h = (0, u.Ay)(t), {
        type: m
    } = t, _ = (0, s.bG)([S.default], () => t.isPrivate() ? S.default.getUser(t.getRecipientId()) : null), x = T.Ay.useUserTag(_), {
        canManageRoles: v,
        canReadMessageHistory: M
    } = (0, s.cf)([C.A], () => ({
        canManageRoles: C.A.can(P.xBc.MANAGE_ROLES, t),
        canReadMessageHistory: C.A.can(P.xBc.READ_MESSAGE_HISTORY, t)
    })), D = (0, s.bG)([p.A], () => m === P.rbe.DM ? p.A.getMutualGuilds(t.getRecipientId()) : null, [t, m]), O = (0, d.A)(_?.id ?? P.dJq), {
        authorizedAppToken: L,
        authorizedAppsFetchState: B
    } = (0, s.cf)([E.default], () => ({
        authorizedAppToken: E.default.getNewestTokenForApplication(O?.id),
        authorizedAppsFetchState: E.default.getFetchState()
    })), H = c.A.useExperiment({
        location: "EmptyMessages"
    }).enabledDesktop;
    if (l.useEffect(() => {
            m === P.rbe.DM && null == D && null != _ && r.h.wait(() => (0, f.A)(t.getRecipientId(), _.getAvatarURL(null, 80), {
                withMutualGuilds: !0
            }))
        }, [D, m, t, _]), l.useEffect(() => {
            _?.bot && B === E.FetchState.NOT_FETCHED && o.A.fetch()
        }, [_?.bot, B]), t.isSystemDM()) return (0, i.jsx)(R.A, {
        channel: t,
        children: w.intl.string(w.t.Rzvnig)
    });
    if (m === P.rbe.DM) {
        let e;
        if (null != _ && null != O) {
            let n = [];
            null != L && (n.push((0, i.jsx)(j.X, {
                channel: t,
                user: _
            }, "mute")), n.push((0, i.jsx)(y.L, {
                user: _,
                application: O,
                channel: t,
                oauth2Token: L
            }, "manage"))), H && n.push((0, i.jsx)(A.A, {
                channel: t
            }, "report")), n.length > 0 && (e = (0, i.jsx)("div", {
                className: U.U,
                children: n
            }))
        } else e = (0, i.jsx)(N.A, {
            userId: t.getRecipientId(),
            channel: t,
            showingBanner: n
        });
        return (0, i.jsxs)(R.A, {
            channel: t,
            user: _,
            children: [null != _ && !_.isProvisional && (0, i.jsx)(a.Heading, {
                variant: "heading-xl/medium",
                className: G.SX,
                children: x
            }), w.intl.format(w.t["Qvg+6+"], {
                username: h
            }), _?.isProvisional && (0, i.jsx)(g.Y, {
                userId: _.id
            }), e]
        })
    }
    if (t.isMultiUserDM())
        if (t.isManaged()) return (0, i.jsxs)(I.Ay, {
            channelId: t.id,
            children: [(0, i.jsx)(I.cr, {
                children: w.intl.format(w.t.I3R7Vn, {
                    channelName: h
                })
            }), (0, i.jsx)(I.j1, {
                children: w.intl.string(w.t.M8Ao6I)
            })]
        });
        else if (t.hasFlag(k.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(b.A, {
        channel: t
    });
    else return (0, i.jsx)(R.A, {
        channel: t,
        children: w.intl.format(w.t.MFwcqO, {
            name: h
        })
    });
    return M ? (0, i.jsx)(F, {
        channel: t,
        canManageRoles: v
    }) : (0, i.jsx)(I.Ay, {
        channelId: t.id,
        children: (0, i.jsx)(I.j1, {
            children: w.intl.format(w.t.hPVEQG, {
                channelName: h
            })
        })
    })
}