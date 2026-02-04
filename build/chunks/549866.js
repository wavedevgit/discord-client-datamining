/** chunk id: 549866, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => I
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(46054),
    u = n(190012),
    c = n(465364),
    d = n(665524);

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function g(e) {
    let {
        icon: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, l, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }(e, ["icon"]);
    switch (t) {
        case "image":
            return (0, l.jsx)(a.xfq, h({}, n));
        case "video":
            return (0, l.jsx)(a.npA, h({}, n));
        case "audio":
            return (0, l.jsx)(a.T7G, h({}, n));
        case "attachment":
            return (0, l.jsx)(a.PtA, h({}, n));
        case "link":
            return (0, l.jsx)(a.qYV, h({}, n));
        case "sticker":
            return (0, l.jsx)(a.tEP, h({}, n));
        case "call-active":
            return (0, l.jsx)(a._jp, h({}, n));
        case "call-ended":
            return (0, l.jsx)(a.zWQ, h({}, n))
    }
}
let f = r.memo(function(e) {
        let {
            message: t
        } = e;
        return (0, c.Ay)(t, {
            formatInline: !0,
            noStyleAndInteraction: !0
        }).content
    }),
    p = r.memo(function(e) {
        let {
            markup: t,
            channelId: n
        } = e;
        return (0, c.jp)(o.A.parseInlineReply, {
            content: t,
            channelId: n
        })
    });

function I(e) {
    let t, {
            channel: n,
            message: r
        } = e,
        i = (0, u.BC)(r, n);
    if (null == i) return null;
    let {
        authorLabel: a,
        color: o,
        trailingIcon: c
    } = i;
    return "text" === i.type ? t = i.text : "markup" === i.type ? t = (0, l.jsx)(p, {
        markup: i.markup,
        channelId: r.channel_id
    }) : "message" === i.type && (t = (0, l.jsx)(f, {
        message: i.message
    })), (0, l.jsxs)("div", {
        className: s()(d.Sl, {
            [d.Vz]: "text-feedback-positive" === o
        }),
        children: [(0, l.jsxs)("span", {
            className: d.BK,
            children: [null != a && "".concat(a, ": "), t]
        }), null != c && (0, l.jsx)(g, {
            icon: c,
            size: "xxs",
            color: "currentColor",
            className: d.sl
        })]
    })
}