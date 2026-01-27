/** Chunk was on 39048 **/
/** chunk id: 308072, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(311907),
    c = n(585958),
    d = n(760751),
    u = n(677230);

function g(e) {
    let {
        applicationId: t,
        selected: n,
        onClick: l,
        disabled: g
    } = e, {
        isFetching: m,
        coverImageUrl: p
    } = (0, c.n)(t, {
        coverImageSize: 256
    }), f = (0, o.bG)([d.A], () => {
        var e, n;
        return null != (e = null == (n = d.A.getDetectableGame(t)) ? void 0 : n.name) ? e : ""
    }), h = i.useCallback(() => {
        null == l || l(t)
    }, [t, l]), b = i.useMemo(() => m ? null : null == p ? (0, r.jsx)("div", {
        className: u.gP,
        children: (0, r.jsx)(a._7Z, {
            size: "lg"
        })
    }) : (0, r.jsx)("img", {
        className: u.Su,
        alt: f,
        src: p
    }), [p, m, f]);
    return (0, r.jsxs)("div", {
        className: s()(u.id, {
            [u.rX]: !n,
            [u.r9]: g
        }),
        children: [(0, r.jsxs)(a.DUT, {
            "aria-disabled": g,
            tabIndex: g ? -1 : 0,
            onClick: g ? void 0 : h,
            className: s()(u.a8, {
                [u.AL]: m,
                [u.r9]: g
            }),
            children: [n && (0, r.jsx)("div", {
                className: u.jK,
                children: (0, r.jsx)(a.P7L, {
                    checked: n
                })
            }), b]
        }), (0, r.jsx)(a.Text, {
            className: u.mO,
            variant: "text-xs/medium",
            color: "text-strong",
            children: f
        })]
    })
}