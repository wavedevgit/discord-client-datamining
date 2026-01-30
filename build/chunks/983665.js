/** chunk id: 983665, original params: t,n,i (module,exports,require) **/
i.d(n, {
    default: () => h
}), i(896048), i(492834), i(228524);
var e = i(627968),
    a = i(64700),
    s = i(562465),
    l = i(397927),
    r = i(235986),
    o = i(957565),
    d = i(677558),
    c = i(652215),
    x = i(985018),
    m = i(159621);

function u(t) {
    let {
        name: n,
        value: i
    } = t, [s, r] = a.useState(l.qCr.DEFAULT);
    return (0, e.jsx)("div", {
        className: m.lj,
        children: (0, e.jsx)(l.D0$, {
            label: n,
            children: (0, e.jsx)(l.e2O, {
                value: i,
                mode: s,
                supportsCopy: o.p5,
                onCopy: () => {
                    (0, o.C)(i, () => r(l.qCr.SUCCESS), () => r(l.qCr.ERROR))
                }
            })
        })
    })
}

function h(t) {
    let {
        onClose: n,
        transitionState: i
    } = t, [o, h] = a.useState(""), [j, g] = a.useState(""), [p, _] = a.useState(null), [v, N] = a.useState(!1), [b, C] = a.useState("DOMAIN"), O = () => {
        N(!0), _(null), s.Bo.post({
            url: c.Rsh.CONNECTION(c.fg2.DOMAIN, o),
            body: {},
            rejectWithError: !1
        }).then(() => {
            n()
        }).catch(t => {
            var n, i, e, a, s, l, r;
            (null == (n = t.body) ? void 0 : n.proof) && "DOMAIN" === b ? (g(t.body.proof), C("PROOF_DNS")) : _((null == (l = t.body) || null == (s = l.errors) || null == (a = s.domain) || null == (e = a._errors) || null == (i = e[0]) ? void 0 : i.message) || (null == (r = t.body) ? void 0 : r.message) || t.message)
        }).finally(() => {
            N(!1)
        })
    };
    return (0, e.jsxs)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: i,
        className: m.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [(0, e.jsxs)(l.rQ0, {
            "data-migration-pending": !0,
            direction: r.A.Direction.VERTICAL,
            className: m.wx,
            separator: !1,
            children: [(0, e.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: x.intl.string(x.t["7lo8+e"])
            }), (0, e.jsx)(l.s_y, {
                "data-migration-pending": !0,
                className: m.b,
                onClick: n
            })]
        }), (0, e.jsxs)(l.tN_, {
            activeSlide: b,
            width: 440,
            children: [(0, e.jsx)(l.q7S, {
                id: "DOMAIN",
                children: (0, e.jsxs)("form", {
                    onSubmit: t => {
                        t.preventDefault(), O()
                    },
                    children: [(0, e.jsxs)(l.$mQ, {
                        "data-migration-pending": !0,
                        className: m.Qs,
                        children: [(0, e.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: m.h_,
                            children: x.intl.string(x.t.NxPUqY)
                        }), (0, e.jsx)(l.ksK, {
                            label: x.intl.string(x.t["4jIAa+"]),
                            error: p,
                            onChange: h,
                            placeholder: d.Ai,
                            maxLength: 253,
                            value: o,
                            disabled: v,
                            autoFocus: !0
                        })]
                    }), (0, e.jsx)(l.jlY, {
                        "data-migration-pending": !0,
                        className: m.qr,
                        children: (0, e.jsxs)(l.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [(0, e.jsx)(l.Button, {
                                variant: "primary",
                                text: x.intl.string(x.t.PDTjLN),
                                type: "submit",
                                loading: v,
                                disabled: "" === o
                            }), (0, e.jsx)(l.Button, {
                                variant: "secondary",
                                text: x.intl.string(x.t["ETE/oC"]),
                                onClick: n
                            })]
                        })
                    })]
                })
            }), (0, e.jsxs)(l.q7S, {
                id: "PROOF_DNS",
                children: [(0, e.jsxs)(l.$mQ, {
                    "data-migration-pending": !0,
                    className: m.Qs,
                    children: [(0, e.jsxs)("ol", {
                        className: m.p_,
                        children: [(0, e.jsx)("li", {
                            children: (0, e.jsx)(l.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                children: x.intl.string(x.t["yOxxA+"])
                            })
                        }), (0, e.jsxs)("li", {
                            children: [(0, e.jsx)(l.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                children: x.intl.string(x.t.cSURbq)
                            }), (0, e.jsxs)("div", {
                                className: m.st,
                                children: [(0, e.jsx)(u, {
                                    name: x.intl.string(x.t.GL3q7k),
                                    value: (0, d.hE)(o)
                                }), (0, e.jsx)(u, {
                                    name: x.intl.string(x.t.Ccmixu),
                                    value: "TXT"
                                }), (0, e.jsx)(u, {
                                    name: x.intl.string(x.t.PVLriT),
                                    value: j
                                })]
                            })]
                        })]
                    }), (0, e.jsx)(l.po8, {
                        messageType: l.YCn.INFO,
                        className: m.Qq,
                        children: x.intl.string(x.t.CUBxDB)
                    }), null != p && (0, e.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: m.Qq,
                        children: p
                    })]
                }), (0, e.jsxs)(l.jlY, {
                    "data-migration-pending": !0,
                    className: m.qr,
                    direction: r.A.Direction.HORIZONTAL,
                    children: [(0, e.jsx)(l.Button, {
                        variant: "secondary",
                        text: x.intl.string(x.t["13/7kX"]),
                        onClick: () => {
                            C("DOMAIN"), _(null)
                        }
                    }), (0, e.jsxs)("div", {
                        className: m.Um,
                        children: [(0, e.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: m.__invalid_switchButton,
                            children: (0, e.jsx)(l.Button, {
                                variant: "secondary",
                                text: x.intl.string(x.t.CkfdNx),
                                onClick: () => {
                                    C("PROOF_HTTP"), _(null)
                                }
                            })
                        }), (0, e.jsx)(l.Button, {
                            variant: "primary",
                            text: x.intl.string(x.t["13ofGu"]),
                            loading: v,
                            onClick: O
                        })]
                    })]
                })]
            }), (0, e.jsxs)(l.q7S, {
                id: "PROOF_HTTP",
                children: [(0, e.jsxs)(l.$mQ, {
                    "data-migration-pending": !0,
                    className: m.Qs,
                    children: [(0, e.jsx)(l.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        children: x.intl.string(x.t.p4ql7y)
                    }), (0, e.jsxs)("div", {
                        className: m.eX,
                        children: [(0, e.jsx)(u, {
                            name: x.intl.string(x.t.GL3q7k),
                            value: (0, d.uu)(o)
                        }), (0, e.jsx)(u, {
                            name: x.intl.string(x.t.PVLriT),
                            value: j
                        })]
                    }), null != p && (0, e.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: m.Qq,
                        children: p
                    })]
                }), (0, e.jsxs)(l.jlY, {
                    "data-migration-pending": !0,
                    className: m.qr,
                    direction: r.A.Direction.HORIZONTAL,
                    children: [(0, e.jsx)(l.Button, {
                        variant: "secondary",
                        text: x.intl.string(x.t["13/7kX"]),
                        onClick: () => {
                            C("DOMAIN"), _(null)
                        }
                    }), (0, e.jsxs)("div", {
                        className: m.Um,
                        children: [(0, e.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: m.__invalid_switchButton,
                            children: (0, e.jsx)(l.Button, {
                                variant: "secondary",
                                text: x.intl.string(x.t.RhJMVQ),
                                onClick: () => {
                                    C("PROOF_DNS"), _(null)
                                }
                            })
                        }), (0, e.jsx)(l.Button, {
                            variant: "primary",
                            text: x.intl.string(x.t["13ofGu"]),
                            loading: v,
                            onClick: O
                        })]
                    })]
                })]
            })]
        })]
    })
}