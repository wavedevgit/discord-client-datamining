/** Chunk was on 97492 **/
/** chunk id: 439156, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(732955),
    c = n(397927),
    u = n(470934),
    d = n(898190),
    p = n(998418),
    h = n(220628),
    f = n(933337),
    g = n(568065),
    m = n(333354),
    b = n(985018),
    A = n(294590);

function y(e) {
    var t, n;
    let {
        guildId: i,
        powerup: y,
        compact: _,
        iconSize: O,
        size: j,
        grow: v,
        className: x,
        onError: E
    } = e, {
        onActivate: C,
        isLoading: S,
        error: I
    } = (0, h.A)(i, y), {
        isLoading: N,
        error: T
    } = (0, d.A)(i, y), P = (0, f.A)(i, y), w = (0, p.Ay)(i, y), R = w.type !== g.b_.INACTIVE, {
        disabled: D,
        reason: M
    } = (0, u.A)(i, y, R), L = null != M ? {
        title: null,
        body: M
    } : function(e, t) {
        if (e.type === g.b_.LEVEL_ACTIVATED) {
            var n, r;
            return {
                title: b.intl.string(m.default["9oYuvb"]),
                body: b.intl.formatToPlainString(m.default.WRRYUT, {
                    perkName: null != (n = null == (r = e.sourcePowerup) ? void 0 : r.title) ? n : b.intl.string(b.t.BfF6ED)
                })
            }
        }
        return e.type === g.b_.POWERUP_ACTIVATED ? {
            title: b.intl.string(m.default.TZsu1U),
            body: b.intl.formatToPlainString(m.default["5HQUzD"], {
                boostCount: t.cost
            })
        } : null
    }(w, y);
    return l.useEffect(() => {
        null == E || E(null != I ? I : T)
    }, [I, T, E]), (0, r.jsx)(a.un, {
        body: null != (t = null == L ? void 0 : L.body) ? t : "",
        title: null != (n = null == L ? void 0 : L.title) ? n : void 0,
        shouldShow: null != L,
        delay: 100,
        "aria-label": null != M ? M : R ? b.intl.string(m.default.TZsu1U) : void 0,
        children: (0, r.jsx)("div", {
            className: s()(A.zr, {
                [A._o]: v,
                [A.nB]: !v
            }, x),
            children: (() => {
                let {
                    text: e,
                    icon: t
                } = function(e) {
                    let {
                        cost: t,
                        isActive: n,
                        compact: l,
                        iconSize: i
                    } = e, s = null != i ? i : "sm", a = n ? c.x8N : c._Jp;
                    return l ? {
                        text: t.toString(),
                        icon: a
                    } : {
                        text: b.intl.format(n ? m.default.uzQpQd : m.default.ad2Mfj, {
                            boostCount: t,
                            dotHook: () => (0, r.jsx)("span", {
                                className: A.Om,
                                children: "•"
                            }),
                            boostIconHook: () => (0, r.jsx)(a, {
                                size: s,
                                color: "currentColor",
                                className: A.$J
                            })
                        })
                    }
                }({
                    cost: y.cost,
                    isActive: R,
                    compact: _,
                    iconSize: O
                });
                return (0, r.jsx)(o.$nd, function(e) {
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
                }({
                    variant: R ? "secondary" : "primary",
                    "aria-label": b.intl.string(R ? m.default.TZsu1U : m.default.gSxlHf),
                    disabled: D,
                    onClick: e => {
                        e.stopPropagation(), R ? P() : C()
                    },
                    loading: S || N,
                    fullWidth: v,
                    size: null != j ? j : _ ? "md" : void 0,
                    text: e,
                    minWidth: 0
                }, _ ? {
                    icon: t
                } : {}))
            })()
        })
    })
}