/** chunk id: 468691, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(621466),
    o = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(194894),
    p = n(186111),
    h = n(742077),
    g = n(268387),
    m = n(715671),
    f = n(652215),
    A = n(985018),
    _ = n(75755);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class E extends i.Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        u.h.wait(() => d.pU(null)), document.removeEventListener("keydown", this.handleKeyDown)
    }
    reset() {
        d.pU(null), d.n9("")
    }
    focusInput() {
        var e;
        let {
            searchBarRef: t
        } = this;
        null != t && (null == (e = t.current) || e.focus())
    }
    updateActiveRow(e) {
        let {
            applicationViewItems: t,
            activeRowKey: n
        } = this.props, r = t.findIndex(e => e.key === n), i = 0;
        r >= 0 && (i = (r + e) % t.length) < 0 && (i = t.length - 1);
        let l = t[i];
        d.pU(null != l ? l.key : null, !0)
    }
    render() {
        let {
            filterQuery: e
        } = this.props, {
            focused: t
        } = this.state;
        return (0, r.jsx)("div", {
            className: a()({
                [_.sw]: !0,
                [_.in]: t
            }),
            children: (0, r.jsx)(c.IWV, {
                ref: this.searchBarRef,
                onChange: d.n9,
                onFocus: () => this.setState({
                    focused: !0
                }),
                onBlur: () => this.setState({
                    focused: !1
                }),
                onClear: () => {
                    this.reset(), this.focusInput()
                },
                query: e,
                placeholder: A.intl.string(A.t.aSxWSo)
            })
        })
    }
    constructor(...e) {
        super(...e), b(this, "searchBarRef", i.createRef()), b(this, "state", {
            focused: !1
        }), b(this, "handleKeyDown", e => {
            var t, n, r;
            let {
                activeRowKey: i,
                hasModalOpen: l,
                applicationViewItems: a
            } = this.props, {
                searchBarRef: o
            } = this;
            if (l || e.ctrlKey || e.altKey || e.metaKey || null == o) return;
            let c = null == (t = (0, s.BF)(e)) ? void 0 : t.activeElement;
            if (!(c !== o.current && (0, s.Cw)(c))) switch (e.which) {
                case f.Ks6.ESCAPE:
                    e.target !== o.current ? this.reset() : null != o.current && (null == (n = o.current) || n.blur());
                    break;
                case f.Ks6.ENTER:
                    if (null != i) {
                        e.preventDefault();
                        let t = a.find(e => e.key === i);
                        if (null == t) return;
                        let n = t.libraryApplication;
                        m.performDefaultLibraryApplicationAction(n, {
                            analyticsParams: {
                                source: f.ThZ.APPLICATION_LIBRARY,
                                location: {
                                    page: f.liQ.LIBRARY,
                                    section: f.JJy.LIBRARY_APPLICATION_LIST,
                                    object: f.ZSU.BUTTON_CTA
                                }
                            }
                        })
                    }
                    break;
                case f.Ks6.ARROW_DOWN:
                case f.Ks6.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === f.Ks6.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != o.current && e.target !== o.current && (null == (r = o.current) || r.focus())
            }
        })
    }
}

function O() {
    let e = (0, o.bG)([p.A], () => p.A.hasLayers()),
        t = (0, c.red)(c.DXt);
    return (0, r.jsx)(E, {
        activeRowKey: (0, o.bG)([g.A], () => g.A.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.bG)([h.A], () => h.A.applicationFilterQuery),
        applicationViewItems: (0, o.bG)([h.A], () => h.A.sortedFilteredLibraryApplicationViewItems)
    })
}