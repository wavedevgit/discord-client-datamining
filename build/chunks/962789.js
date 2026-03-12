/** chunk id: 962789 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    T: () => v
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(873298),
    r = n(990078),
    a = n(397927),
    o = n(486020),
    d = n(975571),
    c = n(661191),
    u = n(253932),
    _ = n(780964),
    m = n(978304),
    g = n(840065),
    A = n(744479),
    h = n(871930),
    x = n(578746),
    p = n(531525),
    T = n(652215),
    E = n(985018),
    C = n(761547);

function S(e) {
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
        return s > 0 ? E.intl.format(E.t.sHFdTg, {
            gameList: t,
            plusMoreHook: (e, t) => (0, i.jsx)(a.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-muted",
                children: E.intl.format(E.t["EADv+4"], {
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
                name: a,
                id: d
            } = s, c = o.Ay.getApplicationIconURL({
                id: d,
                icon: l
            });
            e.push((0, i.jsx)(r.m, {
                __unsupportedReactNodeAsText: a,
                children: (0, i.jsx)("img", {
                    src: c,
                    "aria-label": a,
                    className: C.Kk
                })
            }, d))
        }
        let t = n.length - 3;
        return t > 0 && e.push((0, i.jsx)("div", {
            className: C.lK,
            children: (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: `+${t}`
            })
        }, "omitted")), e
    }, [n]);
    return (0, i.jsxs)("div", {
        className: C.wx,
        children: [(0, i.jsxs)("div", {
            className: C.kX,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: l
            }), (0, i.jsxs)(a.DUT, {
                onClick: () => {
                    (0, g.openUserSettings)(_.X.AUTHORIZED_APPS_PANEL, {
                        section: T.nc_.AUTHORIZED_APPS
                    })
                },
                className: C.bJ,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "interactive-text-default",
                    children: E.intl.format(E.t.oYaYOe, {})
                }), (0, i.jsx)(a._BQ, {
                    size: "xxs",
                    color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                    className: C.g7
                })]
            })]
        }), (0, i.jsx)("div", {
            className: C.yF
        }), (0, i.jsx)("div", {
            className: C.lJ,
            children: d
        })]
    })
}

function f() {
    let e = u.Zk.useSetting();
    return (0, i.jsx)(h.h, {
        setting: p.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, i.jsx)(x.Ay, {
            title: E.intl.string(E.t.XpBObB),
            note: E.intl.format(E.t.oZsHTD, {
                helpdeskArticle: d.A.getArticleURL(T.MVz.SLAYER_GAME_FRIENDS)
            }),
            value: e,
            onChange: u.Zk.updateSetting
        })
    })
}

function N() {
    let e = u.TA.useSetting(),
        t = e === l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [{
            name: E.intl.string(E.t.JIFnN9),
            value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
        }, {
            name: E.intl.string(E.t.rRdsk1),
            value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
        }, {
            name: E.intl.string(E.t.AolKwN),
            value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
        }];
    return (0, i.jsxs)(h.h, {
        setting: p.H.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [(0, i.jsx)(h._, {
            header: E.intl.string(E.t["ms+Tme"]),
            description: E.intl.string(E.t["4NN4+/"])
        }), (0, i.jsx)(a.z6M, {
            value: t,
            options: n,
            onChange: e => u.TA.updateSetting(e)
        })]
    })
}

function b() {
    return (0, i.jsxs)("div", {
        className: C.do,
        children: [(0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: C.xV,
            children: E.intl.string(E.t["+0U77d"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: E.intl.format(E.t.V8wClM, {
                helpdeskArticle: d.A.getArticleURL(T.MVz.SOCIAL_LAYER_CONNECTIONS)
            })
        })]
    })
}

function I(e) {
    let {
        applications: t
    } = e;
    return t.length > 0 ? (0, i.jsx)(S, {
        applications: t
    }) : (0, i.jsx)(b, {})
}

function v() {
    let {
        showLoadingIndicator: e,
        slayerSdkApplications: t
    } = (0, m.A)(!0);
    return e ? (0, i.jsx)(a.y$y, {}) : (0, i.jsx)(I, {
        applications: t
    })
}

function j() {
    let {
        showLoadingIndicator: e,
        slayerSdkApplications: t
    } = (0, m.A)(!0);
    return (0, i.jsx)(A.A, {
        children: e ? (0, i.jsx)(a.y$y, {}) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(I, {
                applications: t
            }), t.length > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(f, {}), (0, i.jsx)("div", {
                    className: C.yF
                }), (0, i.jsx)(N, {})]
            })]
        })
    })
}