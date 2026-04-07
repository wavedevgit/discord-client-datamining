/** chunk id: 332396 params = (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    _ = n(63995),
    m = n(69407),
    p = n(616356),
    g = n(734057),
    f = n(287809),
    x = n(607567),
    E = n(403362),
    I = n(661191),
    C = n(181079),
    N = n(652215),
    T = n(985018),
    S = n(826427);

function b(e, t) {
    return 0 === t.length ? null : (0, i.jsxs)("div", {
        className: S.nM,
        children: [(0, i.jsx)(e, {
            className: S.RI,
            color: "currentColor"
        }), (0, i.jsx)(A.Ay, {
            guildId: void 0,
            users: t,
            max: 6
        })]
    })
}

function v() {
    let e = (0, d.yK)([C.A, g.A], () => I.default.keys(C.A.getFavoriteChannels()).map(e => g.A.getChannel(e)).filter(E.Vq)),
        t = e.map(e => e.id),
        n = e.filter(e => e.type === N.rbe.GUILD_VOICE),
        l = e.filter(e => e.type === N.rbe.GUILD_STAGE_VOICE).map(e => e.id),
        s = (0, d.yK)([x.Ay], () => o().flatMap(n, e => x.Ay.getVoiceStatesForChannel(e).map(e => {
            let {
                user: t
            } = e;
            return t
        })), [n]),
        a = (0, d.yK)([_.A], () => o().flatMap(l, e => _.A.getMutableParticipants(e, m.ip.SPEAKER).filter(e => e.type === m.wY.VOICE).map(e => {
            let {
                user: t
            } = e;
            return t
        }))),
        r = (0, d.bG)([_.A], () => {
            let e = 0;
            for (let t of l) e += _.A.getParticipantCount(t, m.ip.AUDIENCE);
            return e
        }),
        c = (0, d.yK)([p.A], () => p.A.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
        T = (0, d.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...e.get(i)?.flatMap(e => Array.from(e.userIds)) ?? []);
            return n
        }, [t]),
        v = (0, d.yK)([f.default], () => T.map(e => f.default.getUser(e)), [T]),
        y = (0, d.yK)([f.default], () => c.map(e => f.default.getUser(e)), [c]),
        j = b(u.HKD, s.filter(e => !c.includes(e.id) && !T.includes(e.id))),
        R = 0 === a.length ? null : (0, i.jsxs)("div", {
            className: S.nM,
            children: [(0, i.jsx)(u.qux, {
                size: "lg",
                color: "currentColor",
                className: S.RI
            }), (0, i.jsx)(A.Ay, {
                guildId: void 0,
                users: a,
                max: 3
            }), (0, i.jsxs)("div", {
                className: S.GZ,
                children: [(0, i.jsx)(u.LoC, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)(u.Text, {
                    className: S._I,
                    color: "text-default",
                    variant: "text-xs/medium",
                    children: r
                })]
            })]
        }),
        O = b(u.Fzq, y.filter(e => null != e && !T.includes(e.id))),
        L = b(u.k9F, v);
    return (0, i.jsxs)(i.Fragment, {
        children: [R, j, O, L]
    })
}

function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: a()(S.nM, S.Dl),
            children: (0, i.jsx)("span", {
                className: a()(S.cN, S.NT),
                children: T.intl.string(T.t.wMWyci)
            })
        }), (0, i.jsx)(v, {})]
    })
}

function j(e) {
    let {
        "aria-label": t = !1,
        children: n
    } = e, s = l.useMemo(() => (0, i.jsx)("div", {
        className: S.A_,
        children: (0, i.jsx)(y, {})
    }), []);
    return (0, i.jsx)(c.m_, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n
    })
}