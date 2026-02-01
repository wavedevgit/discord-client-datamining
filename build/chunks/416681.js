/** chunk id: 416681, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => E
}), n(896048);
var l = n(64700),
    r = n(785825),
    a = n(741918),
    i = n(602034);
let s = [a.D$.TAB, a.D$.UP, a.D$.DOWN];

function o(e, t, n) {
    return null != n ? "#".concat(e(t, n)) : "#".concat(t)
}

function u(e) {
    return document.querySelector(e)
}

function c(e) {
    var t;
    null == (t = document.getElementById(e)) || t.focus()
}

function E(e) {
    let {
        navId: t,
        itemCount: n,
        focusedIndex: E = 0,
        onSelect: _,
        setFocus: d,
        getNewFocusIndex: g,
        maintainFocusPosition: A = !0,
        includeSetSizes: T = !0,
        focusOnMount: I = !0,
        enabled: O = !0,
        onDispatch: h
    } = e, N = l.useCallback((e, t) => {
        let n = (0, r.A)(e, t);
        return null != h && h(e, n, t), n
    }, [h]), [m, f] = l.useReducer(N, {
        focusedIndex: E,
        itemCount: n
    }), {
        itemCount: S,
        focusedIndex: p
    } = m, [G] = l.useState(() => (0, i.nF)(f, 16));
    return l.useEffect(() => {
            f({
                type: r.D.UPDATE_ITEM_COUNT,
                itemCount: n
            })
        }, [n]),
        function(e) {
            let {
                navId: t,
                itemCount: n,
                focusedIndex: E,
                onSelect: _,
                setFocus: d = c,
                getNewFocusIndex: g,
                dispatch: A,
                maintainFocusPosition: T,
                includeSetSizes: I,
                focusOnMount: O,
                enabled: h,
                makeId: N = i.M4,
                getIndexFromId: m
            } = e, f = l.useRef(n), S = l.useRef(m);
            S.current = m, f.current = n;
            let p = l.useRef(h);
            l.useEffect(() => {
                p.current = h
            }, [h]);
            let [G, R] = l.useState(!1), [D] = l.useState(() => new i.Lp(e => () => {
                let t = null != S.current && "string" == typeof e ? S.current(e) : e;
                "number" != typeof t || t < 0 || A({
                    type: r.D.SET_FOCUSED_INDEX,
                    index: t
                })
            }));
            l.useEffect(() => () => D.clean(), [D]);
            let C = l.useCallback((e, t) => {
                    p.current && d(e, t)
                }, [d]),
                [L, x] = l.useState(!0);
            l.useEffect(() => {
                L && !O ? x(!1) : C(N(t, E), E)
            }, [E]);
            let b = l.useCallback(function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        n = null != g ? g(E) : E;
                    n !== E && A({
                        type: r.D.SET_FOCUSED_INDEX,
                        index: n
                    }), e && C(N(t, n), n)
                }, [N, E, g, A, t, C]),
                M = l.useCallback(e => {
                    if (!p.current) return;
                    if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                        e.preventDefault(), e.stopPropagation(), b();
                        return
                    }
                    let n = function(e) {
                        switch (e.key) {
                            case a.D$.ENTER:
                            case a.D$.SPACE:
                                return a.X2.SELECT_FOCUSED_ITEM;
                            case a.D$.UP:
                                return a.X2.NAVIGATE_UP;
                            case a.D$.DOWN:
                                return a.X2.NAVIGATE_DOWN;
                            case a.D$.HOME:
                                return a.X2.NAVIGATE_START;
                            case a.D$.END:
                                return a.X2.NAVIGATE_END
                        }
                    }(e);
                    switch (n) {
                        case a.X2.NAVIGATE_UP:
                        case a.X2.NAVIGATE_DOWN:
                        case a.X2.NAVIGATE_START:
                        case a.X2.NAVIGATE_END:
                            e.preventDefault(), e.stopPropagation(), A({
                                type: n
                            });
                            return;
                        case a.X2.SELECT_FOCUSED_ITEM:
                            let l = u(o(N, t, E));
                            if ((null == l ? void 0 : l.ownerDocument.activeElement) !== l || e.repeat) return;
                            if (e.preventDefault(), e.stopPropagation(), A({
                                    type: n
                                }), null != _) return void _(E);
                            null == l || l.click()
                    }
                }, [N, t, A, E, b, _]),
                v = l.useCallback(() => {
                    G || R(!0)
                }, [G]),
                U = l.useCallback(() => {
                    G || (T ? C(N(t, E), E) : b(!0))
                }, [N, t, C, T, G, E, b]),
                j = l.useCallback(e => {
                    e.currentTarget.contains(e.relatedTarget) || requestAnimationFrame(() => {
                        null == u(o(N, t, E)) ? C(t) : R(!1)
                    })
                }, [N, t, E, C]),
                y = l.useRef(null);
            l.useLayoutEffect(() => {
                let e = y.current;
                if (null != e) return e.addEventListener("focusin", v), e.addEventListener("focus", U), e.addEventListener("focusout", j), () => {
                    e.removeEventListener("focusin", v), e.removeEventListener("focus", U), e.removeEventListener("focusout", j)
                }
            }, [U, v, j]);
            let k = l.useCallback(() => ({
                    role: "list",
                    tabIndex: G && T ? -1 : 0,
                    id: t,
                    onKeyDown: M,
                    ref: y
                }), [t, G, M, T]),
                P = l.useCallback(e => {
                    let {
                        index: n
                    } = e;
                    return {
                        role: "listitem",
                        "aria-setsize": I ? f.current : void 0,
                        "aria-posinset": I ? n + 1 : void 0,
                        id: N(t, n),
                        tabIndex: T && n === E ? 0 : -1,
                        onFocus: D.get(null != S.current ? N(t, n) : n)
                    }
                }, [N, t, E, T, D, I]);
            return l.useMemo(() => ({
                dispatch: A,
                getContainerProps: k,
                getItemProps: P
            }), [A, k, P])
        }({
            navId: t,
            itemCount: S,
            focusedIndex: p,
            dispatch: G,
            onSelect: _,
            setFocus: d,
            getNewFocusIndex: g,
            maintainFocusPosition: A,
            includeSetSizes: T,
            focusOnMount: I,
            enabled: O
        })
}