/** chunk id: 946599 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(990078),
    o = n(397927),
    d = n(147925),
    c = n(183555),
    u = n(735321),
    g = n(122338),
    m = n(394245),
    p = n(985018),
    x = n(740857);

function f(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: a,
        applicationId: r,
        className: o,
        disableInteraction: d = !1
    } = e, f = t?.filter(e => null != (0, m.W3)(e)) ?? [], _ = f.length > 0, A = n && !d && (0, u.mS)(a) && f.length < 20, {
        trackUserProfileAction: E
    } = (0, c.NJ)(), v = (0, l.useRef)(new Map), T = (0, l.useRef)(null), b = (0, l.useRef)(null), [C, S] = (0, l.useState)(0), [N, y] = (0, l.useState)(!1), R = j(T, b, f, v, S);
    if ((0, l.useEffect)(() => (R(), window.addEventListener("resize", R), () => {
            window.removeEventListener("resize", R)
        }), [R, f?.join("")]), !_ && !A) return null;
    let O = N ? f : f.slice(0, f.length - C);
    return (0, i.jsxs)("div", {
        className: s()(x.I4, o),
        children: [_ && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: x.Tw,
                "aria-label": p.intl.string(p.t.EfjTi4),
                children: O.map(e => (0, i.jsx)(h, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: a,
                    ref: t => {
                        null != t && v.current.set(e, t)
                    },
                    disableInteraction: d
                }, e))
            }), C > 0 && (0, i.jsx)(I, {
                buttonRef: T,
                isExpanded: N,
                numberOfOverflowingTags: C,
                onExpandTags: () => {
                    y(!0), E({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    y(!1), E({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: d
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
        ref: d
    } = e, {
        trackUserProfileEditAction: g
    } = (0, c.NJ)(), f = (0, m.W3)(t);
    if (null == f) return null;
    let {
        getText: h,
        icon: _
    } = f;
    return (0, i.jsxs)("li", {
        className: x.Tc,
        ref: d,
        children: [(0, i.jsx)(_, {
            size: "xxs"
        }), (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: h()
        }), n && !s && (0, i.jsx)(r.m, {
            text: p.intl.string(p.t.Otv9fP),
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, u.tg)(a, l, t), g({
                        action: "TAG_REMOVED",
                        widgetEdited: a,
                        gameId: l
                    })
                },
                className: x.DT,
                "aria-label": p.intl.formatToPlainString(p.t.GCn1ne, {
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
    return (0, i.jsx)(d.A, {
        direction: d.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: x.OW
    })
}

function I(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: l,
        onCollapseTags: a,
        disableInteraction: s,
        buttonRef: d
    } = e, c = t ? p.intl.string(p.t.z9VPrQ) : p.intl.string(p.t.mriLXL), u = t ? p.intl.string(p.t.z9VPrQ) : p.intl.formatToPlainString(p.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: x.X1,
        ref: d,
        children: (0, i.jsx)(_, {
            numberOfOverflowingTags: n
        })
    }) : (0, i.jsx)(r.m, {
        text: c,
        ariaHidden: t,
        children: (0, i.jsx)(o.DUT, {
            innerRef: d,
            onClick: t ? a : l,
            "aria-label": u,
            className: t ? x.cS : x.X1,
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
        d = 0,
        c = i.current;
    for (let e = 0; e < n.length; e++) {
        let t = c.get(n[e]);
        if (null != t) {
            if ((d += t.offsetWidth + 4) > 296) break;
            o++
        }
    }
    d = 0;
    for (let e = o; e < n.length; e++) {
        let t = c.get(n[e]);
        if (null != t) {
            if ((d += t.offsetWidth + 4) > 296 - l - s - r) break;
            o++
        }
    }
    a(n.length - o)
}, [e, t, n?.join(""), i, a])