/** Chunk was on 39048 **/
/** chunk id: 841650, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(843282),
    c = n(397927),
    d = n(47167),
    u = n(713654),
    g = n(95701),
    m = n(769765),
    p = n(994500),
    f = n(287809),
    h = n(739455),
    b = n(652215),
    x = n(985018),
    j = n(987772);

function _(e) {
    return String(e)
}

function O(e) {
    let {
        icon: t,
        title: n,
        subtitle: i,
        className: l
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(j.Pf, l),
        children: [t, (0, r.jsxs)("div", {
            className: j.QK,
            children: [(0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "none",
                className: j.DX,
                children: n
            }), null != i && "" !== i ? (0, r.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: j.V2,
                children: i
            }) : null]
        })]
    })
}

function v() {
    return (0, r.jsx)(O, {
        icon: (0, r.jsx)(c.j96, {
            size: "md",
            color: "currentColor",
            className: j.IX
        }),
        title: x.intl.string(x.t.d7YJMK),
        className: j.fp
    })
}

function y(e) {
    var t;
    let {
        channelId: n
    } = e, i = (0, h.fE)(n), l = (0, h.fE)(null != (t = null == i ? void 0 : i.parent_id) ? t : b.dJq);
    if (null == i) return null;
    let s = (0, u.gU)(i),
        a = (0, d.m1)(i, f.default, p.A),
        o = null != l ? (0, d.m1)(l, f.default, p.A) : void 0;
    return (0, r.jsx)(O, {
        icon: null != s && (0, r.jsx)(s, {
            className: j.IX
        }),
        title: a,
        subtitle: o
    })
}

function A(e) {
    let {
        value: t
    } = e;
    return null != t ? (0, r.jsx)(y, {
        channelId: t
    }) : (0, r.jsx)(v, {})
}

function E(e) {
    let {
        label: t,
        guildId: l,
        value: s,
        initialChannelId: u,
        omitChannelIds: j,
        "aria-labelledby": O,
        onChange: v
    } = e, y = x.intl.string(x.t.d7YJMK), E = (0, a.bG)([m.A], () => m.A.getCategories(l), [l]), N = (0, h.fE)(null != s ? s : b.dJq), S = i.useMemo(() => {
        let e = [{
                value: null,
                label: y
            }],
            t = !1;
        for (let n of E._categories)
            for (let {
                    channel: r
                }
                of E[n.channel.id])((0, g.tr)(r.type) || (0, g.ay)(r.type)) && (r.id !== s && (null == j ? void 0 : j.has(r.id)) && (r.id !== u || s === u) || (s === r.id && (t = !0), e.push({
                value: r.id,
                label: (0, d.m1)(r, f.default, p.A)
            })));
        return null == s || t || null == N || e.push({
            value: s,
            label: N.name
        }), e
    }, [y, s, N, E, j, u]);
    return (0, r.jsx)(o.Pw, {
        label: t,
        placeholder: x.intl.string(x.t.r2ptsz),
        options: S,
        select: function(e) {
            null == e ? (0, c.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("72271"), n.e("64233"), n.e("59195")]).then(n.bind(n, 963765));
                return t => {
                    var n, i;
                    return (0, r.jsx)(e, (n = function(e) {
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
                    }({}, t), i = i = {
                        guildId: l,
                        onSubmit: v
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                    }), n))
                }
            }) : v(e)
        },
        isSelected: e => null != s && _(e) === _(s),
        serialize: _,
        renderOptionLabel: A,
        renderOptionValue: e => {
            let [t] = e;
            return A(t)
        },
        "aria-labelledby": O,
        "data-migration-pending": !0
    })
}