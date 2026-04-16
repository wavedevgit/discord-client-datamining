/** chunk id: 342298 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    L: () => h
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(397927),
    c = n(240248),
    u = n(946274),
    m = n(652215),
    x = n(985018),
    g = n(792751);

function h(e) {
    let {
        className: t,
        icon: n = null
    } = e;
    return (0, i.jsx)(d.NPJ, {
        theme: m.NJ8.LIGHT,
        children: e => (0, i.jsx)("div", {
            className: a()(g.XD, t, e),
            children: n
        })
    })
}
class p extends l.PureComponent {
    static defaultProps = {
        name: "",
        makeURL: e => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null
    };
    inputRef = l.createRef();
    handleExternalFileChange(e) {
        o()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
    }
    handleRemove = () => {
        this.props.onChange(null)
    };
    render() {
        let e, t, n, l, {
            image: s,
            hint: r,
            name: o,
            makeURL: p,
            disabled: A,
            onChange: b,
            showIcon: f,
            showIconDisabled: _,
            className: j,
            imageClassName: N,
            iconClassName: v,
            iconWrapperClassName: T,
            icon: C,
            hideSize: E,
            imageStyle: I,
            showRemoveButton: S,
            maxFileSizeBytes: y,
            onFileSizeError: O,
            onOpenImageSelectModal: w,
            "aria-label": k
        } = this.props;
        if (null != (e = null != s && /^data:/.test(s) ? s : p(s)) ? t = `url("${e}")` : null != o && (n = (0, i.jsx)(d.Heading, {
                variant: "heading-xxl/normal",
                color: "always-white",
                className: g.nX,
                children: (0, c.oN)(o)
            })), A) return (0, i.jsx)("div", {
            className: a()(g.WY, g.r9, j),
            children: (0, i.jsxs)("div", {
                className: a()(g.Yp, N),
                style: {
                    ...I,
                    backgroundImage: t
                },
                children: [n, _ && (0, i.jsx)("div", {
                    className: a()(g.XD, g.$N, v),
                    children: C
                })]
            })
        });
        null != s ? l = (0, i.jsx)(d.MzZ, {
            className: g.DT,
            onClick: this.handleRemove,
            children: x.intl.string(x.t.N86XcP)
        }) : E || (l = (0, i.jsx)("small", {
            className: g.UZ,
            children: x.intl.format(x.t.AH4c7Y, {
                size: m.eQT
            })
        }));
        let R = k ?? r ?? x.intl.string(x.t["Ge+941"]);
        return (0, i.jsxs)("div", {
            className: a()(g.WY, j),
            children: [(0, i.jsx)(d.vN3, {
                within: !0,
                children: (0, i.jsxs)("div", {
                    className: f ? a()(g.U1, T) : void 0,
                    children: [(0, i.jsxs)("div", {
                        className: a()(g.Yp, N),
                        style: {
                            ...I,
                            backgroundImage: t
                        },
                        children: [(0, i.jsx)("span", {
                            "aria-hidden": !0,
                            children: n
                        }), null != w ? (0, i.jsx)(d.DUT, {
                            className: g.c4,
                            "aria-label": R,
                            onClick: w
                        }) : (0, i.jsx)(u.Ay, {
                            ref: this.inputRef,
                            onChange: b,
                            className: g.c4,
                            "aria-label": R,
                            tabIndex: 0,
                            maxFileSizeBytes: y,
                            onFileSizeError: O
                        })]
                    }), null != r && (0, i.jsx)("div", {
                        className: g.$J,
                        "aria-hidden": "true",
                        children: r
                    }), f && (0, i.jsx)(h, {
                        className: v,
                        icon: C
                    })]
                })
            }), S ? l : null]
        })
    }
}
let A = p