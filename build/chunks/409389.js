/** chunk id: 409389 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    a = n(64700),
    r = n(873263),
    l = n(397927),
    s = n(403362),
    o = n(240248),
    d = n(890687),
    c = n(936356),
    u = n(505478),
    A = n(349555),
    _ = n(352670),
    h = n(654487),
    m = n(985018),
    g = n(670422);
let p = [],
    E = d.L1.SORT,
    I = d.L1.FILTER,
    f = a.forwardRef(function(e, t) {
        let n = a.useRef(null),
            [f, C] = (0, _.Y)(),
            T = a.useMemo(() => {
                var e;
                return e = f.get(E), ((0, o.uJ)(e) ? null : Object.values(h.kL).find(t => t === e) ?? null) ?? h.kL.SUGGESTED
            }, [f]),
            N = a.useMemo(() => (function(e) {
                if ((0, o.uJ)(e)) return null;
                let t = e.split(",").map(e => (0, h.WQ)(e)).filter(s.Vq);
                return t.length > 0 ? t : null
            })(f.get(I)) ?? p, [f]),
            S = a.useCallback(e => {
                C({
                    [E]: e
                })
            }, [C]),
            x = a.useCallback(e => {
                C({
                    [I]: 0 === e.length ? null : e.map(e => {
                        let {
                            filter: t
                        } = e;
                        return t
                    }).join(",")
                })
            }, [C]),
            {
                quests: v,
                excludedQuests: b,
                isFetchingCurrentQuests: y,
                hasFetched: O
            } = (0, d.Qh)(d.NC.ALL, a.useMemo(() => ({
                sortMethod: T,
                filters: N
            }), [T, N])),
            L = a.useCallback(() => {
                x(p)
            }, [x]),
            R = a.useRef(null),
            P = a.useRef(null),
            D = (0, r.zy)(),
            j = (0, r.W6)();
        return a.useEffect(() => {
            "" !== D.hash && null != R.current && null != P.current && (T !== R.current || N !== P.current) && j.replace({
                ...D,
                hash: void 0
            })
        }, [T, N, D, j]), a.useEffect(() => {
            R.current = T
        }, [T]), a.useEffect(() => {
            P.current = N
        }, [N]), (0, d.$P)({
            selectedSortMethod: T,
            selectedFilters: N,
            numQuestsVisible: v.length
        }), a.useImperativeHandle(t, () => ({
            resetSortingFiltering: () => {
                L(), S(h.kL.SUGGESTED)
            },
            scrollToQuest: e => {
                n.current?.scrollToQuest(e)
            }
        }), [L, S]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: g.Mj,
                children: [(0, i.jsx)(l.Heading, {
                    variant: "heading-lg/medium",
                    children: m.intl.string(m.t.giYD00)
                }), (0, i.jsxs)("div", {
                    className: g.Nf,
                    children: [(0, i.jsx)(u.A, {
                        onChange: S,
                        optionClassName: g.Uq,
                        selectedSortMethod: T
                    }), (0, i.jsx)(c.A, {
                        onChange: x,
                        selectedFilters: N
                    })]
                })]
            }), (0, i.jsx)(A.A, {
                ref: n,
                quests: v,
                excludedQuests: b,
                isFetching: y,
                hasFetched: O,
                hasFiltersApplied: N.length > 0,
                onClearFilters: L
            })]
        })
    })