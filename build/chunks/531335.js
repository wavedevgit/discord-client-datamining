/** chunk id: 531335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var c = n(311907),
    i = n(397927),
    o = n(855687),
    l = n(576705),
    a = n(652215),
    u = n(985018);

function s(e) {
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
}

function b(e) {
    let {
        source: t,
        guild: n,
        channel: r,
        stageInstance: i
    } = e, a = (0, c.bG)([l.A], () => (0, o.K)(l.A, n, r, i)), u = O(t, n, r), s = y(t, r);
    return a ? u : s
}

function p(e, t) {
    return null != t && [a.PE1.GUILD_HEADER, a.PE1.GUILD_CONTEXT_MENU].includes(t) || null == e ? u.intl.string(u.t.Sd8Ixw) : e.type === a.rbe.GUILD_VOICE ? u.intl.string(u.t["EE+P0H"]) : u.intl.string(u.t["0jeAXt"])
}
let O = (e, t, c) => {
        if (null == t) return null;
        let o = p(c, e);
        return (0, r.jsx)(i.Drp, {
            id: "invite-people",
            label: o,
            color: "brand",
            icon: e === a.PE1.GUILD_HEADER ? i.DpX : void 0,
            leadingAccessory: e === a.PE1.GUILD_HEADER ? {
                type: "icon",
                icon: i.DpX
            } : void 0,
            action: () => (0, i.mMO)(async () => {
                let {
                    default: i
                } = await Promise.all([n.e("43600"), n.e("28136"), n.e("15160")]).then(n.bind(n, 234355));
                return n => {
                    var o, l;
                    return (0, r.jsx)(i, (o = s({}, n), l = l = {
                        guild: t,
                        channel: c,
                        source: e
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e))
                    }), o))
                }
            })
        })
    },
    y = (e, t) => {
        let c = p(t, e);
        return (0, r.jsx)(i.Drp, {
            id: "invite-people",
            label: c,
            color: "brand",
            icon: e === a.PE1.GUILD_HEADER ? i.DpX : void 0,
            leadingAccessory: e === a.PE1.GUILD_HEADER ? {
                type: "icon",
                icon: i.DpX
            } : void 0,
            action: () => (0, i.mMO)(async () => {
                let {
                    default: e
                } = await n.e("62751").then(n.bind(n, 132610));
                return t => (0, r.jsx)(e, s({}, t))
            })
        })
    }