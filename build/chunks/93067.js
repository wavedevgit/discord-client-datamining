/** chunk id: 93067 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(451988),
    o = n(397927),
    c = n(487329),
    d = n(540999),
    u = n(975571),
    h = n(447404),
    m = n(652215),
    A = n(985018),
    g = n(151802);

function _(e) {
    let {
        errorMessage: t,
        className: n,
        avError: a
    } = e, _ = l.useRef(null), p = "", {
        text: f,
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
            a = d.A.isDeveloper;
        return {
            text: a ? `${n} (${e})` : n,
            node: a ? (0, i.jsxs)(i.Fragment, {
                children: [l, " (", e, ")"]
            }) : l
        }
    }(a);
    p = null != f ? `${t} ${f}` : t;
    let [C] = l.useState(new r.Ep), [x, S] = l.useState(!1), [I, T] = l.useState(!1), v = l.useCallback(() => {
        C.start(250, () => {
            S(!1)
        }, !1)
    }, [C, S]), N = l.useCallback(() => {
        C.stop(), S(!0)
    }, [C, S]), y = l.useCallback(() => {
        T(!0)
    }, []), b = l.useCallback(() => {
        T(!1)
    }, []);
    return (0, i.jsx)(o.YNO, {
        renderPopout: () => (0, i.jsx)(h.A, {
            children: (0, i.jsxs)("div", {
                className: g.SW,
                onMouseEnter: N,
                onMouseLeave: v,
                children: [t, null != E && (0, i.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    className: g.F1,
                    children: E
                })]
            })
        }),
        targetElementRef: _,
        shouldShow: I || x,
        position: "bottom",
        children: e => (0, i.jsx)(h.A, {
            children: (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("div", {
                    ref: _,
                    tabIndex: 0,
                    onMouseEnter: N,
                    onMouseLeave: v,
                    onFocus: y,
                    onBlur: b,
                    className: s()(n, g.zr),
                    "aria-label": p,
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