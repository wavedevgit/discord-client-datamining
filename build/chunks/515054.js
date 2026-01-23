/** Chunk was on 38663 **/
/** chunk id: 515054, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x,
    K: () => O
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(183555),
    c = n(958805),
    u = n(61881),
    d = n(790417),
    f = n(113763),
    p = n(583246),
    g = n(463259),
    m = n(133583),
    b = n(518477),
    y = n(96124);

function O(e) {
    var t, n;
    let {
        children: l,
        className: i,
        scrollerRef: s
    } = e, c = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["children", "className", "scrollerRef"]);
    return (0, r.jsx)(o.HOs, (t = function(e) {
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
        ref: s,
        className: a()(y.gN, i),
        fade: !0
    }, c), n = n = {
        children: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
}

function j(e) {
    let {
        user: t,
        currentUser: n,
        section: l,
        displayProfile: i,
        guildId: a,
        channelId: o,
        onClose: s
    } = e;
    return l === b.RP.ACTIVITY ? (0, r.jsx)(d.A, {
        user: t,
        currentUser: n,
        displayProfile: i,
        guildId: a,
        channelId: o,
        onClose: s
    }) : l === b.RP.MUTUAL_FRIENDS ? (0, r.jsx)(f.A, {
        user: t,
        guildId: a,
        channelId: o,
        onClose: s
    }) : l === b.RP.MUTUAL_GUILDS ? (0, r.jsx)(p.A, {
        user: t,
        onClose: s
    }) : l === b.RP.WIDGETS ? (0, r.jsx)(g.A, {
        user: t,
        guildId: a,
        channelId: o
    }) : l === b.RP.WISHLIST ? (0, r.jsx)(m.A, {
        profileOwner: t
    }) : null
}

function x(e) {
    var t;
    let {
        user: n,
        currentUser: i,
        displayProfile: a,
        guildId: d,
        channelId: f,
        items: p,
        initialSection: g,
        onClose: m
    } = e, {
        trackUserProfileAction: O
    } = (0, s.NJ)(), [{
        section: x,
        text: h
    }, v] = l.useState(null != (t = p.find(e => {
        let {
            section: t
        } = e;
        return t === g
    })) ? t : p[0]);
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)(o.HOs, {
            orientation: "horizontal",
            className: y.gU,
            fade: !0,
            paddingFix: !1,
            children: (0, r.jsx)(o.VQ0, {
                type: "top",
                look: "custom",
                selectedItem: x,
                onItemSelect: e => {
                    u.A.hasUnsavedChanges() && x === b.RP.WIDGETS ? c.A.notifyUnsavedWidgets() : (O({
                        action: "PRESS_SECTION",
                        section: e
                    }), v(t => {
                        var n;
                        return null != (n = p.find(t => t.section === e)) ? n : t
                    }))
                },
                children: p.map(e => (0, r.jsx)(o.VQ0.Item, {
                    className: y.YU,
                    id: e.section,
                    "aria-label": e.text,
                    children: e.text
                }, e.section))
            })
        }), (0, r.jsx)(o.VQ0.Panel, {
            id: x,
            "aria-label": h,
            className: y.NM,
            children: (0, r.jsx)(o.Fmo, {
                component: (0, r.jsx)(o.AC4, {
                    children: (0, r.jsx)(o.H, {
                        children: h
                    })
                }),
                children: (0, r.jsx)(j, {
                    user: n,
                    currentUser: i,
                    displayProfile: a,
                    guildId: d,
                    channelId: f,
                    section: x,
                    onClose: m
                })
            })
        })]
    })
}