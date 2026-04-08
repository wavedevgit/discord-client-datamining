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
    p = n(598131),
    g = n(652215),
    x = n(475864);
let h = e => {
    let {
        reportType: t,
        menu: n,
        modalProps: h,
        onSubmit: A,
        onNavigate: v,
        emailToken: b,
        isAuthenticated: f = !0
    } = e, T = (0, o.GV)(), {
        nodes: E,
        root_node_id: S,
        success_node_id: I,
        fail_node_id: C
    } = n, [N, y] = a.useState(S), [j, k] = a.useState(void 0), [R, M] = a.useState(void 0), [O, D] = a.useState([]), [L, G] = a.useState(void 0), [U, w] = a.useState(void 0), [P, B] = a.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)()
    });
    let H = e => {
            let {
                destination: n
            } = e, [, l] = n, a = E[l];
            if (void 0 === a) return void c.A.increment({
                name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
            });
            if (a.elements.some(e => "skip" === e.type) && a.button?.type === "next") return H({
                ...e,
                destination: ["", a.button.target]
            });
            if (D([...O, e]), null != a.key && v?.(a.key), k(void 0), M(void 0), t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: E[N].id,
                    next_node: a.id
                })
            }
            y(l)
        },
        F = async e => {
            let l = f ? await (0, m.zC)(n, t, [...O, e]) : await (0, m.bo)(n, t, [...O, e], b),
                a = l?.body?.report_id;
            null != a && G(a), w(E[e.nodeRef].report_type), A?.(a)
        }, V = () => {
            if (O.length < 1) return;
            let e = [...O],
                n = e.pop(),
                l = n?.nodeRef ?? S;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(g.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: E[l].report_type,
                    current_node: E[N].id,
                    next_node: E[l].id
                })
            }
            k(n?.multiSelect?.state), M(n?.textInput), y(l), D(e), v?.("..")
        }, W = a.useCallback((e, t) => {
            let n;
            for (let t in E) {
                let l = E[t];
                if (l.key === e) {
                    n = l;
                    break
                }
            }
            if (null == n) return;
            let l = O.findIndex(e => e.nodeRef === n.id);
            if (l >= 0) {
                let e = O.slice(0, l),
                    t = O[l];
                M(t?.textInput), k(t?.multiSelect?.state), D(e)
            } else D([]), M(void 0), k(void 0);
            B(t), y(n.id)
        }, [E, O]);
    a.useEffect(() => {
        null != P && B(void 0)
    }, [P]);
    let z = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in E) {
            let l = E[n];
            if (l.id !== I && l.id !== C && l.id !== S) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue
                }
                if (e.push(l), l.button?.type === "next") {
                    let t = l.button?.target,
                        n = e.indexOf(E[t]); - 1 !== n && (e.splice(n, 1), e.push(E[t]))
                }
            }
        }
        return [E[S], ...e, ...t, E[I], E[C]]
    }, [E, S, C, I]);
    return (0, l.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: h.transitionState,
        "aria-labelledby": T,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(r.tN_, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: z.map(e => (0, l.jsx)(r.q7S, {
                id: e.id,
                children: (0, l.jsx)("div", {
                    className: x.B,
                    children: (0, l.jsx)(p.A, {
                        node: e,
                        reportType: t,
                        reportSubType: U,
                        history: O,
                        onModalClose: h.onClose,
                        onSelectChild: H,
                        onNavigateBack: V,
                        onNavigateToNode: W,
                        multiSelect: j,
                        textInput: R,
                        successNodeId: I,
                        failNodeId: C,
                        onSubmit: F,
                        reportId: L,
                        nodeMap: E,
                        initialErrorMessage: e.id === N ? P : void 0
                    })
                })
            }, e.id))
        })
    })
}