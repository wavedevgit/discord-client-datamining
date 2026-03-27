/** chunk id: 303333 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(309698),
    u = n(262763),
    h = n(743674),
    A = n(888697),
    m = n(581007),
    _ = n(522435),
    g = n(493819),
    p = n(722884),
    f = n(148690),
    x = n(985018),
    C = n(591454);

function E(e) {
    let {
        channel: t,
        imageUrl: n,
        isConnected: l
    } = e, r = (0, h.S)(n), d = s.useCallback(() => {
        (0, p.A)({
            channel: t
        })
    }, [t]), m = s.useCallback(() => {
        (0, A.e)(t.id)
    }, [t.id]), _ = s.useCallback(() => {
        u.A.handleVoiceConnect({
            channel: t,
            connected: !1,
            needSubscriptionToAccess: !1
        })
    }, [t]), E = null != r ? {
        backgroundColor: r
    } : void 0;
    return (0, i.jsxs)("div", {
        className: C.rs,
        children: [l ? (0, i.jsx)("div", {
            className: C.ZS,
            style: E,
            children: (0, i.jsx)(g.A, {
                src: n,
                className: C.Sl
            })
        }) : (0, i.jsx)(c.DUT, {
            className: a()(C.ZS, C.jI),
            style: E,
            onClick: _,
            children: (0, i.jsx)(g.A, {
                src: n,
                className: C.Sl
            })
        }), l ? (0, i.jsxs)("div", {
            className: C.n_,
            children: [(0, i.jsx)(o.m, {
                text: x.intl.string(f.default.XJ4UpB),
                children: (0, i.jsx)(c.DUT, {
                    className: C.HF,
                    onClick: d,
                    children: (0, i.jsx)(c.R2l, {
                        size: "xs",
                        color: "currentColor"
                    })
                })
            }), (0, i.jsx)(o.m, {
                text: x.intl.string(f.default.XV4qT6),
                children: (0, i.jsx)(c.DUT, {
                    className: C.HF,
                    onClick: m,
                    children: (0, i.jsx)(c.ucK, {
                        size: "xs",
                        color: "currentColor"
                    })
                })
            })]
        }) : null]
    })
}

function I(e) {
    let {
        channel: t
    } = e, n = s.useCallback(() => {
        (0, p.A)({
            channel: t
        })
    }, [t]);
    return (0, i.jsx)("div", {
        className: C._o,
        children: (0, i.jsxs)(c.DUT, {
            className: C.hH,
            onClick: n,
            children: [(0, i.jsx)(c.XGR, {
                size: "xs",
                color: "currentColor"
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: x.intl.string(f.default.NGcIOF)
            })]
        })
    })
}

function N(e) {
    let {
        channel: t,
        isConnected: n
    } = e, {
        enableHangoutWindow: l
    } = (0, m.Dm)({
        guildId: t.guild_id,
        location: "HangoutWindow"
    }), a = (0, r.bG)([d.A], () => d.A.getChannelStatus(t), [t]), o = s.useMemo(() => (0, _.TP)(a), [a]), c = s.useMemo(() => null == a ? null : (0, _.K7)(a), [a]);
    return l ? null != a && o && null != c ? (0, i.jsx)(E, {
        channel: t,
        imageUrl: c,
        isConnected: n
    }) : n ? (0, i.jsx)(I, {
        channel: t
    }) : null : null
}