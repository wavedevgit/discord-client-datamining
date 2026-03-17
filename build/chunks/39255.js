/** chunk id: 39255 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    _: () => d
}), n(321073);
var r, a = n(627968),
    l = n(64700),
    s = n(503698),
    o = n.n(s),
    i = n(397927),
    h = n(650583),
    p = n(985018),
    c = n(633175);
let u = Object.freeze({
    SMALL: c.EX,
    MEDIUM: c.Y,
    LARGE: c.as
});
var d = ((r = {}).MEMBER = "MEMBER", r.ROLE = "ROLE", r.CHANNEL = "CHANNEL", r.USER = "USER", r);
class _ extends l.Component {
    static Sizes = u;
    static defaultProps = {
        size: u.SMALL,
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
    ref = l.createRef();
    containerRef = l.createRef();
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
            sections: r,
            query: a,
            tags: l,
            onSelectionChange: s,
            onSelect: o,
            onRemoveTag: i,
            preventEscapePropagation: p
        } = this.props;
        if (0 !== r.length) {
            switch (e.key) {
                case h.dh.BACKSPACE:
                    (null == a || 0 === a.length) && null != l && l.length > 0 && (e.preventDefault(), e.stopPropagation(), i?.(l.length - 1));
                    break;
                case h.dh.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case h.dh.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= r[t] && (n = r[t] - 1);
                    break;
                case h.dh.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = r[t] - 1 : t < 0 && (t = 0, n = 0));
                    break;
                case h.dh.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= r[t] && (n = 0, (t += 1) >= r.length && (t = r.length - 1, n = r[t] - 1));
                    break;
                case h.dh.ENTER:
                    if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= r.length || n >= r[t]) return;
                    null != o && o(t, n, e);
                    return;
                case h.dh.ESCAPE:
                    e.preventDefault(), p && e.stopPropagation(), null != o && o(null, null, e);
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
            selectedRow: r,
            onSelect: a,
            onSelectionChange: l,
            query: s,
            tags: o,
            preventEscapePropagation: i
        } = this.props, {
            current: p
        } = this.ref;
        if (null != p) switch (e.key) {
            case h.dh.BACKSPACE:
                (null == s || 0 === s.length) && null != o && o.length > 0 && (e.preventDefault(), e.stopPropagation(), this.props.onRemoveTag?.(o.length - 1));
                break;
            case h.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), r = 0), l?.(n, r);
                break;
            case h.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), r = t[n] - 1), l?.(n, r);
                break;
            case h.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && a?.(n, r, e);
                break;
            case h.dh.ESCAPE:
                e.preventDefault(), i && e.stopPropagation(), a?.(null, null, e), p.blur()
        }
    }
    handleKeyDown = e => {
        let {
            onActivate: t,
            onKeyDown: n,
            onQueryChange: r,
            useKeyboardNavigation: a
        } = this.props;
        null != n && n(e);
        let {
            current: l
        } = this.ref;
        if (null == l || null != t) {
            e.key !== h.dh.TAB && t?.(e);
            return
        }
        if (e.key === h.dh.ESCAPE && null != l.value && "" !== l.value && l.value.length > 0) {
            l.value = "", null != r && r("");
            return
        }
        a && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
            placeholder: n = p.intl.string(p.t.LzcpeZ),
            themeOverride: r,
            disabled: l,
            size: s,
            maxHeight: h,
            tags: u,
            onActivate: d,
            className: _,
            inputProps: g,
            focusAfterReady: f
        } = this.props, E = !1, R = [];
        return null != u && u.length > 0 && ("string" == typeof u[0] ? u.forEach((e, t) => R.push((0, a.jsxs)(i.MzZ, {
            focusProps: {
                offset: 4
            },
            className: c.Tc,
            onClick: this.handleRemoveTag.bind(this, t),
            children: [e, (0, a.jsx)(i.PGe, {
                size: "md",
                color: "currentColor",
                className: c.VN,
                "aria-label": p.intl.string(p.t.N86XcP)
            })]
        }, t))) : (E = !0, u.forEach((e, t) => R.push((0, a.jsxs)(i.MzZ, {
            className: o()(c.Tc, c.J2),
            onClick: this.handleRemoveTag.bind(this, t),
            children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, a.jsx)(i.euF, {
                src: e.avatar,
                "aria-hidden": !0,
                size: i._3J.SIZE_16
            }), "ROLE" === e.type && null != e.color && (0, a.jsx)("span", {
                className: c.Mk,
                style: {
                    backgroundColor: e.color
                }
            }), (0, a.jsx)("span", {
                className: c.v6,
                children: e.label
            }), (0, a.jsx)(i.PGe, {
                size: "md",
                color: "currentColor",
                className: c.VN,
                "aria-label": p.intl.string(p.t.N86XcP)
            })]
        }, t))))), (0, a.jsx)(i.vN3, {
            focusTarget: this.ref,
            ringTarget: this.containerRef,
            children: (0, a.jsx)(i.NPJ, {
                theme: r,
                children: r => (0, a.jsx)("div", {
                    ref: this.containerRef,
                    className: o()(_, c.kL, s, r, {
                        [c.r9]: l
                    }),
                    children: (0, a.jsxs)(i.IpV, {
                        className: c.vW,
                        style: {
                            maxHeight: h
                        },
                        children: [R, (0, a.jsx)("input", {
                            className: o()(c.hF, {
                                [c.He]: E
                            }),
                            type: "text",
                            ref: this.ref,
                            spellCheck: "false",
                            placeholder: n,
                            value: t,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleFocus,
                            disabled: l,
                            "aria-disabled": l,
                            autoFocus: !f && e,
                            onMouseDown: d,
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