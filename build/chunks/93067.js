/** chunk id: 93067 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(451988),
    o = n(397927),
    c = n(487329),
    d = n(540999),
    u = n(975571),
    h = n(447404),
    m = n(652215),
    A = n(985018),
    g = n(361354);

function p(e) {
    let {
        errorMessage: t,
        className: n,
        avError: s
    } = e, p = l.useRef(null), f = "", {
        text: _,
        node: E
    } = function(e) {
        if (null == e) return {
            text: null,
            node: null
        };
        let t = (0, c.B1)(e)?.errorCode,
            n = A.intl.formatToPlainString(A.t.ejOT95, {
                errorCode: t
            }),
            l = A.intl.format(A.t.If5Q0h, {
                errorCode: t,
                helpDeskURL: u.A.getArticleURL(m.MVz.AV_ERROR_CODES)
            }),
            s = d.A.isDeveloper;
        return {
            text: s ? `${n} (${e})` : n,
            node: s ? (0, i.jsxs)(i.Fragment, {
                children: [l, " (", e, ")"]
            }) : l
        }
    }(s);
    f = null != _ ? `${t} ${_}` : t;
    let [x] = l.useState(new r.Ep), [C, S] = l.useState(!1), [I, T] = l.useState(!1), N = l.useCallback(() => {
        x.start(250, () => {
            S(!1)
        }, !1)
    }, [x, S]), v = l.useCallback(() => {
        x.stop(), S(!0)
    }, [x, S]), y = l.useCallback(() => {
        T(!0)
    }, []), b = l.useCallback(() => {
        T(!1)
    }, []);
    return (0, i.jsx)(o.YNO, {
        renderPopout: () => (0, i.jsx)(h.A, {
            children: (0, i.jsxs)("div", {
                className: g.SW,
                onMouseEnter: v,
                onMouseLeave: N,
                children: [t, null != E && (0, i.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    className: g.F1,
                    children: E
                })]
            })
        }),
        targetElementRef: p,
        shouldShow: I || C,
        position: "bottom",
        children: e => (0, i.jsx)(h.A, {
            children: (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("div", {
                    ref: p,
                    tabIndex: 0,
                    onMouseEnter: v,
                    onMouseLeave: N,
                    onFocus: y,
                    onBlur: b,
                    className: a()(n, g.zr),
                    "aria-label": f,
                    ...e,
                    children: (0, i.jsx)(o.EpV, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        className: g.QW
                    })
                })
            })
        })
    })
}