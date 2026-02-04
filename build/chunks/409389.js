/** chunk id: 409389, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(747238), n(896048), n(812715);
var r = n(627968),
    i = n(64700),
    l = n(960488),
    a = n(397927),
    s = n(403362),
    o = n(240248),
    c = n(890687),
    u = n(936356),
    d = n(505478),
    p = n(349555),
    h = n(352670),
    f = n(654487),
    g = n(985018),
    m = n(153153);
let A = [],
    _ = c.L1.SORT,
    b = c.L1.FILTER,
    E = i.forwardRef(function(e, t) {
        let [n, E] = (0, h.Y)(), O = i.useMemo(() => {
            var e, t;
            return null !== (t = n.get(_), e = (0, o.uJ)(t) ? null : Object.values(f.kL).find(e => e === t) || null) && void 0 !== e ? e : f.kL.SUGGESTED
        }, [n]), y = i.useMemo(() => {
            var e;
            return null != (e = function(e) {
                if ((0, o.uJ)(e)) return null;
                let t = e.split(",").map(e => (0, f.WQ)(e)).filter(s.Vq);
                return t.length > 0 ? t : null
            }(n.get(b))) ? e : A
        }, [n]), I = i.useCallback(e => {
            E({
                [_]: e
            })
        }, [E]), v = i.useCallback(e => {
            E({
                [b]: 0 === e.length ? null : e.map(e => {
                    let {
                        filter: t
                    } = e;
                    return t
                }).join(",")
            })
        }, [E]), {
            quests: S,
            excludedQuests: C,
            isFetchingCurrentQuests: N,
            hasFetched: T
        } = (0, c.Qh)(c.NC.ALL, i.useMemo(() => ({
            sortMethod: O,
            filters: y
        }), [O, y])), j = i.useCallback(() => {
            v(A)
        }, [v]), x = i.useRef(null), P = i.useRef(null), w = (0, l.zy)(), L = (0, l.W6)();
        return i.useEffect(() => {
            if ("" !== w.hash && null != x.current && null != P.current) {
                var e, t;
                (O !== x.current || y !== P.current) && L.replace((e = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, w), t = t = {
                    hash: void 0
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e))
            }
        }, [O, y, w, L]), i.useEffect(() => {
            x.current = O
        }, [O]), i.useEffect(() => {
            P.current = y
        }, [y]), (0, c.$P)({
            selectedSortMethod: O,
            selectedFilters: y,
            numQuestsVisible: S.length
        }), i.useImperativeHandle(t, () => ({
            resetSortingFiltering: () => {
                j(), I(f.kL.SUGGESTED)
            }
        }), [j, I]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: m.Mj,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-lg/medium",
                    children: g.intl.string(g.t.giYD00)
                }), (0, r.jsxs)("div", {
                    className: m.Nf,
                    children: [(0, r.jsx)(d.A, {
                        onChange: I,
                        optionClassName: m.Uq,
                        selectedSortMethod: O
                    }), (0, r.jsx)(u.A, {
                        onChange: v,
                        selectedFilters: y
                    })]
                })]
            }), (0, r.jsx)(p.A, {
                quests: S,
                excludedQuests: C,
                isFetching: N,
                hasFetched: T,
                hasFiltersApplied: y.length > 0,
                onClearFilters: j
            })]
        })
    })