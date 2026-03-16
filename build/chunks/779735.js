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
        emailToken: f,
        isAuthenticated: b = !0
    } = e, C = (0, o.GV)(), {
        nodes: j,
        root_node_id: T,
        success_node_id: N,
        fail_node_id: I
    } = n, [S, y] = a.useState(T), [k, E] = a.useState(void 0), [w, R] = a.useState(void 0), [M, L] = a.useState([]), [O, G] = a.useState(void 0), [D, U] = a.useState(void 0), [P, B] = a.useState(void 0);
    (0, s.Ay)(() => {
        (0, u.VE)()
    });
    let H = e => {
            let {
                destination: n
            } = e, [, l] = n, a = j[l];
            if (void 0 === a) return void c.A.increment({
                name: r.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
            });
            if (a.elements.some(e => "skip" === e.type) && a.button?.type === "next") return H({
                ...e,
                destination: ["", a.button.target]
            });
            if (L([...M, e]), null != a.key && v?.(a.key), E(void 0), R(void 0), t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: j[S].id,
                    next_node: a.id
                })
            }
            y(l)
        },
        V = async e => {
            let l = b ? await (0, m.zC)(n, t, [...M, e]) : await (0, m.bo)(n, t, [...M, e], f),
                a = l?.body?.report_id;
            null != a && G(a), U(j[e.nodeRef].report_type), A?.(a)
        }, F = () => {
            if (M.length < 1) return;
            let e = [...M],
                n = e.pop(),
                l = n?.nodeRef ?? T;
            if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(p.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[l].report_type,
                    current_node: j[S].id,
                    next_node: j[l].id
                })
            }
            E(n?.multiSelect?.state), R(n?.textInput), y(l), L(e), v?.("..")
        }, W = a.useCallback((e, t) => {
            let n;
            for (let t in j) {
                let l = j[t];
                if (l.key === e) {
                    n = l;
                    break
                }
            }
            if (null == n) return;
            let l = M.findIndex(e => e.nodeRef === n.id);
            if (l >= 0) {
                let e = M.slice(0, l),
                    t = M[l];
                R(t?.textInput), E(t?.multiSelect?.state), L(e)
            } else L([]), R(void 0), E(void 0);
            B(t), y(n.id)
        }, [j, M]);
    a.useEffect(() => {
        null != P && B(void 0)
    }, [P]);
    let z = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in j) {
            let l = j[n];
            if (l.id !== N && l.id !== I && l.id !== T) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue
                }
                if (e.push(l), l.button?.type === "next") {
                    let t = l.button?.target,
                        n = e.indexOf(j[t]); - 1 !== n && (e.splice(n, 1), e.push(j[t]))
                }
            }
        }
        return [j[T], ...e, ...t, j[N], j[I]]
    }, [j, T, I, N]);
    return (0, l.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: g.transitionState,
        "aria-labelledby": C,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(i.tN_, {
            width: 440,
            activeSlide: S,
            centered: !1,
            children: z.map(e => (0, l.jsx)(i.q7S, {
                id: e.id,
                children: (0, l.jsx)("div", {
                    className: h.B,
                    children: (0, l.jsx)(x.A, {
                        node: e,
                        reportType: t,
                        reportSubType: D,
                        history: M,
                        onModalClose: g.onClose,
                        onSelectChild: H,
                        onNavigateBack: F,
                        onNavigateToNode: W,
                        multiSelect: k,
                        textInput: w,
                        successNodeId: N,
                        failNodeId: I,
                        onSubmit: V,
                        reportId: O,
                        nodeMap: j,
                        initialErrorMessage: e.id === S ? P : void 0
                    })
                })
            }, e.id))
        })
    })
}