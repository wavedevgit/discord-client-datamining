/** Chunk was on 1113 **/
/** chunk id: 816144, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B
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
    h = n(495273),
    p = n(265869),
    g = n(772659),
    f = n(437774),
    m = n(622543),
    b = n(576622),
    A = n(95701),
    y = n(546183),
    O = n(808728),
    _ = n(576705),
    x = n(287809),
    j = n(427262),
    v = n(803622),
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
    L = n(652215),
    M = n(746080),
    k = n(985018),
    G = n(82842),
    U = n(473169);

function V(e) {
    let {
        canManageRoles: t,
        channel: n
    } = e, l = t && (0, h.Ae)(n), s = (0, i.bG)([O.Ay], () => null != n.guild_id && n === O.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, p.A)(n.id)) return null;
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

function B(e) {
    var t;
    let {
        channel: n,
        showingBanner: h
    } = e, p = (0, d.Ay)(n), {
        type: A
    } = n, O = (0, i.bG)([x.default], () => n.isPrivate() ? x.default.getUser(n.getRecipientId()) : null), C = j.Ay.useUserTag(O), {
        canManageRoles: P,
        canReadMessageHistory: w
    } = (0, i.cf)([_.A], () => ({
        canManageRoles: _.A.can(L.xBc.MANAGE_ROLES, n),
        canReadMessageHistory: _.A.can(L.xBc.READ_MESSAGE_HISTORY, n)
    })), R = (0, i.bG)([m.A], () => A === L.rbe.DM ? m.A.getMutualGuilds(n.getRecipientId()) : null, [n, A]), D = (0, u.A)(null != (t = null == O ? void 0 : O.id) ? t : L.dJq), {
        authorizedAppToken: B,
        authorizedAppsFetchState: H
    } = (0, i.cf)([y.default], () => ({
        authorizedAppToken: y.default.getNewestTokenForApplication(null == D ? void 0 : D.id),
        authorizedAppsFetchState: y.default.getFetchState()
    })), F = c.A.useExperiment({
        location: "EmptyMessages"
    }).enabledDesktop;
    if (l.useEffect(() => {
            A === L.rbe.DM && null == R && null != O && a.h.wait(() => (0, b.A)(n.getRecipientId(), O.getAvatarURL(null, 80), {
                withMutualGuilds: !0
            }))
        }, [R, A, n, O]), l.useEffect(() => {
            (null == O ? void 0 : O.bot) && H === y.FetchState.NOT_FETCHED && o.A.fetch()
        }, [null == O ? void 0 : O.bot, H]), n.isSystemDM()) return (0, r.jsx)(T.A, {
        channel: n,
        children: k.intl.string(k.t.Rzvnig)
    });
    if (A === L.rbe.DM) {
        let e;
        if (null != O && null != D) {
            let t = [];
            null != B && (t.push((0, r.jsx)(N.X, {
                channel: n,
                user: O
            }, "mute")), t.push((0, r.jsx)(I.L, {
                user: O,
                application: D,
                channel: n,
                oauth2Token: B
            }, "manage"))), F && t.push((0, r.jsx)(g.A, {
                channel: n
            }, "report")), t.length > 0 && (e = (0, r.jsx)("div", {
                className: G.U,
                children: t
            }))
        } else e = (0, r.jsx)(v.A, {
            userId: n.getRecipientId(),
            channel: n,
            showingBanner: h
        });
        return (0, r.jsxs)(T.A, {
            channel: n,
            user: O,
            children: [null != O && !O.isProvisional && (0, r.jsx)(s.Heading, {
                variant: "heading-xl/medium",
                className: U.SX,
                children: C
            }), k.intl.format(k.t["Qvg+6+"], {
                username: p
            }), (null == O ? void 0 : O.isProvisional) && (0, r.jsx)(f.Y, {
                userId: O.id
            }), e]
        })
    }
    if (n.isMultiUserDM())
        if (n.isManaged()) return (0, r.jsxs)(E.Ay, {
            channelId: n.id,
            children: [(0, r.jsx)(E.cr, {
                children: k.intl.format(k.t.I3R7Vn, {
                    channelName: p
                })
            }), (0, r.jsx)(E.j1, {
                children: k.intl.string(k.t.M8Ao6I)
            })]
        });
        else if (n.hasFlag(M.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(S.A, {
        channel: n
    });
    else return (0, r.jsx)(T.A, {
        channel: n,
        children: k.intl.format(k.t.MFwcqO, {
            name: p
        })
    });
    return w ? (0, r.jsx)(V, {
        channel: n,
        canManageRoles: P
    }) : (0, r.jsx)(E.Ay, {
        channelId: n.id,
        children: (0, r.jsx)(E.j1, {
            children: k.intl.format(k.t.hPVEQG, {
                channelName: p
            })
        })
    })
}