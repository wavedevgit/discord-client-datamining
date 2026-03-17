/** chunk id: 779735 params = (module,exports,require) **/
n.d(t, {
    default: () => g
}), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(731738),
    i = n(397927),
    s = n(964486),
    d = n(58149),
    o = n(915089),
    c = n(831062),
    u = n(923531),
    _ = n(17372),
    m = n(369053),
    x = n(598131),
    p = n(652215),
    h = n(575119);
let g = e => {
    let {
        reportType: t,
        menu: n,
        modalProps: g,
        onSubmit: A,
        onNavigate: v,
        emailToken: b,
        isAuthenticated: f = !0
    } = e, j = (0, o.GV)(), {
        nodes: T,
        root_node_id: C,
        success_node_id: N,
        fail_node_id: I
    } = n, [y, S] = a.useState(C), [k, E] = a.useState(void 0), [w, M] = a.useState(void 0), [R, L] = a.useState([]), [G, O] = a.useState(void 0), [D, U] = a.useState(void 0), [B, P] = a.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)()
    });
    let H = e => {
            let {
                destination: n
            } = e, [, l] = n, a = T[l];
            if (void 0 === a) return void c.A.increment({
                name: r.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
            });
            if (a.elements.some(e => "skip" === e.type) && a.button?.type === "next") return H({
                ...e,
                destination: ["", a.button.target]
            });
            if (L([...R, e]), null != a.key && v?.(a.key), E(void 0), M(void 0), t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: T[y].id,
                    next_node: a.id
                })
            }
            S(l)
        },
        F = async e => {
            let l = f ? await (0, m.zC)(n, t, [...R, e]) : await (0, m.bo)(n, t, [...R, e], b),
                a = l?.body?.report_id;
            null != a && O(a), U(T[e.nodeRef].report_type), A?.(a)
        }, V = () => {
            if (R.length < 1) return;
            let e = [...R],
                n = e.pop(),
                l = n?.nodeRef ?? C;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: T[l].report_type,
                    current_node: T[y].id,
                    next_node: T[l].id
                })
            }
            E(n?.multiSelect?.state), M(n?.textInput), S(l), L(e), v?.("..")
        }, W = a.useCallback((e, t) => {
            let n;
            for (let t in T) {
                let l = T[t];
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
                M(t?.textInput), E(t?.multiSelect?.state), L(e)
            } else L([]), M(void 0), E(void 0);
            P(t), S(n.id)
        }, [T, R]);
    a.useEffect(() => {
        null != B && P(void 0)
    }, [B]);
    let z = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in T) {
            let l = T[n];
            if (l.id !== N && l.id !== I && l.id !== C) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue
                }
                if (e.push(l), l.button?.type === "next") {
                    let t = l.button?.target,
                        n = e.indexOf(T[t]); - 1 !== n && (e.splice(n, 1), e.push(T[t]))
                }
            }
        }
        return [T[C], ...e, ...t, T[N], T[I]]
    }, [T, C, I, N]);
    return (0, l.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: g.transitionState,
        "aria-labelledby": j,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(i.tN_, {
            width: 440,
            activeSlide: y,
            centered: !1,
            children: z.map(e => (0, l.jsx)(i.q7S, {
                id: e.id,
                children: (0, l.jsx)("div", {
                    className: h.B,
                    children: (0, l.jsx)(x.A, {
                        node: e,
                        reportType: t,
                        reportSubType: D,
                        history: R,
                        onModalClose: g.onClose,
                        onSelectChild: H,
                        onNavigateBack: V,
                        onNavigateToNode: W,
                        multiSelect: k,
                        textInput: w,
                        successNodeId: N,
                        failNodeId: I,
                        onSubmit: F,
                        reportId: G,
                        nodeMap: T,
                        initialErrorMessage: e.id === y ? B : void 0
                    })
                })
            }, e.id))
        })
    })
}