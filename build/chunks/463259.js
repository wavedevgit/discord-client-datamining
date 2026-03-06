/** chunk id: 463259 params = (module,exports,require) **/
n.d(t, {
    A: () => U,
    u: () => D
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    d = n(384904),
    c = n(395332),
    u = n(566605),
    g = n(429913),
    m = n(379848),
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
    N = n(192),
    S = n(128988),
    y = n(795755),
    C = n(53977),
    R = n(982599),
    k = n(515054),
    L = n(266713),
    O = n(985018),
    w = n(519653);

function D(e) {
    let {
        widget: t,
        ...n
    } = e;
    return t instanceof _.R ? (0, i.jsx)(E.A, {
        widget: t,
        ...n
    }) : t instanceof A.Yy ? (0, i.jsx)(y.A, {
        widget: t,
        ...n
    }) : null
}

function P() {
    return (0, i.jsxs)("div", {
        className: w.mJ,
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
    return e ? null : (0, i.jsx)(m.Ay, {
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

function M(e) {
    let {
        user: t,
        guildId: n,
        channelId: a
    } = e, s = (0, v.A)(t.id), o = (0, r.bG)([p.default], () => p.default.getId() === t.id), u = (() => {
        let [e, t] = (0, r.yK)([h.A], () => [h.A.ipCountryCode, h.A.ipCountryCodeRequest]), n = (0, x.Z)();
        return l.useEffect(() => {
            null == e && null == t && n && (0, d.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), m = (0, c.JY)({
        location: "UserProfileModalV2Widgets"
    }), j = 0 === s.length && o, E = l.useMemo(() => s.filter(A.fu), [s]), T = l.useMemo(() => s.filter(e => e instanceof _.R), [s]);
    (0, I.Y)(o, E), ((e, t) => {
        let n = l.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, g.A)(n);
        let {
            data: i,
            refetch: a
        } = (0, f.P)(e), s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && (s.current = !1, a())
        }, [a])
    })(t.id, T);
    let S = () => (0, i.jsxs)(i.Fragment, {
        children: [o && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(b.A, {
                className: w.cG
            }), u && (0, i.jsx)(P, {}), m && (0, i.jsx)(G, {})]
        }), s.map((e, l) => (0, i.jsx)(D, {
            widget: e,
            user: t,
            guildId: n,
            channelId: a,
            index: l
        }, e.getUniqueKey()))]
    });
    if (j)
        if (m) return (0, i.jsx)(C.A, {});
        else return (0, i.jsx)(L.A, {});
    return o ? (0, i.jsx)(N.D, {
        children: S()
    }) : S()
}

function U(e) {
    let {
        user: t,
        ...n
    } = e, a = l.useRef(null);
    (0, j.i)({
        containerRef: a
    });
    let r = (0, R.k)(t.id);
    return (0, i.jsxs)(k.K, {
        "data-scroller": !0,
        scrollerRef: a,
        className: s()(w.XG, {
            [w.az]: r
        }),
        fade: !0,
        children: [(0, i.jsx)(S.A, {
            scrollerRef: a
        }), (0, i.jsx)(M, {
            user: t,
            ...n
        })]
    })
}