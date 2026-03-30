/** chunk id: 332396 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    m = n(63995),
    _ = n(69407),
    g = n(616356),
    p = n(734057),
    f = n(287809),
    x = n(607567),
    E = n(403362),
    C = n(661191),
    I = n(181079),
    N = n(652215),
    S = n(985018),
    b = n(826427);

function T(e, t) {
    return 0 === t.length ? null : (0, i.jsxs)("div", {
        className: b.nM,
        children: [(0, i.jsx)(e, {
            className: b.RI,
            color: "currentColor"
        }), (0, i.jsx)(A.Ay, {
            guildId: void 0,
            users: t,
            max: 6
        })]
    })
}

function v() {
    let e = (0, c.yK)([I.A, p.A], () => C.default.keys(I.A.getFavoriteChannels()).map(e => p.A.getChannel(e)).filter(E.Vq)),
        t = e.map(e => e.id),
        n = e.filter(e => e.type === N.rbe.GUILD_VOICE),
        s = e.filter(e => e.type === N.rbe.GUILD_STAGE_VOICE).map(e => e.id),
        l = (0, c.yK)([x.Ay], () => o().flatMap(n, e => x.Ay.getVoiceStatesForChannel(e).map(e => {
            let {
                user: t
            } = e;
            return t
        })), [n]),
        a = (0, c.yK)([m.A], () => o().flatMap(s, e => m.A.getMutableParticipants(e, _.ip.SPEAKER).filter(e => e.type === _.wY.VOICE).map(e => {
            let {
                user: t
            } = e;
            return t
        }))),
        r = (0, c.bG)([m.A], () => {
            let e = 0;
            for (let t of s) e += m.A.getParticipantCount(t, _.ip.AUDIENCE);
            return e
        }),
        d = (0, c.yK)([g.A], () => g.A.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
        S = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...e.get(i)?.flatMap(e => Array.from(e.userIds)) ?? []);
            return n
        }, [t]),
        v = (0, c.yK)([f.default], () => S.map(e => f.default.getUser(e)), [S]),
        y = (0, c.yK)([f.default], () => d.map(e => f.default.getUser(e)), [d]),
        j = T(u.HKD, l.filter(e => !d.includes(e.id) && !S.includes(e.id))),
        R = 0 === a.length ? null : (0, i.jsxs)("div", {
            className: b.nM,
            children: [(0, i.jsx)(u.qux, {
                size: "lg",
                color: "currentColor",
                className: b.RI
            }), (0, i.jsx)(A.Ay, {
                guildId: void 0,
                users: a,
                max: 3
            }), (0, i.jsxs)("div", {
                className: b.GZ,
                children: [(0, i.jsx)(u.LoC, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)(u.Text, {
                    className: b._I,
                    color: "text-default",
                    variant: "text-xs/medium",
                    children: r
                })]
            })]
        }),
        O = T(u.Fzq, y.filter(e => null != e && !S.includes(e.id))),
        L = T(u.k9F, v);
    return (0, i.jsxs)(i.Fragment, {
        children: [R, j, O, L]
    })
}

function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: a()(b.nM, b.Dl),
            children: (0, i.jsx)("span", {
                className: a()(b.cN, b.NT),
                children: S.intl.string(S.t.wMWyci)
            })
        }), (0, i.jsx)(v, {})]
    })
}

function j(e) {
    let {
        "aria-label": t = !1,
        children: n
    } = e, l = s.useMemo(() => (0, i.jsx)("div", {
        className: b.A_,
        children: (0, i.jsx)(y, {})
    }), []);
    return (0, i.jsx)(d.m_, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n
    })
}