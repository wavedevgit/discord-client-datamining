/** chunk id: 490358 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(314116),
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
    T = n(985018),
    N = n(665819);

function S(e) {
    let {
        guild: t,
        width: n,
        height: a
    } = e, r = l.useMemo(() => t?.splash != null ? A.Ay.getGuildSplashURL({
        id: t?.id,
        splash: t?.splash
    }) : null, [t?.splash, t?.id]), s = (0, d.S)(r);
    return null == r ? (0, i.jsx)("div", {
        className: N.Eq
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.A, {
            className: N.Yi,
            src: r,
            imageClassName: N.Iv,
            width: n,
            height: a
        }), null != s && (0, i.jsx)("div", {
            className: N.qj,
            style: {
                background: `linear-gradient(180deg, ${(0,h.cb)(s,.16)} 0%, ${(0,h.cb)(s,1)} 100%)`
            }
        }), (0, i.jsx)("div", {
            className: N.qj
        })]
    })
}
let x = e => {
    let {
        guildId: t
    } = e, {
        ref: n,
        width: o,
        height: d
    } = (0, s.Ay)(), A = (0, a.bG)([p.A], () => p.A.getRequest(t)), h = (0, a.bG)([u.A], () => u.A.getGuild(t)), {
        hasFetchedRequestToJoinGuilds: x,
        guildPreviewDisabled: b
    } = (0, a.cf)([p.A], () => ({
        hasFetchedRequestToJoinGuilds: p.A.hasFetchedRequestToJoinGuilds,
        guildPreviewDisabled: p.A.getJoinRequestGuild(t)
    }));
    l.useEffect(() => {
        null != h && (0, c.pX)(C.BVt.CHANNEL(t))
    }, [h, t]), l.useEffect(() => {
        x || _.A.fetchRequestToJoinGuilds()
    }, [x]);
    let v = l.useCallback(() => {
            _.A.removeGuildJoinRequest(t), (0, c.pX)(C.BVt.ME)
        }, [t]),
        y = (e, t) => () => {
            (0, r.A)({
                title: T.intl.string(T.t.y0CVes),
                subtitle: e,
                cancelText: T.intl.string(T.t.oEAioF),
                onConfirm: t,
                confirmText: T.intl.string(T.t.p89ACt)
            })
        },
        O = async () => {
            await _.A.resetGuildJoinRequest(t), (0, m.Ze)(t)
        }, L = e => {
            e ? y(T.intl.format(T.t["9ZezpN"], {
                name: b?.name
            }), v)() : v()
        }, R = y(T.intl.format(T.t.fJwWVt, {
            name: b?.name
        }), v);
    return (0, i.jsxs)("div", {
        className: N.MY,
        ref: n,
        children: [(0, i.jsx)(S, {
            guild: b,
            height: d,
            width: o
        }), (0, i.jsx)("div", {
            className: N.FG,
            children: (() => {
                if (null == A) return null;
                switch (A.applicationStatus) {
                    case g.B5.SUBMITTED:
                        return (0, i.jsx)(f.A, {
                            onWithdrawApplication: () => L(!0),
                            guild: b
                        });
                    case g.B5.REJECTED:
                        return (0, i.jsx)(I.A, {
                            reapplyText: T.intl.string(T.t.I1LYVk),
                            onReapply: O,
                            confirmText: T.intl.string(T.t.g9tK0o),
                            onWithdrawApplication: L,
                            rejectionReason: A.rejectionReason,
                            guild: b
                        });
                    default:
                        return (0, i.jsx)(E.K, {
                            onDiscardApplication: R,
                            onContinueApplication: () => (0, m.Ze)(t),
                            guild: b
                        })
                }
            })()
        }), (0, i.jsx)("div", {
            className: N.T_
        })]
    })
}