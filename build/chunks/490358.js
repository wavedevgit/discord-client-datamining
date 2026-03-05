/** chunk id: 490358, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(314116),
    s = n(765671),
    o = n(4616),
    d = n(743674),
    c = n(976860),
    u = n(71393),
    A = n(486020),
    h = n(998304),
    _ = n(624458),
    m = n(202384),
    g = n(513461),
    p = n(212455),
    E = n(892040),
    I = n(385310),
    f = n(6939),
    C = n(652215),
    T = n(852431),
    N = n(985018),
    S = n(453270);

function x(e) {
    let {
        guild: t,
        width: n,
        height: l
    } = e, a = r.useMemo(() => t?.splash != null ? A.Ay.getGuildSplashURL({
        id: t?.id,
        splash: t?.splash
    }) : null, [t?.splash, t?.id]), s = (0, d.S)(a);
    return null == a ? (0, i.jsx)("div", {
        className: S.Eq
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.A, {
            className: S.Yi,
            src: a,
            imageClassName: S.Iv,
            width: n,
            height: l
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
    } = (0, s.Ay)(), [A, h] = r.useState(T.go.INITIAL), v = (0, l.bG)([p.A], () => p.A.getRequest(t)), y = (0, l.bG)([u.A], () => u.A.getGuild(t)), {
        hasFetchedRequestToJoinGuilds: b,
        guildPreviewDisabled: O
    } = (0, l.cf)([p.A], () => ({
        hasFetchedRequestToJoinGuilds: p.A.hasFetchedRequestToJoinGuilds,
        guildPreviewDisabled: p.A.getJoinRequestGuild(t)
    }));
    r.useEffect(() => {
        null != y && (0, c.pX)(C.BVt.CHANNEL(t))
    }, [y, t]), r.useEffect(() => {
        b || _.A.fetchRequestToJoinGuilds()
    }, [b]);
    let L = r.useCallback(() => {
            h(Math.max(A, T.go.FILLING)), _.A.removeGuildJoinRequest(t), (0, c.pX)(C.BVt.ME)
        }, [t, A]),
        R = (e, t) => () => {
            (0, a.A)({
                title: N.intl.string(N.t.y0CVes),
                subtitle: e,
                cancelText: N.intl.string(N.t.oEAioF),
                onConfirm: t,
                confirmText: N.intl.string(N.t.p89ACt)
            })
        },
        P = async () => {
            await _.A.resetGuildJoinRequest(t), (0, m.Ze)(t)
        }, j = e => {
            e ? R(N.intl.format(N.t["9ZezpN"], {
                name: O?.name
            }), L)() : L()
        }, D = R(N.intl.format(N.t.fJwWVt, {
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
                    case g.B5.SUBMITTED:
                        return (0, i.jsx)(f.A, {
                            onWithdrawApplication: () => j(!0),
                            guild: O
                        });
                    case g.B5.REJECTED:
                        return (0, i.jsx)(I.A, {
                            reapplyText: N.intl.string(N.t.I1LYVk),
                            onReapply: P,
                            confirmText: N.intl.string(N.t.g9tK0o),
                            onWithdrawApplication: j,
                            rejectionReason: v.rejectionReason,
                            guild: O
                        });
                    default:
                        return (0, i.jsx)(E.K, {
                            onDiscardApplication: D,
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