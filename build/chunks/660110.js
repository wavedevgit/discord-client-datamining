/** chunk id: 660110, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b,
    V: () => j
});
var l, r = n(627968);
n(64700);
var i = n(397927),
    a = n(975807),
    s = n(935649),
    c = n(847599),
    o = n(36149),
    u = n(975571),
    d = n(418208),
    g = n(652215),
    h = n(985018);

function f() {
    return (0, o.yM)() ? h.intl.format(h.t.iWGjcg, {
        hook: e => (0, r.jsx)(i.MzZ, {
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), (0, a.A)(u.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE))
            },
            useDefaultUnderlineStyles: !1,
            children: e.join("")
        })
    }) : h.intl.format(h.t.edpbxy, {
        hook: e => (0, r.jsx)(i.MzZ, {
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), s.A.showAgeVerificationGetStartedModal({
                    entryPoint: c.q1.START_STAGE_PROMPT
                })
            },
            useDefaultUnderlineStyles: !1,
            children: e.join("")
        })
    })
}

function x(e) {
    let {
        className: t
    } = e, n = (0, o.yM)();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.wx6, {
            type: n ? "info" : "warning",
            children: (0, r.jsx)(f, {})
        })
    })
}

function m(e) {
    let {
        className: t
    } = e, n = (0, o.yM)();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)(i.BJc, {
            direction: "horizontal",
            gap: 4,
            align: "center",
            children: [n ? (0, r.jsx)(i.mir, {
                size: "refresh_sm",
                color: "var(--text-default)"
            }) : (0, r.jsx)(i.id, {
                size: "refresh_sm",
                color: "var(--text-default)"
            }), (0, r.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/medium",
                children: (0, r.jsx)(f, {})
            })]
        })
    })
}
var j = ((l = {})[l.TOP = 0] = "TOP", l[l.BOTTOM = 1] = "BOTTOM", l);

function b(e) {
    let {
        className: t,
        noBackground: n,
        divider: l,
        channelId: a
    } = e;
    if (!(0, d.Vv)(null != a ? a : void 0)) return null;
    let s = Array.isArray(l) ? l : null != l ? [l] : [];
    return (0, r.jsxs)(r.Fragment, {
        children: [s.includes(0) && (0, r.jsx)(i.cGx, {
            gap: 16
        }), (0, r.jsx)("div", {
            className: t,
            children: n ? (0, r.jsx)(m, {}) : (0, r.jsx)(x, {})
        }), (null == s ? void 0 : s.includes(1)) && (0, r.jsx)(i.cGx, {
            gap: 16
        })]
    })
}