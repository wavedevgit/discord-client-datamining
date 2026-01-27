/** Chunk was on web.js **/
/** chunk id: 875163, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(837381),
    l = n(311907),
    c = n(397927),
    u = n(811024),
    d = n(933958),
    f = n(969151),
    p = n(580424),
    _ = n(579940),
    h = n(915089),
    m = n(750506),
    g = n(513609),
    E = n(71393),
    y = n(374803),
    b = n(105330),
    O = n(638897),
    v = n(5867),
    A = n(130139);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = w(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function w(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let R = 490,
    P = 490,
    D = 245,
    L = 200,
    x = 120,
    M = i.forwardRef(function(e, t) {
        var n, a, I, T, w, M, j, k, U;
        let {
            channel: G,
            type: F,
            editorHeight: V,
            onVisibilityChange: B,
            editorScrollerRef: H,
            barsHeight: Y
        } = e, W = (0, h.GV)(), K = (0, l.bG)([E.A], () => {
            var e;
            return null != (e = E.A.getGuild(G.guild_id)) ? e : null
        }, [G.guild_id]), z = i.useRef(null), [q, Z, Q] = (0, O.A)(C(S({}, e), {
            guild: K
        }), t, z), X = (null == (I = F.autocomplete) ? void 0 : I.forceChatLayer) ? g.Ay : m.Ay, J = (0, p.aI)(q.selectedIndex);
        (0, _.gf)(W, q.isVisible, J);
        let $ = (0, b.l)({
                editorHeight: V,
                type: F,
                state: q
            }),
            ee = (0, l.bG)([d.Ay], () => {
                let e = d.Ay.getSelfEmbeddedActivityForChannel(G.id),
                    t = d.Ay.getActivityPanelMode();
                return (0, u.AX)(G) && null != e && (0, f.H)(e.location) === G.id && t === v.Gd.PANEL
            }, [G]),
            et = i.useMemo(() => (null == $ ? void 0 : $.top) == null && (null == $ ? void 0 : $.left) == null && (null == $ ? void 0 : $.bottom) == null && (null == $ ? void 0 : $.right) == null ? "" : String(Date.now()), [null == $ ? void 0 : $.top, null == $ ? void 0 : $.left, null == $ ? void 0 : $.bottom, null == $ ? void 0 : $.right]);
        if (i.useEffect(() => {
                var e, t;
                B(q.isVisible, null != (e = null == (t = q.query) ? void 0 : t.type) ? e : null)
            }, [B, q.isVisible, null == (T = q.query) ? void 0 : T.type]), !q.isVisible || null == q.query || void 0 === $) return null;
        let en = null != (n = q.query.typeInfo.renderResults({
            results: q.query.results,
            selectedIndex: q.selectedIndex,
            channel: G,
            guild: K,
            query: q.query.queryText,
            options: q.query.options,
            onHover: e => Z.onResultHover(e),
            onClick: e => Z.onResultClick(e)
        })) ? n : null;
        if (null == en) return null;
        let er = {
                [A.pK]: null == $,
                [A.YB]: null != $,
                [A.sQ]: null == $ && "bottom" === e.position,
                [A.mO]: ee,
                [A.Wi]: (null == (w = q.query) ? void 0 : w.type) === y.DB.MENTION_SUGGESTIONS
            },
            ei = R;
        null != $ && (ei = (null == (j = F.autocomplete) ? void 0 : j.small) ? L : (null == (k = q.query) ? void 0 : k.type) === y.DB.EMOJIS_AND_STICKERS ? P : D);
        let ea = Math.max(V, null != (a = null == H || null == (M = H.current) ? void 0 : M.clientHeight) ? a : 0),
            eo = Math.min(.5 * window.innerHeight, ea);
        ei = Math.min(window.innerHeight - x - eo - (null != Y ? Y : 0), ei);
        let es = (0, r.jsx)(p.Ay, {
            id: W,
            className: o()(A.nx, er),
            innerClassName: A.Fv,
            onMouseDown: e => e.preventDefault(),
            children: (0, r.jsx)(s.hD, {
                navigator: Q,
                children: (0, r.jsx)(s.PR, {
                    children: e => {
                        let {
                            ref: t
                        } = e, n = N(e, ["ref"]);
                        return (0, r.jsx)(c.ChK, C(S({
                            id: W,
                            ref: e => {
                                var n;
                                t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null, z.current = e
                            },
                            orientation: "vertical",
                            overflow: "auto"
                        }, n), {
                            className: A.XG,
                            style: {
                                maxHeight: ei
                            },
                            role: "listbox",
                            "aria-labelledby": (0, p.Sz)(W),
                            children: en
                        }))
                    }
                })
            })
        });
        return null != $ ? (0, r.jsx)(X, {
            children: (0, r.jsx)(c.QCO, {
                targetRef: e.targetRef,
                overrideTargetRect: $,
                positionKey: et,
                position: null != (U = e.position) ? U : "top",
                align: "left",
                spacing: 8,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                children: () => es
            })
        }) : es
    })