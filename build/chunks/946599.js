/** chunk id: 946599, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(990078),
    o = n(397927),
    c = n(147925),
    d = n(183555),
    u = n(735321),
    g = n(122338),
    m = n(394245),
    x = n(985018),
    f = n(315657);

function p(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: a,
        applicationId: r,
        className: o,
        disableInteraction: c = !1
    } = e, p = t?.filter(e => null != (0, m.W3)(e)) ?? [], _ = p.length > 0, A = n && !c && (0, u.mS)(a) && p.length < 20, {
        trackUserProfileAction: v
    } = (0, d.NJ)(), E = (0, l.useRef)(new Map), T = (0, l.useRef)(null), b = (0, l.useRef)(null), [y, N] = (0, l.useState)(0), [S, C] = (0, l.useState)(!1), k = j(T, b, p, E, N);
    if ((0, l.useEffect)(() => (k(), window.addEventListener("resize", k), () => {
            window.removeEventListener("resize", k)
        }), [k, p?.join("")]), !_ && !A) return null;
    let R = S ? p : p.slice(0, p.length - y);
    return (0, i.jsxs)("div", {
        className: s()(f.I4, o),
        children: [_ && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: f.Tw,
                "aria-label": x.intl.string(x.t.EfjTi4),
                children: R.map(e => (0, i.jsx)(h, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: a,
                    ref: t => {
                        null != t && E.current.set(e, t)
                    },
                    disableInteraction: c
                }, e))
            }), y > 0 && (0, i.jsx)(I, {
                buttonRef: T,
                isExpanded: S,
                numberOfOverflowingTags: y,
                onExpandTags: () => {
                    C(!0), v({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    C(!1), v({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: c
            })]
        }), A && (0, i.jsx)(g.A, {
            tags: t,
            widgetType: a,
            applicationId: r,
            ref: b
        })]
    })
}
let h = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: l,
        widgetType: a,
        disableInteraction: s,
        ref: c
    } = e, {
        trackUserProfileEditAction: g
    } = (0, d.NJ)(), p = (0, m.W3)(t);
    if (null == p) return null;
    let {
        getText: h,
        icon: _
    } = p;
    return (0, i.jsxs)("li", {
        className: f.Tc,
        ref: c,
        children: [(0, i.jsx)(_, {
            size: "xxs"
        }), (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: h()
        }), n && !s && (0, i.jsx)(r.m, {
            text: x.intl.string(x.t.Otv9fP),
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, u.tg)(a, l, t), g({
                        action: "TAG_REMOVED",
                        widgetEdited: a,
                        gameId: l
                    })
                },
                className: f.DT,
                "aria-label": x.intl.formatToPlainString(x.t.GCn1ne, {
                    tag: h()
                }),
                children: (0, i.jsx)(o.PGe, {
                    size: "xxs",
                    color: "currentColor"
                })
            })
        })]
    })
};

function _(e) {
    let {
        numberOfOverflowingTags: t
    } = e;
    return (0, i.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: `+${t}`
    })
}

function A() {
    return (0, i.jsx)(c.A, {
        direction: c.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: f.OW
    })
}

function I(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: l,
        onCollapseTags: a,
        disableInteraction: s,
        buttonRef: c
    } = e, d = t ? x.intl.string(x.t.z9VPrQ) : x.intl.string(x.t.mriLXL), u = t ? x.intl.string(x.t.z9VPrQ) : x.intl.formatToPlainString(x.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: f.X1,
        ref: c,
        children: (0, i.jsx)(_, {
            numberOfOverflowingTags: n
        })
    }) : (0, i.jsx)(r.m, {
        text: d,
        ariaHidden: t,
        children: (0, i.jsx)(o.DUT, {
            innerRef: c,
            onClick: t ? a : l,
            "aria-label": u,
            className: t ? f.cS : f.X1,
            children: t ? (0, i.jsx)(A, {}) : (0, i.jsx)(_, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let j = (e, t, n, i, a) => (0, l.useCallback)(() => {
    if (null == n) return void a(0);
    let l = e.current?.getBoundingClientRect().width ?? 0,
        s = t.current?.getBoundingClientRect().width ?? 0,
        r = s > 0 ? 8 : 4,
        o = 0,
        c = 0,
        d = i.current;
    for (let e = 0; e < n.length; e++) {
        let t = d.get(n[e]);
        if (null != t) {
            if ((c += t.offsetWidth + 4) > 296) break;
            o++
        }
    }
    c = 0;
    for (let e = o; e < n.length; e++) {
        let t = d.get(n[e]);
        if (null != t) {
            if ((c += t.offsetWidth + 4) > 296 - l - s - r) break;
            o++
        }
    }
    a(n.length - o)
}, [e, t, n?.join(""), i, a])