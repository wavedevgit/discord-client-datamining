/** Chunk was on web.js **/
/** chunk id: 391848, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => F
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
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
    x = 7,
    L = 56,
    j = 16,
    M = 32,
    k = 20,
    U = 420,
    G = [8, 8, 0, 8],
    V = l().debounce(() => {
        (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED)
    }, 300),
    F = i.forwardRef(function(e, t) {
        let {
            channel: n,
            canOnlyUseTextCommands: a
        } = e, o = i.useRef(!1), l = i.useRef(0), [F, H] = i.useState(0), Y = i.useRef(null), [W, K] = i.useState(!1), z = m.LS.useStore(e => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        let {
            sectionDescriptors: q,
            activeSections: Z,
            commandsByActiveSection: X,
            hasMoreAfter: Q,
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
                placeholderCount: x,
                limit: C.Hi,
                includeFrecency: !0
            },
            allowFetch: !0
        }), en = (0, g.Fk)({
            activeCategoryIndex: z,
            isScrolling: o,
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
            let t = Z.length * (M + j) + (X.reduce((e, t) => e + t.data.length, 0) - (Q ? x : 0)) * L - D;
            Q && e + U > t && ee(), en(e), V(), l.current = e
        }, ei = i.useRef(er);
        i.useEffect(() => {
            ei.current = er
        }), i.useEffect(() => {
            ei.current(l.current)
        }, [J]);
        let ea = i.useCallback(e => e !== Z.length - 1 || Q ? j : 0, [Z.length, Q]),
            es = X.map(e => e.data.length);
        i.useEffect(() => {
            null != Y.current && W && null != F && Y.current.scrollRowIntoView(F)
        }, [W, F]), i.useLayoutEffect(() => {
            if (null != $) {
                var e;
                null == (e = Y.current) || e.scrollToSectionTop(0)
            }
        }, [J, $]);
        let eo = i.useCallback(e => {
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
                if (null == F) return !e && (H(0), !0);
                if (null == F) return !1;
                let t = 0,
                    n = 0;
                for (let e of X)
                    if (t = n, F < (n += e.data.length)) {
                        let n = e.data[F - t],
                            r = q.find(e => e.id === n.applicationId);
                        el(n, r, (0, A.$S)(e.section));
                        break
                    } return !0
            },
            onMoveSelection: e => {
                if (0 === J.length) return !0;
                let t = Q ? x : 0,
                    n = J.length + t,
                    r = null == F ? 0 : F + e;
                return r >= n ? r = n - 1 : r < 0 && (r = 0), H(r), K(!0), !0
            }
        }), [J.length, X, Q, q, el, F]);
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
                    } = X[e];
                return (0, r.jsxs)("ul", {
                    role: "group",
                    "aria-label": i.name,
                    className: s()(R.Wy, {
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
            }, [Z, X]),
            ed = i.useCallback((e, t) => {
                var i;
                let a = X[t.sectionIndex],
                    s = a.data[t.sectionRowIndex],
                    o = "".concat(a.section.id, ":").concat(null != (i = null == s ? void 0 : s.id) ? i : e);
                if (null == s || a.section.id !== s.applicationId && a.section.id !== C.Ik.FRECENCY || s.inputType === v.y$.PLACEHOLDER) return (0, r.jsx)(S.A, {}, o);
                let l = q.find(e => e.id === s.applicationId);
                return (0, r.jsx)(f.Ay.NewCommand, {
                    index: e,
                    command: s,
                    channel: n,
                    className: R.D5,
                    selected: F === e,
                    showImage: a.section.id !== s.applicationId,
                    section: l,
                    onClick: () => el(s, l, (0, A.$S)(a.section)),
                    onHover: () => {
                        H(null), K(!1)
                    }
                }, o)
            }, [n, X, el, q, F]),
            ef = (0, h.GV)();
        return (0, p.gf)(ef, !0, (0, f.aI)(F)), i.useEffect(() => () => {
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
                onSectionClick: eo,
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
                rowCountBySection: es,
                rowHeight: L,
                sectionHeaderHeight: M,
                sectionMarginBottom: ea,
                ref: Y,
                stickyHeaders: !0
            })]
        })
    });

function B(e) {
    e.preventDefault()
}