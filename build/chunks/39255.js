/** chunk id: 39255 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    _: () => p
}), n(321073);
var r, i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    u = n(650583),
    c = n(985018),
    d = n(820988);
let h = Object.freeze({
    SMALL: d.EX,
    MEDIUM: d.Y,
    LARGE: d.as
});
var p = ((r = {}).MEMBER = "MEMBER", r.ROLE = "ROLE", r.CHANNEL = "CHANNEL", r.USER = "USER", r);
class f extends l.Component {
    static Sizes = h;
    static defaultProps = {
        size: h.SMALL,
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
            query: i,
            tags: l,
            onSelectionChange: s,
            onSelect: a,
            onRemoveTag: o,
            preventEscapePropagation: c
        } = this.props;
        if (0 !== r.length) {
            switch (e.key) {
                case u.dh.BACKSPACE:
                    (null == i || 0 === i.length) && null != l && l.length > 0 && (e.preventDefault(), e.stopPropagation(), o?.(l.length - 1));
                    break;
                case u.dh.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case u.dh.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= r[t] && (n = r[t] - 1);
                    break;
                case u.dh.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = r[t] - 1 : t < 0 && (t = 0, n = 0));
                    break;
                case u.dh.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= r[t] && (n = 0, (t += 1) >= r.length && (t = r.length - 1, n = r[t] - 1));
                    break;
                case u.dh.ENTER:
                    if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= r.length || n >= r[t]) return;
                    null != a && a(t, n, e);
                    return;
                case u.dh.ESCAPE:
                    e.preventDefault(), c && e.stopPropagation(), null != a && a(null, null, e);
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
            onSelect: i,
            onSelectionChange: l,
            query: s,
            tags: a,
            preventEscapePropagation: o
        } = this.props, {
            current: c
        } = this.ref;
        if (null != c) switch (e.key) {
            case u.dh.BACKSPACE:
                (null == s || 0 === s.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), this.props.onRemoveTag?.(a.length - 1));
                break;
            case u.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), r = 0), l?.(n, r);
                break;
            case u.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), r = t[n] - 1), l?.(n, r);
                break;
            case u.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && i?.(n, r, e);
                break;
            case u.dh.ESCAPE:
                e.preventDefault(), o && e.stopPropagation(), i?.(null, null, e), c.blur()
        }
    }
    handleKeyDown = e => {
        let {
            onActivate: t,
            onKeyDown: n,
            onQueryChange: r,
            useKeyboardNavigation: i
        } = this.props;
        null != n && n(e);
        let {
            current: l
        } = this.ref;
        if (null == l || null != t) {
            e.key !== u.dh.TAB && t?.(e);
            return
        }
        if (e.key === u.dh.ESCAPE && null != l.value && "" !== l.value && l.value.length > 0) {
            l.value = "", null != r && r("");
            return
        }
        i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
            themeOverride: r,
            disabled: l,
            size: s,
            maxHeight: u,
            tags: h,
            onActivate: p,
            className: f,
            inputProps: g,
            focusAfterReady: E
        } = this.props, T = !1, A = [];
        return null != h && h.length > 0 && ("string" == typeof h[0] ? h.forEach((e, t) => A.push((0, i.jsxs)(o.MzZ, {
            focusProps: {
                offset: 4
            },
            className: d.Tc,
            onClick: this.handleRemoveTag.bind(this, t),
            children: [e, (0, i.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: d.VN,
                "aria-label": c.intl.string(c.t.N86XcP)
            })]
        }, t))) : (T = !0, h.forEach((e, t) => A.push((0, i.jsxs)(o.MzZ, {
            className: a()(d.Tc, d.J2),
            onClick: this.handleRemoveTag.bind(this, t),
            children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, i.jsx)(o.euF, {
                src: e.avatar,
                "aria-hidden": !0,
                size: o._3J.SIZE_16
            }), "ROLE" === e.type && null != e.color && (0, i.jsx)("span", {
                className: d.Mk,
                style: {
                    backgroundColor: e.color
                }
            }), (0, i.jsx)("span", {
                className: d.v6,
                children: e.label
            }), (0, i.jsx)(o.PGe, {
                size: "md",
                color: "currentColor",
                className: d.VN,
                "aria-label": c.intl.string(c.t.N86XcP)
            })]
        }, t))))), (0, i.jsx)(o.vN3, {
            focusTarget: this.ref,
            ringTarget: this.containerRef,
            children: (0, i.jsx)(o.NPJ, {
                theme: r,
                children: r => (0, i.jsx)("div", {
                    ref: this.containerRef,
                    className: a()(f, d.kL, s, r, {
                        [d.r9]: l
                    }),
                    children: (0, i.jsxs)(o.IpV, {
                        className: d.vW,
                        style: {
                            maxHeight: u
                        },
                        children: [A, (0, i.jsx)("input", {
                            className: a()(d.hF, {
                                [d.He]: T
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
                            autoFocus: !E && e,
                            onMouseDown: p,
                            ...this.defaultInputProps,
                            ...g
                        })]
                    })
                })
            })
        })
    }
}
let g = f