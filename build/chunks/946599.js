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
    x = n(985018),
    p = n(740857);

function f(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: a,
        applicationId: r,
        className: o,
        disableInteraction: d = !1
    } = e, f = t?.filter(e => null != (0, m.W3)(e)) ?? [], _ = f.length > 0, A = n && !d && (0, u.mS)(a) && f.length < 20, {
        trackUserProfileAction: v
    } = (0, c.NJ)(), T = (0, l.useRef)(new Map), E = (0, l.useRef)(null), b = (0, l.useRef)(null), [N, S] = (0, l.useState)(0), [y, C] = (0, l.useState)(!1), R = j(E, b, f, T, S);
    if ((0, l.useEffect)(() => (R(), window.addEventListener("resize", R), () => {
            window.removeEventListener("resize", R)
        }), [R, f?.join("")]), !_ && !A) return null;
    let k = y ? f : f.slice(0, f.length - N);
    return (0, i.jsxs)("div", {
        className: s()(p.I4, o),
        children: [_ && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: p.Tw,
                "aria-label": x.intl.string(x.t.EfjTi4),
                children: k.map(e => (0, i.jsx)(h, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: a,
                    ref: t => {
                        null != t && T.current.set(e, t)
                    },
                    disableInteraction: d
                }, e))
            }), N > 0 && (0, i.jsx)(I, {
                buttonRef: E,
                isExpanded: y,
                numberOfOverflowingTags: N,
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
        className: p.Tc,
        ref: d,
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
                className: p.DT,
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
    return (0, i.jsx)(d.A, {
        direction: d.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: p.OW
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
    } = e, c = t ? x.intl.string(x.t.z9VPrQ) : x.intl.string(x.t.mriLXL), u = t ? x.intl.string(x.t.z9VPrQ) : x.intl.formatToPlainString(x.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: p.X1,
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
            className: t ? p.cS : p.X1,
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