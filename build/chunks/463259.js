/** chunk id: 463259 params = (module,exports,require) **/
n.d(t, {
    A: () => U,
    u: () => P
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
    g = n(429913),
    m = n(379848),
    x = n(840387),
    p = n(201718),
    f = n(961350),
    h = n(615405),
    _ = n(633075),
    A = n(289173),
    I = n(958338),
    j = n(600761),
    v = n(667049),
    T = n(605694),
    E = n(357541),
    b = n(236599),
    C = n(192),
    N = n(128988),
    S = n(795755),
    y = n(53977),
    R = n(982599),
    k = n(515054),
    w = n(266713),
    O = n(985018),
    L = n(882612);

function P(e) {
    let {
        widget: t,
        ...n
    } = e;
    return t instanceof _.R ? (0, i.jsx)(T.A, {
        widget: t,
        ...n
    }) : t instanceof A.Yy ? (0, i.jsx)(S.A, {
        widget: t,
        ...n
    }) : null
}

function D() {
    return (0, i.jsxs)("div", {
        className: L.mJ,
        children: [(0, i.jsx)(o.mir, {
            size: "xs"
        }), (0, i.jsx)(o.Text, {
            "aria-label": O.intl.string(O.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: O.intl.string(O.t["7blcz6"])
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
    return e || null == n ? null : (0, i.jsx)(m.Ay, {
        contentTypes: t.map(e => e.dismissibleContent),
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: a,
                markAsDismissed: l
            } = e, s = t.find(e => e.dismissibleContent === a);
            return null == s ? null : (0, i.jsx)(E.A, {
                user: n,
                application: s.application,
                onDismiss: l
            })
        }
    })
}

function M(e) {
    let {
        user: t,
        guildId: n,
        channelId: l
    } = e, s = (0, v.A)(t.id), o = (0, r.bG)([f.default], () => f.default.getId() === t.id), u = (() => {
        let [e, t] = (0, r.yK)([h.A], () => [h.A.ipCountryCode, h.A.ipCountryCodeRequest]), n = (0, x.Z)();
        return a.useEffect(() => {
            null == e && null == t && n && (0, c.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), m = (0, d.QR)({
        location: "UserProfileModalV2Widgets"
    }), j = 0 === s.length && o, T = a.useMemo(() => s.filter(A.fu), [s]), E = a.useMemo(() => s.filter(e => e instanceof _.R), [s]);
    (0, I.Y)(o, T), ((e, t) => {
        let n = a.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, g.A)(n);
        let {
            data: i,
            refetch: l
        } = (0, p.P)(e), s = a.useRef(null !== i);
        a.useEffect(() => {
            s.current && (s.current = !1, l())
        }, [l])
    })(t.id, E);
    let N = () => (0, i.jsxs)(i.Fragment, {
        children: [o && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(b.A, {
                className: L.cG
            }), u && (0, i.jsx)(D, {}), m && (0, i.jsx)(G, {})]
        }), s.map((e, a) => (0, i.jsx)(P, {
            widget: e,
            user: t,
            guildId: n,
            channelId: l,
            index: a
        }, e.getUniqueKey()))]
    });
    if (j)
        if (m) return (0, i.jsx)(y.A, {});
        else return (0, i.jsx)(w.A, {});
    return o ? (0, i.jsx)(C.D, {
        children: N()
    }) : N()
}

function U(e) {
    let {
        user: t,
        ...n
    } = e, l = a.useRef(null);
    (0, j.i)({
        containerRef: l
    });
    let r = (0, R.k)(t.id);
    return (0, i.jsxs)(k.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: s()(L.XG, {
            [L.az]: r
        }),
        fade: !0,
        children: [(0, i.jsx)(N.A, {
            scrollerRef: l
        }), (0, i.jsx)(M, {
            user: t,
            ...n
        })]
    })
}