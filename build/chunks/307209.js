/** Chunk was on 39048 **/
/** chunk id: 307209, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(212245),
    a = n(58149),
    o = n(591552),
    c = n(374084),
    d = n(813516),
    u = n(71393),
    g = n(954571),
    m = n(527678),
    p = n(199940),
    f = n(132514),
    h = n(107795),
    b = n(400812),
    x = n(259866),
    j = n(960756),
    _ = n(652215),
    O = n(985018),
    v = n(117689);

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function E(e) {
    let {
        guildId: t,
        completed: n
    } = e, l = (0, i.bG)([o.A], () => o.A.getEnabled(t)), {
        location: c
    } = (0, s.p)();
    c.object = n ? _.ZSU.ONBOARDING_EDIT : _.ZSU.ONBOARDING_REVIEW;
    let u = async function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        l ? (await (0, h.gr)(t, !1), g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
            action_taken: b.mj[b.mj.TOGGLE_DISABLED],
            location: c
        }))) : (await (0, h.gr)(t, !0), e && (0, p.UP)(t, !0), n ? g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
            action_taken: b.mj[b.mj.TOGGLE_ENABLED],
            location: c
        })) : g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, A(y({}, (0, a.H$)(t)), {
            step: b.Hy[b.Hy.REVIEW],
            back: !1,
            skip: !1,
            completed: !0
        })))
    }, f = () => {
        g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
            action_taken: b.mj[b.mj.PREVIEW],
            location: c
        })), (0, m.X$)(t)
    }, x = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(j.gE, {
            guildId: t,
            onEdit: () => {
                g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
                    action_taken: b.mj[b.mj.EDIT_DEFAULT_CHANNELS],
                    location: c
                })), (0, m.e_)(b.Hy.DEFAULT_CHANNELS)
            },
            disableGoodStatus: n
        }), (0, r.jsx)(d.A, {
            className: v.yF
        }), (0, r.jsx)(j.aV, {
            guildId: t,
            onEdit: () => {
                g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
                    action_taken: b.mj[b.mj.EDIT_CONNECTIONS],
                    location: c
                })), (0, m.e_)(b.Hy.CONNECTIONS)
            },
            disableGoodStatus: n
        }), (0, r.jsx)(d.A, {
            className: v.yF
        }), (0, r.jsx)(j.$i, {
            guildId: t,
            onEdit: () => {
                g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
                    action_taken: b.mj[b.mj.EDIT_CUSTOMIZATION_QUESTIONS],
                    location: c
                })), (0, m.e_)(b.Hy.CUSTOMIZATION_QUESTIONS)
            },
            disableGoodStatus: n
        }), (0, r.jsx)(d.A, {
            className: v.yF
        }), (0, r.jsx)(j.bW, {
            guildId: t,
            onEdit: () => {
                g.default.track(_.HAw.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, A(y({}, (0, a.H$)(t)), {
                    action_taken: b.mj[b.mj.EDIT_HOME_SETTINGS],
                    location: c
                })), (0, m.e_)(b.Hy.HOME_SETTINGS)
            },
            disableGoodStatus: n
        })]
    });
    return n ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N, {
            guildId: t,
            handlePreview: f
        }), (0, r.jsx)(S, {}), (0, r.jsxs)("div", {
            className: v.Qs,
            children: [(0, r.jsx)(I, {
                guildId: t,
                handleOnboardingToggle: u
            }), x]
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: v.Qs,
            children: [(0, r.jsx)(T, {
                guildId: t,
                handleOnboardingToggle: u,
                handlePreview: f
            }), x]
        }), (0, r.jsx)(C, {
            guildId: t
        })]
    })
}

function N(e) {
    let {
        guildId: t,
        handlePreview: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            className: v.wx,
            children: O.intl.string(O.t.mhxUsE)
        }), (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: v.m_,
            children: O.intl.string(O.t.GtWdQH)
        }), (0, r.jsxs)("div", {
            className: v.yj,
            children: [(0, r.jsx)(l.MzZ, {
                target: "_blank",
                href: _.X7G.GUILD_ONBOARDING_EXAMPLES,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "text-link",
                    children: O.intl.string(O.t.Ok55Kh)
                })
            }), (0, r.jsx)("div", {
                className: v.RY
            }), (0, r.jsx)(l.MzZ, {
                onClick: n,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "text-link",
                    children: O.intl.string(O.t["6gsjdM"])
                })
            }), (0, r.jsx)("div", {
                className: v.RY
            }), (0, r.jsx)(x.mU, {
                guildId: t
            })]
        })]
    })
}

function S() {
    let e = "• ";
    return (0, r.jsxs)("div", {
        className: v.lm,
        children: [(0, r.jsx)("img", {
            className: v.kX,
            src: n(903702),
            alt: "wumpus"
        }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                className: v.wx,
                children: O.intl.string(O.t.WslWRL)
            }), (0, r.jsxs)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: [e, O.intl.string(O.t.z9k21H)]
            }), (0, r.jsxs)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: [e, O.intl.string(O.t.t1Lele)]
            })]
        })]
    })
}

function I(e) {
    let {
        guildId: t,
        handleOnboardingToggle: n
    } = e, s = (0, j.n5)(t), a = (0, i.bG)([o.A], () => o.A.getEnabled(t));
    return (0, r.jsx)("div", {
        className: v.NQ,
        children: (0, r.jsx)(l.dOG, {
            label: a ? O.intl.string(O.t.MBdTCZ) : O.intl.string(O.t["Wslim+"]),
            description: a ? O.intl.string(O.t.LokpLi) : O.intl.string(O.t.nBIyJp),
            checked: a,
            onChange: () => n(!1),
            disabled: !a && !s
        })
    })
}

function T(e) {
    let {
        guildId: t,
        handleOnboardingToggle: n,
        handlePreview: s
    } = e, a = (0, j.n5)(t), o = (0, i.bG)([f.A], () => f.A.getSettings()), d = (0, c.Ic)(o);
    return (0, r.jsxs)("div", {
        className: v.cN,
        children: [(0, r.jsxs)("div", {
            className: v.Zj,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                children: a ? O.intl.string(O.t.FcIcT8) : O.intl.string(O.t.R09tJ2)
            }), (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                children: a ? O.intl.string(O.t.ockHVS) : O.intl.string(O.t["u/ji07"])
            })]
        }), (0, r.jsxs)("div", {
            className: v.a4,
            children: [(0, r.jsx)(l.Button, {
                size: "sm",
                variant: "secondary",
                onClick: s,
                text: O.intl.string(O.t["6gsjdM"])
            }), (0, r.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: O.intl.string(O.t.Yz7hsB),
                onClick: () => n(d),
                disabled: !a
            })]
        })]
    })
}

function C(e) {
    let {
        guildId: t
    } = e, n = (0, i.bG)([u.A], () => u.A.getGuild(t));
    return null == n || n.verificationLevel < _.PvD.VERY_HIGH ? null : (0, r.jsxs)("div", {
        className: v.et,
        children: [(0, r.jsx)(l.EpV, {
            size: "xs",
            color: "currentColor",
            className: v.QW
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: O.intl.string(O.t.HVoKZ5)
        })]
    })
}