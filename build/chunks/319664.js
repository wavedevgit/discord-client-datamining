/** Chunk was on 78870 **/
/** chunk id: 319664, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => O
});
var n = r(627968);
r(64700);
var i = r(503698),
    o = r.n(i),
    l = r(732955),
    s = r(397927),
    c = r(58149),
    a = r(289397),
    d = r(997509),
    u = r(954571),
    p = r(634654),
    f = r(652215),
    C = r(985018),
    j = r(587106);

function b(e) {
    let {
        pills: t
    } = e;
    return (0, n.jsx)("div", {
        className: j.nM,
        children: t.map(e => (0, n.jsx)("div", {
            className: j.Io,
            children: (0, n.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: e
            })
        }, e))
    })
}

function O(e) {
    let {
        guildId: t,
        showCTA: r,
        responsive: i = !0
    } = e, O = [
        [C.intl.string(C.t["73h51J"]), C.intl.string(C.t["gbjs/6"])],
        [C.intl.string(C.t.mCoH0V), C.intl.string(C.t["l/BuSI"])],
        [C.intl.string(C.t.psQktv), C.intl.string(C.t.nMhIZQ)],
        [C.intl.string(C.t["0ItLmF"]), C.intl.string(C.t.yQHqsC)]
    ];
    return (0, n.jsx)("div", {
        className: o()({
            [j.no]: i
        }),
        children: (0, n.jsxs)("div", {
            className: j.kL,
            children: [(0, n.jsxs)("div", {
                className: j.Qs,
                children: [(0, n.jsx)("div", {
                    className: j.V_,
                    children: O.map((e, t) => (0, n.jsx)(b, {
                        pills: e
                    }, "pill-row-".concat(t)))
                }), (0, n.jsxs)("div", {
                    className: j.mv,
                    children: [(0, n.jsx)(s.Text, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: C.intl.string(C.t["67arYL"])
                    }), r && (0, n.jsx)(l.$nd, {
                        text: C.intl.string(C.t.oyzLpD),
                        icon: s.EdP,
                        iconPosition: "end",
                        size: "md",
                        onClick: () => {
                            var e, r;
                            u.default.track(f.HAw.GUILD_SHOP_PREVIEW_CLICK, (e = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))), n.forEach(function(t) {
                                        var n;
                                        n = r[t], t in e ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = n
                                    })
                                }
                                return e
                            }({}, (0, c.H$)(t)), r = r = {
                                action_taken: p.hN.GET_STARTED_CLICK
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n)
                                }
                                return r
                            })(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }), e)), d.A.open(t, f.BEX.GUILD_PRODUCTS)
                        }
                    })]
                })]
            }), (0, n.jsxs)("div", {
                className: j.SN,
                children: [(0, n.jsx)("img", {
                    src: (0, a.n)("server_products/storefront/preview-mural.png"),
                    alt: "",
                    className: j.$G
                }), (0, n.jsx)("img", {
                    src: (0, a.n)("server_products/storefront/preview-mural-reduced.png"),
                    alt: "",
                    className: j.rp
                })]
            })]
        })
    })
}