/** chunk id: 946599 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(990078),
    o = n(397927),
    d = n(147925),
    c = n(183555),
    u = n(735321),
    g = n(122338),
    m = n(394245),
    x = n(985018),
    f = n(740857);

function p(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: l,
        applicationId: r,
        className: o,
        disableInteraction: d = !1
    } = e, p = t?.filter(e => null != (0, m.W3)(e)) ?? [], _ = p.length > 0, A = n && !d && (0, u.mS)(l) && p.length < 20, {
        trackUserProfileAction: v
    } = (0, c.NJ)(), E = (0, a.useRef)(new Map), T = (0, a.useRef)(null), b = (0, a.useRef)(null), [C, S] = (0, a.useState)(0), [N, y] = (0, a.useState)(!1), R = j(T, b, p, E, S);
    if ((0, a.useEffect)(() => (R(), window.addEventListener("resize", R), () => {
            window.removeEventListener("resize", R)
        }), [R, p?.join("")]), !_ && !A) return null;
    let k = N ? p : p.slice(0, p.length - C);
    return (0, i.jsxs)("div", {
        className: s()(f.I4, o),
        children: [_ && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: f.Tw,
                "aria-label": x.intl.string(x.t.EfjTi4),
                children: k.map(e => (0, i.jsx)(h, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: l,
                    ref: t => {
                        null != t && E.current.set(e, t)
                    },
                    disableInteraction: d
                }, e))
            }), C > 0 && (0, i.jsx)(I, {
                buttonRef: T,
                isExpanded: N,
                numberOfOverflowingTags: C,
                onExpandTags: () => {
                    y(!0), v({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    y(!1), v({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: d
            })]
        }), A && (0, i.jsx)(g.A, {
            tags: t,
            widgetType: l,
            applicationId: r,
            ref: b
        })]
    })
}
let h = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: a,
        widgetType: l,
        disableInteraction: s,
        ref: d
    } = e, {
        trackUserProfileEditAction: g
    } = (0, c.NJ)(), p = (0, m.W3)(t);
    if (null == p) return null;
    let {
        getText: h,
        icon: _
    } = p;
    return (0, i.jsxs)("li", {
        className: f.Tc,
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
                    (0, u.tg)(l, a, t), g({
                        action: "TAG_REMOVED",
                        widgetEdited: l,
                        gameId: a
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
    return (0, i.jsx)(d.A, {
        direction: d.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: f.OW
    })
}

function I(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: a,
        onCollapseTags: l,
        disableInteraction: s,
        buttonRef: d
    } = e, c = t ? x.intl.string(x.t.z9VPrQ) : x.intl.string(x.t.mriLXL), u = t ? x.intl.string(x.t.z9VPrQ) : x.intl.formatToPlainString(x.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: f.X1,
        ref: d,
        children: (0, i.jsx)(_, {
            numberOfOverflowingTags: n
        })
    }) : (0, i.jsx)(r.m, {
        text: c,
        ariaHidden: t,
        children: (0, i.jsx)(o.DUT, {
            innerRef: d,
            onClick: t ? l : a,
            "aria-label": u,
            className: t ? f.cS : f.X1,
            children: t ? (0, i.jsx)(A, {}) : (0, i.jsx)(_, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let j = (e, t, n, i, l) => (0, a.useCallback)(() => {
    if (null == n) return void l(0);
    let a = e.current?.getBoundingClientRect().width ?? 0,
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
            if ((d += t.offsetWidth + 4) > 296 - a - s - r) break;
            o++
        }
    }
    l(n.length - o)
}, [e, t, n?.join(""), i, l])