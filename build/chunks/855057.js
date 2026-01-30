/** chunk id: 855057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(497685),
    d = n(235986),
    f = n(151271),
    p = n(821102),
    _ = n(996566),
    h = n(291147),
    m = n(380544),
    g = n(950301),
    E = n(247683),
    y = n(652215),
    b = n(732139),
    O = n(650583),
    v = n(985018),
    A = n(418981);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let N = e => e.stopPropagation();
class w extends i.PureComponent {
    componentDidMount() {
        u.V$(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, y.dD.SEARCH)
    }
    componentDidUpdate(e) {
        "" === e.query && "" !== this.props.query && null == this.state.resultType && this.search(this.props.query, y.dD.SEARCH)
    }
    componentWillUnmount() {
        c.h.wait(() => u.Se()), document.removeEventListener("keydown", this.backToFrontPage)
    }
    search(e, t, n) {
        u.$P(e, t, n), "" === e ? this.setState({
            resultType: null
        }) : this.state.resultType !== y.dD.SEARCH && this.setState({
            resultType: y.dD.SEARCH
        })
    }
    renderHeaderContent() {
        let {
            query: e,
            headingColor: t
        } = this.props, {
            resultType: n
        } = this.state;
        switch (n) {
            case y.dD.FAVORITES:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: A.wL,
                    children: v.intl.string(v.t.y3LQCG)
                });
            case y.dD.TRENDING_GIFS:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: A.wL,
                    children: v.intl.string(v.t.H6zNFz)
                });
            default: {
                let t = (0, m.cf)(),
                    n = (0, h.w)(t);
                return (0, r.jsx)(l.IWV, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: n,
                    "aria-label": n,
                    ref: this.props.searchBarRef,
                    autoFocus: !0
                })
            }
        }
    }
    renderHeader() {
        let {
            resultType: e
        } = this.state, t = null;
        return null != e && (t = (0, r.jsx)(l.DUT, {
            onClick: this.handleClearQuery,
            className: A.Gv,
            "aria-label": v.intl.string(v.t["13/7kX"]),
            children: (0, r.jsx)(l.rJJ, {
                size: "md",
                color: "currentColor"
            })
        })), (0, r.jsxs)(d.A, {
            align: d.A.Align.CENTER,
            children: [t, this.renderHeaderContent()]
        })
    }
    renderContent() {
        let {
            contentClassName: e,
            resultItems: t,
            resultQuery: n,
            query: i,
            favorites: a,
            searchOffset: o,
            searchLimit: s,
            searchTotalResults: l,
            suggestions: c,
            hideFavorites: u
        } = this.props, {
            resultType: d
        } = this.state;
        return null == d ? (0, r.jsx)(g.A, {
            className: e,
            hideFavoritesTile: u,
            onSelectItem: this.handleSelectItem
        }) : (0, r.jsx)(E.Ay, {
            className: e,
            data: d === y.dD.FAVORITES ? a : t,
            onSelectGIF: this.handleSelectGIF,
            resultType: d,
            resultQuery: n,
            query: i,
            searchOffset: o,
            searchLimit: s,
            searchTotalResults: l,
            suggestions: c,
            onSelectSuggestion: this.handleSelectSuggestion,
            selectedGIF: this.props.selectedGIF
        })
    }
    render() {
        let {
            className: e,
            forwardedRef: t
        } = this.props;
        return (0, r.jsxs)("div", {
            id: b.ni,
            role: "tabpanel",
            "aria-labelledby": b.g9,
            className: o()(A.kL, e),
            onClick: N,
            ref: t,
            children: [(0, r.jsx)("div", {
                className: o()(A.wx, this.props.headerClassName),
                children: this.renderHeader()
            }), (0, r.jsx)("div", {
                className: A.Qs,
                children: this.renderContent()
            })]
        })
    }
    constructor(...e) {
        super(...e), I(this, "state", {
            resultType: null
        }), I(this, "backToFrontPage", e => {
            let {
                resultType: t
            } = this.state;
            e.key !== O.dh.ESCAPE || null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
        }), I(this, "handleChangeQuery", e => {
            (0, f.Ri)(e), this.search(e, y.dD.SEARCH)
        }), I(this, "handleSelectSuggestion", e => {
            (0, f.Ri)(""), u.Se(), this.search(e, y.dD.SEARCH_SUGGESTION, !0)
        }), I(this, "handleClearQuery", () => {
            let {
                current: e
            } = this.props.searchBarRef;
            (0, f.Ri)(""), u.Se(), this.setState({
                resultType: null
            }), null != e && e.focus()
        }), I(this, "handleSelectGIF", e => {
            let {
                onSelectGIF: t
            } = this.props;
            null != t && t(e)
        }), I(this, "handleSelectItem", (e, t) => {
            let {
                current: n
            } = this.props.searchBarRef;
            switch (e) {
                case y.dD.TRENDING_CATEGORY:
                    u.$P(t, y.dD.TRENDING_CATEGORY, !0), null != n && n.focus();
                    break;
                case y.dD.TRENDING_GIFS:
                    u.Z4()
            }
            this.setState({
                resultType: e
            })
        })
    }
}
let R = i.forwardRef((e, t) => {
    i.useEffect(() => {
        if (!e.persistSearch) {
            var t;
            (0, f.Ri)(null != (t = e.initialQuery) ? t : "")
        }
    }, [e.persistSearch, e.initialQuery]);
    let {
        query: n,
        resultQuery: a,
        resultItems: o,
        suggestions: l
    } = (0, s.cf)([p.A], () => ({
        query: p.A.getQuery(),
        resultQuery: p.A.getResultQuery(),
        resultItems: p.A.getResultItems(),
        suggestions: p.A.getSuggestions()
    })), c = (0, f.RQ)(e => e.searchQuery), u = null != n && "" !== n ? n : c, d = (0, _.IE)(), h = i.useRef(null);
    return (0, r.jsx)(w, C(S({}, e), {
        forwardedRef: t,
        query: u,
        resultQuery: a,
        resultItems: o,
        suggestions: l,
        favorites: d,
        searchOffset: 0,
        searchTotalResults: p.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: h,
        selectedGIF: e.selectedGIF
    }))
})