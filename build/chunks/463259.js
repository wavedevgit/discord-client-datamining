/** chunk id: 463259 params = (module,exports,require) **/
n.d(t, {
    A: () => M,
    u: () => w
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(395332),
    d = n(566605),
    u = n(429913),
    g = n(323082),
    _ = n(379848),
    m = n(840387),
    f = n(201718),
    x = n(961350),
    p = n(615405),
    I = n(633075),
    A = n(289173),
    h = n(958338),
    E = n(600761),
    v = n(667049),
    j = n(605694),
    T = n(357541),
    b = n(236599),
    C = n(192),
    N = n(128988),
    k = n(795755),
    S = n(53977),
    O = n(982599),
    L = n(515054),
    P = n(266713),
    R = n(985018),
    D = n(882612);

function w(e) {
    let {
        widget: t,
        ...n
    } = e;
    return t instanceof I.R ? (0, i.jsx)(j.A, {
        widget: t,
        ...n
    }) : t instanceof A.Yy ? (0, i.jsx)(k.A, {
        widget: t,
        ...n
    }) : null
}

function G() {
    return (0, i.jsxs)("div", {
        className: D.mJ,
        children: [(0, i.jsx)(o.mir, {
            size: "xs"
        }), (0, i.jsx)(o.Text, {
            "aria-label": R.intl.string(R.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.intl.string(R.t["7blcz6"])
        })]
    })
}

function y() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: n
    } = (0, d.A)({
        location: "ApplicationWidgetUpsell"
    });
    return e || null == n ? null : (0, i.jsx)(_.Ay, {
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
    } = e, s = (0, v.A)(t.id), o = (0, r.bG)([x.default], () => x.default.getId() === t.id), d = (() => {
        let [e, t] = (0, r.yK)([p.A], () => [p.A.ipCountryCode, p.A.ipCountryCodeRequest]), n = (0, m.Z)();
        return a.useEffect(() => {
            null == e && null == t && n && (0, g.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), _ = (0, c.QR)({
        location: "UserProfileModalV2Widgets"
    }), E = 0 === s.length && o, j = a.useMemo(() => s.filter(A.fu), [s]), T = a.useMemo(() => s.filter(e => e instanceof I.R), [s]);
    (0, h.Y)(o, j), ((e, t) => {
        let n = a.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, u.A)(n);
        let {
            data: i,
            refetch: l
        } = (0, f.P)(e), s = a.useRef(null !== i);
        a.useEffect(() => {
            s.current && (s.current = !1, l())
        }, [l])
    })(t.id, T);
    let N = () => (0, i.jsxs)(i.Fragment, {
        children: [o && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(b.A, {
                className: D.cG
            }), d && (0, i.jsx)(G, {}), _ && (0, i.jsx)(y, {})]
        }), s.map((e, a) => (0, i.jsx)(w, {
            widget: e,
            user: t,
            guildId: n,
            channelId: l,
            index: a
        }, e.getUniqueKey()))]
    });
    if (E)
        if (_) return (0, i.jsx)(S.A, {});
        else return (0, i.jsx)(P.A, {});
    return o ? (0, i.jsx)(C.D, {
        children: N()
    }) : N()
}

function M(e) {
    let {
        user: t,
        ...n
    } = e, l = a.useRef(null);
    (0, E.i)({
        containerRef: l
    });
    let r = (0, O.k)(t.id);
    return (0, i.jsxs)(L.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: s()(D.XG, {
            [D.az]: r
        }),
        fade: !0,
        children: [(0, i.jsx)(N.A, {
            scrollerRef: l
        }), (0, i.jsx)(U, {
            user: t,
            ...n
        })]
    })
}