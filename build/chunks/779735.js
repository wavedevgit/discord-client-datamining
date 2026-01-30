/** chunk id: 779735, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => x
}), n(896048), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(731738),
    a = n(397927),
    s = n(964486),
    o = n(58149),
    d = n(915089),
    c = n(831062),
    u = n(923531),
    m = n(17372),
    p = n(369053),
    b = n(598131),
    _ = n(652215),
    g = n(575119);
let x = e => {
    let {
        reportType: t,
        menu: n,
        modalProps: x,
        onSubmit: h,
        onNavigate: v,
        emailToken: f,
        isAuthenticated: j = !0
    } = e, A = (0, d.GV)(), {
        nodes: y,
        root_node_id: O,
        success_node_id: S,
        fail_node_id: T
    } = n, [N, k] = r.useState(O), [w, C] = r.useState(void 0), [I, P] = r.useState(void 0), [E, D] = r.useState([]), [M, R] = r.useState(void 0), [L, G] = r.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)()
    });
    let U = e => {
            var n, l, r;
            let {
                destination: a
            } = e, [, s] = a, d = y[s];
            if (void 0 === d) return void c.A.increment({
                name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
            });
            if (d.elements.some(e => "skip" === e.type) && (null == (n = d.button) ? void 0 : n.type) === "next") return U((l = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), l.forEach(function(t) {
                        var l;
                        l = n[t], t in e ? Object.defineProperty(e, t, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = l
                    })
                }
                return e
            }({}, e), r = r = {
                destination: ["", d.button.target]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
            }), l));
            if (D([...E, e]), null != d.key && (null == v || v(d.key)), C(void 0), P(void 0), t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(_.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: d.report_type,
                    current_node: y[N].id,
                    next_node: d.id
                })
            }
            k(s)
        },
        B = async e => {
            var l;
            let r = j ? await (0, p.zC)(n, t, [...E, e]) : await (0, p.bo)(n, t, [...E, e], f),
                i = null == r || null == (l = r.body) ? void 0 : l.report_id;
            null != i && R(i), G(y[e.nodeRef].report_type), null == h || h(i)
        }, H = () => {
            var e, n;
            if (E.length < 1) return;
            let l = [...E],
                r = l.pop(),
                i = null != (e = null == r ? void 0 : r.nodeRef) ? e : O;
            if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(_.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: y[i].report_type,
                    current_node: y[N].id,
                    next_node: y[i].id
                })
            }
            C(null == r || null == (n = r.multiSelect) ? void 0 : n.state), P(null == r ? void 0 : r.textInput), k(i), D(l), null == v || v("..")
        }, V = r.useMemo(() => {
            let e = [],
                t = [];
            for (let i in y) {
                var n, l, r;
                let a = y[i];
                if (a.id !== S && a.id !== T && a.id !== O) {
                    if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? void 0 : n.type) === "submit") {
                        t.push(a);
                        continue
                    }
                    if (e.push(a), (null == (l = a.button) ? void 0 : l.type) === "next") {
                        let t = null == (r = a.button) ? void 0 : r.target,
                            n = e.indexOf(y[t]); - 1 !== n && (e.splice(n, 1), e.push(y[t]))
                    }
                }
            }
            return [y[O], ...e, ...t, y[S], y[T]]
        }, [y, O, T, S]);
    return (0, l.jsx)(a.EOs, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        "aria-labelledby": A,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(a.tN_, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: V.map(e => (0, l.jsx)(a.q7S, {
                id: e.id,
                children: (0, l.jsx)("div", {
                    className: g.B,
                    children: (0, l.jsx)(b.A, {
                        node: e,
                        reportType: t,
                        reportSubType: L,
                        history: E,
                        onModalClose: x.onClose,
                        onSelectChild: U,
                        onNavigateBack: H,
                        multiSelect: w,
                        textInput: I,
                        successNodeId: S,
                        failNodeId: T,
                        onSubmit: B,
                        reportId: M,
                        nodeMap: y
                    })
                })
            }, e.id))
        })
    })
}