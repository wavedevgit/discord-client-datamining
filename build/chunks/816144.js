/** chunk id: 816144, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H
}), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(73153),
    o = n(824552),
    c = n(782934),
    u = n(496231),
    d = n(47167),
    h = n(495273),
    p = n(265869),
    f = n(772659),
    m = n(437774),
    g = n(622543),
    A = n(576622),
    b = n(95701),
    _ = n(546183),
    y = n(808728),
    v = n(576705),
    E = n(287809),
    O = n(427262),
    C = n(803622),
    S = n(314307),
    x = n(393194),
    j = n(455067),
    I = n(432817),
    T = n(324799),
    N = n(635157),
    P = n(379768),
    w = n(391257),
    R = n(914835),
    D = n(825244),
    M = n(652215),
    k = n(746080),
    L = n(985018),
    U = n(82842),
    G = n(473169);

function F(e) {
    let {
        canManageRoles: t,
        channel: n
    } = e, r = t && (0, h.Ae)(n), a = (0, i.bG)([y.Ay], () => null != n.guild_id && n === y.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, p.A)(n.id)) return null;
    if (n.isForumPost()) return (0, l.jsx)(x.A, {
        channel: n
    });
    if (b.Le.has(n.type)) return (0, l.jsx)(R.A, {
        channel: n
    });
    if (a) return (0, l.jsx)(D.A, {
        channel: n
    });
    if (r) return (0, l.jsx)(P.A, {
        channel: n
    });
    return (0, l.jsx)(w.A, {
        channel: n
    })
}

function H(e) {
    var t;
    let {
        channel: n,
        showingBanner: h
    } = e, p = (0, d.Ay)(n), {
        type: b
    } = n, y = (0, i.bG)([E.default], () => n.isPrivate() ? E.default.getUser(n.getRecipientId()) : null), x = O.Ay.useUserTag(y), {
        canManageRoles: P,
        canReadMessageHistory: w
    } = (0, i.cf)([v.A], () => ({
        canManageRoles: v.A.can(M.xBc.MANAGE_ROLES, n),
        canReadMessageHistory: v.A.can(M.xBc.READ_MESSAGE_HISTORY, n)
    })), R = (0, i.bG)([g.A], () => b === M.rbe.DM ? g.A.getMutualGuilds(n.getRecipientId()) : null, [n, b]), D = (0, u.A)(null != (t = null == y ? void 0 : y.id) ? t : M.dJq), {
        authorizedAppToken: H,
        authorizedAppsFetchState: B
    } = (0, i.cf)([_.default], () => ({
        authorizedAppToken: _.default.getNewestTokenForApplication(null == D ? void 0 : D.id),
        authorizedAppsFetchState: _.default.getFetchState()
    })), V = c.A.useExperiment({
        location: "EmptyMessages"
    }).enabledDesktop;
    if (r.useEffect(() => {
            b === M.rbe.DM && null == R && null != y && s.h.wait(() => (0, A.A)(n.getRecipientId(), y.getAvatarURL(null, 80), {
                withMutualGuilds: !0
            }))
        }, [R, b, n, y]), r.useEffect(() => {
            (null == y ? void 0 : y.bot) && B === _.FetchState.NOT_FETCHED && o.A.fetch()
        }, [null == y ? void 0 : y.bot, B]), n.isSystemDM()) return (0, l.jsx)(N.A, {
        channel: n,
        children: L.intl.string(L.t.Rzvnig)
    });
    if (b === M.rbe.DM) {
        let e;
        if (null != y && null != D) {
            let t = [];
            null != H && (t.push((0, l.jsx)(T.X, {
                channel: n,
                user: y
            }, "mute")), t.push((0, l.jsx)(I.L, {
                user: y,
                application: D,
                channel: n,
                oauth2Token: H
            }, "manage"))), V && t.push((0, l.jsx)(f.A, {
                channel: n
            }, "report")), t.length > 0 && (e = (0, l.jsx)("div", {
                className: U.U,
                children: t
            }))
        } else e = (0, l.jsx)(C.A, {
            userId: n.getRecipientId(),
            channel: n,
            showingBanner: h
        });
        return (0, l.jsxs)(N.A, {
            channel: n,
            user: y,
            children: [null != y && !y.isProvisional && (0, l.jsx)(a.Heading, {
                variant: "heading-xl/medium",
                className: G.SX,
                children: x
            }), L.intl.format(L.t["Qvg+6+"], {
                username: p
            }), (null == y ? void 0 : y.isProvisional) && (0, l.jsx)(m.Y, {
                userId: y.id
            }), e]
        })
    }
    if (n.isMultiUserDM())
        if (n.isManaged()) return (0, l.jsxs)(S.Ay, {
            channelId: n.id,
            children: [(0, l.jsx)(S.cr, {
                children: L.intl.format(L.t.I3R7Vn, {
                    channelName: p
                })
            }), (0, l.jsx)(S.j1, {
                children: L.intl.string(L.t.M8Ao6I)
            })]
        });
        else if (n.hasFlag(k.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, l.jsx)(j.A, {
        channel: n
    });
    else return (0, l.jsx)(N.A, {
        channel: n,
        children: L.intl.format(L.t.MFwcqO, {
            name: p
        })
    });
    return w ? (0, l.jsx)(F, {
        channel: n,
        canManageRoles: P
    }) : (0, l.jsx)(S.Ay, {
        channelId: n.id,
        children: (0, l.jsx)(S.j1, {
            children: L.intl.format(L.t.hPVEQG, {
                channelName: p
            })
        })
    })
}