/** Chunk was on 78811 **/
/** chunk id: 333737, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    default: () => y
}), r(896048);
var n = r(627968),
    o = r(64700),
    s = r(189213),
    i = r(397927),
    a = r(98207),
    c = r(414121),
    l = r(287809),
    d = r(464477),
    u = r(985018),
    p = r(954469);

function h(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let f = e => {
    let {
        image: t,
        label: r,
        text: o,
        children: s
    } = e;
    return (0, n.jsxs)("div", {
        className: p.uW,
        children: [(0, n.jsx)("div", {
            className: p.X$,
            children: t
        }), (0, n.jsx)("div", {
            className: p.f5,
            children: (0, n.jsxs)("div", {
                children: [(0, n.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    className: p.p_,
                    children: r
                }), (0, n.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: o
                }), s]
            })
        })]
    })
};
class _ extends o.PureComponent {
    render() {
        var e;
        let {
            transitionState: t,
            onClose: o
        } = this.props, {
            totpSecret: a,
            code: h,
            isVerifying: _
        } = this.state, y = null == (e = l.default.getCurrentUser()) ? void 0 : e.email, g = (0, d.V3)(null != y ? y : "", a), b = (0, n.jsx)("form", {
            onSubmit: this.handleActivate,
            children: (0, n.jsxs)("div", {
                className: p.Kf,
                children: [(0, n.jsx)(i.ksK, {
                    value: h,
                    placeholder: "000 000",
                    maxLength: 7,
                    autoComplete: "one-time-code",
                    onChange: this.handleCodeChange,
                    error: this.state.error,
                    autoFocus: !0,
                    fullWidth: !0
                }), (0, n.jsx)(i.Button, {
                    variant: "primary",
                    text: u.intl.string(u.t["/a5+YV"]),
                    type: "submit",
                    loading: _
                })]
            })
        });
        return (0, n.jsxs)(s.Modal, {
            title: u.intl.string(u.t.cDgKte),
            subtitle: u.intl.string(u.t["7NGwtH"]),
            transitionState: t,
            onClose: o,
            actions: [],
            children: [(0, n.jsx)(f, {
                image: (0, n.jsx)("img", {
                    alt: "",
                    src: r(582248),
                    width: 100,
                    height: 100
                }),
                label: u.intl.string(u.t["9E74Dx"]),
                text: u.intl.format(u.t.A7Aehw, {
                    googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                    authyURL: "https://www.authy.com/"
                })
            }), (0, n.jsx)(i.cGx, {
                className: p.yF
            }), (0, n.jsx)(f, {
                image: (0, n.jsx)(c.Ay, {
                    text: g
                }),
                label: u.intl.string(u.t["91InF1"]),
                text: u.intl.string(u.t.hFeBkl),
                children: (0, n.jsxs)("div", {
                    className: p.h8,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        className: p.p_,
                        children: u.intl.string(u.t["76IPwr"])
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: p.rJ,
                        selectable: !0,
                        children: a
                    })]
                })
            }), (0, n.jsx)(i.cGx, {
                className: p.yF
            }), (0, n.jsx)(f, {
                image: (0, n.jsx)("img", {
                    alt: "",
                    src: r(87282)
                }),
                label: u.intl.string(u.t["SaD/LY"]),
                text: u.intl.string(u.t.vI1zic),
                children: b
            })]
        })
    }
    constructor(...e) {
        super(...e), h(this, "state", {
            code: "",
            totpSecret: (0, d.tn)(),
            error: null,
            isVerifying: !1
        }), h(this, "handleCodeChange", e => {
            this.setState({
                code: e
            })
        }), h(this, "handleActivate", e => {
            e.preventDefault();
            let {
                totpSecret: t,
                code: r
            } = this.state;
            this.setState({
                isVerifying: !0
            }), a.A.enable({
                code: r,
                secret: (0, d.cC)(t)
            }).then(this.handleActivateSuccess, e => this.setState({
                error: e.body.message,
                isVerifying: !1
            }))
        }), h(this, "handleActivateSuccess", () => {
            let {
                onClose: e,
                handleEnableMFASuccess: t
            } = this.props;
            this.setState({
                isVerifying: !1
            }), t(), null == e || e()
        })
    }
}
let y = _