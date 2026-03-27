/** chunk id: 27715 params = (module,exports,require) **/
n.d(t, {
    T: () => f
}), n(321073);
var i = n(627968),
    s = n(64700);
n(873298);
var l = n(990078),
    a = n(397927),
    r = n(486020),
    o = n(975571),
    d = n(661191);
n(253932);
var c = n(780964),
    u = n(978304),
    m = n(840065);
n(505653), n(106148), n(650832);
var _ = n(652215),
    g = n(985018),
    x = n(252272);

function A(e) {
    let {
        applications: t
    } = e, n = s.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]), o = s.useMemo(() => {
        let e = [];
        for (let t = 0; t < 3; t++) {
            let i = n[t];
            if (null == i) break;
            e.push(i.name)
        }
        let t = e.join(", "),
            s = n.length - 3;
        return s > 0 ? g.intl.format(g.t.sHFdTg, {
            gameList: t,
            plusMoreHook: (e, t) => (0, i.jsx)(a.Text, {
                tag: "span",
                variant: "text-sm/medium",
                color: "text-muted",
                children: g.intl.format(g.t["EADv+4"], {
                    count: s
                })
            }, t)
        }) : e.join(", ")
    }, [n]), u = s.useMemo(() => {
        let e = [];
        for (let t = 0; t < 3; t++) {
            let s = n[t];
            if (null == s) break;
            let {
                icon: a,
                name: o,
                id: d
            } = s, c = r.Ay.getApplicationIconURL({
                id: d,
                icon: a
            });
            e.push((0, i.jsx)(l.m, {
                __unsupportedReactNodeAsText: o,
                children: (0, i.jsx)("img", {
                    src: c,
                    "aria-label": o,
                    className: x.Kk
                })
            }, d))
        }
        let t = n.length - 3;
        return t > 0 && e.push((0, i.jsx)("div", {
            className: x.lK,
            children: (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: `+${t}`
            })
        }, "omitted")), e
    }, [n]);
    return (0, i.jsxs)("div", {
        className: x.wx,
        children: [(0, i.jsxs)("div", {
            className: x.kX,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: o
            }), (0, i.jsxs)(a.DUT, {
                onClick: () => {
                    (0, m.openUserSettings)(c.X.AUTHORIZED_APPS_PANEL)
                },
                className: x.bJ,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "interactive-text-default",
                    children: g.intl.format(g.t.oYaYOe, {})
                }), (0, i.jsx)(a._BQ, {
                    size: "xxs",
                    color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                    className: x.g7
                })]
            })]
        }), (0, i.jsx)("div", {
            className: x.yF
        }), (0, i.jsx)("div", {
            className: x.lJ,
            children: u
        })]
    })
}

function h() {
    return (0, i.jsxs)("div", {
        className: x.do,
        children: [(0, i.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: x.xV,
            children: g.intl.string(g.t["+0U77d"])
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.intl.format(g.t.V8wClM, {
                helpdeskArticle: o.A.getArticleURL(_.MVz.SOCIAL_LAYER_CONNECTIONS)
            })
        })]
    })
}

function p(e) {
    let {
        applications: t
    } = e;
    return t.length > 0 ? (0, i.jsx)(A, {
        applications: t
    }) : (0, i.jsx)(h, {})
}

function f() {
    let {
        showLoadingIndicator: e,
        slayerSdkApplications: t
    } = (0, u.A)(!0);
    return e ? (0, i.jsx)(a.y$y, {}) : (0, i.jsx)(p, {
        applications: t
    })
}