/** Chunk was on 94286 **/
/** chunk id: 868952, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => N
}), n(321073);
var r = n(627968),
    s = n(64700),
    i = n(136722),
    l = n(158954),
    a = n(397927),
    o = n(376092),
    c = n(260509),
    d = n(317525),
    m = n(486020),
    x = n(488926),
    u = n(636042),
    p = n(652215),
    j = n(124759),
    b = n(985018),
    g = n(636250);

function h(e) {
    let {
        guild: t
    } = e, n = m.Ay.getGuildIconURL({
        id: t.id,
        icon: t.icon,
        size: 120
    });
    return (0, r.jsxs)(a.rQ0, {
        className: g.wx,
        "data-migration-pending": !0,
        children: [(0, r.jsx)("div", {
            className: g.O_,
            children: null != n ? (0, r.jsx)(a.euF, {
                src: n,
                "aria-label": t.name,
                size: a._3J.SIZE_120,
                className: g.__invalid_guildIcon
            }) : (0, r.jsx)("div", {
                className: g.q9,
                children: (0, c.Rb)(t)
            })
        }), (0, r.jsxs)("div", {
            className: g.TK,
            children: [(0, r.jsx)(a.Heading, {
                variant: "heading-lg/extrabold",
                color: "text-strong",
                children: b.intl.string(b.t.MatO7M)
            }), (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: b.intl.string(b.t.VyPIeu)
            })]
        })]
    })
}
let _ = e => e.toString() === p.xBc.MENTION_EVERYONE.toString() ? b.intl.string(b.t.yCpsQw) : (0, o.hx)(e);

function v(e) {
    let {
        permissions: t
    } = e;
    return (0, r.jsxs)("div", {
        className: g.CZ,
        children: [(0, r.jsx)(a.Text, {
            className: g.qd,
            variant: "text-xs/semibold",
            color: "text-muted",
            children: b.intl.string(b.t["0WZKI4"])
        }), (0, r.jsx)("div", {
            className: g.lM,
            children: t.map((e, t) => (0, r.jsxs)("div", {
                className: g.ce,
                children: [(0, r.jsx)("div", {
                    className: g.dT
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: _(e)
                })]
            }, t))
        })]
    })
}

function f(e) {
    let {
        permissions: t
    } = e;
    return (0, r.jsxs)("div", {
        className: g.CZ,
        children: [(0, r.jsx)(a.Text, {
            className: g.qd,
            variant: "text-xs/semibold",
            color: "text-muted",
            children: b.intl.string(b.t.Yo5qlq)
        }), (0, r.jsx)("div", {
            className: g.lM,
            children: t.map((e, t) => (0, r.jsxs)("div", {
                className: g.ce,
                children: [(0, r.jsx)("div", {
                    className: g.xE
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: _(e)
                })]
            }, t))
        })]
    })
}

function O(e) {
    let {
        permissions: t
    } = e, {
        enabledPermissions: n,
        disabledPermissions: s
    } = t;
    return (0, r.jsx)(a.$mQ, {
        "data-migration-pending": !0,
        children: (0, r.jsxs)("div", {
            className: g.tp,
            children: [(0, r.jsx)(v, {
                permissions: n
            }), (0, r.jsx)(f, {
                permissions: s
            })]
        })
    })
}

function y(e) {
    let {
        onConfirm: t,
        onDismiss: n
    } = e;
    return (0, r.jsx)(a.jlY, {
        className: g.qr,
        "data-migration-pending": !0,
        children: (0, r.jsxs)(l.e2v, {
            fullWidth: !0,
            children: [(0, r.jsx)(l.$nd, {
                variant: "secondary",
                text: b.intl.string(b.t.gWQZvr),
                onClick: n
            }), (0, r.jsx)(l.$nd, {
                text: b.intl.string(b.t.iOSdAW),
                onClick: t
            })]
        })
    })
}

function N(e) {
    let {
        guild: t,
        transitionState: n,
        onClose: l
    } = e, o = s.useMemo(() => {
        let e = [],
            n = [];
        return j.dR.map(r => {
            x.Ib(r, t) ? e.push(r) : n.push(r)
        }), {
            enabledPermissions: e,
            disabledPermissions: n
        }
    }, [t]);
    if (null == t) return null;
    let c = async () => {
        var e, n;
        let r = null != t ? d.A.getEveryoneRole(t) : void 0;
        if (null == r) return;
        let s = i.TF(r.permissions, j.e$);
        await (0, u.JY)(t.id, [(e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, r), n = n = {
            permissions: s
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }), e)]), l()
    };
    return (0, r.jsxs)(a.EOs, {
        transitionState: n,
        size: a.rIJ.SMALL,
        className: g.yl,
        parentComponent: "DisableRiskyPermsModal",
        "data-migration-pending": !0,
        children: [(0, r.jsx)(h, {
            guild: t
        }), (0, r.jsx)(O, {
            permissions: o
        }), (0, r.jsx)(y, {
            onConfirm: c,
            onDismiss: () => {
                l()
            }
        })]
    })
}