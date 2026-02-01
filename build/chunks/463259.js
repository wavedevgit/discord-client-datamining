/** chunk id: 463259, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => W,
    u: () => G
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
    h = n(958338),
    x = n(600761),
    v = n(667049),
    _ = n(605694),
    I = n(357541),
    A = n(236599),
    w = n(192),
    P = n(128988),
    E = n(795755),
    S = n(53977),
    T = n(982599),
    C = n(515054),
    N = n(266713),
    R = n(985018),
    k = n(368379);

function D(e) {
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

function L(e, t) {
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

function G(e) {
    let {
        widget: t
    } = e, n = L(e, ["widget"]);
    return t instanceof O.R ? (0, r.jsx)(_.A, D({
        widget: t
    }, n)) : t instanceof j.Yy ? (0, r.jsx)(E.A, D({
        widget: t
    }, n)) : null
}

function M() {
    return (0, r.jsxs)("div", {
        className: k.mJ,
        children: [(0, r.jsx)(s.mir, {
            size: "xs"
        }), (0, r.jsx)(s.Text, {
            "aria-label": R.intl.string(R.t["7blcz6"]),
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.intl.string(R.t["7blcz6"])
        })]
    })
}

function U() {
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
            return null == a ? null : (0, r.jsx)(I.A, {
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
    }), x = 0 === a.length && s, _ = l.useMemo(() => a.filter(j.fu), [a]), I = l.useMemo(() => a.filter(e => e instanceof O.R), [a]);
    (0, h.Y)(s, _), ((e, t) => {
        let n = l.useMemo(() => t.map(e => e.applicationId), [t]);
        (0, f.A)(n);
        let {
            data: r,
            refetch: i
        } = (0, m.P)(e), a = l.useRef(null !== r);
        l.useEffect(() => {
            a.current && (a.current = !1, i())
        }, [i])
    })(t.id, I);
    let P = () => (0, r.jsxs)(r.Fragment, {
        children: [s && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(A.A, {
                className: k.cG
            }), d && (0, r.jsx)(M, {}), p && (0, r.jsx)(U, {})]
        }), a.map((e, l) => (0, r.jsx)(G, {
            widget: e,
            user: t,
            guildId: n,
            channelId: i,
            index: l
        }, e.getUniqueKey()))]
    });
    if (x)
        if (p) return (0, r.jsx)(S.A, {});
        else return (0, r.jsx)(N.A, {});
    return s ? (0, r.jsx)(w.D, {
        children: P()
    }) : P()
}

function W(e) {
    let {
        user: t
    } = e, n = L(e, ["user"]), i = l.useRef(null);
    (0, x.i)({
        containerRef: i
    });
    let o = (0, T.k)(t.id);
    return (0, r.jsxs)(C.K, {
        "data-scroller": !0,
        scrollerRef: i,
        className: a()(k.XG, {
            [k.az]: o
        }),
        fade: !0,
        children: [(0, r.jsx)(P.A, {
            scrollerRef: i
        }), (0, r.jsx)(F, D({
            user: t
        }, n))]
    })
}