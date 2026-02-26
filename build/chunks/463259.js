/** chunk id: 463259, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M,
    u: () => P
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(384904),
    d = n(395332),
    u = n(566605),
    m = n(429913),
    g = n(379848),
    x = n(840387),
    f = n(201718),
    p = n(961350),
    h = n(615405),
    _ = n(633075),
    A = n(289173),
    I = n(958338),
    j = n(600761),
    v = n(667049),
    E = n(605694),
    T = n(357541),
    b = n(236599),
    y = n(192),
    N = n(128988),
    C = n(795755),
    S = n(53977),
    k = n(982599),
    R = n(515054),
    w = n(266713),
    L = n(985018),
    O = n(519653);

function P(e) {
    let {
        widget: t,
        ...n
    } = e;
    return t instanceof _.R ? (0, i.jsx)(E.A, {
        widget: t,
        ...n
    }) : t instanceof A.Yy ? (0, i.jsx)(C.A, {
        widget: t,
        ...n
    }) : null
}

function D() {
    return (0, i.jsxs)("div", {
        className: O.mJ,
        children: [(0, i.jsx)(o.mir, {
            size: "xs"
        }), (0, i.jsx)(o.Text, {
            "aria-label": L.intl.string(L.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: L.intl.string(L.t["7blcz6"])
        })]
    })
}

function G() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: n
    } = (0, u.A)({
        location: "ApplicationWidgetUpsell"
    });
    return e ? null : (0, i.jsx)(g.Ay, {
        contentTypes: t.map(e => e.dismissibleContent),
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: a
            } = e, s = t.find(e => e.dismissibleContent === l);
            return null == s ? null : (0, i.jsx)(T.A, {
                user: n,
                application: s.application,
                onDismiss: a
            })
        }
    })
}

function U(e) {
    let {
        user: t,
        guildId: n,
        channelId: a
    } = e, s = (0, v.A)(t.id), o = (0, r.bG)([p.default], () => p.default.getId() === t.id), u = (() => {
        let [e, t] = (0, r.yK)([h.A], () => [h.A.ipCountryCode, h.A.ipCountryCodeRequest]), n = (0, x.Z)();
        return l.useEffect(() => {
            null == e && null == t && n && (0, c.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), g = (0, d.JY)({
        location: "UserProfileModalV2Widgets"
    }), j = 0 === s.length && o, E = l.useMemo(() => s.filter(A.fu), [s]), T = l.useMemo(() => s.filter(e => e instanceof _.R), [s]);
    (0, I.Y)(o, E), ((e, t) => {
        let n = l.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, m.A)(n);
        let {
            data: i,
            refetch: a
        } = (0, f.P)(e), s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && (s.current = !1, a())
        }, [a])
    })(t.id, T);
    let N = () => (0, i.jsxs)(i.Fragment, {
        children: [o && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(b.A, {
                className: O.cG
            }), u && (0, i.jsx)(D, {}), g && (0, i.jsx)(G, {})]
        }), s.map((e, l) => (0, i.jsx)(P, {
            widget: e,
            user: t,
            guildId: n,
            channelId: a,
            index: l
        }, e.getUniqueKey()))]
    });
    if (j)
        if (g) return (0, i.jsx)(S.A, {});
        else return (0, i.jsx)(w.A, {});
    return o ? (0, i.jsx)(y.D, {
        children: N()
    }) : N()
}

function M(e) {
    let {
        user: t,
        ...n
    } = e, a = l.useRef(null);
    (0, j.i)({
        containerRef: a
    });
    let r = (0, k.k)(t.id);
    return (0, i.jsxs)(R.K, {
        "data-scroller": !0,
        scrollerRef: a,
        className: s()(O.XG, {
            [O.az]: r
        }),
        fade: !0,
        children: [(0, i.jsx)(N.A, {
            scrollerRef: a
        }), (0, i.jsx)(U, {
            user: t,
            ...n
        })]
    })
}