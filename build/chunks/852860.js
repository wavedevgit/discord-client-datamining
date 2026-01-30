/** chunk id: 852860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x,
    o: () => _
}), n(747238), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(503879),
    s = n(710016),
    o = n(644576),
    c = n(590858),
    d = n(652215),
    u = n(985018);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g(e, t) {
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
}

function _(e) {
    return "".concat(e.split("?")[0], "?size=").concat(2048)
}
let b = e => {
    let {
        index: t,
        items: n
    } = e, l = g(e, ["index", "items"]), i = n[t], a = 0, o = [];
    for (let e of n)
        if (e.type === d.geh.IMG) {
            let {
                width: t,
                height: n,
                src: r
            } = e;
            e === i && (a = o.length), o.push({
                src: _(r),
                width: t,
                height: n
            })
        } return (0, r.jsx)(s.A, m(h({}, l), {
        items: o,
        startWith: a
    }))
};
class f extends l.Component {
    render() {
        let e = this.props,
            {
                pageSize: t
            } = e,
            n = g(e, ["pageSize"]),
            l = t === c.q.SMALL ? o.A : a.A;
        return (0, r.jsx)(l, m(h({}, n), {
            onCurrentItemClick: this.handleCurrentItemClick
        }))
    }
    constructor(...e) {
        super(...e), p(this, "handleCurrentItemClick", (e, t) => {
            e.type !== d.geh.IMG || (0, i.ueM)() || (0, i.qfG)(e => (0, r.jsx)(i.EOs, m(h({
                size: i.rIJ.DYNAMIC,
                "aria-label": u.intl.string(u.t.X4IxWL)
            }, e), {
                parentComponent: "ApplicationStoreListingCarousel",
                children: (0, r.jsx)(b, m(h({}, e), {
                    index: t,
                    items: this.props.items
                }))
            })))
        })
    }
}
let x = f