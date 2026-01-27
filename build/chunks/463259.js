/** Chunk was on 94682 **/
/** chunk id: 463259, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B,
    u: () => L
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    c = n(384904),
    u = n(395332),
    d = n(566605),
    f = n(429913),
    p = n(379848),
    g = n(840387),
    m = n(201718),
    b = n(961350),
    y = n(615405),
    O = n(633075),
    j = n(289173),
    x = n(958338),
    h = n(600761),
    v = n(667049),
    _ = n(605694),
    A = n(357541),
    I = n(236599),
    w = n(192),
    P = n(128988),
    E = n(795755),
    S = n(53977),
    T = n(982599),
    N = n(515054),
    C = n(266713),
    D = n(985018),
    R = n(368379);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function G(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
}

function L(e) {
    let {
        widget: t
    } = e, n = G(e, ["widget"]);
    return t instanceof O.R ? (0, r.jsx)(_.A, k({
        widget: t
    }, n)) : t instanceof j.Yy ? (0, r.jsx)(E.A, k({
        widget: t
    }, n)) : null
}

function U() {
    return (0, r.jsxs)("div", {
        className: R.mJ,
        children: [(0, r.jsx)(s.mir, {
            size: "xs"
        }), (0, r.jsx)(s.Text, {
            "aria-label": D.intl.string(D.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: D.intl.string(D.t["7blcz6"])
        })]
    })
}

function M() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: n
    } = (0, d.A)({
        location: "ApplicationWidgetUpsell"
    });
    return e ? null : (0, r.jsx)(p.Ay, {
        contentTypes: t.map(e => e.dismissibleContent),
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: i
            } = e, a = t.find(e => e.dismissibleContent === l);
            return null == a ? null : (0, r.jsx)(A.A, {
                user: n,
                application: a.application,
                onDismiss: i
            })
        }
    })
}

function F(e) {
    let {
        user: t,
        guildId: n,
        channelId: i
    } = e, a = (0, v.A)(t.id), s = (0, o.bG)([b.default], () => b.default.getId() === t.id), d = (() => {
        let [e, t] = (0, o.yK)([y.A], () => [y.A.ipCountryCode, y.A.ipCountryCodeRequest]), n = (0, g.Z)();
        return l.useEffect(() => {
            null == e && null == t && n && (0, c.xe)()
        }, [e, t, n]), "GB" === e && n
    })(), p = (0, u.JY)({
        location: "UserProfileModalV2Widgets"
    }), h = 0 === a.length && s, _ = l.useMemo(() => a.filter(j.fu), [a]), A = l.useMemo(() => a.filter(e => e instanceof O.R), [a]);
    (0, x.Y)(s, _), ((e, t) => {
        let n = l.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, f.A)(n);
        let {
            data: r,
            refetch: i
        } = (0, m.P)(e), a = l.useRef(null !== r);
        l.useEffect(() => {
            a.current && (a.current = !1, i())
        }, [i])
    })(t.id, A);
    let P = () => (0, r.jsxs)(r.Fragment, {
        children: [s && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(I.A, {
                className: R.cG
            }), d && (0, r.jsx)(U, {}), p && (0, r.jsx)(M, {})]
        }), a.map((e, l) => (0, r.jsx)(L, {
            widget: e,
            user: t,
            guildId: n,
            channelId: i,
            index: l
        }, e.getUniqueKey()))]
    });
    if (h)
        if (p) return (0, r.jsx)(S.A, {});
        else return (0, r.jsx)(C.A, {});
    return s ? (0, r.jsx)(w.D, {
        children: P()
    }) : P()
}

function B(e) {
    let {
        user: t
    } = e, n = G(e, ["user"]), i = l.useRef(null);
    (0, h.i)({
        containerRef: i
    });
    let o = (0, T.k)(t.id);
    return (0, r.jsxs)(N.K, {
        "data-scroller": !0,
        scrollerRef: i,
        className: a()(R.XG, {
            [R.az]: o
        }),
        fade: !0,
        children: [(0, r.jsx)(P.A, {
            scrollerRef: i
        }), (0, r.jsx)(F, k({
            user: t
        }, n))]
    })
}