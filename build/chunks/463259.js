/** chunk id: 463259 params = (module,exports,require) **/
n.d(t, {
    A: () => M,
    u: () => L
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
    f = n(840387),
    x = n(201718),
    p = n(961350),
    _ = n(615405),
    I = n(633075),
    h = n(289173),
    A = n(958338),
    E = n(600761),
    T = n(667049),
    v = n(605694),
    j = n(357541),
    C = n(236599),
    N = n(192),
    y = n(128988),
    b = n(795755),
    R = n(53977),
    O = n(982599),
    S = n(515054),
    k = n(266713),
    D = n(985018),
    P = n(803989);

function L(e) {
    let {
        widget: t,
        ...n
    } = e;
    return t instanceof I.R ? (0, i.jsx)(v.A, {
        widget: t,
        ...n
    }) : t instanceof h.Yy ? (0, i.jsx)(b.A, {
        widget: t,
        ...n
    }) : null
}

function G() {
    return (0, i.jsxs)("div", {
        className: P.mJ,
        children: [(0, i.jsx)(o.mir, {
            size: "xs"
        }), (0, i.jsx)(o.Text, {
            "aria-label": D.intl.string(D.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: D.intl.string(D.t["7blcz6"])
        })]
    })
}

function w() {
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
                visibleContent: l,
                markAsDismissed: a
            } = e, s = t.find(e => e.dismissibleContent === l);
            return null == s ? null : (0, i.jsx)(j.A, {
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
    } = e, s = (0, T.A)(t.id), o = (0, r.bG)([p.default], () => p.default.getId() === t.id), u = (() => {
        let [e, t] = (0, r.yK)([_.A], () => [_.A.ipCountryCode, _.A.ipCountryCodeRequest]), n = (0, f.Z)();
        return l.useEffect(() => {
            null == e && null == t && n && (0, c.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), g = (0, d.QR)({
        location: "UserProfileModalV2Widgets"
    }), E = 0 === s.length && o, v = l.useMemo(() => s.filter(h.fu), [s]), j = l.useMemo(() => s.filter(e => e instanceof I.R), [s]);
    (0, A.Y)(o, v), ((e, t) => {
        let n = l.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, m.A)(n);
        let {
            data: i,
            refetch: a
        } = (0, x.P)(e), s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && (s.current = !1, a())
        }, [a])
    })(t.id, j);
    let y = () => (0, i.jsxs)(i.Fragment, {
        children: [o && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.A, {
                className: P.cG
            }), u && (0, i.jsx)(G, {}), g && (0, i.jsx)(w, {})]
        }), s.map((e, l) => (0, i.jsx)(L, {
            widget: e,
            user: t,
            guildId: n,
            channelId: a,
            index: l
        }, e.getUniqueKey()))]
    });
    if (E)
        if (g) return (0, i.jsx)(R.A, {});
        else return (0, i.jsx)(k.A, {});
    return o ? (0, i.jsx)(N.D, {
        children: y()
    }) : y()
}

function M(e) {
    let {
        user: t,
        ...n
    } = e, a = l.useRef(null);
    (0, E.i)({
        containerRef: a
    });
    let r = (0, O.k)(t.id);
    return (0, i.jsxs)(S.K, {
        "data-scroller": !0,
        scrollerRef: a,
        className: s()(P.XG, {
            [P.az]: r
        }),
        fade: !0,
        children: [(0, i.jsx)(y.A, {
            scrollerRef: a
        }), (0, i.jsx)(U, {
            user: t,
            ...n
        })]
    })
}