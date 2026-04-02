/** chunk id: 779735 params = (module,exports,require) **/
n.d(t, {
    default: () => h
}), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(731738),
    r = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(915089),
    c = n(831062),
    u = n(923531),
    _ = n(17372),
    m = n(369053),
    x = n(598131),
    p = n(652215),
    g = n(150329);
let h = e => {
    let {
        reportType: t,
        menu: n,
        modalProps: h,
        onSubmit: A,
        onNavigate: b,
        emailToken: v,
        isAuthenticated: f = !0
    } = e, T = (0, o.GV)(), {
        nodes: C,
        root_node_id: j,
        success_node_id: I,
        fail_node_id: N
    } = n, [S, y] = a.useState(j), [k, E] = a.useState(void 0), [M, R] = a.useState(void 0), [w, O] = a.useState([]), [G, L] = a.useState(void 0), [D, B] = a.useState(void 0), [U, P] = a.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)()
    });
    let H = e => {
            let {
                destination: n
            } = e, [, l] = n, a = C[l];
            if (void 0 === a) return void c.A.increment({
                name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
            });
            if (a.elements.some(e => "skip" === e.type) && a.button?.type === "next") return H({
                ...e,
                destination: ["", a.button.target]
            });
            if (O([...w, e]), null != a.key && b?.(a.key), E(void 0), R(void 0), t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: C[S].id,
                    next_node: a.id
                })
            }
            y(l)
        },
        V = async e => {
            let l = f ? await (0, m.zC)(n, t, [...w, e]) : await (0, m.bo)(n, t, [...w, e], v),
                a = l?.body?.report_id;
            null != a && L(a), B(C[e.nodeRef].report_type), A?.(a)
        }, F = () => {
            if (w.length < 1) return;
            let e = [...w],
                n = e.pop(),
                l = n?.nodeRef ?? j;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: C[l].report_type,
                    current_node: C[S].id,
                    next_node: C[l].id
                })
            }
            E(n?.multiSelect?.state), R(n?.textInput), y(l), O(e), b?.("..")
        }, W = a.useCallback((e, t) => {
            let n;
            for (let t in C) {
                let l = C[t];
                if (l.key === e) {
                    n = l;
                    break
                }
            }
            if (null == n) return;
            let l = w.findIndex(e => e.nodeRef === n.id);
            if (l >= 0) {
                let e = w.slice(0, l),
                    t = w[l];
                R(t?.textInput), E(t?.multiSelect?.state), O(e)
            } else O([]), R(void 0), E(void 0);
            P(t), y(n.id)
        }, [C, w]);
    a.useEffect(() => {
        null != U && P(void 0)
    }, [U]);
    let z = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in C) {
            let l = C[n];
            if (l.id !== I && l.id !== N && l.id !== j) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue
                }
                if (e.push(l), l.button?.type === "next") {
                    let t = l.button?.target,
                        n = e.indexOf(C[t]); - 1 !== n && (e.splice(n, 1), e.push(C[t]))
                }
            }
        }
        return [C[j], ...e, ...t, C[I], C[N]]
    }, [C, j, N, I]);
    return (0, l.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: h.transitionState,
        "aria-labelledby": T,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(r.tN_, {
            width: 440,
            activeSlide: S,
            centered: !1,
            children: z.map(e => (0, l.jsx)(r.q7S, {
                id: e.id,
                children: (0, l.jsx)("div", {
                    className: g.B,
                    children: (0, l.jsx)(x.A, {
                        node: e,
                        reportType: t,
                        reportSubType: D,
                        history: w,
                        onModalClose: h.onClose,
                        onSelectChild: H,
                        onNavigateBack: F,
                        onNavigateToNode: W,
                        multiSelect: k,
                        textInput: M,
                        successNodeId: I,
                        failNodeId: N,
                        onSubmit: V,
                        reportId: G,
                        nodeMap: C,
                        initialErrorMessage: e.id === S ? U : void 0
                    })
                })
            }, e.id))
        })
    })
}