/** chunk id: 490358 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(314116),
    s = n(765671),
    o = n(4616),
    d = n(743674),
    c = n(976860),
    u = n(71393),
    A = n(486020),
    h = n(998304),
    _ = n(624458),
    m = n(202384),
    p = n(513461),
    g = n(212455),
    E = n(892040),
    I = n(385310),
    f = n(6939),
    C = n(652215),
    T = n(852431),
    N = n(985018),
    S = n(584811);

function x(e) {
    let {
        guild: t,
        width: n,
        height: r
    } = e, l = a.useMemo(() => t?.splash != null ? A.Ay.getGuildSplashURL({
        id: t?.id,
        splash: t?.splash
    }) : null, [t?.splash, t?.id]), s = (0, d.S)(l);
    return null == l ? (0, i.jsx)("div", {
        className: S.Eq
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.A, {
            className: S.Yi,
            src: l,
            imageClassName: S.Iv,
            width: n,
            height: r
        }), null != s && (0, i.jsx)("div", {
            className: S.qj,
            style: {
                background: `linear-gradient(180deg, ${(0,h.cb)(s,.16)} 0%, ${(0,h.cb)(s,1)} 100%)`
            }
        }), (0, i.jsx)("div", {
            className: S.qj
        })]
    })
}
let v = e => {
    let {
        guildId: t
    } = e, {
        ref: n,
        width: o,
        height: d
    } = (0, s.Ay)(), [A, h] = a.useState(T.go.INITIAL), v = (0, r.bG)([g.A], () => g.A.getRequest(t)), b = (0, r.bG)([u.A], () => u.A.getGuild(t)), {
        hasFetchedRequestToJoinGuilds: y,
        guildPreviewDisabled: O
    } = (0, r.cf)([g.A], () => ({
        hasFetchedRequestToJoinGuilds: g.A.hasFetchedRequestToJoinGuilds,
        guildPreviewDisabled: g.A.getJoinRequestGuild(t)
    }));
    a.useEffect(() => {
        null != b && (0, c.pX)(C.BVt.CHANNEL(t))
    }, [b, t]), a.useEffect(() => {
        y || _.A.fetchRequestToJoinGuilds()
    }, [y]);
    let L = a.useCallback(() => {
            h(Math.max(A, T.go.FILLING)), _.A.removeGuildJoinRequest(t), (0, c.pX)(C.BVt.ME)
        }, [t, A]),
        R = (e, t) => () => {
            (0, l.A)({
                title: N.intl.string(N.t.y0CVes),
                subtitle: e,
                cancelText: N.intl.string(N.t.oEAioF),
                onConfirm: t,
                confirmText: N.intl.string(N.t.p89ACt)
            })
        },
        P = async () => {
            await _.A.resetGuildJoinRequest(t), (0, m.Ze)(t)
        }, D = e => {
            e ? R(N.intl.format(N.t["9ZezpN"], {
                name: O?.name
            }), L)() : L()
        }, M = R(N.intl.format(N.t.fJwWVt, {
            name: O?.name
        }), L);
    return (0, i.jsxs)("div", {
        className: S.MY,
        ref: n,
        children: [(0, i.jsx)(x, {
            guild: O,
            height: d,
            width: o
        }), (0, i.jsx)("div", {
            className: S.FG,
            children: (() => {
                if (null == v) return null;
                switch (v.applicationStatus) {
                    case p.B5.SUBMITTED:
                        return (0, i.jsx)(f.A, {
                            onWithdrawApplication: () => D(!0),
                            guild: O
                        });
                    case p.B5.REJECTED:
                        return (0, i.jsx)(I.A, {
                            reapplyText: N.intl.string(N.t.I1LYVk),
                            onReapply: P,
                            confirmText: N.intl.string(N.t.g9tK0o),
                            onWithdrawApplication: D,
                            rejectionReason: v.rejectionReason,
                            guild: O
                        });
                    default:
                        return (0, i.jsx)(E.K, {
                            onDiscardApplication: M,
                            onContinueApplication: () => (0, m.Ze)(t),
                            guild: O
                        })
                }
            })()
        }), (0, i.jsx)("div", {
            className: S.T_
        })]
    })
}