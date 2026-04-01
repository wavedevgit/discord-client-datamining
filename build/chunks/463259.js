/** chunk id: 463259 params = (module,exports,require) **/
n.d(t, {
    A: () => F,
    u: () => D
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(384904),
    d = n(395332),
    u = n(566605),
    m = n(429913),
    g = n(379848),
    p = n(840387),
    x = n(201718),
    f = n(961350),
    _ = n(615405),
    h = n(633075),
    A = n(289173),
    I = n(958338),
    v = n(600761),
    j = n(667049),
    E = n(605694),
    T = n(357541),
    N = n(236599),
    C = n(192),
    b = n(128988),
    S = n(795755),
    y = n(53977),
    R = n(982599),
    O = n(515054),
    w = n(266713),
    k = n(985018),
    L = n(803989);

function D(e) {
    let {
        widget: t,
        ...n
    } = e;
    return t instanceof h.R ? (0, i.jsx)(E.A, {
        widget: t,
        ...n
    }) : t instanceof A.Yy ? (0, i.jsx)(S.A, {
        widget: t,
        ...n
    }) : null
}

function P() {
    return (0, i.jsxs)("div", {
        className: L.mJ,
        children: [(0, i.jsx)(o.mir, {
            size: "xs"
        }), (0, i.jsx)(o.Text, {
            "aria-label": k.intl.string(k.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: k.intl.string(k.t["7blcz6"])
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
    return e || null == n ? null : (0, i.jsx)(g.Ay, {
        contentTypes: t.map(e => e.dismissibleContent),
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: a,
                markAsDismissed: l
            } = e, s = t.find(e => e.dismissibleContent === a);
            return null == s ? null : (0, i.jsx)(T.A, {
                user: n,
                application: s.application,
                onDismiss: l
            })
        }
    })
}

function U(e) {
    let {
        user: t,
        guildId: n,
        channelId: l
    } = e, s = (0, j.A)(t.id), o = (0, r.bG)([f.default], () => f.default.getId() === t.id), u = (() => {
        let [e, t] = (0, r.yK)([_.A], () => [_.A.ipCountryCode, _.A.ipCountryCodeRequest]), n = (0, p.Z)();
        return a.useEffect(() => {
            null == e && null == t && n && (0, c.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), g = (0, d.QR)({
        location: "UserProfileModalV2Widgets"
    }), v = 0 === s.length && o, E = a.useMemo(() => s.filter(A.fu), [s]), T = a.useMemo(() => s.filter(e => e instanceof h.R), [s]);
    (0, I.Y)(o, E), ((e, t) => {
        let n = a.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, m.A)(n);
        let {
            data: i,
            refetch: l
        } = (0, x.P)(e), s = a.useRef(null !== i);
        a.useEffect(() => {
            s.current && (s.current = !1, l())
        }, [l])
    })(t.id, T);
    let b = () => (0, i.jsxs)(i.Fragment, {
        children: [o && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N.A, {
                className: L.cG
            }), u && (0, i.jsx)(P, {}), g && (0, i.jsx)(G, {})]
        }), s.map((e, a) => (0, i.jsx)(D, {
            widget: e,
            user: t,
            guildId: n,
            channelId: l,
            index: a
        }, e.getUniqueKey()))]
    });
    if (v)
        if (g) return (0, i.jsx)(y.A, {});
        else return (0, i.jsx)(w.A, {});
    return o ? (0, i.jsx)(C.D, {
        children: b()
    }) : b()
}

function F(e) {
    let {
        user: t,
        ...n
    } = e, l = a.useRef(null);
    (0, v.i)({
        containerRef: l
    });
    let r = (0, R.k)(t.id);
    return (0, i.jsxs)(O.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: s()(L.XG, {
            [L.az]: r
        }),
        fade: !0,
        children: [(0, i.jsx)(b.A, {
            scrollerRef: l
        }), (0, i.jsx)(U, {
            user: t,
            ...n
        })]
    })
}