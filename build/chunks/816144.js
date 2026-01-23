/** Chunk was on 97492 **/
/** chunk id: 816144, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => V
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(73153),
    o = n(824552),
    c = n(782934),
    u = n(496231),
    d = n(47167),
    p = n(495273),
    h = n(265869),
    f = n(772659),
    g = n(437774),
    m = n(622543),
    b = n(576622),
    A = n(95701),
    y = n(546183),
    _ = n(808728),
    O = n(576705),
    j = n(287809),
    v = n(427262),
    x = n(803622),
    E = n(314307),
    C = n(393194),
    S = n(455067),
    I = n(432817),
    N = n(324799),
    T = n(635157),
    P = n(379768),
    w = n(391257),
    R = n(914835),
    D = n(825244),
    M = n(652215),
    L = n(746080),
    k = n(985018),
    G = n(82842),
    U = n(473169);

function B(e) {
    let {
        canManageRoles: t,
        channel: n
    } = e, l = t && (0, p.Ae)(n), s = (0, i.bG)([_.Ay], () => null != n.guild_id && n === _.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(C.A, {
        channel: n
    });
    if (A.Le.has(n.type)) return (0, r.jsx)(R.A, {
        channel: n
    });
    if (s) return (0, r.jsx)(D.A, {
        channel: n
    });
    if (l) return (0, r.jsx)(P.A, {
        channel: n
    });
    return (0, r.jsx)(w.A, {
        channel: n
    })
}

function V(e) {
    var t;
    let {
        channel: n,
        showingBanner: p
    } = e, h = (0, d.Ay)(n), {
        type: A
    } = n, _ = (0, i.bG)([j.default], () => n.isPrivate() ? j.default.getUser(n.getRecipientId()) : null), C = v.Ay.useUserTag(_), {
        canManageRoles: P,
        canReadMessageHistory: w
    } = (0, i.cf)([O.A], () => ({
        canManageRoles: O.A.can(M.xBc.MANAGE_ROLES, n),
        canReadMessageHistory: O.A.can(M.xBc.READ_MESSAGE_HISTORY, n)
    })), R = (0, i.bG)([m.A], () => A === M.rbe.DM ? m.A.getMutualGuilds(n.getRecipientId()) : null, [n, A]), D = (0, u.A)(null != (t = null == _ ? void 0 : _.id) ? t : M.dJq), {
        authorizedAppToken: V,
        authorizedAppsFetchState: F
    } = (0, i.cf)([y.default], () => ({
        authorizedAppToken: y.default.getNewestTokenForApplication(null == D ? void 0 : D.id),
        authorizedAppsFetchState: y.default.getFetchState()
    })), H = c.A.useExperiment({
        location: "EmptyMessages"
    }).enabledDesktop;
    if (l.useEffect(() => {
            A === M.rbe.DM && null == R && null != _ && a.h.wait(() => (0, b.A)(n.getRecipientId(), _.getAvatarURL(null, 80), {
                withMutualGuilds: !0
            }))
        }, [R, A, n, _]), l.useEffect(() => {
            (null == _ ? void 0 : _.bot) && F === y.FetchState.NOT_FETCHED && o.A.fetch()
        }, [null == _ ? void 0 : _.bot, F]), n.isSystemDM()) return (0, r.jsx)(T.A, {
        channel: n,
        children: k.intl.string(k.t.Rzvnig)
    });
    if (A === M.rbe.DM) {
        let e;
        if (null != _ && null != D) {
            let t = [];
            null != V && (t.push((0, r.jsx)(N.X, {
                channel: n,
                user: _
            }, "mute")), t.push((0, r.jsx)(I.L, {
                user: _,
                application: D,
                channel: n,
                oauth2Token: V
            }, "manage"))), H && t.push((0, r.jsx)(f.A, {
                channel: n
            }, "report")), t.length > 0 && (e = (0, r.jsx)("div", {
                className: G.U,
                children: t
            }))
        } else e = (0, r.jsx)(x.A, {
            userId: n.getRecipientId(),
            channel: n,
            showingBanner: p
        });
        return (0, r.jsxs)(T.A, {
            channel: n,
            user: _,
            children: [null != _ && !_.isProvisional && (0, r.jsx)(s.Heading, {
                variant: "heading-xl/medium",
                className: U.SX,
                children: C
            }), k.intl.format(k.t["Qvg+6+"], {
                username: h
            }), (null == _ ? void 0 : _.isProvisional) && (0, r.jsx)(g.Y, {
                userId: _.id
            }), e]
        })
    }
    if (n.isMultiUserDM())
        if (n.isManaged()) return (0, r.jsxs)(E.Ay, {
            channelId: n.id,
            children: [(0, r.jsx)(E.cr, {
                children: k.intl.format(k.t.I3R7Vn, {
                    channelName: h
                })
            }), (0, r.jsx)(E.j1, {
                children: k.intl.string(k.t.M8Ao6I)
            })]
        });
        else if (n.hasFlag(L.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(S.A, {
        channel: n
    });
    else return (0, r.jsx)(T.A, {
        channel: n,
        children: k.intl.format(k.t.MFwcqO, {
            name: h
        })
    });
    return w ? (0, r.jsx)(B, {
        channel: n,
        canManageRoles: P
    }) : (0, r.jsx)(E.Ay, {
        channelId: n.id,
        children: (0, r.jsx)(E.j1, {
            children: k.intl.format(k.t.hPVEQG, {
                channelName: h
            })
        })
    })
}