/** chunk id: 365701, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => P,
    Jx: () => I,
    lz: () => T
}), n(733351), n(228524), n(896048);
var r, i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(311907),
    u = n(827734),
    g = n(36525),
    m = n(421380),
    p = n(397927),
    f = n(73153),
    h = n(416052),
    b = n(198982),
    x = n(292572),
    j = n(122906),
    _ = n(539440),
    O = n(555337),
    v = n(401755),
    y = n(985018),
    A = n(776433),
    E = n(473169);

function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class S extends(r = d.Ay.Store) {
    initialize() {
        this.waitFor(O.A, j.A)
    }
    getTemplate() {
        let e = O.A.getProps().guild;
        if (null == e) return null;
        let t = j.A.getForGuild(e.id);
        return null != t && t.state !== v.QB.RESOLVING ? t : null
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
    }
    constructor(...e) {
        super(...e), N(this, "name", ""), N(this, "description", ""), N(this, "error", null), N(this, "reset", () => {
            let e = this.getTemplate();
            if (null != e) {
                var t, n;
                this.name = null != (t = e.name) ? t : this.name, this.description = null != (n = e.description) ? n : this.description
            } else this.name = "", this.description = "";
            this.emitChange()
        }), N(this, "setName", e => {
            this.name = e, this.emitChange()
        }), N(this, "setDescription", e => {
            this.description = e, this.emitChange()
        }), N(this, "setError", e => {
            this.error = e, this.emitChange()
        }), N(this, "save", async () => {
            await x.A.updateGuildTemplate(O.A.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
        })
    }
}
N(S, "displayName", "GuildSettingsTemplateMetadataStore_");
let I = new S(f.h);

function T() {
    let [e, t] = l.useState(!1), n = async () => {
        t(!0), await I.save(), t(!1)
    };
    return (0, i.jsx)(g.A, {
        submitting: e,
        onReset: I.reset,
        onSave: n,
        disabled: !C(I.name)
    })
}

function C(e) {
    return null != e && e.trim().length >= 2
}

function P() {
    return (0, i.jsx)("div", {
        className: E.Q5,
        children: (0, i.jsxs)(p.Fmo, {
            component: (0, i.jsx)(p.Heading, {
                variant: "heading-lg/semibold",
                children: y.intl.string(y.t.KUw7Ss)
            }),
            children: [(0, i.jsx)(p.Text, {
                className: E.SX,
                variant: "text-sm/normal",
                children: y.intl.format(y.t.c0m8bK, {})
            }), (0, i.jsx)(R, {}), (0, i.jsx)(p.cGx, {
                className: A.yF
            }), (0, i.jsx)(w, {})]
        })
    })
}

function w() {
    let {
        guild: e
    } = O.A.getProps();
    c()(null != e, "guild cannot be null");
    let t = (0, d.bG)([I], () => I.error),
        [n, r] = l.useState(!0),
        {
            loading: s,
            guildTemplate: a
        } = function(e) {
            let [t, n] = l.useState(!0);
            return l.useEffect(() => {
                !async function() {
                    n(!0);
                    try {
                        await x.A.loadTemplatesForGuild(e), n(!1)
                    } catch (e) {
                        I.setError(new b.LG(e))
                    }
                }()
            }, [e]), {
                loading: t,
                guildTemplate: (0, d.bG)([j.A], () => j.A.getForGuild(e), [e])
            }
        }(e.id);
    if (l.useEffect(() => {
            if (n && !s) {
                if (null != a) {
                    var e, t;
                    I.setName(null != (e = a.name) ? e : ""), I.setDescription(null != (t = a.description) ? t : "")
                }
                r(!1)
            }
        }, [n, a, s]), l.useEffect(() => () => {
            I.reset(), I.setError(null)
        }, []), n) return null != t ? (0, i.jsx)(p.Text, {
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: t.message
    }) : (0, i.jsx)(p.y$y, {
        className: E.eT
    });
    let o = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
    return (0, i.jsxs)(p.BJc, {
        gap: 20,
        children: [(0, i.jsx)(G, {}), (0, i.jsx)(L, {
            guild: e,
            guildTemplate: a
        }), o ? (0, i.jsx)(p.Text, {
            className: E.Ot,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: t.getAnyErrorMessage()
        }) : null]
    })
}

function R() {
    return (0, i.jsxs)("div", {
        className: A.qR,
        children: [(0, i.jsxs)("div", {
            className: A.eg,
            children: [(0, i.jsx)(p.Heading, {
                variant: "eyebrow",
                children: y.intl.string(y.t["f8u+VO"])
            }), (0, i.jsxs)("div", {
                className: A.VP,
                children: [(0, i.jsx)(p.yr3, {
                    size: "md",
                    className: A.Sy,
                    color: u.A.unsafe_rawColors.GREEN_360.css,
                    secondaryColor: u.A.unsafe_rawColors.WHITE.css
                }), y.intl.string(y.t.K2tn16)]
            }), (0, i.jsxs)("div", {
                className: A.VP,
                children: [(0, i.jsx)(p.yr3, {
                    size: "md",
                    className: A.Sy,
                    color: u.A.unsafe_rawColors.GREEN_360.css,
                    secondaryColor: u.A.unsafe_rawColors.WHITE.css
                }), y.intl.string(y.t.om5gNq)]
            }), (0, i.jsxs)("div", {
                className: A.VP,
                children: [(0, i.jsx)(p.yr3, {
                    size: "md",
                    className: A.Sy,
                    color: u.A.unsafe_rawColors.GREEN_360.css,
                    secondaryColor: u.A.unsafe_rawColors.WHITE.css
                }), y.intl.string(y.t["/VNqdD"])]
            })]
        }), (0, i.jsxs)("div", {
            className: A.eg,
            children: [(0, i.jsx)(p.Heading, {
                variant: "eyebrow",
                children: y.intl.string(y.t["8zhJEr"])
            }), (0, i.jsxs)("div", {
                className: A.VP,
                children: [(0, i.jsx)(p.aXh, {
                    size: "md",
                    className: A.Sy,
                    color: u.A.unsafe_rawColors.RED_400.css,
                    secondaryColor: u.A.unsafe_rawColors.WHITE.css
                }), y.intl.string(y.t.WOKI6t)]
            }), (0, i.jsxs)("div", {
                className: A.VP,
                children: [(0, i.jsx)(p.aXh, {
                    size: "md",
                    className: A.Sy,
                    color: u.A.unsafe_rawColors.RED_400.css,
                    secondaryColor: u.A.unsafe_rawColors.WHITE.css
                }), y.intl.string(y.t.ddhDJH)]
            }), (0, i.jsxs)("div", {
                className: A.VP,
                children: [(0, i.jsx)(p.aXh, {
                    size: "md",
                    className: A.Sy,
                    color: u.A.unsafe_rawColors.RED_400.css,
                    secondaryColor: u.A.unsafe_rawColors.WHITE.css
                }), y.intl.string(y.t["6Q/DHk"])]
            })]
        })]
    })
}

function D(e) {
    let {
        cancel: t,
        confirm: n
    } = e;
    return (0, i.jsx)(p.MJ3, {
        dismissable: !0,
        header: y.intl.string(y.t["cN/RFD"]),
        confirmText: y.intl.string(y.t["cN/RFD"]),
        cancelText: y.intl.string(y.t["ETE/oC"]),
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: y.intl.string(y.t["apCQv/"])
        })
    })
}

function G() {
    let e = (0, d.bG)([I], () => I.name),
        t = (0, d.bG)([I], () => I.description),
        n = (0, d.bG)([I], () => I.error),
        [r, s] = l.useState(!1),
        a = l.useCallback(() => {
            s(!1)
        }, []),
        o = l.useCallback(() => {
            s(!0)
        }, []),
        c = l.useMemo(() => {
            if (!(r || e.length < 1 || C(e))) return y.intl.string(y.t.IHAlh1)
        }, [e, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(p.ksK, {
            label: y.intl.string(y.t.z1a9R1),
            required: !0,
            error: null != c ? c : null == n ? void 0 : n.getFirstFieldErrorMessage("name"),
            value: e,
            onChange: e => I.setName(e),
            placeholder: y.intl.string(y.t.bMlpvk),
            maxLength: 100,
            onBlur: a,
            onFocus: o,
            autoFocus: !0
        }), (0, i.jsx)(p.fs1, {
            label: y.intl.string(y.t.GxirWa),
            error: null == n ? void 0 : n.getFirstFieldErrorMessage("description"),
            value: t,
            onChange: e => I.setDescription(e),
            placeholder: y.intl.string(y.t.n1FBXh),
            maxLength: 120
        })]
    })
}

function L(e) {
    let {
        guild: t,
        guildTemplate: n
    } = e;
    return null == n ? (0, i.jsx)(k, {
        guild: t
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(p.D0$, {
            label: y.intl.string(y.t.zGGcLw),
            children: (0, i.jsx)(h.A, {
                buttonLook: m.$n.Looks.FILLED,
                buttonColor: m.$n.Colors.BRAND,
                value: (0, _.A)(n.code)
            })
        }), n.isDirty && (0, i.jsx)(p.Text, {
            color: "text-feedback-warning",
            className: E.Ot,
            variant: "text-sm/normal",
            children: y.intl.string(y.t.aWsjtD)
        }), (0, i.jsxs)("div", {
            className: a()(E.QX, A.UD),
            children: [n.isDirty && (0, i.jsx)(M, {
                guild: t,
                guildTemplate: n
            }), (0, i.jsxs)("div", {
                className: A.eS,
                children: [(0, i.jsx)(U, {
                    guild: t,
                    guildTemplate: n
                }), (0, i.jsx)(B, {
                    guildTemplate: n
                })]
            })]
        }), n.isDirty && (0, i.jsx)("div", {
            className: A.U2,
            children: y.intl.format(y.t.v0AVum, {
                timestamp: new Date(n.updatedAt)
            })
        })]
    })
}

function k(e) {
    let {
        guild: t
    } = e, n = (0, d.bG)([I], () => I.name), [r, s] = l.useState(!1), a = async () => {
        I.setError(null), s(!0);
        try {
            await x.A.createGuildTemplate(t.id, I.name, I.description)
        } catch (e) {
            I.setError(new b.LG(e))
        }
        s(!1)
    };
    return (0, i.jsx)(p.Button, {
        variant: "primary",
        text: y.intl.string(y.t.Wxdi8A),
        loading: r,
        disabled: !C(n),
        onClick: a
    })
}

function M(e) {
    let {
        guild: t,
        guildTemplate: n
    } = e, [r, s] = l.useState(!1), a = async () => {
        I.setError(null), s(!0);
        try {
            await x.A.syncGuildTemplate(t.id, n.code)
        } catch (e) {
            I.setError(new b.LG(e))
        }
        s(!1)
    };
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: A.x6,
        children: (0, i.jsx)(p.Button, {
            variant: "primary",
            text: y.intl.string(y.t["Nw+0Y/"]),
            loading: r,
            onClick: a
        })
    })
}

function U(e) {
    let {
        guild: t,
        guildTemplate: n
    } = e, [r, s] = l.useState(!1), a = async () => {
        I.setError(null);
        try {
            await x.A.deleteGuildTemplate(t.id, n.code), I.setName(""), I.setDescription("")
        } catch (e) {
            I.setError(new b.LG(e))
        }
        s(!1)
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: A.x6,
            children: (0, i.jsx)(p.Button, {
                variant: "critical-secondary",
                text: y.intl.string(y.t["cN/RFD"]),
                onClick: () => s(!0)
            })
        }), r ? (0, i.jsx)(D, {
            confirm: a,
            cancel: () => s(!1)
        }) : null]
    })
}

function B(e) {
    let {
        guildTemplate: t
    } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: A.x6,
        children: (0, i.jsx)(p.Button, {
            variant: "secondary",
            text: y.intl.string(y.t.YI3iV6),
            onClick: () => (0, p.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
                return n => {
                    var r, l;
                    return (0, i.jsx)(e, (r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                N(e, t, n[t])
                            })
                        }
                        return e
                    }({}, n), l = l = {
                        guildTemplate: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
                    }), r))
                }
            })
        })
    })
}