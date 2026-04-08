/** chunk id: 409389 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    r = n(64700),
    a = n(873263),
    l = n(397927),
    s = n(403362),
    o = n(240248),
    d = n(890687),
    c = n(936356),
    u = n(505478),
    A = n(349555),
    h = n(352670),
    _ = n(654487),
    m = n(985018),
    p = n(258547);
let g = [],
    E = d.L1.SORT,
    I = d.L1.FILTER,
    f = r.forwardRef(function(e, t) {
        let n = r.useRef(null),
            [f, C] = (0, h.Y)(),
            T = r.useMemo(() => {
                var e;
                return e = f.get(E), ((0, o.uJ)(e) ? null : Object.values(_.kL).find(t => t === e) ?? null) ?? _.kL.SUGGESTED
            }, [f]),
            N = r.useMemo(() => (function(e) {
                if ((0, o.uJ)(e)) return null;
                let t = e.split(",").map(e => (0, _.WQ)(e)).filter(s.Vq);
                return t.length > 0 ? t : null
            })(f.get(I)) ?? g, [f]),
            S = r.useCallback(e => {
                C({
                    [E]: e
                })
            }, [C]),
            v = r.useCallback(e => {
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
                quests: x,
                excludedQuests: y,
                isFetchingCurrentQuests: b,
                hasFetched: O
            } = (0, d.Qh)(d.NC.ALL, r.useMemo(() => ({
                sortMethod: T,
                filters: N
            }), [T, N])),
            L = r.useCallback(() => {
                v(g)
            }, [v]),
            R = r.useRef(null),
            P = r.useRef(null),
            D = (0, a.zy)(),
            M = (0, a.W6)();
        return r.useEffect(() => {
            "" !== D.hash && null != R.current && null != P.current && (T !== R.current || N !== P.current) && M.replace({
                ...D,
                hash: void 0
            })
        }, [T, N, D, M]), r.useEffect(() => {
            R.current = T
        }, [T]), r.useEffect(() => {
            P.current = N
        }, [N]), (0, d.$P)({
            selectedSortMethod: T,
            selectedFilters: N,
            numQuestsVisible: x.length
        }), r.useImperativeHandle(t, () => ({
            resetSortingFiltering: () => {
                L(), S(_.kL.SUGGESTED)
            },
            scrollToQuest: e => {
                n.current?.scrollToQuest(e)
            }
        }), [L, S]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: p.Mj,
                children: [(0, i.jsx)(l.Heading, {
                    variant: "heading-lg/medium",
                    children: m.intl.string(m.t.giYD00)
                }), (0, i.jsxs)("div", {
                    className: p.Nf,
                    children: [(0, i.jsx)(u.A, {
                        onChange: S,
                        optionClassName: p.Uq,
                        selectedSortMethod: T
                    }), (0, i.jsx)(c.A, {
                        onChange: v,
                        selectedFilters: N
                    })]
                })]
            }), (0, i.jsx)(A.A, {
                ref: n,
                quests: x,
                excludedQuests: y,
                isFetching: b,
                hasFetched: O,
                hasFiltersApplied: N.length > 0,
                onClearFilters: L
            })]
        })
    })