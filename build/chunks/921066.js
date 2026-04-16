/** chunk id: 921066 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var i, r = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(473193),
    o = n(397927),
    c = n(775602),
    u = n(793574),
    d = n(509536),
    _ = n(881635),
    E = n(567771),
    A = n(363487),
    m = n(828162),
    I = n(763754),
    T = n(888675),
    N = n(652215),
    g = n(985018),
    p = n(448643),
    C = n(274993),
    f = n(218924);

function h(e) {
    let t = (0, A.A)(e);
    return s.useCallback(() => {
        null != e && (t ? (0, m.A)(e, u.A.GUILD_BOOSTING_SYSTEM_MESSAGE) : (0, d.K4)({
            guildId: e,
            location: {
                section: N.JJy.CHANNEL_TEXT_AREA,
                object: N.ZSU.BOOST_ANNOUNCEMENT_UPSELL
            }
        }))
    }, [e, t])
}

function S(e) {
    let {
        className: t,
        animate: n
    } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)("img", {
            className: p.fj,
            src: n ? C.A : f.A,
            alt: "",
            "aria-hidden": !0
        })
    })
}

function R(e) {
    let {
        title: t,
        body: n
    } = e;
    return (0, r.jsxs)("div", {
        className: p.Qs,
        children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            scaleFontToUserSetting: !0,
            className: p.DD,
            children: t
        }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            scaleFontToUserSetting: !0,
            className: p.rf,
            children: n
        })]
    })
}

function x(e) {
    let {
        guild: t,
        firstBooster: n
    } = e;
    return (0, r.jsx)("div", {
        className: p.o1,
        children: (0, r.jsx)(_.A, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: N.liQ.GUILD_CHANNEL,
                section: N.JJy.CHANNEL_TEXT_AREA,
                object: N.ZSU.BOOST_ANNOUNCEMENT_UPSELL
            },
            analyticsLocations: [n ? u.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER : u.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE]
        })
    })
}

function O(e) {
    let {
        guild: t,
        children: n
    } = e, i = h(t?.id);
    return (0, r.jsx)(o.DUT, {
        tag: "a",
        role: "link",
        className: p.oT,
        onClick: i,
        children: n
    })
}

function M(e) {
    let t, u, {
            message: d,
            guild: _,
            usernameHook: A,
            showCta: m
        } = e,
        C = (t = (0, a.bG)([c.A], () => c.A.useReducedMotion), u = (i || (i = n.t(s, 2))).useContext(l.C)?.animate ?? !1, !t && u),
        f = (0, I.Ay)(d),
        M = A(f),
        D = d.hasFlag(N.pr7.IS_FIRST_BOOSTER),
        U = h(_?.id),
        P = D ? g.intl.format(g.t["/1IQGD"], {
            username: f.nick,
            usernameHook: M
        }) : g.intl.format(g.t.SbSWvY, {
            username: f.nick,
            usernameHook: M,
            numSubscriptions: (0, E.A)(d)
        }),
        L = m ? g.intl.format(g.t.dWm8Iu, {
            learnMoreHook: e => (0, r.jsx)(O, {
                guild: _,
                children: e
            })
        }) : g.intl.string(g.t["0Mdw0t"]),
        v = (0, r.jsxs)("div", {
            className: p.kL,
            children: [(0, r.jsx)(S, {
                className: p.rc,
                animate: C
            }), (0, r.jsx)(R, {
                title: P,
                body: L
            }), m && null != _ && (0, r.jsx)(x, {
                guild: _,
                firstBooster: D
            })]
        }),
        y = (0, r.jsx)(o._Jp, {
            className: p.Kk
        });
    return (0, r.jsx)(T.A, {
        contentClassName: p.$O,
        iconNode: y,
        iconContainerClassName: p.zc,
        children: m ? v : (0, r.jsx)(o.DUT, {
            className: p.w8,
            onClick: U,
            children: v
        })
    })
}