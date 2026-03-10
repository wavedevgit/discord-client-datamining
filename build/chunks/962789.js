/** chunk id: 962789 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    T: () => v
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(873298),
    a = n(990078),
    r = n(397927),
    o = n(486020),
    d = n(975571),
    c = n(661191),
    u = n(253932),
    _ = n(780964),
    g = n(978304),
    m = n(840065),
    A = n(744479),
    h = n(871930),
    p = n(578746),
    x = n(531525),
    E = n(652215),
    T = n(985018),
    S = n(419205);

function C(e) {
    let {
        applications: t
    } = e, n = s.useMemo(() => t.sort((e, t) => c.default.compare(t.id, e.id)), [t]), l = s.useMemo(() => {
        let e = [];
        for (let t = 0; t < 3; t++) {
            let i = n[t];
            if (null == i) break;
            e.push(i.name)
        }
        let t = e.join(", "),
            s = n.length - 3;
        return s > 0 ? T.intl.format(T.t.sHFdTg, {
            gameList: t,
            plusMoreHook: (e, t) => (0, i.jsx)(r.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-muted",
                children: T.intl.format(T.t["EADv+4"], {
                    count: s
                })
            }, t)
        }) : e.join(", ")
    }, [n]), d = s.useMemo(() => {
        let e = [];
        for (let t = 0; t < 3; t++) {
            let s = n[t];
            if (null == s) break;
            let {
                icon: l,
                name: r,
                id: d
            } = s, c = o.Ay.getApplicationIconURL({
                id: d,
                icon: l
            });
            e.push((0, i.jsx)(a.m, {
                __unsupportedReactNodeAsText: r,
                children: (0, i.jsx)("img", {
                    src: c,
                    "aria-label": r,
                    className: S.Kk
                })
            }, d))
        }
        let t = n.length - 3;
        return t > 0 && e.push((0, i.jsx)("div", {
            className: S.lK,
            children: (0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: `+${t}`
            })
        }, "omitted")), e
    }, [n]);
    return (0, i.jsxs)("div", {
        className: S.wx,
        children: [(0, i.jsxs)("div", {
            className: S.kX,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: l
            }), (0, i.jsxs)(r.DUT, {
                onClick: () => {
                    (0, m.openUserSettings)(_.X.AUTHORIZED_APPS_PANEL, {
                        section: E.nc_.AUTHORIZED_APPS
                    })
                },
                className: S.bJ,
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "interactive-text-default",
                    children: T.intl.format(T.t.oYaYOe, {})
                }), (0, i.jsx)(r._BQ, {
                    size: "xxs",
                    color: r.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                    className: S.g7
                })]
            })]
        }), (0, i.jsx)("div", {
            className: S.yF
        }), (0, i.jsx)("div", {
            className: S.lJ,
            children: d
        })]
    })
}

function f() {
    let e = u.Zk.useSetting();
    return (0, i.jsx)(h.h, {
        setting: x.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, i.jsx)(p.Ay, {
            title: T.intl.string(T.t.XpBObB),
            note: T.intl.format(T.t.oZsHTD, {
                helpdeskArticle: d.A.getArticleURL(E.MVz.SLAYER_GAME_FRIENDS)
            }),
            value: e,
            onChange: u.Zk.updateSetting
        })
    })
}

function I() {
    let e = u.TA.useSetting(),
        t = e === l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [{
            name: T.intl.string(T.t.JIFnN9),
            value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
        }, {
            name: T.intl.string(T.t.rRdsk1),
            value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
        }, {
            name: T.intl.string(T.t.AolKwN),
            value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
        }];
    return (0, i.jsxs)(h.h, {
        setting: x.H.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [(0, i.jsx)(h._, {
            header: T.intl.string(T.t["ms+Tme"]),
            description: T.intl.string(T.t["4NN4+/"])
        }), (0, i.jsx)(r.z6M, {
            value: t,
            options: n,
            onChange: e => u.TA.updateSetting(e)
        })]
    })
}

function b() {
    return (0, i.jsxs)("div", {
        className: S.do,
        children: [(0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: S.xV,
            children: T.intl.string(T.t["+0U77d"])
        }), (0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: T.intl.format(T.t.V8wClM, {
                helpdeskArticle: d.A.getArticleURL(E.MVz.SOCIAL_LAYER_CONNECTIONS)
            })
        })]
    })
}

function N(e) {
    let {
        applications: t
    } = e;
    return t.length > 0 ? (0, i.jsx)(C, {
        applications: t
    }) : (0, i.jsx)(b, {})
}

function v() {
    let {
        showLoadingIndicator: e,
        slayerSdkApplications: t
    } = (0, g.A)(!0);
    return e ? (0, i.jsx)(r.y$y, {}) : (0, i.jsx)(N, {
        applications: t
    })
}

function j() {
    let {
        showLoadingIndicator: e,
        slayerSdkApplications: t
    } = (0, g.A)(!0);
    return (0, i.jsx)(A.A, {
        children: e ? (0, i.jsx)(r.y$y, {}) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N, {
                applications: t
            }), t.length > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(f, {}), (0, i.jsx)("div", {
                    className: S.yF
                }), (0, i.jsx)(I, {})]
            })]
        })
    })
}