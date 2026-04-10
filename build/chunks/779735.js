/** chunk id: 779735 params = (module,exports,require) **/
n.d(t, {
    default: () => g
}), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(731738),
    r = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(915089),
    c = n(831062),
    u = n(923531),
    _ = n(17372),
    m = n(369053),
    p = n(598131),
    h = n(652215),
    x = n(475864);
let g = e => {
    let {
        reportType: t,
        menu: n,
        modalProps: g,
        onSubmit: A,
        onNavigate: v,
        emailToken: b,
        isAuthenticated: f = !0
    } = e, T = (0, o.GV)(), {
        nodes: S,
        root_node_id: E,
        success_node_id: I,
        fail_node_id: C
    } = n, [N, j] = l.useState(E), [y, k] = l.useState(void 0), [R, D] = l.useState(void 0), [M, O] = l.useState([]), [w, G] = l.useState(void 0), [L, U] = l.useState(void 0), [P, B] = l.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)()
    });
    let H = e => {
            let {
                destination: n
            } = e, [, a] = n, l = S[a];
            if (void 0 === l) return void c.A.increment({
                name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
            });
            if (l.elements.some(e => "skip" === e.type) && l.button?.type === "next") return H({
                ...e,
                destination: ["", l.button.target]
            });
            if (O([...M, e]), null != l.key && v?.(l.key), k(void 0), D(void 0), t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(h.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: l.report_type,
                    current_node: S[N].id,
                    next_node: l.id
                })
            }
            j(a)
        },
        F = async e => {
            let a = f ? await (0, m.zC)(n, t, [...M, e]) : await (0, m.bo)(n, t, [...M, e], b),
                l = a?.body?.report_id;
            null != l && G(l), U(S[e.nodeRef].report_type), A?.(l)
        }, V = () => {
            if (M.length < 1) return;
            let e = [...M],
                n = e.pop(),
                a = n?.nodeRef ?? E;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(h.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: S[a].report_type,
                    current_node: S[N].id,
                    next_node: S[a].id
                })
            }
            k(n?.multiSelect?.state), D(n?.textInput), j(a), O(e), v?.("..")
        }, W = l.useCallback((e, t) => {
            let n;
            for (let t in S) {
                let a = S[t];
                if (a.key === e) {
                    n = a;
                    break
                }
            }
            if (null == n) return;
            let a = M.findIndex(e => e.nodeRef === n.id);
            if (a >= 0) {
                let e = M.slice(0, a),
                    t = M[a];
                D(t?.textInput), k(t?.multiSelect?.state), O(e)
            } else O([]), D(void 0), k(void 0);
            B(t), j(n.id)
        }, [S, M]);
    l.useEffect(() => {
        null != P && B(void 0)
    }, [P]);
    let z = l.useMemo(() => {
        let e = [],
            t = [];
        for (let n in S) {
            let a = S[n];
            if (a.id !== I && a.id !== C && a.id !== E) {
                if (a.key.endsWith("_SUBMIT") || a.button?.type === "submit") {
                    t.push(a);
                    continue
                }
                if (e.push(a), a.button?.type === "next") {
                    let t = a.button?.target,
                        n = e.indexOf(S[t]); - 1 !== n && (e.splice(n, 1), e.push(S[t]))
                }
            }
        }
        return [S[E], ...e, ...t, S[I], S[C]]
    }, [S, E, C, I]);
    return (0, a.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: g.transitionState,
        "aria-labelledby": T,
        parentComponent: "InAppReportModal",
        children: (0, a.jsx)(r.tN_, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: z.map(e => (0, a.jsx)(r.q7S, {
                id: e.id,
                children: (0, a.jsx)("div", {
                    className: x.B,
                    children: (0, a.jsx)(p.A, {
                        node: e,
                        reportType: t,
                        reportSubType: L,
                        history: M,
                        onModalClose: g.onClose,
                        onSelectChild: H,
                        onNavigateBack: V,
                        onNavigateToNode: W,
                        multiSelect: y,
                        textInput: R,
                        successNodeId: I,
                        failNodeId: C,
                        onSubmit: F,
                        reportId: w,
                        nodeMap: S,
                        initialErrorMessage: e.id === N ? P : void 0
                    })
                })
            }, e.id))
        })
    })
}