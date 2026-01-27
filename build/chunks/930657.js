/** Chunk was on 39048 **/
/** chunk id: 930657, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(915089),
    o = n(405810),
    c = n(342298),
    d = n(580630),
    u = n(636194),
    g = n(11351),
    m = n(306444),
    p = n(922975),
    f = n(996507),
    h = n(963175),
    b = n(652215),
    x = n(985018),
    j = n(844089);

function _(e) {
    let {
        priceTiers: t
    } = e, {
        editStateId: n
    } = (0, m.O)(), _ = (0, l.bG)([u.A], () => {
        var e;
        return null == (e = u.A.getSubscriptionListing(n)) ? void 0 : e.image_asset
    }), [O, v] = p.tx(n), [y, A] = p.bL(n), [E, N] = p.I8(n), [S, I] = p.lK(n, 1024), {
        imageCTA: T,
        imageAriaLabel: C,
        setFilename: P
    } = (0, f.A)(_), w = i.useMemo(() => {
        var e;
        return null != (e = null == t ? void 0 : t.map(e => ({
            id: e.toString(),
            value: e,
            label: (0, d.$g)(e, b.Yri.USD)
        }))) ? e : []
    }, [t]);

    function R(e, t) {
        null != t && P(t.name), I(e)
    }
    let D = (0, g.gN)(),
        G = (0, a.GV)(),
        L = (0, a.GV)(),
        k = (0, a.GV)();
    return (0, r.jsx)(h.A, {
        title: x.intl.string(x.t["iHU43+"]),
        intiallyExpanded: !0,
        children: (0, r.jsxs)(s.BJc, {
            gap: 24,
            children: [(0, r.jsxs)("div", {
                className: j.lE,
                children: [(0, r.jsx)("div", {
                    className: j.GI,
                    children: (0, r.jsx)(s.ksK, {
                        label: x.intl.string(x.t["grbGJ+"]),
                        placeholder: x.intl.string(x.t["So2/xP"]),
                        value: O,
                        onChange: v,
                        "aria-labelledby": G,
                        disabled: D
                    })
                }), (0, r.jsx)("div", {
                    className: j.GI,
                    children: (0, r.jsx)(s.l6P, {
                        selectionMode: "single",
                        label: x.intl.string(x.t.Ibl4BR),
                        options: w,
                        disabled: D || null == t,
                        placeholder: x.intl.string(x.t["88XZDs"]),
                        value: y,
                        onSelectionChange: A,
                        maxOptionsVisible: 5,
                        "aria-labelledby": L
                    })
                })]
            }), (0, r.jsx)(s.fs1, {
                label: x.intl.string(x.t["1w2WcX"]),
                placeholder: x.intl.string(x.t.p7Jr4K),
                value: E,
                autosize: !0,
                onChange: N,
                "aria-labelledby": k,
                disabled: D
            }), (0, r.jsxs)("div", {
                className: j.r2,
                children: [(0, r.jsx)(s.D0$, {
                    label: x.intl.string(x.t.RUBM2q),
                    description: x.intl.string(x.t["0iUofN"]),
                    children: (0, r.jsx)(o.A, {
                        onChange: R,
                        "aria-label": C,
                        disabled: D,
                        text: T,
                        size: "md",
                        variant: "secondary"
                    })
                }), (0, r.jsx)(c.A, {
                    image: S,
                    hint: T,
                    showIcon: !0,
                    showRemoveButton: !1,
                    hideSize: !0,
                    className: j.KN,
                    imageClassName: j.NW,
                    onChange: R,
                    "aria-label": C,
                    disabled: D
                })]
            })]
        })
    })
}