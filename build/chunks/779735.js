/** chunk id: 779735, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => A
}), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(731738),
    r = n(397927),
    s = n(964486),
    o = n(58149),
    d = n(915089),
    c = n(831062),
    u = n(923531),
    _ = n(17372),
    m = n(369053),
    x = n(598131),
    p = n(652215),
    g = n(575119);
let A = e => {
    let {
        reportType: t,
        menu: n,
        modalProps: A,
        onSubmit: h,
        onNavigate: b,
        emailToken: v,
        isAuthenticated: f = !0
    } = e, T = (0, d.GV)(), {
        nodes: C,
        root_node_id: I,
        success_node_id: j,
        fail_node_id: S
    } = n, [N, k] = a.useState(I), [y, E] = a.useState(void 0), [M, O] = a.useState(void 0), [R, L] = a.useState([]), [G, w] = a.useState(void 0), [D, U] = a.useState(void 0), [B, P] = a.useState(void 0);
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
            if (L([...R, e]), null != a.key && b?.(a.key), E(void 0), O(void 0), t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: C[N].id,
                    next_node: a.id
                })
            }
            k(l)
        },
        V = async e => {
            let l = f ? await (0, m.zC)(n, t, [...R, e]) : await (0, m.bo)(n, t, [...R, e], v),
                a = l?.body?.report_id;
            null != a && w(a), U(C[e.nodeRef].report_type), h?.(a)
        }, F = () => {
            if (R.length < 1) return;
            let e = [...R],
                n = e.pop(),
                l = n?.nodeRef ?? I;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                o.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: C[l].report_type,
                    current_node: C[N].id,
                    next_node: C[l].id
                })
            }
            E(n?.multiSelect?.state), O(n?.textInput), k(l), L(e), b?.("..")
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
            let l = R.findIndex(e => e.nodeRef === n.id);
            if (l >= 0) {
                let e = R.slice(0, l),
                    t = R[l];
                O(t?.textInput), E(t?.multiSelect?.state), L(e)
            } else L([]), O(void 0), E(void 0);
            P(t), k(n.id)
        }, [C, R]);
    a.useEffect(() => {
        null != B && P(void 0)
    }, [B]);
    let z = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in C) {
            let l = C[n];
            if (l.id !== j && l.id !== S && l.id !== I) {
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
        return [C[I], ...e, ...t, C[j], C[S]]
    }, [C, I, S, j]);
    return (0, l.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: A.transitionState,
        "aria-labelledby": T,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(r.tN_, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: z.map(e => (0, l.jsx)(r.q7S, {
                id: e.id,
                children: (0, l.jsx)("div", {
                    className: g.B,
                    children: (0, l.jsx)(x.A, {
                        node: e,
                        reportType: t,
                        reportSubType: D,
                        history: R,
                        onModalClose: A.onClose,
                        onSelectChild: H,
                        onNavigateBack: F,
                        onNavigateToNode: W,
                        multiSelect: y,
                        textInput: M,
                        successNodeId: j,
                        failNodeId: S,
                        onSubmit: V,
                        reportId: G,
                        nodeMap: C,
                        initialErrorMessage: e.id === N ? B : void 0
                    })
                })
            }, e.id))
        })
    })
}