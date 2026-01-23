/** Chunk was on 86317 **/
/** chunk id: 660110, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b,
    V: () => f
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
    x = n(652215),
    g = n(985018);

function j() {
    return (0, o.yM)() ? g.intl.format(g.t.iWGjcg, {
        hook: e => (0, r.jsx)(i.MzZ, {
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), (0, a.A)(u.A.getArticleURL(x.MVz.TIGGER_PAWTECT_LEARN_MORE))
            },
            useDefaultUnderlineStyles: !1,
            children: e.join("")
        })
    }) : g.intl.format(g.t.edpbxy, {
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

function m(e) {
    let {
        className: t
    } = e, n = (0, o.yM)();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.wx6, {
            type: n ? "info" : "warning",
            children: (0, r.jsx)(j, {})
        })
    })
}

function h(e) {
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
                children: (0, r.jsx)(j, {})
            })]
        })
    })
}
var f = ((l = {})[l.TOP = 0] = "TOP", l[l.BOTTOM = 1] = "BOTTOM", l);

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
            children: n ? (0, r.jsx)(h, {}) : (0, r.jsx)(m, {})
        }), (null == s ? void 0 : s.includes(1)) && (0, r.jsx)(i.cGx, {
            gap: 16
        })]
    })
}