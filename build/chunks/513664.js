/** chunk id: 513664, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => b,
    dd: () => m,
    lD: () => j
});
var r = n(627968);
n(64700);
var l = n(873298),
    i = n(397927),
    s = n(285058),
    a = n(195043),
    o = n(723702),
    c = n(253932),
    u = n(790174),
    d = n(531525),
    p = n(652215),
    h = n(985018),
    g = n(536482),
    f = n(208746);

function m() {
    let e = c.tz.useSetting();
    return (0, r.jsxs)("div", {
        className: f.QF,
        children: [(0, r.jsxs)("div", {
            className: f.v_,
            children: [(0, r.jsx)(i.Heading, {
                className: f.n7,
                variant: "heading-md/medium",
                color: "text-strong",
                children: h.intl.string(h.t.TqdOvC)
            }), !e && (0, r.jsx)("div", {
                className: f.ZT,
                children: (0, r.jsx)(i.wx6, {
                    type: "warning",
                    children: h.intl.string(g.default["xxI0/W"])
                })
            })]
        }), (0, r.jsx)(s.A, {})]
    })
}

function b(e) {
    let {
        className: t
    } = e;
    return (0, r.jsxs)(u.A, {
        className: t,
        title: h.intl.string(h.t.Cq98yL),
        children: [(0, r.jsx)(O, {}), (0, r.jsx)(i.cGx, {
            gap: 32
        }), (0, r.jsx)(A, {}), (0, r.jsx)(i.cGx, {
            gap: 32
        }), (0, r.jsx)(y, {}), (0, r.jsx)(i.cGx, {
            gap: 32
        }), (0, r.jsx)(j, {})]
    })
}

function A() {
    let e = c._Z.useSetting(),
        t = [{
            value: l.Qd.ACTIVITY_STATUS_ON,
            name: h.intl.string(h.t.UzGMH9)
        }, {
            value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
            name: h.intl.string(g.default["/sAeRY"])
        }, {
            value: l.Qd.ACTIVITY_STATUS_OFF,
            name: h.intl.string(g.default.m3oL7Q)
        }];
    return (0, r.jsxs)(i.nVY, {
        label: h.intl.string(g.default.TG0QsS),
        description: h.intl.string(g.default.OO17Lg),
        children: [(0, r.jsx)(i.z6M, {
            label: h.intl.string(g.default["/LHVbt"]),
            options: t,
            value: e,
            onChange: e => {
                c._Z.updateSetting(e)
            }
        }), (0, r.jsx)(m, {})]
    })
}

function y() {
    let e = c.e.useSetting(),
        t = c.UM.useSetting();
    return (0, r.jsx)(a.x, {
        setting: d.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(i.nVY, {
            label: h.intl.string(g.default["5rYBAQ"]),
            children: [(0, r.jsx)(i.dOG, {
                label: h.intl.string(g.default.khuuzv),
                description: h.intl.string(g.default["8EWsJ8"]),
                id: "allow-friends-to-join-my-game",
                checked: e,
                onChange: e => c.e.updateSetting(e)
            }), (0, r.jsx)(i.dOG, {
                label: h.intl.string(g.default.Uz5Ipi),
                description: h.intl.string(g.default.CZI2Gb),
                id: "allow-vc-join-without-request",
                checked: t,
                onChange: e => c.UM.updateSetting(e)
            })]
        })
    })
}

function O() {
    let e = c.tz.useSetting(),
        t = o.isPlatformEmbedded ? h.intl.string(g.default.UQ9RHJ) : h.intl.string(h.t.oKqC4t);
    return (0, r.jsx)(a.x, {
        setting: d.H.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(i.BJc, {
            gap: 32,
            children: [(0, r.jsx)("div", {
                children: h.intl.string(g.default.t2YsrV)
            }), (0, r.jsx)(i.dOG, {
                label: h.intl.string(g.default.WhdCGP),
                description: t,
                id: "share-my-activity",
                checked: e,
                onChange: c.tz.updateSetting
            })]
        })
    })
}

function j() {
    return (0, r.jsx)(a.x, {
        setting: d.H.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(i.ZpM, {
            type: i.ZpM.Types.PRIMARY,
            className: f.AX,
            children: (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: h.intl.format(h.t.xvCsx4, {
                    termsLink: p.X7G.TERMS,
                    privacyLink: p.X7G.PRIVACY
                })
            })
        })
    })
}