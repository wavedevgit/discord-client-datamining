/** chunk id: 409389, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    r = n(64700),
    l = n(873263),
    a = n(397927),
    s = n(403362),
    o = n(240248),
    d = n(890687),
    c = n(936356),
    u = n(505478),
    A = n(349555),
    h = n(352670),
    _ = n(654487),
    m = n(985018),
    p = n(153153);
let g = [],
    E = d.L1.SORT,
    I = d.L1.FILTER,
    f = r.forwardRef(function(e, t) {
        let [n, f] = (0, h.Y)(), C = r.useMemo(() => {
            var e;
            return e = n.get(E), ((0, o.uJ)(e) ? null : Object.values(_.kL).find(t => t === e) || null) ?? _.kL.SUGGESTED
        }, [n]), T = r.useMemo(() => (function(e) {
            if ((0, o.uJ)(e)) return null;
            let t = e.split(",").map(e => (0, _.WQ)(e)).filter(s.Vq);
            return t.length > 0 ? t : null
        })(n.get(I)) ?? g, [n]), N = r.useCallback(e => {
            f({
                [E]: e
            })
        }, [f]), S = r.useCallback(e => {
            f({
                [I]: 0 === e.length ? null : e.map(e => {
                    let {
                        filter: t
                    } = e;
                    return t
                }).join(",")
            })
        }, [f]), {
            quests: x,
            excludedQuests: v,
            isFetchingCurrentQuests: y,
            hasFetched: b
        } = (0, d.Qh)(d.NC.ALL, r.useMemo(() => ({
            sortMethod: C,
            filters: T
        }), [C, T])), O = r.useCallback(() => {
            S(g)
        }, [S]), L = r.useRef(null), R = r.useRef(null), P = (0, l.zy)(), j = (0, l.W6)();
        return r.useEffect(() => {
            "" !== P.hash && null != L.current && null != R.current && (C !== L.current || T !== R.current) && j.replace({
                ...P,
                hash: void 0
            })
        }, [C, T, P, j]), r.useEffect(() => {
            L.current = C
        }, [C]), r.useEffect(() => {
            R.current = T
        }, [T]), (0, d.$P)({
            selectedSortMethod: C,
            selectedFilters: T,
            numQuestsVisible: x.length
        }), r.useImperativeHandle(t, () => ({
            resetSortingFiltering: () => {
                O(), N(_.kL.SUGGESTED)
            }
        }), [O, N]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: p.Mj,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-lg/medium",
                    children: m.intl.string(m.t.giYD00)
                }), (0, i.jsxs)("div", {
                    className: p.Nf,
                    children: [(0, i.jsx)(u.A, {
                        onChange: N,
                        optionClassName: p.Uq,
                        selectedSortMethod: C
                    }), (0, i.jsx)(c.A, {
                        onChange: S,
                        selectedFilters: T
                    })]
                })]
            }), (0, i.jsx)(A.A, {
                quests: x,
                excludedQuests: v,
                isFetching: y,
                hasFetched: b,
                hasFiltersApplied: T.length > 0,
                onClearFilters: O
            })]
        })
    })