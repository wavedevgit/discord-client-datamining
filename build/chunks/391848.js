/** Chunk was on web.js **/
/** chunk id: 391848, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => V
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(537652),
    u = n(155718),
    d = n(58149),
    f = n(580424),
    p = n(579940),
    _ = n(962125),
    h = n(915089),
    m = n(850992),
    g = n(887695),
    E = n(286509),
    y = n(721768),
    b = n(842209),
    O = n(210978),
    v = n(392054),
    A = n(168186),
    I = n(546587),
    S = n(746388),
    T = n(664929),
    C = n(73510),
    N = n(652215),
    w = n(985018),
    R = n(993538),
    P = n(911385);
let D = 512,
    L = 7,
    x = 56,
    M = 16,
    j = 32,
    k = 20,
    U = 420,
    G = [8, 8, 0, 8],
    F = l().debounce(() => {
        (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED)
    }, 300),
    V = i.forwardRef(function(e, t) {
        let {
            channel: n,
            canOnlyUseTextCommands: a
        } = e, s = i.useRef(!1), l = i.useRef(0), [V, H] = i.useState(0), Y = i.useRef(null), [W, K] = i.useState(!1), z = m.LS.useStore(e => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        let {
            sectionDescriptors: q,
            activeSections: Z,
            commandsByActiveSection: Q,
            hasMoreAfter: X,
            commands: J,
            filteredSectionId: $,
            scrollDown: ee,
            filterSection: et
        } = b.cu({
            context: {
                channel: n,
                type: "channel"
            },
            filters: {
                commandTypes: [u.kc.CHAT],
                builtIns: a ? O.n.ONLY_TEXT : O.n.ALLOW,
                applicationCommands: !a
            },
            options: {
                placeholderCount: L,
                limit: C.Hi,
                includeFrecency: !0
            },
            allowFetch: !0
        }), en = (0, g.Fk)({
            activeCategoryIndex: z,
            isScrolling: s,
            listRef: Y,
            onActiveCategoryIndexChange: e => {
                let t = Z[e];
                if (null != t) {
                    let e = q.findIndex(e => e.id === t.id);
                    m.LS.setActiveCategoryIndex(e)
                }
            },
            scrollOffset: k,
            searchQuery: ""
        }), er = e => {
            let t = Z.length * (j + M) + (Q.reduce((e, t) => e + t.data.length, 0) - (X ? L : 0)) * x - D;
            X && e + U > t && ee(), en(e), F(), l.current = e
        }, ei = i.useRef(er);
        i.useEffect(() => {
            ei.current = er
        }), i.useEffect(() => {
            ei.current(l.current)
        }, [J]);
        let ea = i.useCallback(e => e !== Z.length - 1 || X ? M : 0, [Z.length, X]),
            eo = Q.map(e => e.data.length);
        i.useEffect(() => {
            null != Y.current && W && null != V && Y.current.scrollRowIntoView(V)
        }, [W, V]), i.useLayoutEffect(() => {
            if (null != $) {
                var e;
                null == (e = Y.current) || e.scrollToSectionTop(0)
            }
        }, [J, $]);
        let es = i.useCallback(e => {
                if (e.id === $ || e.id === C.Ik.FRECENCY) {
                    var t;
                    et(null), null == (t = Y.current) || t.scrollToSectionTop(0)
                } else et(e.id)
            }, [et, $]),
            el = i.useCallback((e, t, r) => {
                y.Gf({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: v.Oh.DISCOVERY,
                    triggerSection: r
                })
            }, [n.id]);
        i.useImperativeHandle(t, () => ({
            onTabOrEnter: e => {
                if (null == V) return !e && (H(0), !0);
                if (null == V) return !1;
                let t = 0,
                    n = 0;
                for (let e of Q)
                    if (t = n, V < (n += e.data.length)) {
                        let n = e.data[V - t],
                            r = q.find(e => e.id === n.applicationId);
                        el(n, r, (0, A.$S)(e.section));
                        break
                    } return !0
            },
            onMoveSelection: e => {
                if (0 === J.length) return !0;
                let t = X ? L : 0,
                    n = J.length + t,
                    r = null == V ? 0 : V + e;
                return r >= n ? r = n - 1 : r < 0 && (r = 0), H(r), K(!0), !0
            }
        }), [J.length, Q, X, q, el, V]);
        let ec = i.useCallback(e => {
                let t = Z[e];
                if (null == t) return null;
                let i = (0, T.Rg)(t),
                    a = (0, r.jsx)(i, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, r.jsx)(E.A, {
                    className: R.Km,
                    icon: a,
                    children: t.name
                }, e)
            }, [n, Z]),
            eu = i.useCallback((e, t) => {
                let n = e === Z.length - 1,
                    i = Z[e],
                    {
                        data: a
                    } = Q[e];
                return (0, r.jsxs)("ul", {
                    role: "group",
                    "aria-label": i.name,
                    className: o()(R.Wy, {
                        [R.YD]: n
                    }),
                    children: [t, 0 === a.length && (0, r.jsx)(c.A, {
                        message: w.intl.format(w.t.WoQXT6, {
                            applicationName: i.name
                        }),
                        noResultsImageURL: P,
                        className: R.qK
                    })]
                }, e)
            }, [Z, Q]),
            ed = i.useCallback((e, t) => {
                var i;
                let a = Q[t.sectionIndex],
                    o = a.data[t.sectionRowIndex],
                    s = "".concat(a.section.id, ":").concat(null != (i = null == o ? void 0 : o.id) ? i : e);
                if (null == o || a.section.id !== o.applicationId && a.section.id !== C.Ik.FRECENCY || o.inputType === v.y$.PLACEHOLDER) return (0, r.jsx)(S.A, {}, s);
                let l = q.find(e => e.id === o.applicationId);
                return (0, r.jsx)(f.Ay.NewCommand, {
                    index: e,
                    command: o,
                    channel: n,
                    className: R.D5,
                    selected: V === e,
                    showImage: a.section.id !== o.applicationId,
                    section: l,
                    onClick: () => el(o, l, (0, A.$S)(a.section)),
                    onHover: () => {
                        H(null), K(!1)
                    }
                }, s)
            }, [n, Q, el, q, V]),
            ef = (0, h.GV)();
        return (0, p.gf)(ef, !0, (0, f.aI)(V)), i.useEffect(() => () => {
            (0, p.nQ)()
        }, []), (0, r.jsxs)(f.Ay, {
            id: ef,
            className: R.x9,
            innerClassName: R.iE,
            onMouseDown: B,
            children: [(0, r.jsx)(I.A, {
                className: R.H$,
                channel: n,
                sections: q,
                filteredSectionId: $,
                activeCategoryIndex: z,
                onSectionClick: es,
                applicationCommandListRef: Y
            }), (0, r.jsx)(_.A, {
                role: "listbox",
                className: R.p_,
                listPadding: G,
                onScroll: er,
                renderRow: ed,
                renderSection: eu,
                renderSectionHeader: ec,
                rowCount: Z.length,
                rowCountBySection: eo,
                rowHeight: x,
                sectionHeaderHeight: j,
                sectionMarginBottom: ea,
                ref: Y,
                stickyHeaders: !0
            })]
        })
    });

function B(e) {
    e.preventDefault()
}