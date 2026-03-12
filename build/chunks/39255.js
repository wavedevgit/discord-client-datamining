/** chunk id: 39255 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    _: () => u
}), n(321073);
var a, l = n(627968),
    r = n(64700),
    s = n(503698),
    i = n.n(s),
    o = n(397927),
    h = n(650583),
    c = n(985018),
    d = n(621977);
let p = Object.freeze({
    SMALL: d.EX,
    MEDIUM: d.Y,
    LARGE: d.as
});
var u = ((a = {}).MEMBER = "MEMBER", a.ROLE = "ROLE", a.CHANNEL = "CHANNEL", a.USER = "USER", a);
class _ extends r.Component {
    static Sizes = p;
    static defaultProps = {
        size: p.SMALL,
        query: "",
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0
    };
    defaultInputProps = {
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-autocomplete": "list"
    };
    ref = r.createRef();
    containerRef = r.createRef();
    previousHeight = 0;
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight)
    }
    componentDidUpdate(e) {
        let {
            focusAfterReady: t,
            isReady: n
        } = this.props;
        t && !e.isReady && n && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange()
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            n = t - this.previousHeight;
        0 !== n && (this.previousHeight = t, this.props.onHeightChange?.(n))
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: n,
            sections: a,
            query: l,
            tags: r,
            onSelectionChange: s,
            onSelect: i,
            onRemoveTag: o,
            preventEscapePropagation: c
        } = this.props;
        if (0 !== a.length) {
            switch (e.key) {
                case h.dh.BACKSPACE:
                    (null == l || 0 === l.length) && null != r && r.length > 0 && (e.preventDefault(), e.stopPropagation(), o?.(r.length - 1));
                    break;
                case h.dh.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= a.length && (t = a.length - 1), n >= a[t] && (n = a[t] - 1));
                    break;
                case h.dh.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= a[t] && (n = a[t] - 1);
                    break;
                case h.dh.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = a[t] - 1 : t < 0 && (t = 0, n = 0));
                    break;
                case h.dh.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= a[t] && (n = 0, (t += 1) >= a.length && (t = a.length - 1, n = a[t] - 1));
                    break;
                case h.dh.ENTER:
                    if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= a.length || n >= a[t]) return;
                    null != i && i(t, n, e);
                    return;
                case h.dh.ESCAPE:
                    e.preventDefault(), c && e.stopPropagation(), null != i && i(null, null, e);
                    return;
                default:
                    return
            }
            null != s && s(t, n)
        }
    }
    handleKeyDownList(e) {
        let {
            sections: t,
            selectedSection: n,
            selectedRow: a,
            onSelect: l,
            onSelectionChange: r,
            query: s,
            tags: i,
            preventEscapePropagation: o
        } = this.props, {
            current: c
        } = this.ref;
        if (null != c) switch (e.key) {
            case h.dh.BACKSPACE:
                (null == s || 0 === s.length) && null != i && i.length > 0 && (e.preventDefault(), e.stopPropagation(), this.props.onRemoveTag?.(i.length - 1));
                break;
            case h.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), t.length > n && ++a >= t[n] && (++n >= t.length && (n = 0), a = 0), r?.(n, a);
                break;
            case h.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (--n < 0 && (n = t.length - 1), a = t[n] - 1), r?.(n, a);
                break;
            case h.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > a && l?.(n, a, e);
                break;
            case h.dh.ESCAPE:
                e.preventDefault(), o && e.stopPropagation(), l?.(null, null, e), c.blur()
        }
    }
    handleKeyDown = e => {
        let {
            onActivate: t,
            onKeyDown: n,
            onQueryChange: a,
            useKeyboardNavigation: l
        } = this.props;
        null != n && n(e);
        let {
            current: r
        } = this.ref;
        if (null == r || null != t) {
            e.key !== h.dh.TAB && t?.(e);
            return
        }
        if (e.key === h.dh.ESCAPE && null != r.value && "" !== r.value && r.value.length > 0) {
            r.value = "", null != a && a("");
            return
        }
        l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    };
    handleChange = e => {
        let {
            onQueryChange: t
        } = this.props;
        null != t && t(e.currentTarget.value)
    };
    handleFocus = e => {
        let {
            onFocus: t
        } = this.props;
        null != t && t(e)
    };
    handleRemoveTag = e => {
        let {
            onRemoveTag: t
        } = this.props;
        t?.(e)
    };
    focus = () => {
        let {
            current: e
        } = this.ref;
        null != e && e.focus()
    };
    render() {
        let {
            autoFocus: e,
            query: t,
            placeholder: n = c.intl.string(c.t.LzcpeZ),
            themeOverride: a,
            disabled: r,
            size: s,
            maxHeight: h,
            tags: p,
            onActivate: u,
            className: _,
            inputProps: g,
            focusAfterReady: f
        } = this.props, E = !1, b = [];
        return null != p && p.length > 0 && ("string" == typeof p[0] ? p.forEach((e, t) => b.push((0, l.jsxs)(o.MzZ, {
            focusProps: {
                offset: 4
            },
            className: d.Tc,
            onClick: this.handleRemoveTag.bind(this, t),
            children: [e, (0, l.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: d.VN,
                "aria-label": c.intl.string(c.t.N86XcP)
            })]
        }, t))) : (E = !0, p.forEach((e, t) => b.push((0, l.jsxs)(o.MzZ, {
            className: i()(d.Tc, d.J2),
            onClick: this.handleRemoveTag.bind(this, t),
            children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, l.jsx)(o.euF, {
                src: e.avatar,
                "aria-hidden": !0,
                size: o._3J.SIZE_16
            }), "ROLE" === e.type && null != e.color && (0, l.jsx)("span", {
                className: d.Mk,
                style: {
                    backgroundColor: e.color
                }
            }), (0, l.jsx)("span", {
                className: d.v6,
                children: e.label
            }), (0, l.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: d.VN,
                "aria-label": c.intl.string(c.t.N86XcP)
            })]
        }, t))))), (0, l.jsx)(o.vN3, {
            focusTarget: this.ref,
            ringTarget: this.containerRef,
            children: (0, l.jsx)(o.NPJ, {
                theme: a,
                children: a => (0, l.jsx)("div", {
                    ref: this.containerRef,
                    className: i()(_, d.kL, s, a, {
                        [d.r9]: r
                    }),
                    children: (0, l.jsxs)(o.IpV, {
                        className: d.vW,
                        style: {
                            maxHeight: h
                        },
                        children: [b, (0, l.jsx)("input", {
                            className: i()(d.hF, {
                                [d.He]: E
                            }),
                            type: "text",
                            ref: this.ref,
                            spellCheck: "false",
                            placeholder: n,
                            value: t,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleFocus,
                            disabled: r,
                            "aria-disabled": r,
                            autoFocus: !f && e,
                            onMouseDown: u,
                            ...this.defaultInputProps,
                            ...g
                        })]
                    })
                })
            })
        })
    }
}
let g = _