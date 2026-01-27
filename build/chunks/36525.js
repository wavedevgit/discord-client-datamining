/** Chunk was on 67096 **/
/** chunk id: 36525, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => c
}), t(896048);
var r = t(627968),
    n = t(64700),
    l = t(990078),
    a = t(421380),
    i = t(397927),
    s = t(203982),
    o = t(652215),
    d = t(985018),
    u = t(614221);
let c = function(e) {
    var A;
    let {
        message: t,
        errorMessage: c,
        submitting: g,
        onReset: f,
        onSave: p,
        onSaveText: m,
        onResetText: v,
        onSaveButtonColor: h,
        disabled: b,
        saveButtonTooltip: q
    } = e, C = n.useRef(null), [j, U] = n.useState(!1);
    return n.useEffect(() => {
        function e() {
            U(!0), setTimeout(() => U(!1), 1e3)
        }
        return s._.subscribe(o.jej.EMPHASIZE_NOTICE, e), () => {
            s._.unsubscribe(o.jej.EMPHASIZE_NOTICE, e)
        }
    }, []), (0, r.jsx)("div", {
        className: u.kL,
        "data-emphasized": j,
        children: (0, r.jsx)("div", {
            className: u.nP,
            ref: C,
            children: (0, r.jsxs)(i.xpW, {
                containerRef: C,
                children: [(0, r.jsx)("div", {
                    className: u.Xk,
                    children: (0, r.jsx)("div", {
                        className: u.iU,
                        children: null != (A = null != c ? c : t) ? A : d.intl.string(d.t.GP7JLE)
                    })
                }), (0, r.jsxs)("div", {
                    className: u.o1,
                    children: [null != f && (0, r.jsx)(a.$n, {
                        className: u.WA,
                        size: a.$n.Sizes.SMALL,
                        color: a.$n.Colors.PRIMARY,
                        look: a.$n.Looks.LINK,
                        onClick: f,
                        children: (0, r.jsx)("span", {
                            children: null != v ? v : d.intl.string(d.t.yBZMsQ)
                        })
                    }), null != p ? (0, r.jsx)(l.m, {
                        text: q,
                        children: (0, r.jsx)(a.$n, {
                            size: a.$n.Sizes.SMALL,
                            color: null != h ? h : a.$n.Colors.GREEN,
                            submitting: g,
                            disabled: b,
                            onClick: p,
                            children: null != m ? m : d.intl.string(d.t.K344S7)
                        })
                    }) : null]
                })]
            })
        })
    })
}