/** Chunk was on 65298 **/
/** chunk id: 498336, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var a = n(627968),
    l = n(989349),
    r = n.n(l),
    i = n(311907),
    s = n(562465),
    o = n(554146),
    c = n(397927),
    d = n(923408),
    u = n(387265),
    m = n(230135),
    p = n(45780),
    h = n(665171),
    x = n(942975),
    g = n(594061),
    f = n(617617),
    b = n(859241),
    v = n(71393),
    j = n(967198),
    _ = n(642020),
    y = n(652215),
    A = n(45298);
async function C(e, t, n) {
    await s.Bo.patch({
        url: y.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: {
            applied_boost_ids: t.map(e => e.id),
            ends_at: n ? null : r()().add(1, "day")
        },
        rejectWithError: !0
    }), (0, d.VU)(e), (0, x.Xd)(e, !0)
}
async function S(e) {
    await s.Bo.post({
        url: y.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e),
        rejectWithError: !0
    })
}

function O() {
    let e = (0, i.bG)([j.A], () => j.A.getGuildId()),
        t = (0, i.bG)([v.A], () => {
            var t;
            return null == (t = v.A.getGuild(e)) ? void 0 : t.name
        }),
        n = (0, i.yK)([f.A], () => [..._.DX, ..._.gh].filter(t => null != e && (0, p.zs)(t, e))),
        l = (0, i.yK)([b.A], () => {
            var t;
            return null != e && null != (t = b.A.getAppliedGuildBoostsForGuild(e)) ? t : []
        });
    if (null != e) return (0, a.jsxs)(c.IpV, {
        className: A.kL,
        children: [(0, a.jsx)("div", {
            className: A.uW,
            children: (0, a.jsx)(c.Heading, {
                variant: "heading-md/normal",
                children: "Current guild: ".concat(t)
            })
        }), (0, a.jsxs)("div", {
            className: A.uW,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                className: A.wx,
                children: "Reset Notification Indicators"
            }), (0, a.jsx)(c.Button, {
                variant: "primary",
                text: "Reset",
                onClick: () => {
                    (0, x.qM)()
                }
            })]
        }), (0, a.jsxs)("div", {
            className: A.uW,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                className: A.wx,
                children: "Reset Progress Bar State"
            }), (0, a.jsx)(c.Button, {
                variant: "primary",
                text: "Reset",
                onClick: m.O
            })]
        }), (0, a.jsxs)("div", {
            className: A.uW,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                children: "Set Warning State"
            }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)(c.Button, {
                    variant: "primary",
                    text: "Set Half Boosts expiring in 1 day",
                    onClick: () => {
                        C(e, l.slice(Math.floor(l.length / 2)), !1)
                    }
                }), (0, a.jsx)(c.Button, {
                    variant: "primary",
                    text: "Reset End Date",
                    onClick: () => {
                        C(e, l, !0)
                    }
                })]
            })]
        }), (0, a.jsxs)("div", {
            className: A.uW,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                className: A.wx,
                children: "Reset User Level DCs"
            }), (0, a.jsx)(c.BJc, {
                gap: 16,
                children: _.tB.map(e => (0, a.jsx)(u.A, {
                    className: A.z6,
                    content: o.M[e]
                }, o.M[e]))
            })]
        }), (0, a.jsx)("div", {
            className: A.uW,
            children: (0, a.jsx)(c.nVY, {
                label: "Reset Guild Level DCs",
                children: _.DX.map(t => (0, a.jsx)(c.dOG, {
                    label: (0, _.Qi)(t),
                    checked: n.includes(t),
                    onChange: n => {
                        n ? (0, p._$)(t, e, !1) : ((0, g._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, p.hk)(t, e))
                    }
                }, t))
            })
        }), (0, a.jsx)("div", {
            className: A.uW,
            children: (0, a.jsx)(c.nVY, {
                label: "Reset Server Tag Guild Level DCs",
                children: _.gh.map(t => (0, a.jsx)(c.dOG, {
                    label: (0, _.Qi)(t),
                    checked: n.includes(t),
                    onChange: n => {
                        n ? (0, p._$)(t, e, !1) : ((0, g._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, p.hk)(t, e))
                    }
                }, t))
            })
        }), (0, a.jsxs)("div", {
            className: A.uW,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                className: A.wx,
                children: "Reset Powerup Rollback DCs"
            }), _.cC.map(e => (0, a.jsx)(u.A, {
                className: A.z6,
                content: o.M[e]
            }, o.M[e]))]
        }), (0, a.jsxs)("div", {
            className: A.uW,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                className: A.wx,
                children: "Send Powerups System Message"
            }), (0, a.jsx)(c.Button, {
                variant: "primary",
                text: "Send System Message",
                onClick: () => {
                    S(e)
                }
            })]
        }), (0, a.jsx)(c.Button, {
            variant: "primary",
            text: "Reset GameServer ToS",
            onClick: () => {
                (0, h.Wp)(!1)
            }
        })]
    })
}